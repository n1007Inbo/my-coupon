import { Store, Coupon } from "../components/CouponCard";
import { getLogoUrl } from "./fallbackData";

export interface RegistryCoupon {
  id: string;
  code: string; // empty string for direct auto-applied deals
  discount: string;
  title: string;
  description: string;
  is_verified: boolean;
  expiry_date?: string;
  affiliate_url?: string;
}

export interface RegistryStore {
  id: number | string;
  name: string;
  slug: string; // Canonical slug
  aliases?: string[]; // All alternate URLs that resolve to this store
  logo?: string;
  website: string;
  affiliate_url: string;
  country?: "US" | "UK" | "DE" | "CA" | "AU" | "GLOBAL";
  description?: string;
  coupons: RegistryCoupon[];
}

/**
 * ============================================================================
 * PROMOREGISTRY OFFICIAL STORE & COUPONS REGISTRY
 * ============================================================================
 * Add or update any brand here. 
 * - Handles canonical slug resolution & aliases automatically.
 * - Guarantees 100% coupon isolation (zero rogue coupons from other stores).
 * - Guarantees 100% affiliate link propagation across all deal buttons.
 */
export const STORE_REGISTRY: RegistryStore[] = [
  // 1. TRANSPARENT LABS (US Market)
  {
    id: 601,
    name: "Transparent Labs",
    slug: "transparent-labs",
    aliases: ["transparent-labs-us"],
    website: "https://vert.si/g693JE",
    affiliate_url: "https://vert.si/g693JE",
    country: "US",
    description: "100% transparent sports nutrition, clean pre-workouts, and premium protein powders.",
    coupons: [
      {
        id: "tl-deal-1",
        code: "WELCOME10",
        discount: "10% OFF",
        title: "10% off promo code sitewide",
        description: "Save 10% on pre-workout, whey protein isolate, and creatine with code WELCOME10.",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "tl-deal-2",
        code: "SUBSCRIBE15",
        discount: "15% OFF",
        title: "15% off subscription orders + free gifts",
        description: "Get 15% recurring savings on all supplement subscriptions with code SUBSCRIBE15.",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "tl-deal-3",
        code: "APP10",
        discount: "10% OFF",
        title: "10% off your entire first mobile app order",
        description: "Save 10% when ordering via the official Transparent Labs app with code APP10.",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "tl-deal-4",
        code: "",
        discount: "FREE SHIPPING",
        title: "Free standard shipping on orders over $99",
        description: "Enjoy 100% free tracked delivery across the United States on orders over $99.",
        is_verified: true,
        expiry_date: "2026-12-31"
      }
    ]
  },

  // 2. GARTEN UND FREIZEIT (Germany / EU Market)
  {
    id: 602,
    name: "Garten und Freizeit",
    slug: "garten-und-freizeit",
    aliases: ["garten-und-freizeit-de"],
    website: "https://litl.si/5p50u",
    affiliate_url: "https://litl.si/5p50u",
    country: "DE",
    description: "Exklusive Gartenmöbel, Loungemöbel, Sonnenschirme und Premium Grills in Deutschland.",
    coupons: [
      {
        id: "guf-deal-1",
        code: "",
        discount: "BIS ZU 60%",
        title: "Bis zu 60% Rabatt auf Gartenmöbel & Loungesets",
        description: "Exklusive Rabatte auf Premium Gartenmöbel und Esstischgruppen im Sommersale.",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "guf-deal-2",
        code: "",
        discount: "50€ RABATT",
        title: "50€ Sofort-Rabatt auf ausgewählte Terrassenmöbel",
        description: "Sparen Sie 50€ direkt im Warenkorb bei qualifizierten Marken-Gartenmöbeln.",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "guf-deal-3",
        code: "",
        discount: "GRATIS VERSAND",
        title: "Kostenloser Speditionsversand ab 500€ Bestellwert",
        description: "Kostenfreie und versicherte Lieferung direkt in Ihren Garten innerhalb Deutschlands.",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "guf-deal-4",
        code: "",
        discount: "40% RABATT",
        title: "Bis zu 40% Rabatt auf Gasgrills & Grillzubehör",
        description: "Top-Angebote auf Premium Gasgrills, Holzkohlegrills und Outdoor-Küchen.",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "guf-deal-5",
        code: "",
        discount: "20% RABATT",
        title: "20% Rabatt auf Ampelschirme & Sonnenschutz",
        description: "Hochwertige Sonnenschirme, Pavillons und Zubehör mit 20% Direktabzug.",
        is_verified: true,
        expiry_date: "2026-12-31"
      }
    ]
  },

  // 3. DREAMCLOUD (United Kingdom Market)
  {
    id: 603,
    name: "DreamCloud",
    slug: "dreamcloud",
    aliases: ["dreamcloud-uk", "dreamcloud-us"],
    website: "https://vert.si/dJUkDu",
    affiliate_url: "https://vert.si/dJUkDu",
    country: "UK",
    description: "Luxury hybrid memory foam mattresses with 365-night trial and lifetime warranty.",
    coupons: [
      {
        id: "dc-deal-1",
        code: "VIPONLY",
        discount: "15% OFF",
        title: "15% off luxury hybrid mattress coupon code",
        description: "Save an extra 15% on DreamCloud Luxury Hybrid mattresses with verified code VIPONLY.",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "dc-deal-2",
        code: "BLUELIGHT",
        discount: "10% OFF",
        title: "10% off sitewide discount code",
        description: "Get 10% off your entire mattress & bedding order with code BLUELIGHT at checkout.",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "dc-deal-3",
        code: "",
        discount: "UP TO 50%",
        title: "Up to 50% off mattress & luxury bedding bundles",
        description: "Save up to 50% when bundling luxury pillows, sheets, and mattress protectors.",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "dc-deal-4",
        code: "",
        discount: "40% OFF",
        title: "40% off DreamCloud Luxury Hybrid Mattress",
        description: "Get 40% instant reduction on all mattress sizes including Single, Double, King & Super King.",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "dc-deal-5",
        code: "",
        discount: "FREE DELIVERY",
        title: "Free premium delivery + 365-night home trial",
        description: "Enjoy 100% free delivery across the UK, 365-night sleep trial, and a lifetime warranty.",
        is_verified: true,
        expiry_date: "2026-12-31"
      }
    ]
  },

  // 4. QIDI US (United States)
  {
    id: 620,
    name: "QIDI US",
    slug: "qidi-us",
    aliases: ["qidi-tech", "qidi-tech-us"],
    website: "https://qidi3d-us.myshopify.com?sca_ref=12082428.QUGCstR0657wz",
    affiliate_url: "https://qidi3d-us.myshopify.com?sca_ref=12082428.QUGCstR0657wz",
    country: "US",
    description: "High-speed industrial CoreXY 3D printers, high-temp hotends, and engineering filaments.",
    coupons: [
      {
        id: "qidi-us-1",
        code: "40FOR700",
        discount: "$40 OFF",
        title: "$40 off promo code - spend over $700",
        description: "Get $40 discount on orders over $700 with verified code 40FOR700 at QIDI US.",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "qidi-us-2",
        code: "30FOR500",
        discount: "$30 OFF",
        title: "$30 off code - order over $500",
        description: "Save $30 on 3D printer orders over $500 with code 30FOR500.",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "qidi-us-3",
        code: "WELCOME10",
        discount: "10% OFF",
        title: "10% off coupon code sitewide",
        description: "Save 10% on high-speed 3D printers, hotends, and accessories with verified code WELCOME10.",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "qidi-us-4",
        code: "",
        discount: "55% OFF",
        title: "55% off on 3d printers & weekly deals",
        description: "Save up to 55% on industrial high-speed CoreXY 3D printers in weekly sales.",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "qidi-us-5",
        code: "",
        discount: "FREE SHIPPING",
        title: "Free tracked US shipping",
        description: "Enjoy 100% free tracked shipping across the United States on all 3D printers.",
        is_verified: true,
        expiry_date: "2026-12-31"
      }
    ]
  },

  // 5. QIDI DE (Germany / EU)
  {
    id: 621,
    name: "QIDI DE",
    slug: "qidi-de",
    aliases: ["qidi"],
    website: "https://qidi3d-de.myshopify.com?sca_ref=12082423.h3UYEVqJ6Tg",
    affiliate_url: "https://qidi3d-de.myshopify.com?sca_ref=12082423.h3UYEVqJ6Tg",
    country: "DE",
    description: "Hochgeschwindigkeits-CoreXY 3D-Drucker für anspruchsvolle Ingenieure in Deutschland und EU.",
    coupons: [
      {
        id: "qidi-de-1",
        code: "30FOR500",
        discount: "30€ RABATT",
        title: "30€ rabattcode bestellwert 500€",
        description: "Sichern Sie sich 30€ Rabatt ab einem Mindestbestellwert von 500€ mit Code 30FOR500.",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "qidi-de-2",
        code: "40FOR700",
        discount: "40€ RABATT",
        title: "40€ rabattcode bestellwert 700€",
        description: "Erhalten Sie 40€ Direktabzug ab 700€ Bestellwert mit Code 40FOR700.",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "qidi-de-3",
        code: "80FOR1200",
        discount: "80€ RABATT",
        title: "80€ rabattcode bestellwert 1200€",
        description: "80€ Großbestellungs-Rabatt ab 1200€ Einkaufswert mit Code 80FOR1200.",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "qidi-de-4",
        code: "",
        discount: "40% RABATT",
        title: "40% rabatt auf 3D drucker & filamente",
        description: "Sparen Sie bis zu 40% auf Hochtemperatur 3D Drucker und Filament Bundles.",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "qidi-de-5",
        code: "",
        discount: "GRATIS VERSAND",
        title: "Kostenloser Speditionsversand in DE & EU",
        description: "Kostenlose Lieferung auf alle 3D-Drucker innerhalb Deutschlands und der EU.",
        is_verified: true,
        expiry_date: "2026-12-31"
      }
    ]
  },

  // 6. QIDI UK (United Kingdom)
  {
    id: 622,
    name: "QIDI UK",
    slug: "qidi-uk",
    website: "https://qidi3d-uk.myshopify.com?sca_ref=12082424.7VZOgmHzi7mV",
    affiliate_url: "https://qidi3d-uk.myshopify.com?sca_ref=12082424.7VZOgmHzi7mV",
    country: "UK",
    description: "Official QIDI high-speed CoreXY 3D printers and carbon-fiber materials in the UK.",
    coupons: [
      {
        id: "qidi-uk-1",
        code: "HIGH5",
        discount: "20% OFF",
        title: "20% off discount code sitewide",
        description: "Get 20% off sitewide at QIDI UK with verified promo code HIGH5.",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "qidi-uk-2",
        code: "35FOR500",
        discount: "£35 OFF",
        title: "£35 off code - order over £500",
        description: "Save £35 on 3D printer orders over £500 with code 35FOR500.",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "qidi-uk-3",
        code: "25FOR400",
        discount: "£25 OFF",
        title: "£25 off code - spend over £400",
        description: "Save £25 on 3D printers and parts with verified code 25FOR400.",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "qidi-uk-4",
        code: "",
        discount: "50% OFF",
        title: "50% off on 3d printers & accessories",
        description: "Save up to 50% on high-speed CoreXY 3D printers and filaments in the UK.",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "qidi-uk-5",
        code: "",
        discount: "FREE SHIPPING",
        title: "Free tracked UK delivery",
        description: "Enjoy 100% free tracked delivery across the UK on all printer orders.",
        is_verified: true,
        expiry_date: "2026-12-31"
      }
    ]
  },

  // 7. QIDI CA (Canada)
  {
    id: 623,
    name: "QIDI CA",
    slug: "qidi-ca",
    website: "https://qidi3d-ca.myshopify.com?sca_ref=12082426.lb4pfrcPLtarI",
    affiliate_url: "https://qidi3d-ca.myshopify.com?sca_ref=12082426.lb4pfrcPLtarI",
    country: "CA",
    description: "Official QIDI 3D printers and technical support for Canada.",
    coupons: [
      {
        id: "qidi-ca-1",
        code: "PRINT10-CA",
        discount: "10% OFF",
        title: "10% off discount code sitewide",
        description: "Get 10% off sitewide across Canada with code PRINT10-CA.",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "qidi-ca-2",
        code: "50FOR800",
        discount: "$50 OFF",
        title: "$50 off code - purchase over $800 CAD",
        description: "Save $50 on orders over $800 with verified code 50FOR800.",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "qidi-ca-3",
        code: "40FOR700",
        discount: "$40 OFF",
        title: "$40 off code - order over $700 CAD",
        description: "Get $40 off CoreXY 3D printers with code 40FOR700 in Canada.",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "qidi-ca-4",
        code: "",
        discount: "55% OFF",
        title: "55% off on 3d printers & weekly deals",
        description: "Save up to 55% on 3D printers and filaments across Canada.",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "qidi-ca-5",
        code: "",
        discount: "FREE SHIPPING",
        title: "Free shipping across Canada",
        description: "Enjoy 100% free tracked delivery across all Canadian provinces.",
        is_verified: true,
        expiry_date: "2026-12-31"
      }
    ]
  },

  // 8. QIDI AU (Australia)
  {
    id: 624,
    name: "QIDI AU",
    slug: "qidi-au",
    website: "https://qiditech3d-au.myshopify.com?sca_ref=12082425.u0nAUHxvoBprsex",
    affiliate_url: "https://qiditech3d-au.myshopify.com?sca_ref=12082425.u0nAUHxvoBprsex",
    country: "AU",
    description: "Official QIDI 3D printers, direct warranty, and accessories in Australia.",
    coupons: [
      {
        id: "qidi-au-1",
        code: "PRINT10-CA",
        discount: "10% OFF",
        title: "10% off coupon code",
        description: "Get 10% off your entire 3D printer purchase with code PRINT10-CA in Australia.",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "qidi-au-2",
        code: "100FOR1600",
        discount: "$100 OFF",
        title: "$100 off promo - purchase over $1600 AUD",
        description: "Get $100 instant discount on orders over $1600 with code 100FOR1600.",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "qidi-au-3",
        code: "35FOR700",
        discount: "$35 OFF",
        title: "$35 off code - order over $700 AUD",
        description: "Save $35 on 3D printers and accessories with code 35FOR700.",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "qidi-au-4",
        code: "",
        discount: "45% OFF",
        title: "45% off on 3d printers & accessories",
        description: "Save up to 45% on high-speed industrial 3D printers in Australia.",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "qidi-au-5",
        code: "",
        discount: "FREE SHIPPING",
        title: "Free shipping across Australia",
        description: "Enjoy 100% free tracked delivery across Australia on all printer models.",
        is_verified: true,
        expiry_date: "2026-12-31"
      }
    ]
  },

  // 9. MELLOW SLEEP (100% Auto-Applied Affiliate Deals)
  {
    id: 630,
    name: "Mellow Sleep",
    slug: "mellow-sleep",
    aliases: ["mellow"],
    website: "https://mellowsleep.com/RICHARD1",
    affiliate_url: "https://mellowsleep.com/RICHARD1",
    country: "US",
    description: "Affordable luxury memory foam mattresses, modern solid wood bed frames, and sleep accessories.",
    coupons: [
      {
        id: "mellow-deal-1",
        code: "",
        discount: "15% OFF",
        title: "15% off discount sitewide (auto-applied at checkout)",
        description: "Click to activate 15% instant discount on mattresses, toppers, and bed frames automatically at checkout.",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "mellow-deal-2",
        code: "",
        discount: "15% OFF",
        title: "15% off memory foam mattresses & cooling toppers",
        description: "Enjoy 15% off premium cooling memory foam mattresses. Discount applied automatically via link.",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "mellow-deal-3",
        code: "",
        discount: "UP TO $100",
        title: "Up to $100 off solid wood bed frames & platform bases",
        description: "Get up to $100 instant savings on modern upholstered and solid wood bed frames.",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "mellow-deal-4",
        code: "",
        discount: "10% OFF",
        title: "10% off your entire first sleep order",
        description: "Activate 10% new customer discount automatically applied to your cart.",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "mellow-deal-5",
        code: "",
        discount: "FREE SHIPPING",
        title: "Free nationwide shipping + 100-night risk-free trial",
        description: "Enjoy 100% free doorstep delivery across the US and a 100-night trial with free returns.",
        is_verified: true,
        expiry_date: "2026-12-31"
      }
    ]
  },

  // 10. COMFRT CLOTHING (Weighted Anxiety Relief Hoodies)
  {
    id: 631,
    name: "Comfrt",
    slug: "comfrt",
    aliases: ["comfrt-clothing"],
    website: "https://comfrt.com",
    affiliate_url: "https://comfrt.com",
    country: "US",
    description: "The original anxiety relief weighted hoodies, premium oversized sweatpants, and lounge sets.",
    coupons: [
      {
        id: "comfrt-deal-1",
        code: "WELCOME15",
        discount: "15% OFF",
        title: "15% off weighted hoodies coupon code",
        description: "Save 15% on original anxiety relief weighted hoodies and sweatpants with code WELCOME15.",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "comfrt-deal-2",
        code: "SAVE10",
        discount: "10% OFF",
        title: "10% off discount code sitewide",
        description: "Apply 10% instant discount across all oversized hoodies, sweatpants, and lounge sets with code SAVE10.",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "comfrt-deal-3",
        code: "COMFRT20",
        discount: "20% OFF",
        title: "20% off lounge sets & sweatpants bundle",
        description: "Save 20% when bundling any 2 weighted hoodies or lounge pants with code COMFRT20.",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "comfrt-deal-4",
        code: "",
        discount: "UP TO 30%",
        title: "Up to 30% off anxiety relief weighted collection",
        description: "Save up to 30% on best-selling weighted hoodies engineered for calming anxiety.",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "comfrt-deal-5",
        code: "",
        discount: "FREE SHIPPING",
        title: "Free tracked shipping on orders over $75",
        description: "Enjoy 100% free tracked shipping across the United States on all apparel orders over $75.",
        is_verified: true,
        expiry_date: "2026-12-31"
      }
    ]
  }
];

