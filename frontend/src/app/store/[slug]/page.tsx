import React from "react";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import StoreClient from "./StoreClient";
import { Coupon, Store } from "../../../components/CouponCard";
import { getLogoUrl, FALLBACK_STORES, FALLBACK_COUPONS } from "../../../lib/fallbackData";

export const revalidate = 60; // Revalidate every 60 seconds

// Canonical slug map for regional aliases
const SLUG_ALIASES: Record<string, string> = {
  "transparent-labs-us": "transparent-labs",
  "garten-und-freizeit-de": "garten-und-freizeit",
  "dreamcloud-uk": "dreamcloud",
  "dreamcloud-us": "dreamcloud",
  "qidi-tech-us": "qidi-us",
  "qidi-tech": "qidi-us",
  "qidi": "qidi-de"
};

// Pre-render stores at build time
export async function generateStaticParams() {
  const params = FALLBACK_STORES.map((s) => ({ slug: s.slug }));
  Object.keys(SLUG_ALIASES).forEach(alias => {
    params.push({ slug: alias });
  });
  return params;
}

interface StorePageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateMetadata({ params }: StorePageProps): Promise<Metadata> {
  const { slug } = await params;
  const canonicalSlug = SLUG_ALIASES[slug.toLowerCase()] || slug.toLowerCase();
  
  const fallbackStore = FALLBACK_STORES.find(s => s.slug === canonicalSlug || s.slug === slug);
  let storeName = fallbackStore ? fallbackStore.name : slug.split("-").map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(" ");
  let logoUrl = getLogoUrl(canonicalSlug) || getLogoUrl(slug);

  const logoUrlStr = logoUrl || "";
  const absoluteLogoUrl = logoUrlStr.startsWith("http") ? logoUrlStr : `https://www.promoregistry.com${logoUrlStr}`;

  return {
    title: `${storeName} Promo Codes & Discount Codes | PromoRegistry`,
    description: `Save money at ${storeName} with active promo codes, coupon codes, and verified discount offers.`,
    alternates: {
      canonical: `https://www.promoregistry.com/store/${slug}`,
    },
    openGraph: {
      title: `${storeName} Promo Codes & Discount Codes | PromoRegistry`,
      description: `Save money at ${storeName} with active promo codes, coupon codes, and verified discount offers.`,
      url: `https://www.promoregistry.com/store/${slug}`,
      siteName: "PromoRegistry",
      type: "website",
      locale: "en_US",
      images: [
        {
          url: absoluteLogoUrl,
          width: 500,
          height: 500,
          alt: `${storeName} Logo`,
        }
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${storeName} Promo Codes & Discount Codes | PromoRegistry`,
      description: `Save money at ${storeName} with active promo codes, coupon codes, and verified discount offers.`,
      images: [absoluteLogoUrl],
    }
  };
}

export default async function StorePage({ params }: StorePageProps) {
  const { slug } = await params;
  const canonicalSlug = SLUG_ALIASES[slug.toLowerCase()] || slug.toLowerCase();

  let coupons: Coupon[] = [];
  let store: Store | null = null;

  // 1. Check fallback dataset
  const fallbackStore = FALLBACK_STORES.find(s => s.slug === canonicalSlug || s.slug === slug);
  if (fallbackStore) {
    const activeStoreLogo = fallbackStore.logo || getLogoUrl(canonicalSlug) || getLogoUrl(slug);
    const populatedStore: Store = {
      id: fallbackStore.id,
      name: fallbackStore.name,
      slug: slug, // Keep current URL slug
      logo: activeStoreLogo,
      website: fallbackStore.website
    };
    store = populatedStore;

    // Isolate target core brands so zero rogue coupons can ever attach
    if (canonicalSlug === "transparent-labs" || canonicalSlug === "garten-und-freizeit" || canonicalSlug === "dreamcloud" || canonicalSlug === "qidi-tech") {
      const prefix = canonicalSlug === "transparent-labs" ? "tl-" : canonicalSlug === "garten-und-freizeit" ? "guf-" : canonicalSlug === "qidi-tech" ? "qidi-" : "dc-";
      coupons = FALLBACK_COUPONS.filter(c => String(c.id).startsWith(prefix)).map(c => ({
        ...c,
        code: c.code || "",
        affiliate_url: c.affiliate_url || fallbackStore.website,
        affiliate_link: c.affiliate_url || fallbackStore.website,
        affiliateLink: c.affiliate_url || fallbackStore.website,
        store: populatedStore
      }));
    } else {
      coupons = FALLBACK_COUPONS.filter(c => {
        const cSlug = (c as any).storeSlug || (typeof c.store === "object" && c.store !== null ? (c.store as Store).slug : String(c.store || "").toLowerCase().replace(/[\s_]+/g, "-"));
        return cSlug === canonicalSlug || cSlug === slug;
      }).map(c => {
        const normalizedAffiliate = c.affiliate_url || (c as any).affiliate_link || (c as any).affiliateLink || (fallbackStore as any).affiliateLink || (fallbackStore as any).affiliate_link || fallbackStore.website;
        return {
          ...c,
          affiliate_url: normalizedAffiliate,
          affiliate_link: normalizedAffiliate,
          affiliateLink: normalizedAffiliate,
          store: populatedStore
        };
      });
    }
  }

  // 2. Fallback shell if not found
  if (!store) {
    const formattedName = slug.split("-").map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(" ");
    store = {
      id: slug,
      name: formattedName,
      slug: slug,
      logo: getLogoUrl(canonicalSlug) || getLogoUrl(slug),
      website: `https://${canonicalSlug}.com`
    };
  }

  return <StoreClient store={store} coupons={coupons} />;
}
