import React from "react";
import { Metadata } from "next";
import StoreClient from "./StoreClient";
import { Coupon, Store } from "../../../components/CouponCard";

import { getLogoUrl, FALLBACK_STORES, FALLBACK_COUPONS } from "../../../lib/fallbackData";
export const revalidate = 600; // Cache page and revalidate in background every 10 minutes

interface StorePageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateMetadata({ params }: StorePageProps): Promise<Metadata> {
  const { slug } = await params;
  
  // Normalize fallback store name
  let storeName = slug.split("-").map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(" ");
  const fallbackStore = FALLBACK_STORES.find(s => s.slug === slug);
  if (fallbackStore) {
    storeName = fallbackStore.name;
  }
  
  return {
    title: `${storeName} Promo Codes & Discount Codes | PromoRegistry`,
    description: `Save money at ${storeName} with active promo codes, coupon codes, and verified discount offers.`,
    openGraph: {
      title: `${storeName} Promo Codes & Discount Codes | PromoRegistry`,
      description: `Save money at ${storeName} with active promo codes, coupon codes, and verified discount offers.`,
      url: `https://www.promoregistry.com/store/${slug}`,
      siteName: 'PromoRegistry',
      type: 'website',
      locale: 'en_US',
    }
  };
}

export default async function StorePage({ params }: StorePageProps) {
  const { slug } = await params;
  const apiUrl = process.env.NEXT_PUBLIC_STRAPI_API_URL || "http://localhost:1337";

  let coupons: Coupon[] = [];
  let store: Store | null = null;
  let fetchedSuccessfully = false;

  const forceFallbackSlugs = [
    "desktronic-us", 
    "desktronic-uk", 
    "desktronic-nl", 
    "redusculpt", 
    "evolution-power-tools", 
    "nobodys-child", 
    "maple-prime", 
    "im8health", 
    "bouquets-by-post", 
    "parc-asterix-fr",
    "anycubic-us",
    "hitway-uk",
    "wolfbox-uk",
    "fitueyes-uk",
    "helvetus",
    "xsteel-targets",
    "reconstitution-solution"
  ];
  const shouldForceFallback = forceFallbackSlugs.includes(slug);

  try {
    if (shouldForceFallback) {
      throw new Error("Forcing local fallback data for updated premium store: " + slug);
    }
    // 1. Fetch store by slug or find it with ISR caching
    const storesRes = await fetch(`${apiUrl}/api/stores?filters[slug][$eq]=${slug}`, { next: { revalidate: 600 } });
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

        // 2. Fetch coupons associated with this store with ISR caching
        const couponsRes = await fetch(`${apiUrl}/api/coupons?filters[store][slug][$eq]=${slug}&populate=store&pagination[pageSize]=200`, { next: { revalidate: 600 } });
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
              store: store as Store
            }));
            fetchedSuccessfully = true;
          }
        }
      }
    }
  } catch (err) {
    console.error(`Failed to fetch store page data for ${slug}. Loading premium fallbacks.`, err);
  }

  // Resilient fallback mechanism
  if (!fetchedSuccessfully || !store) {
    store = FALLBACK_STORES.find((s) => s.slug === slug) || null;
    if (store) {
      coupons = FALLBACK_COUPONS.filter((c) => {
        const isStoreObject = typeof c.store === "object" && c.store !== null;
        const cStoreSlug = isStoreObject ? (c.store as Store).slug : String(c.store).toLowerCase();
        return cStoreSlug === slug;
      });
    }
  } else if (store && coupons.length === 0) {
    // If store exists in DB but has no coupons yet (seeding delay), load fallback coupons safely
    coupons = FALLBACK_COUPONS.filter((c) => {
      const isStoreObject = typeof c.store === "object" && c.store !== null;
      const cStoreSlug = isStoreObject ? (c.store as Store).slug : String(c.store).toLowerCase();
      return cStoreSlug === slug;
    });
  }

  // If store is completely invalid/unknown, render a nice 404 or unknown state
  if (!store) {
    return (
      <div style={{ textAlign: "center", padding: "100px 24px", maxWidth: "600px", margin: "0 auto" }}>
        <h1 style={{ fontSize: "2rem", marginBottom: "16px" }}>Store Not Found</h1>
        <p style={{ color: "var(--text-secondary)", marginBottom: "24px" }}>
          We could not find the store you are looking for. It may have been renamed or removed.
        </p>
        <a 
          href="/" 
          style={{
            backgroundColor: "var(--primary-blue)",
            color: "#ffffff",
            padding: "12px 24px",
            borderRadius: "var(--radius-md)",
            fontWeight: 600
          }}
        >
          Go Back Home
        </a>
      </div>
    );
  }

  // Offer structured data schema markup
  const schemaMarkup = {
    "@context": "https://schema.org",
    "@type": "ItemPage",
    "name": `${store.name} Promo Codes & Discount Codes`,
    "description": `Active verified coupons and deals for ${store.name}.`,
    "publisher": {
      "@type": "Organization",
      "name": "PromoRegistry",
      "logo": {
        "@type": "ImageObject",
        "url": "https://www.promoregistry.com/favicon.png"
      }
    },
    "mainEntity": {
      "@type": "ItemList",
      "numberOfItems": coupons.length,
      "itemListElement": coupons.map((c, index) => ({
        "@type": "ListItem",
        "position": index + 1,
        "item": {
          "@type": "Offer",
          "name": c.discount,
          "description": c.description,
          "category": "Promo Code",
          "seller": {
            "@type": "Organization",
            "name": store.name
          }
        }
      }))
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaMarkup) }}
      />
      <StoreClient store={store} coupons={coupons} />
    </>
  );
}
