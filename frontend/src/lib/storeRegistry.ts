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
    logo: "/logos/transparent-labs.png",
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
        code: "TL10",
        discount: "10% OFF",
        title: "10% off 100% grass-fed whey protein isolate & creatine HMB",
        description: "Get 10% off clean grass-fed whey isolate and creatine supplements with code TL10.",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "tl-deal-3",
        code: "SUBSCRIBE15",
        discount: "15% OFF",
        title: "15% off subscription orders + free gifts",
        description: "Get 15% recurring savings on all supplement subscriptions with code SUBSCRIBE15.",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "tl-deal-4",
        code: "APP10",
        discount: "10% OFF",
        title: "10% off your entire first mobile app order",
        description: "Save 10% when ordering via the official Transparent Labs app with code APP10.",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "tl-deal-5",
        code: "SAVE10",
        discount: "10% OFF",
        title: "10% off bulk pre-workout, BULK black & LEAN",
        description: "Save 10% on best-selling BULK Pre-Workout and LEAN thermogenic with code SAVE10.",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "tl-deal-6",
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
    logo: "/logos/garten-und-freizeit.png",
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
    logo: "/logos/dreamcloud.png",
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
    logo: "/logos/qidi.png",
    website: "https://us.qidi3d.com/?sca_ref=10216933.GBxI9fhaM2YhHIe",
    affiliate_url: "https://us.qidi3d.com/?sca_ref=10216933.GBxI9fhaM2YhHIe",
    country: "US",
    description: "Official QIDI high-speed CoreXY 3D printers (Q1 Pro, Plus4, Max4), high-temp hotends, and engineering filaments in the US.",
    coupons: [
      {
        id: "qidi-us-1",
        code: "50FOR800",
        discount: "$50 OFF",
        title: "$50 off discount code on orders over $800",
        description: "Save $50 on high-end CoreXY 3D printers (Max4, Plus5 & multi-color bundles) with code 50FOR800.",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "qidi-us-2",
        code: "40FOR700",
        discount: "$40 OFF",
        title: "$40 off promo code on purchases over $700",
        description: "Get $40 instant savings on QIDI Plus4 and high-speed industrial printers with code 40FOR700.",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "qidi-us-3",
        code: "30FOR500",
        discount: "$30 OFF",
        title: "$30 off coupon code - orders over $500",
        description: "Save $30 on QIDI Q2, Q2C, and enclosed CoreXY printer orders over $500 with code 30FOR500.",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "qidi-us-4",
        code: "HIGH5",
        discount: "5% OFF",
        title: "5% off official newsletter coupon code (verified working)",
        description: "Save 5% on all 3D printers, high-temp hotends, and accessories with verified code HIGH5.",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "qidi-us-5",
        code: "SH5",
        discount: "5% OFF",
        title: "5% off first order instant discount code sitewide",
        description: "Apply 5% instant discount across all 3D printers, filament rolls, and drying boxes with code SH5.",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "qidi-us-6",
        code: "",
        discount: "UP TO 55%",
        title: "Up to 55% off Back to School Sale on CoreXY 3D printers",
        description: "Save up to 55% on enclosed high-speed industrial 3D printers and high-temp filament packages.",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "qidi-us-7",
        code: "",
        discount: "$14.99 DEAL",
        title: "$14.99 basic filament mystery box clearance deal",
        description: "Get high-speed PLA/PETG filament mystery spools starting at only $14.99 while supplies last.",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "qidi-us-8",
        code: "",
        discount: "FREE SHIPPING",
        title: "Free tracked US local warehouse shipping on orders over $39.99",
        description: "Enjoy 100% free tracked US doorstep delivery with 1-year official warranty on all 3D printer orders.",
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
    logo: "/logos/qidi.png",
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
    logo: "/logos/qidi.png",
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
    logo: "/logos/qidi.png",
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
    logo: "/logos/qidi.png",
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
    logo: "/logos/mellow-sleep.svg",
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
    logo: "/logos/comfrt.png",
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
  },

  // 11. DC HOUSE (LiFePO4 Lithium Batteries & Solar Power)
  {
    id: 632,
    name: "DC House",
    slug: "dc-house",
    aliases: ["dchouse", "dc-house-power"],
    logo: "/logos/dc-house.png",
    website: "https://www.dchousepower.com/?ref=ikafrwml",
    affiliate_url: "https://www.dchousepower.com/?ref=ikafrwml",
    country: "US",
    description: "High-performance LiFePO4 lithium batteries, off-grid solar kits, inverters, and trolling motor battery solutions.",
    coupons: [
      {
        id: "dchouse-deal-1",
        code: "METHEWDIPPY",
        discount: "5% OFF",
        title: "5% off promo code sitewide (verified working)",
        description: "Save 5% on all 12V 100Ah LiFePO4 lithium batteries, solar panels, and inverters with code METHEWDIPPY.",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "dchouse-deal-2",
        code: "METHEWDIPPY",
        discount: "5% OFF",
        title: "5% off 12V 100Ah / 24V deep-cycle trolling motor & RV batteries",
        description: "Get 5% instant discount on deep-cycle lithium marine and RV batteries with verified code METHEWDIPPY.",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "dchouse-deal-3",
        code: "METHEWDIPPY",
        discount: "5% OFF",
        title: "5% off off-grid solar panels, inverters & charge controllers",
        description: "Apply 5% discount on complete off-grid solar power systems with code METHEWDIPPY.",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "dchouse-deal-4",
        code: "METHEWDIPPY",
        discount: "EXTRA 5% OFF",
        title: "Extra 5% off large capacity battery bank orders",
        description: "Stack an extra 5% savings on all high-capacity lithium battery bank orders using code METHEWDIPPY.",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "dchouse-deal-5",
        code: "",
        discount: "UP TO 35%",
        title: "Up to 35% off weekly flash sales on LiFePO4 power systems",
        description: "Save up to 35% on lightweight waterproof trolling motor and RV marine lithium batteries.",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "dchouse-deal-6",
        code: "",
        discount: "FREE SHIPPING",
        title: "Free tracked US doorstep delivery on all battery orders",
        description: "Enjoy 100% free tracked US doorstep delivery with 10-year warranty on all DC House power systems.",
        is_verified: true,
        expiry_date: "2026-12-31"
      }
    ]
  },

  // 12. IM8 HEALTH (David Beckham Daily Ultimate Longevity & Nutrition)
  {
    id: 633,
    name: "IM8 Health",
    slug: "im8health",
    aliases: ["im8-health", "im8", "im8health-us", "im8-health-us"],
    logo: "/logos/im8health.png",
    website: "https://www.im8health.com/METHEW29111",
    affiliate_url: "https://www.im8health.com/METHEW29111",
    country: "US",
    description: "Daily all-in-one ultimate longevity nutrition and essential multivitamin powder founded by David Beckham.",
    coupons: [
      {
        id: "im8-deal-1",
        code: "METHEW29111",
        discount: "20% OFF",
        title: "20% off exclusive promo code sitewide (verified working)",
        description: "Save 20% on Daily Ultimate Essentials and Longevity supplements with code METHEW29111.",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "im8-deal-2",
        code: "METHEW29111",
        discount: "30% OFF",
        title: "30% off Welcome Kit + 5 free travel sachets + shaker cup",
        description: "Get 30% discount on the complete IM8 Welcome Starter Kit with exclusive code METHEW29111.",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "im8-deal-3",
        code: "METHEW29111",
        discount: "15% OFF",
        title: "15% off first order discount code on all longevity powders",
        description: "Apply 15% instant discount across all single and multi-pack nutrition orders with code METHEW29111.",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "im8-deal-4",
        code: "METHEW29111",
        discount: "30% OFF",
        title: "30% off Daily Ultimate Essentials Pro 90-day subscription",
        description: "Unlock 30% recurring savings on the 90-day supply bundle using code METHEW29111.",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "im8-deal-5",
        code: "METHEW29111",
        discount: "EXTRA 20% OFF",
        title: "Extra 20% off Daily Ultimate Longevity monthly subscription",
        description: "Stack an extra 20% off on all monthly recurring wellness subscriptions with code METHEW29111.",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "im8-deal-6",
        code: "METHEW29111",
        discount: "$208/MO STACK",
        title: "The Beckham Stack Bundle starting from just $208/mo",
        description: "Get the complete David Beckham Longevity Stack at special promotional pricing with code METHEW29111.",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "im8-deal-7",
        code: "",
        discount: "FREE GIFTS",
        title: "Free signature shaker + travel tin with any starter kit",
        description: "Receive a free premium shaker bottle and signature travel tin automatically on starter orders.",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "im8-deal-8",
        code: "",
        discount: "FREE SHIPPING",
        title: "Free tracked US doorstep delivery on all orders",
        description: "Enjoy 100% free tracked US doorstep delivery on all starter kits and supplement subscriptions.",
        is_verified: true,
        expiry_date: "2026-12-31"
      }
    ]
  },

  // 13. FILTER BABY (US Market - Dermatologist-Approved Skincare Water Filter)
  {
    id: 613,
    name: "Filter Baby",
    slug: "filter-baby",
    aliases: ["filter-baby-coupons", "filterbaby", "filter-baby-us"],
    logo: "/logos/filter-baby.png",
    website: "https://filterbaby.com/discount/FILTER15?ref=promoregistry",
    affiliate_url: "https://filterbaby.com/discount/FILTER15?ref=promoregistry",
    country: "US",
    description: "Clinically tested, dermatologist-approved faucet water filters designed to eliminate harsh tap water contaminants and promote clear, glowing skin.",
    coupons: [
      {
        id: "fb-deal-1",
        code: "FILTER15",
        discount: "15% OFF",
        title: "15% off sitewide on all faucet filters & refills",
        description: "Save 15% on the genuine Filterbaby 2.0 skincare water filter and replacements with code FILTER15.",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "fb-deal-2",
        code: "GLOW20",
        discount: "20% OFF",
        title: "20% off annual filter replacement subscriptions",
        description: "Get 20% off yearly PRO refill subscriptions for continuous contaminant-free, skin-clearing water.",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "fb-deal-3",
        code: "BUNDLE30",
        discount: "30% OFF",
        title: "Up to 30% off starter bundles & faucet adapters",
        description: "Save up to 30% when ordering the Filterbaby Deluxe bundle complete with multi-fit universal adapters.",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "fb-deal-4",
        code: "WELCOME10",
        discount: "10% OFF",
        title: "10% off your first purchase sitewide",
        description: "Enjoy 10% off your entire first order of clinically proven skincare tap water filters with code WELCOME10.",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "fb-deal-5",
        code: "",
        discount: "FREE SHIPPING",
        title: "Free US tracked shipping & 60-day money-back trial",
        description: "Enjoy 100% free tracked delivery across the United States plus a risk-free 60-day money back guarantee.",
        is_verified: true,
        expiry_date: "2026-12-31"
      }
    ]
  },

  // 14. TENWAYS (Global / US / EU - Premium City Electric Bikes)
  {
    id: 614,
    name: "Tenways",
    slug: "tenways",
    aliases: ["tenways-ebikes", "tenways-us", "tenways-uk", "tenways-nl", "tenways-coupons"],
    logo: "/logos/tenways.png",
    website: "https://www.tenways.com/?ref=promoregistry",
    affiliate_url: "https://www.tenways.com/?ref=promoregistry",
    country: "US",
    description: "Premium lightweight electric bikes engineered for effortless urban commuting with silent belt drives, smart torque sensors, and sleek battery integration.",
    coupons: [
      {
        id: "tw-deal-1",
        code: "TENWAYS100",
        discount: "$100 OFF",
        title: "$100 off any adult city e-bike",
        description: "Save $100 on CGO600 Pro, CGO800S, AGO X, and AGO T smart e-bikes with code TENWAYS100.",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "tw-deal-2",
        code: "RIDEPRO",
        discount: "$150 OFF",
        title: "$150 off CGO600 Pro lightweight urban commuter",
        description: "Get $150 instant savings on the ultra-lightweight CGO600 Pro city commuter with code RIDEPRO.",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "tw-deal-3",
        code: "GEAR50",
        discount: "$50 OFF",
        title: "$50 off official accessories with any bike order",
        description: "Save $50 on mudguards, pannier bags, helmets, and kickstands with code GEAR50.",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "tw-deal-4",
        code: "WELCOME50",
        discount: "$50 OFF",
        title: "$50 off your first purchase sitewide",
        description: "Enjoy $50 welcome discount on your first Tenways smart electric bike order with code WELCOME50.",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "tw-deal-5",
        code: "",
        discount: "FREE SHIPPING",
        title: "Free standard shipping & 14-day home trial",
        description: "Enjoy 100% free doorstep delivery plus a 14-day test ride guarantee on all e-bike models.",
        is_verified: true,
        expiry_date: "2026-12-31"
      }
    ]
  },

  // 15. DESKTRONIC (UK / EU / US - Motorized Height-Adjustable Standing Desks)
  {
    id: 615,
    name: "Desktronic",
    slug: "desktronic",
    aliases: ["desktronic-uk", "desktronic-nl", "desktronic-us", "desktronic-se", "desktronic-de"],
    logo: "/logos/desktronic.png",
    website: "https://desktronic.co.uk/?ref=promoregistry",
    affiliate_url: "https://desktronic.co.uk/?ref=promoregistry",
    country: "GLOBAL",
    description: "European leader in premium ergonomic standing desks, smart motorized height-adjustable workstations, and orthopedic office chairs designed for health and productivity.",
    coupons: [
      {
        id: "dt-deal-1",
        code: "METHEWDIPPY",
        discount: "£15 / $15 OFF",
        title: "Save £15 / $15 off sitewide on motorized standing desks & chairs",
        description: "Apply verified code METHEWDIPPY at checkout for an instant £15 or $15 discount on HomePro and Flytta desks.",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "dt-deal-2",
        code: "METHEW",
        discount: "€15 KORTING",
        title: "€15 korting op in hoogte verstelbare bureaus en ergonomische stoelen",
        description: "Pak direct €15 korting op je sta-bureau met actiecode METHEW. Geverifieerd en werkend!",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "dt-deal-3",
        code: "DESK10",
        discount: "10% OFF",
        title: "10% off accessories, monitor arms & anti-fatigue mats",
        description: "Save 10% on ergonomic accessories including heavy-duty monitor arms and anti-fatigue mats with code DESK10.",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "dt-deal-4",
        code: "WELCOME20",
        discount: "£20 / €20 OFF",
        title: "£20 / €20 welcome voucher on your first standing desk",
        description: "Enjoy £20 / €20 off your first motorized sit-stand desk purchase sitewide with code WELCOME20.",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "dt-deal-5",
        code: "",
        discount: "FREE DELIVERY",
        title: "Free tracked UK, NL & EU shipping + 5-year warranty",
        description: "Enjoy 100% free tracked delivery across the UK and Europe plus a 5-year peace-of-mind warranty on all frames & motors.",
        is_verified: true,
        expiry_date: "2026-12-31"
      }
    ]
  },

  // 16. BOUQUETS BY POST (UK - Fresh Hand-Tied Flowers & Letterbox Gifts)
  {
    id: 616,
    name: "Bouquets By Post",
    slug: "bouquets-by-post",
    aliases: ["bouquets-by-post-uk", "bouquetsbypost"],
    logo: "/logos/bouquets-by-post.png",
    website: "https://www.bouquetsbypost.co.uk/?ref=promoregistry",
    affiliate_url: "https://www.bouquetsbypost.co.uk/?ref=promoregistry",
    country: "UK",
    description: "Fresh hand-tied flower bouquets, letterbox floral gifts, and luxury celebration hampers delivered nationwide across the UK with guaranteed freshness.",
    coupons: [
      {
        id: "bbp-deal-1",
        code: "BOUQUET15",
        discount: "15% OFF",
        title: "15% off hand-tied flower bouquets sitewide",
        description: "Save 15% on fresh florist-designed bouquets, birthday blooms, and anniversary arrangements with code BOUQUET15.",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "bbp-deal-2",
        code: "LETTERBOX10",
        discount: "10% OFF",
        title: "10% off letterbox flowers & letterbox gifts",
        description: "Get 10% off letterbox flowers carefully packed in protective packaging that fits directly through the door with code LETTERBOX10.",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "bbp-deal-3",
        code: "SAVE20",
        discount: "20% OFF",
        title: "20% off luxury bouquets, scented roses & hampers",
        description: "Enjoy 20% discount on premium floral collections, British roses, and gift hampers with code SAVE20.",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "bbp-deal-4",
        code: "WELCOME10",
        discount: "10% OFF",
        title: "Extra 10% off automatically applied at checkout",
        description: "Claim an extra 10% welcome discount on your first order with verified code WELCOME10.",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "bbp-deal-5",
        code: "",
        discount: "FREE DELIVERY",
        title: "Free UK tracked delivery + free personalized greetings card",
        description: "Every floral bouquet includes 100% free tracked Royal Mail delivery across the UK plus a complimentary card.",
        is_verified: true,
        expiry_date: "2026-12-31"
      }
    ]
  },

  // 17. PARC ASTÉRIX (France / EU - Parc d'Attractions & Hôtels Gaulois)
  {
    id: 617,
    name: "Parc Astérix",
    slug: "parc-asterix",
    aliases: ["parc-asterix-fr", "parcasterix"],
    logo: "/logos/parc-asterix-fr.png",
    website: "https://www.parcasterix.fr/?ref=promoregistry",
    affiliate_url: "https://www.parcasterix.fr/?ref=promoregistry",
    country: "GLOBAL",
    description: "Le célèbre parc d'attractions gaulois offrant plus de 50 attractions sensationnelles, des spectacles vivants uniques et des séjours immersifs dans ses hôtels thématiques.",
    coupons: [
      {
        id: "pa-deal-1",
        code: "ASTERIX25",
        discount: "-25% SÉJOUR",
        title: "Jusqu'à 25% de réduction sur les séjours Hôtel + Billets de Parc",
        description: "Profitez de 25% de remise sur les séjours aux 3 hôtels du Parc Astérix (Les Quais de Lutèce, La Cité Suspendue, Les Trois Hiboux) avec accès au parc inclus.",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "pa-deal-2",
        code: "FUTE49",
        discount: "DÈS 49€",
        title: "Billet Futé dès 49€ en réservation anticipée en ligne",
        description: "Économisez sur vos billets datés en réservant au moins 7 jours à l'avance en ligne. Tarif préférentiel garanti.",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "pa-deal-3",
        code: "TRIBU10",
        discount: "-10% TRIBU",
        title: "Tarif Tribu & Famille dès 5 billets achetés simultanément",
        description: "Bénéficiez d'une réduction spéciale groupe et famille sur les entrées journée avec l'offre Billet Tribu.",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "pa-deal-4",
        code: "PASS2026",
        discount: "PASS GAULOIS",
        title: "Pass Saison Gaulois : accès illimité + parking offert toute l'année",
        description: "Accès illimité toute la saison aux attractions, nocturnes Peur sur le Parc et -10% dans les boutiques et restaurants.",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "pa-deal-5",
        code: "",
        discount: "ENTRÉE GRATUITE",
        title: "Entrée 100% gratuite pour les enfants de moins de 3 ans",
        description: "Tous les enfants de moins de 3 ans profitent d'un accès totalement gratuit à l'ensemble du parc et des spectacles.",
        is_verified: true,
        expiry_date: "2026-12-31"
      }
    ]
  },

  // 18. YOUNG ELECTRIC BIKES (US - High-Performance All-Terrain Electric Bikes)
  {
    id: 618,
    name: "Young Electric Bikes",
    slug: "young-electric-bikes",
    aliases: ["young-electric", "young-electric-us", "youngelectricbikes"],
    logo: "/logos/young-electric-bikes.png",
    website: "https://youngelectricbikes.com/?ref=promoregistry",
    affiliate_url: "https://youngelectricbikes.com/?ref=promoregistry",
    country: "US",
    description: "High-performance electric mountain bikes, fat-tire all-terrain e-bikes, and urban commuters built with powerful motors, long-range batteries, and rugged frames.",
    coupons: [
      {
        id: "yeb-deal-1",
        code: "YOUNG100",
        discount: "$100 OFF",
        title: "$100 off any adult electric bike model sitewide",
        description: "Save $100 on all-terrain fat tire, hunting, and folding e-bikes with verified code YOUNG100.",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "yeb-deal-2",
        code: "EBIKE20",
        discount: "20% OFF",
        title: "20% off sitewide on e-bikes & replacement battery packs",
        description: "Get 20% instant discount across all electric bicycles, extra batteries, and chargers with code EBIKE20.",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "yeb-deal-3",
        code: "ACCESSORY15",
        discount: "15% OFF",
        title: "15% off bike racks, waterproof panniers & headlights",
        description: "Save 15% on essential riding accessories, helmets, bike covers, and cargo racks with code ACCESSORY15.",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "yeb-deal-4",
        code: "WELCOME50",
        discount: "$50 OFF",
        title: "$50 welcome voucher on your first order",
        description: "Claim $50 instant discount on your first Young Electric bike order at checkout with code WELCOME50.",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "yeb-deal-5",
        code: "",
        discount: "FREE SHIPPING",
        title: "Free US doorstep delivery & 2-year manufacturer warranty",
        description: "Enjoy 100% free freight shipping across the United States plus a 2-year warranty and 14-day return trial.",
        is_verified: true,
        expiry_date: "2026-12-31"
      }
    ]
  },

  // 19. MAPLE PRIME (US - Luxury Designer Fragrances, Perfumes & Colognes)
  {
    id: 619,
    name: "Maple Prime",
    slug: "maple-prime",
    aliases: ["maple-prime-us", "mapleprime"],
    logo: "/logos/maple-prime.png",
    website: "https://mapleprime.com/?ref=promoregistry",
    affiliate_url: "https://mapleprime.com/?ref=promoregistry",
    country: "US",
    description: "Premier online luxury fragrance destination offering 100% authentic designer perfumes, colognes, niche scents, and premium beauty collections at discount prices.",
    coupons: [
      {
        id: "mp-deal-1",
        code: "Methew",
        discount: "10% OFF",
        title: "10% off sitewide on luxury perfumes & designer colognes",
        description: "Official Google Ads verified coupon: Enter code Methew at checkout for 10% off authentic luxury scents.",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "mp-deal-2",
        code: "FRAGRANCE15",
        discount: "15% OFF",
        title: "15% off niche fragrances and gift sets over $120",
        description: "Save 15% on best-selling designer perfume gift bundles and Eau de Parfum sprays with code FRAGRANCE15.",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "mp-deal-3",
        code: "BEAUTY10",
        discount: "10% OFF",
        title: "10% off luxury skincare, bath collections & lotions",
        description: "Enjoy 10% off luxury skincare essentials and scented bath collections with code BEAUTY10.",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "mp-deal-4",
        code: "WELCOME5",
        discount: "$5 OFF",
        title: "$5 off any fragrance purchase for new customers",
        description: "Save $5 instantly on any designer perfume or cologne order with code WELCOME5.",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "mp-deal-5",
        code: "",
        discount: "FREE SHIPPING",
        title: "Free US tracked shipping on all fragrance orders",
        description: "Enjoy 100% free tracked shipping across the United States with guaranteed tamper-proof packaging.",
        is_verified: true,
        expiry_date: "2026-12-31"
      }
    ]
  },

  // 20. EVERBLOG AI (US / Global - AI SEO Blogging & Content Marketing)
  {
    id: 620,
    name: "Everblog AI",
    slug: "everblog",
    aliases: ["everblog-ai", "everblog-us"],
    logo: "/logos/everblog.png",
    website: "https://everblog.ai/?ref=promoregistry",
    affiliate_url: "https://everblog.ai/?ref=promoregistry",
    country: "US",
    description: "Automated AI SEO blogging and content marketing platform that publishes high-ranking articles to WordPress, Webflow, and Shopify on autopilot.",
    coupons: [
      {
        id: "eb-deal-1",
        code: "EVERBLOG15",
        discount: "15% OFF",
        title: "15% off Everblog AI monthly & annual subscriptions",
        description: "Apply verified code EVERBLOG15 at checkout to save 15% on any AI blogging plan.",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "eb-deal-2",
        code: "ANNUAL50",
        discount: "50% OFF",
        title: "50% off annual plans + start 7-day free trial today",
        description: "Save 50% when choosing yearly billing on automated SEO content generation.",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "eb-deal-3",
        code: "LIFETIME30",
        discount: "30% OFF",
        title: "30% off lifetime deal & get 10,000 bonus words",
        description: "Claim 30% discount on the Everblog lifetime plan with 10,000 bonus generation credits.",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "eb-deal-4",
        code: "WELCOME10",
        discount: "10% OFF",
        title: "10% off instant discount code for new accounts",
        description: "Redeem welcome code WELCOME10 for an instant 10% reduction on your first month.",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "eb-deal-5",
        code: "",
        discount: "FREE TRIAL",
        title: "Start 7-day risk-free trial with full SEO features",
        description: "Enjoy a complete 7-day free trial with automated keyword research and article drafting.",
        is_verified: true,
        expiry_date: "2026-12-31"
      }
    ]
  },

  // 21. EVOLUTION POWER TOOLS (US / UK - Multi-Material Cutting & Saws)
  {
    id: 621,
    name: "Evolution Power Tools",
    slug: "evolution-power-tools",
    aliases: ["evolution-tools", "evolutionpowertools", "evolution-power-tools-us"],
    logo: "/logos/evolution-power-tools.png",
    website: "https://evolutionpowertools.com/?ref=promoregistry",
    affiliate_url: "https://evolutionpowertools.com/?ref=promoregistry",
    country: "US",
    description: "Industry-leading multi-material cutting technology, chop saws, magnetic drills, table saws, and tungsten carbide-tipped blades for steel, wood, and aluminum.",
    coupons: [
      {
        id: "evo-deal-1",
        code: "METHEWDIPPY5",
        discount: "5% OFF",
        title: "5% off sitewide on multi-material saws & drills",
        description: "Official verified Google Ads code: Apply METHEWDIPPY5 at checkout for 5% off power tools & blades.",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "evo-deal-2",
        code: "EVO50",
        discount: "$50 OFF",
        title: "$50 off heavy-duty magnetic drills & industrial saws",
        description: "Save $50 on heavy-duty magnetic drills and metal cutting chop saws with code EVO50.",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "evo-deal-3",
        code: "BLADE10",
        discount: "10% OFF",
        title: "10% off multi-material circular saw blades & accessories",
        description: "Get 10% off premium tungsten carbide blades, saw stands, and clamps with code BLADE10.",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "evo-deal-4",
        code: "WELCOME15",
        discount: "$15 OFF",
        title: "$15 welcome voucher on your first tool order over $150",
        description: "Save $15 on your first Evolution Power Tools order with code WELCOME15.",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "evo-deal-5",
        code: "",
        discount: "FREE SHIPPING",
        title: "Free standard shipping across the US on orders $99+",
        description: "Enjoy 100% free tracked US freight delivery on all qualifying tool purchases.",
        is_verified: true,
        expiry_date: "2026-12-31"
      }
    ]
  },

  // 22. DOUBLE OAK ESSENTIALS (US - Minimalist Wallets & EDC Accessories)
  {
    id: 622,
    name: "Double Oak Essentials",
    slug: "double-oak-essentials",
    aliases: ["doubleoakessentials", "double-oak-essentials-us"],
    logo: "/logos/double-oak-essentials.png",
    website: "https://doubleoakessentials.com/?ref=promoregistry",
    affiliate_url: "https://doubleoakessentials.com/?ref=promoregistry",
    country: "US",
    description: "Premium everyday carry (EDC) minimalist wallets, RFID-blocking aluminum cardholders, genuine leather accessories, and tactical everyday essentials.",
    coupons: [
      {
        id: "doe-deal-1",
        code: "OAK15",
        discount: "15% OFF",
        title: "15% off sitewide on minimalist wallets & EDC accessories",
        description: "Official verified code: Enter code OAK15 at checkout to save 15% on all wallets and cardholders.",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "doe-deal-2",
        code: "BUNDLE20",
        discount: "20% OFF",
        title: "20% off wallet & key organizer gift bundle sets",
        description: "Get 20% off complete everyday carry bundle sets with code BUNDLE20.",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "doe-deal-3",
        code: "RFID10",
        discount: "10% OFF",
        title: "10% off slim RFID-blocking cardholders & money clips",
        description: "Save 10% on aerospace-grade aluminum RFID-blocking wallets with code RFID10.",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "doe-deal-4",
        code: "WELCOME10",
        discount: "10% OFF",
        title: "10% off your first Double Oak Essentials purchase",
        description: "Enjoy 10% welcome savings across the entire store with code WELCOME10.",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "doe-deal-5",
        code: "",
        discount: "FREE SHIPPING",
        title: "Free tracked US shipping & lifetime warranty",
        description: "All minimalist wallets include 100% free tracked delivery and a lifetime warranty.",
        is_verified: true,
        expiry_date: "2026-12-31"
      }
    ]
  },

  // 23. OHORA (US / Global - Semi-Cured Gel Nail Strips)
  {
    id: 623,
    name: "Ohora",
    slug: "ohora",
    aliases: ["ohora-nails", "ohora-us", "ohoragelnails"],
    logo: "/logos/ohora.png",
    website: "https://ohora.com/?ref=promoregistry",
    affiliate_url: "https://ohora.com/?ref=promoregistry",
    country: "US",
    description: "Revolutionary semi-cured gel nail strips made of real liquid gel that cure under a UV lamp for salon-quality manicures and pedicures at home.",
    coupons: [
      {
        id: "oh-deal-1",
        code: "OHORA15",
        discount: "15% OFF",
        title: "15% off semi-cured gel nail strips sitewide",
        description: "Save 15% on best-selling gel manicures and pedicures with code OHORA15.",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "oh-deal-2",
        code: "FREELAMP",
        discount: "FREE UV LAMP",
        title: "Free compact gel UV lamp with your first order",
        description: "Get a free salon-grade UV LED lamp on your first gel nail set with code FREELAMP.",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "oh-deal-3",
        code: "PEDI20",
        discount: "20% OFF",
        title: "20% off pedicure gel strips & cuticle care sets",
        description: "Enjoy 20% off summer pedicure collections and nail care tools with code PEDI20.",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "oh-deal-4",
        code: "WELCOME10",
        discount: "$10 OFF",
        title: "$10 welcome voucher on orders over $50",
        description: "Claim $10 instant savings when spending $50 or more with code WELCOME10.",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "oh-deal-5",
        code: "",
        discount: "FREE SHIPPING",
        title: "Free standard shipping on all US orders $30+",
        description: "Enjoy 100% free tracked doorstep shipping across the United States on orders over $30.",
        is_verified: true,
        expiry_date: "2026-12-31"
      }
    ]
  },

  // 24. AEKE (US - Smart AI Home Gym Systems)
  {
    id: 624,
    name: "AEKE",
    slug: "aeke",
    aliases: ["aeke-fitness", "aeke-us", "aeke-k1"],
    logo: "/logos/aeke.png",
    website: "https://aeke.com/?ref=promoregistry",
    affiliate_url: "https://aeke.com/?ref=promoregistry",
    country: "US",
    description: "Futuristic AI-powered smart home gym systems featuring motorized digital weights, motion tracking, real-time coaching, and sleek all-in-one design.",
    coupons: [
      {
        id: "aeke-deal-1",
        code: "AEKE300",
        discount: "$300 OFF",
        title: "$300 off AEKE K1 smart home gym system",
        description: "Official campaign code: Save $300 on the revolutionary AEKE K1 smart gym with code AEKE300.",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "aeke-deal-2",
        code: "FIT50",
        discount: "50% OFF",
        title: "Up to 50% off fitness accessories & workout attachments",
        description: "Save up to 50% on barbell attachments, smart handles, and workout benches with code FIT50.",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "aeke-deal-3",
        code: "AEKE30",
        discount: "30% OFF",
        title: "30% off sitewide + 10% cashback on qualified orders",
        description: "Enjoy 30% discount on smart strength equipment with code AEKE30.",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "aeke-deal-4",
        code: "WELCOME100",
        discount: "$100 OFF",
        title: "$100 welcome coupon for first-time buyers",
        description: "Claim an extra $100 off your initial equipment order with code WELCOME100.",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "aeke-deal-5",
        code: "",
        discount: "FREE SHIPPING",
        title: "Free white glove home delivery & 30-day trial",
        description: "Enjoy 100% free in-home delivery and setup plus a risk-free 30-day home trial.",
        is_verified: true,
        expiry_date: "2026-12-31"
      }
    ]
  },

  // 25. CANDY IN BULK (US - Viral TikTok Swedish Candy & Confectionery)
  {
    id: 625,
    name: "Candy In Bulk",
    slug: "candy-in-bulk",
    aliases: ["candyinbulk", "swedish-candy", "swedish-candy-land"],
    logo: "/logos/candy-in-bulk.png",
    website: "https://candyinbulk.com/?ref=promoregistry",
    affiliate_url: "https://candyinbulk.com/?ref=promoregistry",
    country: "US",
    description: "Viral TikTok Swedish candy, authentic Bubs sour foam, sweet licorice, gummy mixes, and wholesale bulk confectionery delivered fresh.",
    coupons: [
      {
        id: "cib-deal-1",
        code: "SWEET15",
        discount: "15% OFF",
        title: "15% off authentic Swedish candy & Bubs mixes",
        description: "Save 15% on viral TikTok Bubs sour skulls and sweet foam mixes with code SWEET15.",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "cib-deal-2",
        code: "BULK20",
        discount: "20% OFF",
        title: "20% off bulk candy orders over 5 lbs",
        description: "Enjoy 20% savings on 5 lb wholesale bags and assorted party bundles with code BULK20.",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "cib-deal-3",
        code: "SOUR10",
        discount: "10% OFF",
        title: "10% off sour foams, fruity dummies & sweet licorice",
        description: "Get 10% off imported European specialty candies with code SOUR10.",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "cib-deal-4",
        code: "WELCOME5",
        discount: "$5 OFF",
        title: "$5 welcome voucher on your first candy box",
        description: "Save $5 instantly on any mixed confectionery box with code WELCOME5.",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "cib-deal-5",
        code: "",
        discount: "FREE SHIPPING",
        title: "Free standard delivery on orders over $50",
        description: "Enjoy 100% free tracked doorstep shipping across the United States on orders $50+.",
        is_verified: true,
        expiry_date: "2026-12-31"
      }
    ]
  },

  // 26. HEXCLAD (US / Global - Gordon Ramsay Hybrid Non-Stick Cookware)
  {
    id: 626,
    name: "HexClad",
    slug: "hexclad",
    aliases: ["hexclad-cookware", "hexclad-hybrid", "hexclad-us"],
    logo: "/logos/hexclad.svg",
    website: "https://hexclad.com/?ref=promoregistry",
    affiliate_url: "https://hexclad.com/?ref=promoregistry",
    country: "US",
    description: "Revolutionary patented hybrid non-stick cookware endorsed by Michelin-star chef Gordon Ramsay. Combines stainless steel durability with effortless non-stick performance.",
    coupons: [
      {
        id: "hex-deal-1",
        code: "HEX10",
        discount: "10% OFF",
        title: "10% off sitewide on hybrid cookware & chef knives",
        description: "Apply code HEX10 at checkout for an instant 10% discount on frying pans, pots, and Japanese steel knife sets.",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "hex-deal-2",
        code: "COOK40",
        discount: "UP TO 40% OFF",
        title: "Up to 40% off complete hybrid cookware sets",
        description: "Save up to 40% when purchasing complete 6-piece, 7-piece, and 12-piece hybrid bundle sets.",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "hex-deal-3",
        code: "RAMSAY100",
        discount: "$100 OFF",
        title: "$100 off 12-piece hybrid stainless steel set",
        description: "Save $100 instantly on the flagship 12-piece Gordon Ramsay endorsed hybrid cookware collection.",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "hex-deal-4",
        code: "WOK15",
        discount: "15% OFF",
        title: "15% off hybrid woks, roasting pans & Dutch ovens",
        description: "Get 15% discount on specialty woks, griddles, and deep roasting pans with code WOK15.",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "hex-deal-5",
        code: "",
        discount: "FREE SHIPPING",
        title: "Free US tracked shipping + lifetime warranty",
        description: "All HexClad orders include 100% free delivery across the US with a full lifetime manufacturer warranty.",
        is_verified: true,
        expiry_date: "2026-12-31"
      }
    ]
  },

  // 27. COZY EARTH (US - Oprah's Favorite Luxury Bamboo Bedding & Loungewear)
  {
    id: 627,
    name: "Cozy Earth",
    slug: "cozy-earth",
    aliases: ["cozyearth", "cozy-earth-bedding", "cozy-earth-us"],
    logo: "/logos/cozy-earth.svg",
    website: "https://cozyearth.com/?ref=promoregistry",
    affiliate_url: "https://cozyearth.com/?ref=promoregistry",
    country: "US",
    description: "Ultra-luxurious premium bamboo sheet sets, cooling duvet covers, temperature-regulating pajamas, and plush waffle bath towels voted Oprah's Favorite Things.",
    coupons: [
      {
        id: "ce-deal-1",
        code: "COZY40",
        discount: "40% OFF",
        title: "40% off sitewide bamboo sheet sets & luxury bedding",
        description: "Exclusive verified voucher: Use code COZY40 at checkout to save 40% on 100% viscose bamboo sheets and duvet sets.",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "ce-deal-2",
        code: "SLEEP25",
        discount: "25% OFF",
        title: "25% off ultra-soft bamboo pajama sets & lounge robes",
        description: "Enjoy 25% off moisture-wicking, breathable loungewear, nightshirts, and robes with code SLEEP25.",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "ce-deal-3",
        code: "BATH30",
        discount: "30% OFF",
        title: "30% off plush waffle bath sheets & towel bundles",
        description: "Save 30% on premium ribbed waffle towels and luxury spa bath mats with code BATH30.",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "ce-deal-4",
        code: "WELCOME50",
        discount: "$50 OFF",
        title: "$50 welcome credit on orders over $250",
        description: "Claim an extra $50 discount on your first luxury linen purchase with code WELCOME50.",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "ce-deal-5",
        code: "",
        discount: "FREE SHIPPING",
        title: "Free US delivery + 100-night risk-free sleep trial",
        description: "Enjoy free doorstep shipping across the United States plus an industry-leading 100-night sleep guarantee.",
        is_verified: true,
        expiry_date: "2026-12-31"
      }
    ]
  },

  // 28. LIQUID I.V. (US - Electrolyte Hydration Multipliers)
  {
    id: 628,
    name: "Liquid I.V.",
    slug: "liquid-iv",
    aliases: ["liquidiv", "liquid-iv-hydration", "liquid-iv-us"],
    logo: "/logos/liquid-iv.svg",
    website: "https://www.liquid-iv.com/?ref=promoregistry",
    affiliate_url: "https://www.liquid-iv.com/?ref=promoregistry",
    country: "US",
    description: "Great-tasting electrolyte drink mix powered by Cellular Transport Technology (CTT) designed to hydrate faster and more efficiently than water alone.",
    coupons: [
      {
        id: "liv-deal-1",
        code: "HYDRATE20",
        discount: "20% OFF",
        title: "20% off sitewide on all hydration multipliers",
        description: "Apply verified code HYDRATE20 at checkout for 20% off lemon lime, strawberry, and golden cherry packets.",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "liv-deal-2",
        code: "MULTI25",
        discount: "25% OFF",
        title: "25% off 30-pack & 60-pack bulk hydration bundles",
        description: "Save 25% on family-sized bulk packs and flavor variety bundles with code MULTI25.",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "liv-deal-3",
        code: "ENERGY15",
        discount: "15% OFF",
        title: "15% off Energy Multiplier & Sleep Multiplier mixes",
        description: "Get 15% discount on matcha energy blends and melatonin sleep aid packets with code ENERGY15.",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "liv-deal-4",
        code: "WELCOME5",
        discount: "$5 OFF",
        title: "$5 off any starter order for new customers",
        description: "Redeem welcome code WELCOME5 for $5 off your initial electrolyte drink order.",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "liv-deal-5",
        code: "",
        discount: "FREE SHIPPING",
        title: "Free standard shipping across the US on orders $35+",
        description: "Enjoy 100% free tracked delivery across the United States on all qualifying orders.",
        is_verified: true,
        expiry_date: "2026-12-31"
      }
    ]
  },

  // 29. CARAWAY HOME (US - Non-Toxic Ceramic Non-Stick Cookware)
  {
    id: 629,
    name: "Caraway",
    slug: "caraway",
    aliases: ["caraway-home", "carawayhome", "caraway-cookware"],
    logo: "/logos/caraway.svg",
    website: "https://www.carawayhome.com/?ref=promoregistry",
    affiliate_url: "https://www.carawayhome.com/?ref=promoregistry",
    country: "US",
    description: "Thoughtfully designed non-toxic ceramic non-stick cookware, bakeware, food storage, and kitchen prep sets made without PTFE, PFOA, lead, or toxic chemicals.",
    coupons: [
      {
        id: "cw-deal-1",
        code: "CARAWAY20",
        discount: "20% OFF",
        title: "20% off sitewide on non-toxic ceramic cookware",
        description: "Save 20% on ceramic frying pans, sauce pans, and Dutch ovens with code CARAWAY20.",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "cw-deal-2",
        code: "COOKSET150",
        discount: "$150 OFF",
        title: "$150 off 4-piece ceramic cookware set with organizers",
        description: "Get $150 instant savings on the full Cookware Set complete with magnetic pan racks and canvas lid holder.",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "cw-deal-3",
        code: "BAKE15",
        discount: "15% OFF",
        title: "15% off non-toxic ceramic bakeware & sheet pans",
        description: "Enjoy 15% discount on muffin tins, baking sheets, and ceramic loaf pans with code BAKE15.",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "cw-deal-4",
        code: "WELCOME10",
        discount: "10% OFF",
        title: "10% welcome coupon on your first Caraway purchase",
        description: "Enter code WELCOME10 at checkout for 10% off clean cooking essentials.",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "cw-deal-5",
        code: "",
        discount: "FREE SHIPPING",
        title: "Free US delivery on orders $90+ & 30-day return trial",
        description: "Enjoy 100% free doorstep shipping across the US with a 30-day risk-free in-home trial.",
        is_verified: true,
        expiry_date: "2026-12-31"
      }
    ]
  },

  // 30. AG1 / ATHLETIC GREENS (US / Global - Foundational Daily Nutrition)
  {
    id: 630,
    name: "Athletic Greens",
    slug: "athletic-greens",
    aliases: ["ag1", "drinkag1", "athleticgreens", "ag1-athletic-greens"],
    logo: "/logos/athletic-greens.svg",
    website: "https://drinkag1.com/?ref=promoregistry",
    affiliate_url: "https://drinkag1.com/?ref=promoregistry",
    country: "US",
    description: "Foundational daily nutrition supplement powder packing 75 vitamins, minerals, whole-food sourced superfoods, probiotics, and adaptogens into one daily scoop.",
    coupons: [
      {
        id: "ag1-deal-1",
        code: "VITAMINDK",
        discount: "FREE BUNDLE",
        title: "Free 1-year supply of Vitamin D3+K2 + 5 free travel packs",
        description: "Get a free full bottle of Vitamin D3+K2 drops and 5 individual travel packs with your first AG1 order.",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "ag1-deal-2",
        code: "WELCOMEKIT",
        discount: "FREE GIFTS",
        title: "Free premium AG1 shaker bottle & ceramic storage canister",
        description: "Welcome gift: Stainless steel shaker and airtight canister included with initial subscription.",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "ag1-deal-3",
        code: "DOUBLE20",
        discount: "$20 OFF",
        title: "$20 off double subscription monthly family bundle",
        description: "Save $20 every month on the dual-pouch AG1 household health plan with code DOUBLE20.",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "ag1-deal-4",
        code: "AG1FIRST",
        discount: "10% OFF",
        title: "10% off your first month of foundational nutrition",
        description: "Save 10% on your initial monthly delivery of AG1 with verified code AG1FIRST.",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "ag1-deal-5",
        code: "",
        discount: "FREE SHIPPING",
        title: "Free tracked delivery + 90-day money-back guarantee",
        description: "Enjoy 100% free tracked delivery plus an unconditional 90-day money-back guarantee.",
        is_verified: true,
        expiry_date: "2026-12-31"
      }
    ]
  },

  // 31. CARLINKIT (US / Global - Wireless CarPlay & Android Auto Adapters)
  {
    id: 631,
    name: "Carlinkit",
    slug: "carlinkit",
    aliases: ["carlinkitcarplay", "carlinkit-us", "carlinkit-wireless"],
    logo: "/logos/carlinkit.svg",
    website: "https://carlinkitcarplay.com/?ref=promoregistry",
    affiliate_url: "https://carlinkitcarplay.com/?ref=promoregistry",
    country: "US",
    description: "Pioneering wireless CarPlay and Android Auto adapters, multimedia AI video boxes, and plug-and-play smart automotive electronics for seamless in-car connectivity.",
    coupons: [
      {
        id: "clk-deal-1",
        code: "CARLINKIT18",
        discount: "18% OFF",
        title: "18% off sitewide on wireless CarPlay adapters",
        description: "Apply verified coupon code CARLINKIT18 at checkout to save 18% on Carlinkit 5.0 2air and TBox Plus.",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "clk-deal-2",
        code: "TBOX30",
        discount: "$30 OFF",
        title: "$30 off Carlinkit TBox Plus Android 13 AI Box",
        description: "Save $30 instantly on the full Android AI video box with standalone GPS and 4G LTE.",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "clk-deal-3",
        code: "WIRELESS20",
        discount: "20% OFF",
        title: "20% off Carlinkit 5.0 2air dual wireless adapter",
        description: "Upgrade to instant wireless Apple CarPlay and Android Auto with code WIRELESS20.",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "clk-deal-4",
        code: "WELCOME15",
        discount: "$15 OFF",
        title: "$15 welcome voucher for new customers",
        description: "Enjoy $15 instant savings on any car tech order over $70 with code WELCOME15.",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "clk-deal-5",
        code: "",
        discount: "FREE SHIPPING",
        title: "Free worldwide express delivery + 1-year warranty",
        description: "All Carlinkit devices include 100% free tracked international express delivery and a 1-year warranty.",
        is_verified: true,
        expiry_date: "2026-12-31"
      }
    ]
  },

  // 32. CARPURIDE (US / Global - Portable Wireless Car Stereo Touchscreens)
  {
    id: 632,
    name: "Carpuride",
    slug: "carpuride",
    aliases: ["carpuride-stereo", "carpuride-us"],
    logo: "/logos/carpuride.svg",
    website: "https://carpuride.com/?ref=promoregistry",
    affiliate_url: "https://carpuride.com/?ref=promoregistry",
    country: "US",
    description: "Top-rated portable wireless Apple CarPlay and Android Auto car stereos, dash cams, smart motorcycle displays, and IPS touchscreen receivers.",
    coupons: [
      {
        id: "cpr-deal-1",
        code: "CARPURIDE50",
        discount: "$50 OFF",
        title: "$50 off portable wireless CarPlay touchscreen stereos",
        description: "Apply verified coupon CARPURIDE50 at checkout for $50 off flagship W103 and W903 displays.",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "cpr-deal-2",
        code: "CAR15",
        discount: "15% OFF",
        title: "15% off sitewide on car & motorcycle smart screens",
        description: "Save 15% on all portable car audio receivers, backup cameras, and motorcycle navigation with code CAR15.",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "cpr-deal-3",
        code: "W103PRO",
        discount: "$30 OFF",
        title: "$30 off W103 Pro 10.3-inch wireless touchscreen",
        description: "Enjoy $30 instant discount on the ultra-wide W103 Pro dual Bluetooth screen with code W103PRO.",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "cpr-deal-4",
        code: "WELCOME20",
        discount: "$20 OFF",
        title: "$20 welcome coupon on your first order",
        description: "Redeem welcome code WELCOME20 for $20 off any portable navigation unit.",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "cpr-deal-5",
        code: "",
        discount: "FREE SHIPPING",
        title: "Free worldwide tracked shipping + 2-year warranty",
        description: "Enjoy 100% free tracked doorstep shipping worldwide plus a 2-year comprehensive warranty.",
        is_verified: true,
        expiry_date: "2026-12-31"
      }
    ]
  },

  // 33. ARZOPA (US / Global - Ultra-Slim Portable Laptop & Gaming Monitors)
  {
    id: 633,
    name: "Arzopa",
    slug: "arzopa",
    aliases: ["arzopa-monitor", "arzopa-us"],
    logo: "/logos/arzopa.svg",
    website: "https://arzopa.com/?ref=promoregistry",
    affiliate_url: "https://arzopa.com/?ref=promoregistry",
    country: "US",
    description: "Industry-leading ultra-slim portable monitors, 144Hz portable gaming screens, and FHD/4K IPS secondary displays for laptops, MacBooks, gaming consoles, and smartphones.",
    coupons: [
      {
        id: "arz-deal-1",
        code: "ARZOPA15",
        discount: "15% OFF",
        title: "15% off sitewide on ultra-slim portable monitors",
        description: "Apply code ARZOPA15 at checkout to save 15% on A1 Gamut, S1 Table, and Z1FC portable monitors.",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "arz-deal-2",
        code: "GAMING30",
        discount: "$30 OFF",
        title: "$30 off Z1FC 144Hz portable high-refresh gaming display",
        description: "Get $30 instant savings on 144Hz ultra-smooth portable screens for Switch, PS5, and Steam Deck with code GAMING30.",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "arz-deal-3",
        code: "A1MAX",
        discount: "$20 OFF",
        title: "$20 off A1 Max 17.3-inch big screen portable monitor",
        description: "Save $20 on the flagship 17.3-inch Full HD portable laptop display with code A1MAX.",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "arz-deal-4",
        code: "WELCOME10",
        discount: "$10 OFF",
        title: "$10 welcome voucher on your first monitor purchase",
        description: "Claim $10 instant discount on any portable second monitor with code WELCOME10.",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "arz-deal-5",
        code: "",
        discount: "FREE SHIPPING",
        title: "Free tracked US delivery + 30-day money-back guarantee",
        description: "All Arzopa monitors include free tracked shipping across the United States and a 30-day return trial.",
        is_verified: true,
        expiry_date: "2026-12-31"
      }
    ]
  },

  // 34. HOMARY (US / Global - Luxury Home Furniture, Bath & Modern Lighting)
  {
    id: 634,
    name: "Homary",
    slug: "homary",
    aliases: ["homary-furniture", "homary-us", "homary-living"],
    logo: "/logos/homary.svg",
    website: "https://homary.com/?ref=promoregistry",
    affiliate_url: "https://homary.com/?ref=promoregistry",
    country: "US",
    description: "Global online home improvement and luxury decor platform offering contemporary furniture, luxury bathroom vanities, waterfall faucets, dining sets, and modern chandelier lighting.",
    coupons: [
      {
        id: "hm-deal-1",
        code: "HOMARY10",
        discount: "10% OFF",
        title: "10% off sitewide on luxury furniture & modern home decor",
        description: "Save 10% on living room seating, coffee tables, dining sets, and chandeliers with code HOMARY10.",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "hm-deal-2",
        code: "SAVE100",
        discount: "$100 OFF",
        title: "$100 off furniture & vanity orders over $1,000",
        description: "Get $100 instant checkout savings on high-end furniture and bedroom sets with code SAVE100.",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "hm-deal-3",
        code: "BATH50",
        discount: "$50 OFF",
        title: "$50 off freestanding bathtubs & modern bathroom vanities",
        description: "Save $50 on luxury bathroom remodels, vanities, and LED mirrors with code BATH50.",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "hm-deal-4",
        code: "LIGHT12",
        discount: "12% OFF",
        title: "12% off designer chandeliers, pendants & wall sconces",
        description: "Enjoy 12% discount on contemporary ceiling light fixtures and lamps with code LIGHT12.",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "hm-deal-5",
        code: "",
        discount: "FREE SHIPPING",
        title: "Free white-glove doorstep delivery + 3-year warranty",
        description: "Enjoy 100% free tracked shipping across the United States with a 3-year product warranty.",
        is_verified: true,
        expiry_date: "2026-12-31"
      }
    ]
  },

  // 35. SMALLRIG (US / Global - Professional Camera Cages, Rigs & Accessories)
  {
    id: 635,
    name: "SmallRig",
    slug: "smallrig",
    aliases: ["smallrigs", "smallrig-us", "smallrig-de"],
    logo: "/logos/smallrig.svg",
    website: "https://smallrig.com/?ref=promoregistry",
    affiliate_url: "https://smallrig.com/?ref=promoregistry",
    country: "US",
    description: "World's leading developer of camera cages, filmmaking rigs, carbon fiber tripods, wireless follow focus systems, and studio lighting gear for creators and cinematographers.",
    coupons: [
      {
        id: "sr-deal-1",
        code: "RIG10",
        discount: "10% OFF",
        title: "10% off sitewide on camera cages, handles & mounts",
        description: "Apply code RIG10 at checkout for 10% off camera cages for Sony A7IV, FX3, Canon R5, and BMPCC.",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "sr-deal-2",
        code: "TRIPOD15",
        discount: "15% OFF",
        title: "15% off heavy-duty carbon fiber tripods & fluid heads",
        description: "Save 15% on professional video tripods, monopod kits, and ball heads with code TRIPOD15.",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "sr-deal-3",
        code: "KIT25",
        discount: "$25 OFF",
        title: "$25 off full filmmaking rig kits & matte box sets",
        description: "Get $25 instant savings on complete creator kits and vlogging rigs with code KIT25.",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "sr-deal-4",
        code: "WELCOME10",
        discount: "$10 OFF",
        title: "$10 welcome voucher on your first gear order over $70",
        description: "Claim $10 off your first camera accessory purchase with code WELCOME10.",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "sr-deal-5",
        code: "",
        discount: "FREE SHIPPING",
        title: "Free worldwide tracked shipping on orders $69+",
        description: "Enjoy 100% free tracked international delivery on all qualifying videography orders.",
        is_verified: true,
        expiry_date: "2026-12-31"
      }
    ]
  },

  // 36. JOCKO FUEL (US - Clean Sports Nutrition, MÖLK & GO Energy Drinks)
  {
    id: 636,
    name: "Jocko Fuel",
    slug: "jocko-fuel",
    aliases: ["jockofuel", "jocko-fuel-us"],
    logo: "/logos/jocko-fuel.svg",
    website: "https://store.jockofuel.com/?ref=promoregistry",
    affiliate_url: "https://store.jockofuel.com/?ref=promoregistry",
    country: "US",
    description: "Clean sports nutrition created by retired Navy SEAL Jocko Willink. Featuring sugar-free Jocko GO energy drinks, MÖLK whey protein, pre-workout, and discipline-tested supplements.",
    coupons: [
      {
        id: "jf-deal-1",
        code: "JOCKO10",
        discount: "10% OFF",
        title: "10% off sitewide on Jocko GO energy drinks & MÖLK protein",
        description: "Save 10% on clean energy cans, grass-fed protein powder, and joint supplements with code JOCKO10.",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "jf-deal-2",
        code: "MOLK15",
        discount: "15% OFF",
        title: "15% off MÖLK protein tubs & protein shake cases",
        description: "Get 15% off best-selling chocolate, vanilla, and peanut butter MÖLK protein with code MOLK15.",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "jf-deal-3",
        code: "GOENERGY",
        discount: "20% OFF",
        title: "20% off Jocko GO energy drink 12-pack cases",
        description: "Save 20% on natural, sugar-free nootropic energy drink cases with code GOENERGY.",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "jf-deal-4",
        code: "WELCOME10",
        discount: "$10 OFF",
        title: "$10 welcome discount on orders over $60",
        description: "Claim $10 instant checkout savings on your first fitness nutrition order with code WELCOME10.",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "jf-deal-5",
        code: "",
        discount: "FREE SHIPPING",
        title: "Free US standard shipping on orders $99+",
        description: "Enjoy 100% free tracked delivery across the United States on all qualifying supplement orders.",
        is_verified: true,
        expiry_date: "2026-12-31"
      }
    ]
  },

  // 37. OMTECH LASER (US - Precision CO2 Laser Cutters & Fiber Markers) [PENDING]
  {
    id: 637,
    name: "OMTech Laser",
    slug: "omtech-laser",
    aliases: ["omtech", "omtechlaser", "omtech-us"],
    logo: "/logos/omtech-laser.svg",
    website: "https://omtechlaser.com/?ref=promoregistry",
    affiliate_url: "https://omtechlaser.com/?ref=promoregistry",
    country: "US",
    description: "Leading manufacturer of precision CO2 laser engravers, fiber laser markers, and diode cutters for creators, artisans, and small business owners.",
    coupons: [
      {
        id: "omt-deal-1",
        code: "OMTECH5",
        discount: "5% OFF",
        title: "5% off sitewide on CO2 laser engravers & fiber markers",
        description: "Apply code OMTECH5 at checkout for 5% off desktop CO2 and MOPA fiber laser engraving machines.",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "omt-deal-2",
        code: "LASER100",
        discount: "$100 OFF",
        title: "$100 off K40+ and Polar desktop laser cutters",
        description: "Save $100 instantly on OMTech Polar and K40+ smart desktop laser cutters with code LASER100.",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "omt-deal-3",
        code: "TUBE50",
        discount: "$50 OFF",
        title: "$50 off replacement CO2 laser glass tubes & chillers",
        description: "Save $50 on industrial water chillers and high-output CO2 glass laser tubes with code TUBE50.",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "omt-deal-4",
        code: "WELCOME50",
        discount: "$50 OFF",
        title: "$50 welcome voucher on your first machine purchase",
        description: "Enjoy $50 welcome discount on your first laser cutting system with code WELCOME50.",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "omt-deal-5",
        code: "",
        discount: "FREE SHIPPING",
        title: "Free freight shipping across the US + 2-year warranty",
        description: "All OMTech machines include 100% free freight delivery in the contiguous US and a 2-year warranty.",
        is_verified: true,
        expiry_date: "2026-12-31"
      }
    ]
  },

  // 38. SHOPSOLAR (US - Off-Grid Solar Kits & Generators) [PENDING]
  {
    id: 638,
    name: "ShopSolar",
    slug: "shopsolar",
    aliases: ["shopsolarkits", "shop-solar", "shopsolar-us"],
    logo: "/logos/shopsolar.svg",
    website: "https://shopsolarkits.com/?ref=promoregistry",
    affiliate_url: "https://shopsolarkits.com/?ref=promoregistry",
    country: "US",
    description: "Premier complete off-grid solar power kits, expandable solar generator systems, solar panels, and lithium battery banks for cabins, RVs, and emergency backup.",
    coupons: [
      {
        id: "ssk-deal-1",
        code: "SOLAR100",
        discount: "$100 OFF",
        title: "$100 off complete off-grid solar kit bundles",
        description: "Save $100 on complete off-grid cabin and RV solar power systems with code SOLAR100.",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "ssk-deal-2",
        code: "POWER50",
        discount: "$50 OFF",
        title: "$50 off EcoFlow, Bluetti, and rich solar generators",
        description: "Get $50 instant discount on portable solar generator power stations with code POWER50.",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "ssk-deal-3",
        code: "PANEL10",
        discount: "10% OFF",
        title: "10% off rigid, flexible, and portable solar panels",
        description: "Save 10% on high-efficiency monocrystalline solar panels with code PANEL10.",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "ssk-deal-4",
        code: "WELCOME100",
        discount: "$100 OFF",
        title: "$100 welcome coupon on orders over $1,500",
        description: "Redeem welcome voucher WELCOME100 for $100 off your complete solar equipment package.",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "ssk-deal-5",
        code: "",
        discount: "FREE SHIPPING",
        title: "Free US freight shipping + lifetime customer support",
        description: "Enjoy 100% free tracked freight shipping across the US plus lifetime solar engineering support.",
        is_verified: true,
        expiry_date: "2026-12-31"
      }
    ]
  },

  // 39. INCREDIWEAR (US - Anti-Inflammatory Recovery Sleeves & Braces) [PENDING]
  {
    id: 639,
    name: "Incrediwear",
    slug: "incrediwear",
    aliases: ["incrediwear-recovery", "incrediwear-us"],
    logo: "/logos/incrediwear.svg",
    website: "https://incrediwear.com/?ref=promoregistry",
    affiliate_url: "https://incrediwear.com/?ref=promoregistry",
    country: "US",
    description: "Semiconductor-embedded anti-inflammatory recovery sleeves, braces, and socks that increase blood flow to reduce pain and accelerate healing.",
    coupons: [
      {
        id: "inc-deal-1",
        code: "INCREDI15",
        discount: "15% OFF",
        title: "15% off sitewide on knee sleeves & recovery braces",
        description: "Save 15% on patented circulation-boosting knee sleeves and back braces with code INCREDI15.",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "inc-deal-2",
        code: "HEAL20",
        discount: "20% OFF",
        title: "20% off active recovery bundles & circulation socks",
        description: "Enjoy 20% discount on complete recovery kits and compression socks with code HEAL20.",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "inc-deal-3",
        code: "SLEEVE10",
        discount: "10% OFF",
        title: "10% off therapeutic ankle, elbow, and wrist sleeves",
        description: "Get 10% off targeted joint support sleeves with code SLEEVE10.",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "inc-deal-4",
        code: "WELCOME10",
        discount: "$10 OFF",
        title: "$10 off your first wellness recovery order over $60",
        description: "Claim $10 instant checkout savings on your first order with code WELCOME10.",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "inc-deal-5",
        code: "",
        discount: "FREE SHIPPING",
        title: "Free standard shipping on all US orders $50+",
        description: "Enjoy 100% free tracked standard shipping on all US orders over $50.",
        is_verified: true,
        expiry_date: "2026-12-31"
      }
    ]
  },

  // 40. ORIGIN (US - American Made Boots, Denim & Outerwear) [PENDING]
  {
    id: 640,
    name: "Origin",
    slug: "origin-maine",
    aliases: ["origin", "originmaine", "origin-usa"],
    logo: "/logos/origin-maine.svg",
    website: "https://originmaine.com/?ref=promoregistry",
    affiliate_url: "https://originmaine.com/?ref=promoregistry",
    country: "US",
    description: "100% American-made rugged work boots, denim jeans, durable hunting outerwear, fitness gear, and BJJ gis manufactured by Jocko Willink and Pete Roberts.",
    coupons: [
      {
        id: "ori-deal-1",
        code: "ORIGIN10",
        discount: "10% OFF",
        title: "10% off sitewide on American-made boots & denim jeans",
        description: "Save 10% on handcrafted American-made leather work boots and raw denim with code ORIGIN10.",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "ori-deal-2",
        code: "BOOTS20",
        discount: "$20 OFF",
        title: "$20 off handcrafted leather heritage work & hunting boots",
        description: "Get $20 instant savings on rugged Maine-built work and field boots with code BOOTS20.",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "ori-deal-3",
        code: "JEANS15",
        discount: "15% OFF",
        title: "15% off Factory American durable denim & delta flex pants",
        description: "Enjoy 15% discount on ultra-durable American denim and delta flex pants with code JEANS15.",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "ori-deal-4",
        code: "WELCOME10",
        discount: "$10 OFF",
        title: "$10 welcome discount on orders over $80",
        description: "Save $10 on your first American-made apparel purchase with code WELCOME10.",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "ori-deal-5",
        code: "",
        discount: "FREE SHIPPING",
        title: "Free US shipping on qualifying apparel & boots",
        description: "Enjoy 100% free doorstep delivery across the United States on all qualifying orders.",
        is_verified: true,
        expiry_date: "2026-12-31"
      }
    ]
  },

  // 41. LONGER 3D (US / Global - Diode Laser Engravers & 3D Printers) [PENDING]
  {
    id: 641,
    name: "LONGER 3D",
    slug: "longer-3d",
    aliases: ["longer3d", "longer", "longer-laser"],
    logo: "/logos/longer3d.svg",
    website: "https://www.longer3d.com/?ref=promoregistry",
    affiliate_url: "https://www.longer3d.com/?ref=promoregistry",
    country: "US",
    description: "High-precision desktop diode laser engravers, UV LCD resin 3D printers, and fast FDM printers designed for makers, small workshops, and DIY creators.",
    coupons: [
      {
        id: "lng-deal-1",
        code: "LONGER30",
        discount: "$30 OFF",
        title: "$30 off RAY5 10W and 20W diode laser engravers",
        description: "Save $30 instantly on the popular Longer RAY5 laser engraving series with code LONGER30.",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "lng-deal-2",
        code: "PRINT15",
        discount: "15% OFF",
        title: "15% off Orange resin 3D printers and UV curers",
        description: "Enjoy 15% discount on high-resolution LCD resin printers with code PRINT15.",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "lng-deal-3",
        code: "LASER50",
        discount: "$50 OFF",
        title: "$50 off flagship B1 40W high-power laser cutter",
        description: "Save $50 on the ultra-powerful Longer Laser B1 40W cutter with code LASER50.",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "lng-deal-4",
        code: "WELCOME20",
        discount: "$20 OFF",
        title: "$20 welcome voucher for first-time buyers",
        description: "Claim $20 instant savings on any 3D printer or laser machine with code WELCOME20.",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "lng-deal-5",
        code: "",
        discount: "FREE SHIPPING",
        title: "Free tracked US & EU delivery + 1-year warranty",
        description: "All Longer machines include free doorstep delivery and a comprehensive 1-year warranty.",
        is_verified: true,
        expiry_date: "2026-12-31"
      }
    ]
  },

  // 42. ENGWE BIKES (US / EU - Fat Tire Electric Bikes & Foldable Commuters) [APPROVED]
  {
    id: 642,
    name: "Engwe",
    slug: "engwe",
    aliases: ["engwe-bikes", "engwe-eu", "engwe-us", "engwebikes"],
    logo: "/logos/engwe.svg",
    website: "https://engwe-bikes.com/?ref=promoregistry",
    affiliate_url: "https://engwe-bikes.com/?ref=promoregistry",
    country: "GLOBAL",
    description: "World-famous fat tire folding electric bikes, long-range all-terrain commuters, and high-torque dual motor e-bikes like Engine Pro, EP-2 Pro, and M20.",
    coupons: [
      {
        id: "eng-deal-1",
        code: "ENGWE100",
        discount: "$100 OFF",
        title: "$100 off any adult fat-tire electric bike sitewide",
        description: "Save $100 on all adult folding and fat tire electric bikes with code ENGWE100.",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "eng-deal-2",
        code: "PRO50",
        discount: "$50 OFF",
        title: "$50 off Engine Pro and EP-2 Pro folding e-bikes",
        description: "Get $50 instant savings on top-selling folding e-bike models with code PRO50.",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "eng-deal-3",
        code: "ACCESSORY20",
        discount: "20% OFF",
        title: "20% off extra lithium batteries, racks & bike bags",
        description: "Save 20% on replacement high-capacity battery packs and cargo gear with code ACCESSORY20.",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "eng-deal-4",
        code: "WELCOME50",
        discount: "$50 OFF",
        title: "$50 welcome voucher on your first e-bike order",
        description: "Claim $50 welcome discount on your initial e-bike purchase with code WELCOME50.",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "eng-deal-5",
        code: "",
        discount: "FREE SHIPPING",
        title: "Free doorstep freight delivery across US & EU",
        description: "Enjoy 100% free tracked freight shipping across the US and Europe with a 1-year warranty.",
        is_verified: true,
        expiry_date: "2026-12-31"
      }
    ]
  },

  // 43. SIHOO (US / Global - Ergonomic Mesh Office Chairs & Desks) [APPROVED]
  {
    id: 643,
    name: "Sihoo",
    slug: "sihoo",
    aliases: ["sihoo-chair", "sihoo-ergonomics", "sihoo-us"],
    logo: "/logos/sihoo.svg",
    website: "https://sihoo.com/?ref=promoregistry",
    affiliate_url: "https://sihoo.com/?ref=promoregistry",
    country: "US",
    description: "Internationally renowned ergonomic office mesh chairs, adaptive dynamic lumbar support seating, and motorized sit-stand desks (Doro C300, M18, M57).",
    coupons: [
      {
        id: "sih-deal-1",
        code: "SIHOO30",
        discount: "$30 OFF",
        title: "$30 off Doro C300 & Doro S300 flagship ergonomic chairs",
        description: "Save $30 on flagship Doro series adaptive lumbar office chairs with code SIHOO30.",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "sih-deal-2",
        code: "CHAIR15",
        discount: "15% OFF",
        title: "15% off sitewide on breathable mesh ergonomic chairs",
        description: "Enjoy 15% discount across all ergonomic home and office desk chairs with code CHAIR15.",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "sih-deal-3",
        code: "M18DEAL",
        discount: "$20 OFF",
        title: "$20 off top-selling Sihoo M18 and M57 office chairs",
        description: "Save $20 instantly on the best-selling M18 ergonomic high-back chair with code M18DEAL.",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "sih-deal-4",
        code: "WELCOME15",
        discount: "$15 OFF",
        title: "$15 welcome coupon for first-time buyers",
        description: "Claim $15 off your first ergonomic workspace purchase with code WELCOME15.",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "sih-deal-5",
        code: "",
        discount: "FREE SHIPPING",
        title: "Free US tracked shipping + 3-year warranty",
        description: "Enjoy 100% free tracked doorstep shipping across the US plus an official 3-year warranty.",
        is_verified: true,
        expiry_date: "2026-12-31"
      }
    ]
  },

  // 44. SYNTECH (US - VR Head Straps & Handheld Gaming Docks) [APPROVED]
  {
    id: 644,
    name: "Syntech",
    slug: "syntech",
    aliases: ["syntechhome", "syntech-vr", "syntech-us"],
    logo: "/logos/syntech.svg",
    website: "https://syntechhome.com/?ref=promoregistry",
    affiliate_url: "https://syntechhome.com/?ref=promoregistry",
    country: "US",
    description: "Ergonomic VR head straps, high-speed PC VR link cables, 6-in-1 Steam Deck docking stations, and charging docks for Meta Quest 3, Quest 2, and gaming handhelds.",
    coupons: [
      {
        id: "syn-deal-1",
        code: "SYNTECH15",
        discount: "15% OFF",
        title: "15% off sitewide on Meta Quest 3 head straps & docks",
        description: "Save 15% on Quest 3 comfort head straps with battery and charging docks with code SYNTECH15.",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "syn-deal-2",
        code: "DECK20",
        discount: "20% OFF",
        title: "20% off 6-in-1 Steam Deck & ROG Ally docking stations",
        description: "Get 20% instant discount on 4K 60Hz HDMI docking stations with code DECK20.",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "syn-deal-3",
        code: "CABLE10",
        discount: "10% OFF",
        title: "10% off high-speed 16ft PC VR link cables",
        description: "Save 10% on 16ft USB-C high-speed link cables for Meta Quest with code CABLE10.",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "syn-deal-4",
        code: "WELCOME5",
        discount: "$5 OFF",
        title: "$5 off any gaming or VR accessory order",
        description: "Claim $5 instant checkout discount on any VR accessory with code WELCOME5.",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "syn-deal-5",
        code: "",
        discount: "FREE SHIPPING",
        title: "Free US standard delivery on orders over $35",
        description: "Enjoy free tracked delivery across the United States on all orders $35+.",
        is_verified: true,
        expiry_date: "2026-12-31"
      }
    ]
  },

  // 45. TELESIN (US / Global - Action Camera Accessories & Mounts) [APPROVED]
  {
    id: 645,
    name: "TELESIN",
    slug: "telesin",
    aliases: ["telesinstore", "telesin-action", "telesin-us"],
    logo: "/logos/telesin.svg",
    website: "https://www.telesinstore.com/?ref=promoregistry",
    affiliate_url: "https://www.telesinstore.com/?ref=promoregistry",
    country: "US",
    description: "Top-rated action camera accessories, magnetic chest mounts, waterproof dive cases, ND filters, and triple fast-battery chargers for GoPro Hero, DJI Osmo, and Insta360.",
    coupons: [
      {
        id: "tel-deal-1",
        code: "TELESIN12",
        discount: "12% OFF",
        title: "12% off sitewide on action camera mounts & batteries",
        description: "Save 12% on magnetic mounts, triple charger boxes, and selfie sticks with code TELESIN12.",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "tel-deal-2",
        code: "GOPRO20",
        discount: "20% OFF",
        title: "20% off GoPro Hero 12 & Hero 13 battery and charger kits",
        description: "Get 20% discount on high-capacity cold-weather battery packs with code GOPRO20.",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "tel-deal-3",
        code: "MOUNT15",
        discount: "15% OFF",
        title: "15% off magnetic neck mounts, tripods & suction cups",
        description: "Save 15% on quick-release POV magnetic neck mounts with code MOUNT15.",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "tel-deal-4",
        code: "WELCOME10",
        discount: "$10 OFF",
        title: "$10 welcome coupon on orders over $50",
        description: "Claim $10 instant checkout savings on your first gear order with code WELCOME10.",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "tel-deal-5",
        code: "",
        discount: "FREE SHIPPING",
        title: "Free worldwide tracked delivery on orders $49+",
        description: "Enjoy 100% free tracked international delivery on all qualifying action camera orders.",
        is_verified: true,
        expiry_date: "2026-12-31"
      }
    ]
  },

  // 46. CARLUEX (US / Global - Wireless CarPlay AI Video Boxes) [APPROVED]
  {
    id: 646,
    name: "CARLUEX",
    slug: "carluex",
    aliases: ["carluex-store", "carluex-carplay", "carluex-us"],
    logo: "/logos/carluex.svg",
    website: "https://www.carluex.store/?ref=promoregistry",
    affiliate_url: "https://www.carluex.store/?ref=promoregistry",
    country: "US",
    description: "High-performance multimedia Android AI video boxes and streaming adapters that turn factory wired Apple CarPlay into full wireless Android 13 with Netflix & YouTube.",
    coupons: [
      {
        id: "clx-deal-1",
        code: "CARLUEX50",
        discount: "$50 OFF",
        title: "$50 off CARLUEX Pro & BMW iDrive AI video boxes",
        description: "Save $50 on flagship 8GB RAM 128GB ROM wireless multimedia boxes with code CARLUEX50.",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "clx-deal-2",
        code: "STREAM20",
        discount: "20% OFF",
        title: "20% off wireless multimedia streaming adapters",
        description: "Get 20% discount on plug-and-play in-car video streaming sticks with code STREAM20.",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "clx-deal-3",
        code: "CARLUEX15",
        discount: "15% OFF",
        title: "15% off sitewide on smart car adapters",
        description: "Enjoy 15% savings across all wireless CarPlay dongles with code CARLUEX15.",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "clx-deal-4",
        code: "WELCOME25",
        discount: "$25 OFF",
        title: "$25 welcome credit on your first order",
        description: "Redeem welcome voucher WELCOME25 for $25 off your initial CARLUEX system.",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "clx-deal-5",
        code: "",
        discount: "FREE SHIPPING",
        title: "Free worldwide express shipping & 1-year warranty",
        description: "All CARLUEX devices include free tracked express delivery and a 1-year product warranty.",
        is_verified: true,
        expiry_date: "2026-12-31"
      }
    ]
  },

  // 47. ANDASEAT (US / Global - Premium Ergonomic Gaming & Esports Chairs) [APPROVED]
  {
    id: 647,
    name: "AndaSeat",
    slug: "andaseat",
    aliases: ["andaseat-gaming", "andaseat-chairs", "andaseat-us"],
    logo: "/logos/andaseat.svg",
    website: "https://www.andaseat.com/?ref=promoregistry",
    affiliate_url: "https://www.andaseat.com/?ref=promoregistry",
    country: "US",
    description: "Ergonomic esports gaming chairs and executive desk chairs crafted from PVC leather, linen fabric, memory foam pillows, and 4D armrests (Kaiser 3, Phantom 3).",
    coupons: [
      {
        id: "and-deal-1",
        code: "ANDA50",
        discount: "$50 OFF",
        title: "$50 off Kaiser 3 premium ergonomic gaming chairs",
        description: "Save $50 on Kaiser 3 magnetic lumbar ergonomic gaming chairs with code ANDA50.",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "and-deal-2",
        code: "SEAT15",
        discount: "15% OFF",
        title: "15% off sitewide on all esports chairs & desk mats",
        description: "Enjoy 15% discount across all professional gaming seats with code SEAT15.",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "and-deal-3",
        code: "PHANTOM30",
        discount: "$30 OFF",
        title: "$30 off Phantom 3 fabric and leather gaming chairs",
        description: "Get $30 instant savings on Phantom 3 breathable fabric chairs with code PHANTOM30.",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "and-deal-4",
        code: "WELCOME20",
        discount: "$20 OFF",
        title: "$20 welcome voucher for new members",
        description: "Claim $20 off your first ergonomic gaming setup with code WELCOME20.",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "and-deal-5",
        code: "",
        discount: "FREE SHIPPING",
        title: "Free US & EU doorstep shipping + lifetime frame warranty",
        description: "Enjoy 100% free tracked doorstep shipping across the US and Europe plus a lifetime steel frame warranty.",
        is_verified: true,
        expiry_date: "2026-12-31"
      }
    ]
  },

  // 48. RINGCONN (US / Global - Subscription-Free Smart Health Rings) [APPROVED]
  {
    id: 648,
    name: "RingConn",
    slug: "ringconn",
    aliases: ["ringconn-smart-ring", "ringconn-us"],
    logo: "/logos/ringconn.svg",
    website: "https://ringconn.com/?ref=promoregistry",
    affiliate_url: "https://ringconn.com/?ref=promoregistry",
    country: "US",
    description: "Subscription-free smart health ring with 7-day battery life, titanium durability, sleep tracking, continuous heart rate, blood oxygen, and stress monitoring.",
    coupons: [
      {
        id: "rng-deal-1",
        code: "RINGCONN30",
        discount: "$30 OFF",
        title: "$30 off RingConn Gen 2 smart health rings",
        description: "Save $30 instantly on RingConn Gen 2 ultralight titanium smart rings with code RINGCONN30.",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "rng-deal-2",
        code: "HEALTH10",
        discount: "10% OFF",
        title: "10% off titanium rings and portable charging cases",
        description: "Enjoy 10% discount on rings and charging docks with code HEALTH10.",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "rng-deal-3",
        code: "SLEEP20",
        discount: "$20 OFF",
        title: "$20 off smart sleep tracking starter bundles",
        description: "Get $20 instant savings on comprehensive sleep tracking sets with code SLEEP20.",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "rng-deal-4",
        code: "WELCOME15",
        discount: "$15 OFF",
        title: "$15 welcome coupon on your first order",
        description: "Claim $15 off your initial smart ring purchase with code WELCOME15.",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "rng-deal-5",
        code: "",
        discount: "FREE SHIPPING",
        title: "Free worldwide tracked shipping + sizing kit included",
        description: "Every RingConn order includes free tracked global shipping and a free precision sizing kit.",
        is_verified: true,
        expiry_date: "2026-12-31"
      }
    ]
  },

  // 49. DRAGONHAWK (US / Global - Professional Rotary Tattoo Machines & Pens) [APPROVED]
  {
    id: 649,
    name: "Dragonhawk",
    slug: "dragonhawk",
    aliases: ["dragonhawktattoos", "dragonhawk-us", "dragonhawk-eu"],
    logo: "/logos/dragonhawk.svg",
    website: "https://www.dragonhawktattoos.com/?ref=promoregistry",
    affiliate_url: "https://www.dragonhawktattoos.com/?ref=promoregistry",
    country: "US",
    description: "Worldwide favorite professional rotary tattoo machines, wireless battery tattoo pens (Mast Flip, Fold Pro), sterile cartridge needles, and tattoo power supplies.",
    coupons: [
      {
        id: "dh-deal-1",
        code: "MAST15",
        discount: "15% OFF",
        title: "15% off Mast rotary tattoo pens & wireless machines",
        description: "Save 15% on Mast Tour, Mast Flip, and Fold Pro wireless battery pens with code MAST15.",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "dh-deal-2",
        code: "TATTOO20",
        discount: "20% OFF",
        title: "20% off complete starter tattoo kits with power supplies",
        description: "Get 20% discount on complete professional tattoo kits with code TATTOO20.",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "dh-deal-3",
        code: "NEEDLE10",
        discount: "10% OFF",
        title: "10% off sterile cartridge needles and grips",
        description: "Save 10% on WJX and Mast Pro sterile cartridge needles with code NEEDLE10.",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "dh-deal-4",
        code: "WELCOME10",
        discount: "$10 OFF",
        title: "$10 welcome discount on orders over $70",
        description: "Claim $10 instant savings on your first tattoo supplies order with code WELCOME10.",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "dh-deal-5",
        code: "",
        discount: "FREE SHIPPING",
        title: "Free standard shipping on orders $59+",
        description: "Enjoy 100% free tracked standard shipping on all orders over $59.",
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
