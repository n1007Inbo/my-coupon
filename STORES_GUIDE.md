# 🏪 PromoRegistry Store & Deals Management Guide

Welcome to the **PromoRegistry** Store Architecture. This guide explains how stores, affiliate links, regional domains, and verified coupons are structured so any AI agent or developer can add or update brands flawlessly in under 60 seconds without breaking existing configurations.

---

## 📁 Architecture Overview

The system uses a centralized registry pattern:

```
frontend/src/
├── lib/
│   ├── storeRegistry.ts     <-- 🌟 PRIMARY REGISTRY: All active core brands & verified deals
│   └── fallbackData.ts      <-- Secondary static dataset & getLogoUrl helper
├── app/
│   └── store/[slug]/
│       ├── page.tsx         <-- Server Component (Auto-resolves aliases & isolates coupons)
│       └── StoreClient.tsx  <-- Client UI (Banner, Search, List, Tracking, GA4 events)
└── components/
    ├── CouponCard.tsx       <-- Luxury high-converting card component
    └── CouponCard.module.css<-- Ultra-clean responsive styling
```

---

## 🚀 How to Add a New Store (3 Simple Steps)

Open `frontend/src/lib/storeRegistry.ts` and add your brand object to `STORE_REGISTRY`:

```typescript
{
  id: 701,                             // Unique numeric ID
  name: "Brand Name",                  // Official Brand Name
  slug: "brand-name",                  // Canonical URL slug (/store/brand-name)
  aliases: ["brand", "brand-us"],      // Alternate URLs that seamlessly redirect here
  website: "https://brand.com",        // Merchant website or tracking link
  affiliate_url: "https://vert.si/xxx",// Direct affiliate tracking link
  country: "US",                       // US, UK, DE, CA, AU, or GLOBAL
  description: "Brief brand overview.",// SEO summary
  coupons: [
    {
      id: "brand-deal-1",
      code: "SAVE15",                  // Leave "" (empty string) for Direct Auto-Applied Deals
      discount: "15% OFF",
      title: "15% off discount code sitewide",
      description: "Save 15% on all products with verified code SAVE15.",
      is_verified: true,
      expiry_date: "2026-12-31"
    },
    {
      id: "brand-deal-2",
      code: "",                        // Empty string = creates "Get Deal →" button
      discount: "FREE SHIPPING",
      title: "Free tracked delivery on all orders",
      description: "Enjoy 100% free shipping automatically applied via link.",
      is_verified: true,
      expiry_date: "2026-12-31"
    }
  ]
}
```

### 🖼️ Adding Brand Logo:
Place the brand logo in `frontend/public/logos/[slug].png` (or `.svg`).
The system automatically resolves `/logos/[slug].png` or `/logos/[slug].svg`.

---

## 🔒 Guaranteed Protections Built-In:
1. **100% Coupon Isolation:** Coupons registered under a brand will *never* leak into other stores, and rogue coupons will never attach to your registered brand.
2. **100% Tracking Integrity:** Every button click automatically inherits the brand's affiliate link (`affiliate_url`) and attaches SubIDs (`subid1`, `subid2`, `subid3` / Google Ads `gclid`) seamlessly.
3. **Zero Duplicate Stores:** Canonical slugs and aliases prevent multiple duplicates from cluttering search or homepage listings.
4. **Auto-Applied Deals Support:** Setting `code: ""` renders a high-converting **"Get Deal →"** button that activates the affiliate discount automatically without confusing users with broken coupon codes.

---

## 🧪 Testing Builds:
Run from the `frontend/` directory:
```bash
cmd.exe /c "npm run build"
```
All 770+ static pages will pre-render with 0 errors.
