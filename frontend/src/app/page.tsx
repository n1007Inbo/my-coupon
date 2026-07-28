// Force Vercel rebuild to refresh ISR cache with newly seeded 12 coupons from live backend database
import React from "react";
import HomeClient from "./HomeClient";
import { Coupon, Store } from "../components/CouponCard";

import { getLogoUrl, FALLBACK_STORES, FALLBACK_COUPONS } from "../lib/fallbackData";
export const revalidate = 600; // Cache page and revalidate in background every 10 minutes

export default async function HomePage() {
  const apiUrl = process.env.NEXT_PUBLIC_STRAPI_API_URL || "http://localhost:1337";
  
  let coupons: Coupon[] = [];
  let stores: Store[] = [];
  let fetchedSuccessfully = false;

  try {
    // Parallel fetching for optimal performance with Next.js ISR caching
    const [couponsRes, storesRes] = await Promise.all([
      fetch(`${apiUrl}/api/coupons?populate=store&pagination[pageSize]=200`, { next: { revalidate: 600 } }),
      fetch(`${apiUrl}/api/stores?pagination[pageSize]=200`, { next: { revalidate: 600 } })
    ]);

    if (couponsRes.ok && storesRes.ok) {
      const couponsData = await couponsRes.json();
      const storesData = await storesRes.json();

      // Normalize Strapi v5 response structures
      if (Array.isArray(couponsData.data)) {
        coupons = couponsData.data.map((c: any) => ({
          id: c.id,
          code: c.code,
          discount: c.discount,
          description: c.description,
          is_verified: !!c.is_verified,
          expiry_date: c.expiry_date,
          affiliate_url: c.affiliate_url || "",
          store: c.store ? {
            id: c.store.id,
            name: c.store.name,
            slug: c.store.slug,
            logo: c.store.logo?.url ? `${apiUrl}${c.store.logo.url}` : getLogoUrl(c.store.slug),
            website: c.store.website
          } : "Unknown"
        }));
      }

      if (Array.isArray(storesData.data)) {
        stores = storesData.data.map((s: any) => ({
          id: s.id,
          name: s.name,
          slug: s.slug,
          logo: s.logo?.url ? `${apiUrl}${s.logo.url}` : getLogoUrl(s.slug),
          website: s.website
        }));
      }
      
      fetchedSuccessfully = true;
    } else {
      console.warn("Strapi returned non-200 status, using fallback data.");
    }
  } catch (err) {
    console.error("Failed to connect to Strapi API. Loading premium fallback dataset.", err);
  }

  // Load fallback dataset if API fetching fails (keeps the site fully operational out of the box!)
  if (!fetchedSuccessfully || coupons.length === 0) {
    coupons = FALLBACK_COUPONS;
    stores = FALLBACK_STORES;
  } else {
    // Hybrid injection: Guarantee crucial stores are ALWAYS present in the stores and coupons list!
    // This keeps campaigns live even if the database is in transitional draft state or has missing entries.
    const crucialStoreSlugs = ["desktronic-uk", "desktronic-us", "desktronic-nl", "bouquets-by-post", "parc-asterix-fr", "tenways-uk", "tenways-us", "im8health", "redusculpt", "evolution-power-tools", "maple-prime"];
    
    // 1. Ensure crucial stores exist
    crucialStoreSlugs.forEach((slug) => {
      const exists = stores.some((s) => s.slug === slug);
      if (!exists) {
        const fallbackStore = FALLBACK_STORES.find((s) => s.slug === slug);
        if (fallbackStore) {
          stores.push(fallbackStore);
        }
      }
    });

    // 2. Ensure crucial coupons exist
    crucialStoreSlugs.forEach((slug) => {
      const hasCoupons = coupons.some((c) => {
        const isStoreObject = typeof c.store === "object" && c.store !== null;
        const cStoreSlug = isStoreObject ? (c.store as Store).slug : String(c.store).toLowerCase();
        return cStoreSlug === slug;
      });

      if (!hasCoupons) {
        const fallbackCoupons = FALLBACK_COUPONS.filter((c) => {
          const isStoreObject = typeof c.store === "object" && c.store !== null;
          const cStoreSlug = isStoreObject ? (c.store as Store).slug : String(c.store).toLowerCase();
          return cStoreSlug === slug;
        });
        coupons.push(...fallbackCoupons);
      }
    });
  }

  return <HomeClient initialCoupons={coupons} initialStores={stores} />;
}
