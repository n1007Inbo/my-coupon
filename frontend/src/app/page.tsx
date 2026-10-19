import React from "react";
import HomeClient from "./HomeClient";
import { Coupon, Store } from "../components/CouponCard";
import { FALLBACK_STORES } from "../lib/fallbackData";
import { STORE_REGISTRY } from "../lib/storeRegistry";

export const revalidate = false; // Pure static generation - 0 runtime ISR writes

export default async function HomePage() {
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

// High-profile, neutral mainstream retail, tech, apparel, and travel brands from non-competing categories
// This protects our confidential campaign roster from competitor espionage on the homepage
const HOMEPAGE_NEUTRAL_BRANDS: Store[] = [
  { id: "pub-1", name: "Amazon", slug: "amazon", logo: "/logos/amazon.svg", website: "https://amazon.com" },
  { id: "pub-2", name: "Nike", slug: "nike", logo: "/logos/nike.svg", website: "https://nike.com" },
  { id: "pub-3", name: "Walmart", slug: "walmart", logo: "/logos/walmart.svg", website: "https://walmart.com" },
  { id: "pub-4", name: "Apple", slug: "apple", logo: "/logos/apple.svg", website: "https://apple.com" },
  { id: "pub-5", name: "Target", slug: "target", logo: "/logos/target.svg", website: "https://target.com" },
  { id: "pub-6", name: "Samsung", slug: "samsung", logo: "/logos/samsung.svg", website: "https://samsung.com" },
  { id: "pub-7", name: "Adidas", slug: "adidas", logo: "/logos/adidas.svg", website: "https://adidas.com" },
  { id: "pub-8", name: "eBay", slug: "ebay", logo: "/logos/ebay.svg", website: "https://ebay.com" },
  { id: "pub-9", name: "Starbucks", slug: "starbucks", logo: "/logos/starbucks.svg", website: "https://starbucks.com" },
  { id: "pub-10", name: "Steam", slug: "steam", logo: "/logos/steam.svg", website: "https://steampowered.com" },
  { id: "pub-11", name: "AliExpress", slug: "aliexpress", logo: "/logos/aliexpress.svg", website: "https://aliexpress.com" },
  { id: "pub-12", name: "Adobe", slug: "adobe", logo: "/logos/adobe.svg", website: "https://adobe.com" },
  { id: "pub-13", name: "Canva", slug: "canva", logo: "/logos/canva.svg", website: "https://canva.com" },
  { id: "pub-14", name: "NordVPN", slug: "nordvpn", logo: "/logos/nordvpn.svg", website: "https://nordvpn.com" },
  { id: "pub-15", name: "Lenovo", slug: "lenovo", logo: "/logos/lenovo.svg", website: "https://lenovo.com" },
  { id: "pub-16", name: "Puma", slug: "puma", logo: "/logos/puma.svg", website: "https://puma.com" },
  { id: "pub-17", name: "Fiverr", slug: "fiverr", logo: "/logos/fiverr.svg", website: "https://fiverr.com" },
  { id: "pub-18", name: "Booking.com", slug: "bookingcom", logo: "/logos/bookingcom.svg", website: "https://booking.com" },
  { id: "pub-19", name: "Hostinger", slug: "hostinger", logo: "/logos/hostinger.png", website: "https://hostinger.com" },
  { id: "pub-20", name: "Udemy", slug: "udemy", logo: "/logos/udemy.png", website: "https://udemy.com" },
];

const HOMEPAGE_NEUTRAL_COUPONS: Coupon[] = [
  {
    id: "pub-deal-1",
    code: "",
    discount: "UP TO 50% OFF",
    title: "Up to 50% off Daily Deals & Electronics at Amazon",
    description: "Save big on computers, home appliances, smartphones, and accessories with Amazon Today's Deals.",
    is_verified: true,
    expiry_date: "2026-12-31",
    store: { id: "pub-1", name: "Amazon", slug: "amazon", logo: "/logos/amazon.svg", website: "https://amazon.com" },
    storeSlug: "amazon",
    affiliate_url: "https://amazon.com"
  },
  {
    id: "pub-deal-2",
    code: "NIKE20",
    discount: "20% OFF",
    title: "20% off select footwear, sneakers & running apparel",
    description: "Take an extra 20% off qualifying running shoes, gym wear, and seasonal sportswear at Nike.",
    is_verified: true,
    expiry_date: "2026-12-31",
    store: { id: "pub-2", name: "Nike", slug: "nike", logo: "/logos/nike.svg", website: "https://nike.com" },
    storeSlug: "nike",
    affiliate_url: "https://nike.com"
  },
  {
    id: "pub-deal-3",
    code: "",
    discount: "UP TO 40% OFF",
    title: "Up to 40% off Rollbacks & Home Essentials at Walmart",
    description: "Discover massive Rollback savings on electronics, patio sets, groceries, and home goods.",
    is_verified: true,
    expiry_date: "2026-12-31",
    store: { id: "pub-3", name: "Walmart", slug: "walmart", logo: "/logos/walmart.svg", website: "https://walmart.com" },
    storeSlug: "walmart",
    affiliate_url: "https://walmart.com"
  },
  {
    id: "pub-deal-4",
    code: "SAVE70",
    discount: "70% OFF",
    title: "Save up to 70% + 3 extra months free on NordVPN Pro",
    description: "Protect all your devices with high-speed encrypted VPN security at ultra-low promotional pricing.",
    is_verified: true,
    expiry_date: "2026-12-31",
    store: { id: "pub-14", name: "NordVPN", slug: "nordvpn", logo: "/logos/nordvpn.svg", website: "https://nordvpn.com" },
    storeSlug: "nordvpn",
    affiliate_url: "https://nordvpn.com"
  },
  {
    id: "pub-deal-5",
    code: "ADIDAS15",
    discount: "15% OFF",
    title: "15% off shoes, track jackets & Originals collections",
    description: "Join the adiClub to unlock 15% off your next purchase plus free standard shipping sitewide.",
    is_verified: true,
    expiry_date: "2026-12-31",
    store: { id: "pub-7", name: "Adidas", slug: "adidas", logo: "/logos/adidas.svg", website: "https://adidas.com" },
    storeSlug: "adidas",
    affiliate_url: "https://adidas.com"
  },
  {
    id: "pub-deal-6",
    code: "",
    discount: "UP TO $800 OFF",
    title: "Up to $800 off Galaxy phones, 4K TVs & smart appliances",
    description: "Trade in your old devices for instant credit on flagship Galaxy devices and Neo QLED TVs.",
    is_verified: true,
    expiry_date: "2026-12-31",
    store: { id: "pub-6", name: "Samsung", slug: "samsung", logo: "/logos/samsung.svg", website: "https://samsung.com" },
    storeSlug: "samsung",
    affiliate_url: "https://samsung.com"
  },
  {
    id: "pub-deal-7",
    code: "CREATIVE25",
    discount: "25% OFF",
    title: "25% off Adobe Creative Cloud all-apps annual membership",
    description: "Access Photoshop, Illustrator, Premiere Pro, and 20+ creative tools with working discount code.",
    is_verified: true,
    expiry_date: "2026-12-31",
    store: { id: "pub-12", name: "Adobe", slug: "adobe", logo: "/logos/adobe.svg", website: "https://adobe.com" },
    storeSlug: "adobe",
    affiliate_url: "https://adobe.com"
  },
  {
    id: "pub-deal-8",
    code: "",
    discount: "UP TO 50% OFF",
    title: "Target Circle 360 Deals: Up to 50% off toys, apparel & kitchen",
    description: "Shop Target Circle exclusive partner deals and save up to 50% on top kitchen brands and clothing.",
    is_verified: true,
    expiry_date: "2026-12-31",
    store: { id: "pub-5", name: "Target", slug: "target", logo: "/logos/target.svg", website: "https://target.com" },
    storeSlug: "target",
    affiliate_url: "https://target.com"
  }
];

  // Combine stores: Neutral brands appear first on the homepage, while registry & fallback remain for search & direct landing pages
  const storeMap = new Map<string, Store>();
  
  // 1. Neutral public brands placed first to hide target campaigns from competitor espionage
  HOMEPAGE_NEUTRAL_BRANDS.forEach(s => storeMap.set(s.slug.toLowerCase(), s));

  // 2. All target campaigns preserved for direct store pages, deals pages, and smart search bar
  registryStores.forEach(s => {
    if (!storeMap.has(s.slug.toLowerCase())) {
      storeMap.set(s.slug.toLowerCase(), s);
    }
  });

  // 3. Add popular fallback stores (curated top 30 for seamless browsing without 1MB payload bloat)
  FALLBACK_STORES.slice(0, 30).forEach(s => {
    if (!storeMap.has(s.slug.toLowerCase())) {
      storeMap.set(s.slug.toLowerCase(), s);
    }
  });

  const stores: Store[] = Array.from(storeMap.values());
  // Curate top high-performing coupons for fast instant hydration
  const coupons: Coupon[] = [...HOMEPAGE_NEUTRAL_COUPONS, ...registryCoupons.slice(0, 36)];

  return (
    <main>
      <HomeClient initialCoupons={coupons} initialStores={stores} />
    </main>
  );
}
