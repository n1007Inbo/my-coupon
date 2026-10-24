import React from "react";
import HomeClient from "./HomeClient";
import { HOMEPAGE_NEUTRAL_BRANDS, HOMEPAGE_NEUTRAL_COUPONS } from "../lib/neutralBrands";

export const revalidate = false; // Pure static generation - 0 runtime ISR writes

/**
 * PromoRegistry Homepage
 * Strictly serves neutral mainstream brands to protect confidential affiliate campaigns
 * from competitor espionage, click fraud, and automated scraping bots.
 * Target affiliate campaigns remain accessible via direct URL routing (/store/[slug])
 * and the owner's backdoor search operator (--).
 */
export default async function HomePage() {
  return (
    <main>
      <HomeClient 
        initialCoupons={HOMEPAGE_NEUTRAL_COUPONS} 
        initialStores={HOMEPAGE_NEUTRAL_BRANDS} 
      />
    </main>
  );
}
