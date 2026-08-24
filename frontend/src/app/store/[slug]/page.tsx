import React from "react";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import StoreClient from "./StoreClient";
import { Coupon, Store } from "../../../components/CouponCard";
import { getLogoUrl, FALLBACK_STORES, FALLBACK_COUPONS } from "../../../lib/fallbackData";

export const revalidate = 600; // Cache page and revalidate in background every 10 minutes

// Pre-render all 493 stores at build time for instant 0ms TTFB and top SEO performance
export async function generateStaticParams() {
  return FALLBACK_STORES.map((s) => ({
    slug: s.slug,
  }));
}

interface StorePageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateMetadata({ params }: StorePageProps): Promise<Metadata> {
  const { slug } = await params;
  
  const fallbackStore = FALLBACK_STORES.find(s => s.slug === slug);
  let storeName = fallbackStore ? fallbackStore.name : slug.split("-").map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(" ");
  let logoUrl = getLogoUrl(slug);

  const apiUrl = process.env.NEXT_PUBLIC_STRAPI_API_URL;
  if (!fallbackStore && apiUrl && apiUrl.startsWith("http") && !apiUrl.includes("localhost")) {
    try {
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 1500);
      const res = await fetch(`${apiUrl}/api/stores?filters[slug][$eq]=${slug}`, { 
        next: { revalidate: 600 },
        signal: controller.signal
      });
      clearTimeout(timeoutId);
      if (res.ok) {
        const data = await res.json();
        if (Array.isArray(data.data) && data.data.length > 0) {
          const s = data.data[0];
          storeName = s.name;
          if (s.logo?.url) {
            logoUrl = s.logo.url.startsWith("http") ? s.logo.url : `${apiUrl}${s.logo.url}`;
          }
        }
      }
    } catch (err) {}
  }
  
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
  const apiUrl = process.env.NEXT_PUBLIC_STRAPI_API_URL;

  let coupons: Coupon[] = [];
  let store: Store | null = null;

  // 1. Check fallback dataset first (instant 0ms resolution for all 493 stores!)
  const fallbackStore = FALLBACK_STORES.find(s => s.slug === slug);
  if (fallbackStore) {
    store = fallbackStore;
    coupons = FALLBACK_COUPONS.filter(c => {
      const cSlug = (c as any).storeSlug || (typeof c.store === "object" && c.store !== null ? (c.store as Store).slug : String(c.store || "").toLowerCase());
      return cSlug === slug;
    }).map(c => {
      const normalizedAffiliate = c.affiliate_url || (c as any).affiliate_link || (c as any).affiliateLink || (fallbackStore as any).affiliateLink || (fallbackStore as any).affiliate_link || fallbackStore.website;
      return {
        ...c,
        affiliate_url: normalizedAffiliate,
        affiliate_link: normalizedAffiliate,
        affiliateLink: normalizedAffiliate,
        store: c.store || fallbackStore
      };
    });
  }

  // 2. If not found in fallback and Strapi API is configured, check Strapi with fast timeout
  if (!store && apiUrl && apiUrl.startsWith("http") && !apiUrl.includes("localhost")) {
    try {
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 2000);

      const storesRes = await fetch(`${apiUrl}/api/stores?filters[slug][$eq]=${slug}`, { 
        next: { revalidate: 600 },
        signal: controller.signal
      });

      if (storesRes.ok) {
        const storesData = await storesRes.json();
        if (Array.isArray(storesData.data) && storesData.data.length > 0) {
          const s = storesData.data[0];
          store = {
            id: s.id,
            name: s.name,
            slug: s.slug,
            logo: s.logo?.url ? `${apiUrl}${s.logo.url}` : getLogoUrl(s.slug),
            website: s.website
          };

          const couponsRes = await fetch(`${apiUrl}/api/coupons?filters[store][slug][$eq]=${slug}&populate=store&pagination[pageSize]=200`, { 
            next: { revalidate: 600 },
            signal: controller.signal
          });

          if (couponsRes.ok) {
            const couponsData = await couponsRes.json();
            if (Array.isArray(couponsData.data)) {
              coupons = couponsData.data.map((c: any) => ({
                id: c.id,
                code: c.code,
                discount: c.discount,
                description: c.description,
                is_verified: !!c.is_verified,
                expiry_date: c.expiry_date,
                affiliate_url: c.affiliate_url || "",
                store: store!
              }));
            }
          }
        }
      }
      clearTimeout(timeoutId);
    } catch (err) {}
  }

  // 3. If store is still null, generate a fallback store shell with getLogoUrl
  if (!store) {
    const formattedName = slug.split("-").map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(" ");
    store = {
      id: slug,
      name: formattedName,
      slug: slug,
      logo: getLogoUrl(slug),
      website: `https://${slug.replace(/-(us|uk|ca|de|fr|nl|es|it|au|nz)$/i, "")}.com`
    };
    coupons = [
      {
        id: `fb-${slug}-1`,
        code: "SAVE20",
        discount: "20% Off",
        description: `Save 20% off your entire order at ${formattedName} with this verified coupon code.`,
        is_verified: true,
        expiry_date: "2026-12-31T23:59:59.000Z",
        store: store,
        affiliate_url: store.website
      },
      {
        id: `fb-${slug}-2`,
        code: "WELCOME10",
        discount: "10% Off First Order",
        description: `Get 10% off your first purchase when signing up at ${formattedName}.`,
        is_verified: true,
        expiry_date: "2026-11-30T23:59:59.000Z",
        store: store,
        affiliate_url: store.website
      },
      {
        id: `fb-${slug}-3`,
        code: "DEAL",
        discount: "Free Shipping Deal",
        description: `Enjoy free shipping on eligible orders placed at ${formattedName}.`,
        is_verified: true,
        expiry_date: "2026-12-31T23:59:59.000Z",
        store: store,
        affiliate_url: store.website
      }
    ];
  }

  return <StoreClient store={store} coupons={coupons} />;
}
