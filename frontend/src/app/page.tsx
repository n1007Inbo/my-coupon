import React from "react";
import HomeClient from "./HomeClient";
import { Coupon, Store } from "../components/CouponCard";
import { getLogoUrl, FALLBACK_STORES, FALLBACK_COUPONS } from "../lib/fallbackData";
import { STORE_REGISTRY } from "../lib/storeRegistry";

export const revalidate = 600; // Cache page and revalidate in background every 10 minutes

export default async function HomePage() {
  const apiUrl = process.env.NEXT_PUBLIC_STRAPI_API_URL;
  
  // 1. Build stores and coupons from high-priority STORE_REGISTRY
  const registryStores: Store[] = STORE_REGISTRY.map(reg => ({
    id: reg.id,
    name: reg.name,
    slug: reg.slug,
    logo: reg.logo,
    website: reg.website,
    affiliate_url: reg.affiliate_url
  }));

  const registryCoupons: Coupon[] = STORE_REGISTRY.flatMap(reg => 
    reg.coupons.map(c => ({
      id: c.id,
      code: c.code,
      discount: c.discount,
      title: c.title,
      description: c.description,
      is_verified: c.is_verified,
      expiry_date: c.expiry_date || "2026-12-31",
      store: {
        id: reg.id,
        name: reg.name,
        slug: reg.slug,
        logo: reg.logo,
        website: reg.website
      },
      storeSlug: reg.slug,
      affiliate_url: c.affiliate_url || reg.affiliate_url
    }))
  );

  // Combine with fallback stores (avoiding duplicate slugs)
  const storeMap = new Map<string, Store>();
  registryStores.forEach(s => storeMap.set(s.slug.toLowerCase(), s));
  FALLBACK_STORES.forEach(s => {
    if (!storeMap.has(s.slug.toLowerCase())) {
      storeMap.set(s.slug.toLowerCase(), s);
    }
  });

  let stores: Store[] = Array.from(storeMap.values());
  let coupons: Coupon[] = [...registryCoupons, ...FALLBACK_COUPONS];

  if (apiUrl && apiUrl.startsWith("http") && !apiUrl.includes("localhost")) {
    try {
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 2000);

      const [couponsRes, storesRes] = await Promise.all([
        fetch(`${apiUrl}/api/coupons?populate=store&pagination[pageSize]=200`, { 
          next: { revalidate: 600 },
          signal: controller.signal
        }),
        fetch(`${apiUrl}/api/stores?pagination[pageSize]=200`, { 
          next: { revalidate: 600 },
          signal: controller.signal
        })
      ]);
      clearTimeout(timeoutId);

      if (couponsRes.ok && storesRes.ok) {
        const couponsData = await couponsRes.json();
        const storesData = await storesRes.json();

        if (Array.isArray(couponsData.data) && couponsData.data.length > 0) {
          const strapiCoupons = couponsData.data.map((c: any) => ({
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
          coupons = [...registryCoupons, ...strapiCoupons];
        }

        if (Array.isArray(storesData.data) && storesData.data.length > 0) {
          const strapiStores = storesData.data.map((s: any) => ({
            id: s.id,
            name: s.name,
            slug: s.slug,
            logo: s.logo?.url ? `${apiUrl}${s.logo.url}` : getLogoUrl(s.slug),
            website: s.website
          }));
          strapiStores.forEach((s: Store) => {
            if (!storeMap.has(s.slug.toLowerCase())) {
              storeMap.set(s.slug.toLowerCase(), s);
            }
          });
          stores = Array.from(storeMap.values());
        }
      }
    } catch (err) {
      // Gracefully silent on Strapi timeout, uses static dataset immediately
    }
  }

  return (
    <main>
      <HomeClient initialCoupons={coupons} initialStores={stores} />
    </main>
  );
}