/**
 * Fast lookup map for all aliases and canonical slugs
 */
const ALIAS_LOOKUP: Record<string, RegistryStore> = {};
STORE_REGISTRY.forEach(store => {
  ALIAS_LOOKUP[store.slug.toLowerCase()] = store;
  if (store.aliases) {
    store.aliases.forEach(alias => {
      ALIAS_LOOKUP[alias.toLowerCase()] = store;
    });
  }
});

/**
 * Resolves any slug (canonical or alias) and returns populated Store & Coupon objects
 */
export function getRegisteredStore(requestedSlug: string): { store: Store; coupons: Coupon[] } | null {
  const norm = requestedSlug.toLowerCase().trim();
  const regStore = ALIAS_LOOKUP[norm];
  if (!regStore) return null;

  const logoUrl = regStore.logo || getLogoUrl(regStore.slug) || getLogoUrl(norm);

  const populatedStore: Store = {
    id: regStore.id,
    name: regStore.name,
    slug: requestedSlug, // Preserves the exact URL slug accessed
    logo: logoUrl,
    website: regStore.affiliate_url || regStore.website
  };

  const populatedCoupons: Coupon[] = regStore.coupons.map(c => {
    const affiliate = c.affiliate_url || regStore.affiliate_url || regStore.website;
    return {
      id: c.id,
      code: c.code || "",
      discount: c.discount,
      title: c.title,
      description: c.description,
      is_verified: c.is_verified,
      expiry_date: c.expiry_date || "2026-12-31",
      store: populatedStore,
      storeSlug: requestedSlug,
      affiliate_url: affiliate,
      affiliate_link: affiliate,
      affiliateLink: affiliate
    };
  });

  return {
    store: populatedStore,
    coupons: populatedCoupons
  };
}

/**
 * Returns all slugs (canonical + aliases) for Next.js generateStaticParams
 */
export function getAllRegisteredSlugs(): string[] {
  return Object.keys(ALIAS_LOOKUP);
}

/**
 * Utility to register a new store dynamically or during runtime
 */
export function registerStore(config: RegistryStore): void {
  STORE_REGISTRY.push(config);
  ALIAS_LOOKUP[config.slug.toLowerCase()] = config;
  if (config.aliases) {
    config.aliases.forEach(alias => {
      ALIAS_LOOKUP[alias.toLowerCase()] = config;
    });
  }
}
