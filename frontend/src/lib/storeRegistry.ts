import { Store, Coupon } from "../components/CouponCard";
import { getLogoUrl } from "./fallbackData";

export interface RegistryCoupon {
  id: string;
  code: string; // empty string for direct auto-applied deals
  discount: string;
  title: string;
  description: string;
  is_verified: boolean;
  is_auto_applied?: boolean;
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
        {
        id: "waterdrop-deal-2",
        code: "WD15",
        is_auto_applied: false,
        discount: "15% OFF",
        title: "15% off discount code on eligible RO filtration systems",
        description: "Use coupon code WD15 for an exclusive 15% discount on select under-sink filtration systems and filter bundles.",
        affiliate_url: "https://www.waterdropfilter.com/?ref=aynlalsd&utm_medium=affiliate&utm_source=goaffpro",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "waterdrop-deal-3",
        code: "SAVE70",
        is_auto_applied: false,
        discount: "$70 OFF",
        title: "$70 off flagship reverse osmosis systems (G3P800, X12)",
        description: "Save $70 on premium tankless reverse osmosis water purifiers using verified coupon code SAVE70.",
        affiliate_url: "https://www.waterdropfilter.com/?ref=aynlalsd&utm_medium=affiliate&utm_source=goaffpro",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "waterdrop-deal-4",
        code: "FREESHIP",
        is_auto_applied: true,
        discount: "FREE SHIPPING",
        title: "Free tracked US shipping on all orders",
        description: "Free standard ground delivery across the United States. Automatically applied at checkout.",
        affiliate_url: "https://www.waterdropfilter.com/?ref=aynlalsd&utm_medium=affiliate&utm_source=goaffpro",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "waterdrop-deal-5",
        code: "HERO15",
        is_auto_applied: false,
        discount: "15% OFF",
        title: "15% off community hero discount (Military, Healthcare & Students)",
        description: "Special 15% discount verified via VerifyPass for active military, medical professionals, first responders, and students.",
        affiliate_url: "https://www.waterdropfilter.com/?ref=aynlalsd&utm_medium=affiliate&utm_source=goaffpro",
        is_verified: true,
        expiry_date: "2026-12-31"
      }
    ]
  },
  // SILVER CROSS (British Luxury Strollers & Nursery Gear)
  {
    id: 41543958,
    name: "Archers Sleepcentre",
    slug: "archers-sleepcentre",
    aliases: [
      "archerssleepcentre",
      "archers-sleep-centre",
      "archers-sleepcentre-uk",
      "archers-beds"
    ],
    website: "https://app.linkscircle.com/track?linkmid=41543958&linkaffid=96610225",
    affiliate_url: "https://app.linkscircle.com/track?linkmid=41543958&linkaffid=96610225",
    logo: "/logos/archers-sleepcentre.png",
    country: "UK",
    description: "Archers Sleepcentre is one of the UK's leading independent bed, mattress, and bedroom furniture specialists offering luxury sleep brands at direct prices.",
    coupons: [
      {
        id: "archers-pr-save5",
        code: "SAVE5",
        is_auto_applied: false,
        discount: "10% OFF",
        title: "10% Off Sitewide with Archers Sleepcentre Discount Code",
        description: "Enter verified discount code SAVE5 in your basket to enjoy 10% off sitewide on beds, mattresses, and bedroom furniture.",
        is_verified: true,
        expiry_date: "2026-12-31",
        affiliate_url: "https://app.linkscircle.com/track?linkmid=41543958&linkaffid=96610225"
      },
      {
        id: "archers-pr-1",
        code: "",
        is_auto_applied: true,
        discount: "UP TO 50% OFF",
        title: "Seasonal Bed & Mattress Sale — Save Up to 50%",
        description: "Save up to 50% on luxury pocket sprung mattresses, divan beds, ottoman storage beds, and bedroom furniture. Applied automatically — no code required.",
        is_verified: true,
        expiry_date: "2026-12-31",
        affiliate_url: "https://app.linkscircle.com/track?linkmid=41543958&linkaffid=96610225"
      },
      {
        id: "archers-pr-2",
        code: "",
        is_auto_applied: true,
        discount: "NEXT DAY",
        title: "Free & Next Day UK Delivery on Selected Beds & Mattresses",
        description: "Enjoy fast next-day UK delivery options on in-stock mattresses, bed frames, and bedroom furniture sets.",
        is_verified: true,
        expiry_date: "2026-12-31",
        affiliate_url: "https://app.linkscircle.com/track?linkmid=41543958&linkaffid=96610225"
      },
      {
        id: "archers-pr-3",
        code: "",
        is_auto_applied: true,
        discount: "CLEARANCE",
        title: "Huge Discounts in the Archers Sleepcentre Outlet & Clearance",
        description: "Shop end-of-line luxury bed frames, headboards, and brand-name mattresses at heavily reduced clearance prices.",
        is_verified: true,
        expiry_date: "2026-12-31",
        affiliate_url: "https://app.linkscircle.com/track?linkmid=41543958&linkaffid=96610225"
      },
      {
        id: "archers-pr-4",
        code: "",
        is_auto_applied: true,
        discount: "0% FINANCE",
        title: "Interest-Free Finance Available on Eligible Bed & Mattress Orders",
        description: "Spread the cost of your new bed or luxury mattress with flexible 0% APR finance options at checkout.",
        is_verified: true,
        expiry_date: "2026-12-31",
        affiliate_url: "https://app.linkscircle.com/track?linkmid=41543958&linkaffid=96610225"
      }
    ]
  },
  {
    id: 76720045,
    name: "Vessi",
    slug: "vessi",
    aliases: [
      "vessi-shoes",
      "vessishoes",
      "vessi-footwear",
      "vessi-us",
      "vessi-waterproof"
    ],
    website: "https://app.linkscircle.com/track?linkmid=76720045&linkaffid=96610225",
    affiliate_url: "https://app.linkscircle.com/track?linkmid=76720045&linkaffid=96610225",
    logo: "/logos/vessi.png",
    country: "US",
    description: "Official Vessi verified deals portal. Discover 100% waterproof knit sneakers, lightweight city shoes, stormproof boots, and travel slip-ons built for all-weather comfort.",
    coupons: [
      {
        id: "vessi-pr-1",
        code: "",
        is_auto_applied: true,
        discount: "UP TO 30% OFF",
        title: "Save Up to 30% on 100% Waterproof Sneakers & Boots",
        description: "Activate instant seasonal savings of up to 30% on Everyday Classic, Weekend, Storm Burst, and Soho waterproof footwear. Applied automatically — no code needed.",
        is_verified: true,
        expiry_date: "2026-12-31",
        affiliate_url: "https://app.linkscircle.com/track?linkmid=76720045&linkaffid=96610225"
      },
      {
        id: "vessi-pr-2",
        code: "",
        is_auto_applied: true,
        discount: "$20 OFF",
        title: "$20 Off Orders Over $100 Direct Store Deal",
        description: "Get an instant $20 discount on qualifying waterproof shoe orders over $100. No coupon code required.",
        is_verified: true,
        expiry_date: "2026-12-31",
        affiliate_url: "https://app.linkscircle.com/track?linkmid=76720045&linkaffid=96610225"
      },
      {
        id: "vessi-pr-3",
        code: "",
        is_auto_applied: true,
        discount: "20% OFF",
        title: "20% Off Student, Teacher & Healthcare Discount",
        description: "Verified 20% off savings for students, educators, and healthcare professionals via official verification.",
        is_verified: true,
        expiry_date: "2026-12-31",
        affiliate_url: "https://app.linkscircle.com/track?linkmid=76720045&linkaffid=96610225"
      },
      {
        id: "vessi-pr-4",
        code: "",
        is_auto_applied: true,
        discount: "FREE SHIPPING",
        title: "Free US Shipping on All Orders Over $80",
        description: "Automatic free standard US shipping on all waterproof sneaker, boot, and accessory orders over $80.",
        is_verified: true,
        expiry_date: "2026-12-31",
        affiliate_url: "https://app.linkscircle.com/track?linkmid=76720045&linkaffid=96610225"
      }
    ]
  },
  {
    id: 91515237,
    name: "Silver Cross",
    slug: "silvercross",
    aliases: [
      "silver-cross",
      "silvercrossus",
      "silver-cross-us",
      "silvercross-us",
      "silvercross-baby"
    ],
    website: "https://app.linkscircle.com/track?linkmid=91515237&linkaffid=96610225",
    affiliate_url: "https://app.linkscircle.com/track?linkmid=91515237&linkaffid=96610225",
    logo: "/logos/silvercross.png",
    country: "US",
    description: "Silver Cross is the iconic British luxury nursery brand producing award-winning strollers, prams, car seats, and baby gear since 1877.",
    coupons: [
      {
    id: 99450,
    name: "Waterdrop",
    slug: "waterdrop",
    aliases: ["waterdropfilter", "waterdrop-filter", "waterdrop-filters", "waterdropfilters", "waterdrop-ro", "waterdrop-us", "waterdrop-coupon", "waterdrop-discount", "waterdrop-promo"],
    logo: "/logos/waterdrop.png",
    website: "https://www.waterdropfilter.com/?ref=aynlalsd&utm_medium=affiliate&utm_source=goaffpro",
    affiliate_url: "https://www.waterdropfilter.com/?ref=aynlalsd&utm_medium=affiliate&utm_source=goaffpro",
    country: "US",
    description: "Official Waterdrop verified coupon & discount portal. Shop NSF-certified tankless reverse osmosis systems (G3P800, G2, X12), instant hot water dispensers, and direct replacement water filters with exclusive savings.",
    coupons: [
      {
        id: "waterdrop-deal-1",
        code: "WD10",
        discount: "10% OFF",
        title: "10% Off Verified Promo Code Sitewide",
        description: "Apply verified promo code WD10 at checkout to save 10% on all Waterdrop reverse osmosis water filter systems and replacements.",
        affiliate_url: "https://www.waterdropfilter.com/?ref=aynlalsd&utm_medium=affiliate&utm_source=goaffpro",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "waterdrop-deal-2",
        code: "WD15",
        discount: "15% OFF",
        title: "15% Off Sitewide Verified Discount Code",
        description: "Use coupon code WD15 for an exclusive 15% discount on select under-sink filtration systems and filter bundles.",
        affiliate_url: "https://www.waterdropfilter.com/?ref=aynlalsd&utm_medium=affiliate&utm_source=goaffpro",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "waterdrop-deal-3",
        code: "SAVE70",
        discount: "$70 OFF",
        title: "$70 Off Flagship Reverse Osmosis Systems (G3P800, X12)",
        description: "Save $70 on premium tankless reverse osmosis water purifiers using verified coupon code SAVE70.",
        affiliate_url: "https://www.waterdropfilter.com/?ref=aynlalsd&utm_medium=affiliate&utm_source=goaffpro",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "waterdrop-deal-4",
        code: "FREESHIP",
        discount: "FREE SHIPPING",
        title: "Free Fast Tracked US Shipping Sitewide",
        description: "Free standard ground delivery across the United States. Automatically applied at checkout.",
        affiliate_url: "https://www.waterdropfilter.com/?ref=aynlalsd&utm_medium=affiliate&utm_source=goaffpro",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "waterdrop-deal-5",
        code: "HERO15",
        discount: "15% OFF",
        title: "15% Off Community Heroes (Military, Healthcare & Students)",
        description: "Special 15% discount verified via VerifyPass for active military, medical professionals, first responders, and students.",
        affiliate_url: "https://www.waterdropfilter.com/?ref=aynlalsd&utm_medium=affiliate&utm_source=goaffpro",
        is_verified: true,
        expiry_date: "2026-12-31"
      }
    ]
  }
      {
        id: "the-berkey-deal-2",
        code: "10OFFBERKEY",
        is_auto_applied: true,
        discount: "10% OFF",
        title: "10% off discount code on Black Berkey replacement elements",
        description: "Save 10% on genuine Black Berkey replacement filters and fluoride elements using promo code 10OFFBERKEY.",
        affiliate_url: "https://theberkey.com/?rfsn=9428965.01bcd90",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "the-berkey-deal-3",
        code: "",
        is_auto_applied: true,
        discount: "BUNDLE SALE",
        title: "Big Berkey and Royal Berkey stainless steel bundle deals",
        description: "Save on complete stainless steel gravity water filter systems. Applied automatically at checkout.",
        affiliate_url: "https://theberkey.com/?rfsn=9428965.01bcd90",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "the-berkey-deal-4",
        code: "",
        is_auto_applied: true,
        discount: "FREE SHIPPING",
        title: "Free tracked US shipping on qualifying system orders",
        description: "Enjoy zero shipping costs automatically calculated on eligible Berkey water purification system orders.",
        affiliate_url: "https://theberkey.com/?rfsn=9428965.01bcd90",
        is_verified: true,
        expiry_date: "2026-12-31"
      }
    ]
  },
{
    id: 732,
    name: "USA Berkey Filters",
    slug: "usa-berkey-filters",
    aliases: ["usa-berkey-filters-us", "berkey-filters", "berkey"],
    website: "https://www.usaberkeyfilters.com/aff/271/",
    affiliate_url: "https://www.usaberkeyfilters.com/aff/271/",
    logo: "/logos/usa-berkey-filters.png",
    country: "US",
    description: "World-leader in gravity-fed water purification systems, authentic Black Berkey replacement filters, stainless steel systems, and fluoride reduction elements.",
    coupons: [
      {
        id: "berkey-deal-271-1",
        code: "USA20",
        is_auto_applied: true,
        discount: "20% OFF",
        title: "20% off exclusive coupon code sitewide",
        description: "Apply verified promo code USA20 at checkout to save 20% on authentic Berkey water filtration systems and bundles.",
        affiliate_url: "https://www.usaberkeyfilters.com/aff/271/",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "berkey-deal-271-2",
        code: "USA20",
        is_auto_applied: true,
        discount: "20% OFF",
        title: "20% off discount code on Black Berkey replacement elements",
        description: "Save 20% on genuine Black Berkey replacement filters and fluoride elements using promo code USA20.",
        affiliate_url: "https://www.usaberkeyfilters.com/aff/271/",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "berkey-deal-271-3",
        code: "",
        is_auto_applied: true,
        discount: "UP TO 35%",
        title: "Up to 35% off weekly flash sales on Big Berkey systems",
        description: "Save up to 35% on complete stainless steel gravity water filter systems. Applied automatically in cart.",
        affiliate_url: "https://www.usaberkeyfilters.com/aff/271/",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "berkey-deal-271-4",
        code: "",
        is_auto_applied: true,
        discount: "FREE SHIPPING",
        title: "Free tracked US shipping on all system orders",
        description: "Enjoy zero shipping costs automatically calculated on all Berkey water purification system orders.",
        affiliate_url: "https://www.usaberkeyfilters.com/aff/271/",
        is_verified: true,
        expiry_date: "2026-12-31"
      }
    ]
  },
  {
    id: 733,
    name: "USA Berkey Water Systems",
    slug: "usaberkeyfilters",
    aliases: ["usaberkeyfilters-us", "usa-berkey", "usaberkey", "usa-berkey-us"],
    website: "https://www.usaberkeyfilters.com/aff/282/",
    affiliate_url: "https://www.usaberkeyfilters.com/aff/282/",
    logo: "/logos/usa-berkey-filters.png",
    country: "US",
    description: "Authorized provider of gravity-fed water purification systems, genuine Black Berkey replacement filters, and water filtration accessories.",
    coupons: [
      {
        id: "berkey-deal-282-1",
        code: "USA20",
        is_auto_applied: true,
        discount: "20% OFF",
        title: "20% off exclusive coupon code sitewide",
        description: "Apply verified promo code USA20 at checkout to save 20% on authentic Berkey water filtration systems and bundles.",
        affiliate_url: "https://www.usaberkeyfilters.com/aff/282/",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "berkey-deal-282-2",
        code: "USA20",
        is_auto_applied: true,
        discount: "20% OFF",
        title: "20% off discount code on Black Berkey replacement elements",
        description: "Save 20% on genuine Black Berkey replacement filters and fluoride elements using promo code USA20.",
        affiliate_url: "https://www.usaberkeyfilters.com/aff/282/",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "berkey-deal-282-3",
        code: "",
        is_auto_applied: true,
        discount: "UP TO 35%",
        title: "Up to 35% off weekly flash sales on Big Berkey systems",
        description: "Save up to 35% on complete stainless steel gravity water filter systems. Applied automatically in cart.",
        affiliate_url: "https://www.usaberkeyfilters.com/aff/282/",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "berkey-deal-282-4",
        code: "",
        is_auto_applied: true,
        discount: "FREE SHIPPING",
        title: "Free tracked US shipping on all system orders",
        description: "Enjoy zero shipping costs automatically calculated on all Berkey water purification system orders.",
        affiliate_url: "https://www.usaberkeyfilters.com/aff/282/",
        is_verified: true,
        expiry_date: "2026-12-31"
      }
    ]
  },

  // 21. DAKVOORDEELSHOP (Netherlands EPDM Roofing Expert - MRGE 4.9% CPA)
  {
    id: 801,
    name: "Dakvoordeelshop",
    slug: "dakvoordeelshop",
    aliases: ["dakvoordeelshop-nl", "dakvoordeel"],
    website: "https://www.dakvoordeelshop.nl/",
    affiliate_url: "https://connectadtrack.com/?s=cpa&u=4scw8ip03bvjtb1113tujbn362i4gnjwwbtf6e27fhe0piecupu&url=https%3A%2F%2Fwww.dakvoordeelshop.nl%2F",
    logo: "/logos/dakvoordeelshop.png",
    country: "GLOBAL",
    description: "Dé specialist in complete EPDM dakbedekking pakketten, PIR isolatieplaten, aluminium daktrimmen en hemelwaterafvoer in Nederland.",
    coupons: [
      {
        id: "dak-deal-1",
        code: "MARKTPLAATS",
        is_auto_applied: false,
        discount: "5% KORTING",
        title: "5% kortingscode op gehele bestelling bij Dakvoordeelshop",
        description: "Gebruik actiecode MARKTPLAATS in het winkelmandje voor 5% directe korting op EPDM dakbedekking en accessoires.",
        affiliate_url: "https://www.dakvoordeelshop.nl/",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "dak-deal-2",
        code: "WEEKENDVOORDEEL5",
        is_auto_applied: false,
        discount: "5% KORTING",
        title: "5% weekend actiecode op dakisolatie en EPDM folie",
        description: "Ontvang 5% extra voordeel op hoogwaardige PIR isolatieplaten en daktrimmen met actiecode WEEKENDVOORDEEL5.",
        affiliate_url: "https://www.dakvoordeelshop.nl/",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "dak-deal-3",
        code: "WELKOM5",
        is_auto_applied: false,
        discount: "5% WELKOMSTKORTING",
        title: "5% welkomstkorting voor nieuwe klanten bij Dakvoordeelshop",
        description: "Direct 5% korting op je eerste bestelling EPDM pakketten en PIR dakisolatie met actiecode WELKOM5.",
        affiliate_url: "https://www.dakvoordeelshop.nl/",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "dak-deal-4",
        code: "",
        is_auto_applied: true,
        discount: "GRATIS BEZORGD",
        title: "Gratis verzending in Nederland en België vanaf €250",
        description: "Plaats een bestelling vanaf €250 en ontvang gratis levering van EPDM rollen en zware isolatieplaten.",
        affiliate_url: "https://www.dakvoordeelshop.nl/",
        is_verified: true,
        expiry_date: "2026-12-31"
      }
    ]
  },

  // 22. INTO-LED (Netherlands & Europe LED Lighting Expert - MRGE 9% CPA)
  {
    id: 802,
    name: "Into-LED",
    slug: "into-led",
    aliases: ["intoled", "into-led-nl", "intoled-nl"],
    website: "https://www.into-led.com/nl",
    affiliate_url: "https://connectadtrack.com/?s=cpa&u=4scw8ip03bvjtb1113tujbn362i4gnjwwbtf6e27fhe0piecupu&url=https%3A%2F%2Fwww.into-led.com%2Fnl",
    logo: "/logos/into-led.png",
    country: "GLOBAL",
    description: "Dé grootste online specialist in energiezuinige LED verlichting, smart verlichting, industriële LED panelen en buitenverlichting.",
    coupons: [
      {
        id: "intoled-deal-1",
        code: "",
        is_auto_applied: true,
        discount: "TOT 60% KORTING",
        title: "Tot 60% korting op LED binnen- en buitenverlichting in de sale",
        description: "Profiteer van directe seizoensafprijzingen op WiFi lampen, inbouwspots en waterdichte tuinverlichting. Geen code nodig, korting wordt automatisch verrekend in de winkelwagen.",
        affiliate_url: "https://www.into-led.com/nl",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "intoled-deal-2",
        code: "",
        is_auto_applied: true,
        discount: "GRATIS VERZENDING",
        title: "Gratis verzending binnen Nederland en België vanaf €50",
        description: "Bestel voor minstens €50 aan LED panelen, slimme lampen of toebehoren en ontvang gratis snelle bezorging inclusief betrouwbare Track & Trace.",
        affiliate_url: "https://www.into-led.com/nl",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "intoled-deal-3",
        code: "",
        is_auto_applied: true,
        discount: "5 JAAR GARANTIE",
        title: "Standaard 5 jaar omruilgarantie op professionele LED panelen",
        description: "Zorgeloos zakelijk en particulier bestellen met 5 jaar fabrieksgarantie en 30 dagen bedenktermijn op armaturen en professionele LED panelen.",
        affiliate_url: "https://www.into-led.com/nl",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "intoled-deal-4",
        code: "",
        is_auto_applied: true,
        discount: "TOT 40% STAFFEL",
        title: "Tot 40% staffelkorting op grootverpakkingen en projectverlichting",
        description: "Directe volumekorting voor doe-het-zelvers, installateurs en bedrijven bij grotere aantallen. Automatisch berekend bij het toevoegen aan winkelmand.",
        affiliate_url: "https://www.into-led.com/nl",
        is_verified: true,
        expiry_date: "2026-12-31"
      }
    ]
  },

  // 23. MAGICSHINE (High-Performance Bike Lights & Cycling Gear - MRGE 10% CPA)
  {
    id: 803,
    name: "Magicshine",
    slug: "magicshine",
    aliases: ["magicshine-us", "magic-shine"],
    website: "https://magicshine.com",
    affiliate_url: "https://connectadtrack.com/?s=cpa&u=4scw8ip03bvjtb1113tujbn362i4gnjwwbtf6e27fhe0piecupu&url=https%3A%2F%2Fmagicshine.com",
    logo: "/logos/magicshine.png",
    country: "US",
    description: "World leader in high-lumen bike headlights, rechargeable cycling tail lights, Garmin-compatible mounts, and night-riding cycling safety gear.",
    coupons: [
      {
        id: "magicshine-deal-1",
        code: "MTBVIP",
        is_auto_applied: false,
        discount: "15% OFF",
        title: "15% off MTB trail lights and bike headlights with coupon code",
        description: "Apply verified promo code MTBVIP at checkout to receive 15% off on Monteer, Allty, and Seemee series.",
        affiliate_url: "https://magicshine.com",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "magicshine-deal-2",
        code: "WELCOM15",
        is_auto_applied: false,
        discount: "15% OFF",
        title: "15% off first order with email newsletter registration",
        description: "Save 15% on high-lumen bicycle headlights and cycling safety gear using discount code WELCOM15.",
        affiliate_url: "https://magicshine.com",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "magicshine-deal-3",
        code: "MSFANS",
        is_auto_applied: false,
        discount: "15% OFF",
        title: "15% off official fan community promo code sitewide",
        description: "Enter coupon code MSFANS for 15% off bike lights and rechargeable cycling safety bundles.",
        affiliate_url: "https://magicshine.com",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "magicshine-deal-4",
        code: "",
        is_auto_applied: true,
        discount: "FREE US SHIPPING",
        title: "Free tracked US shipping on orders over $50",
        description: "Automatic free delivery applied at checkout for all domestic orders reaching $50 or more.",
        affiliate_url: "https://magicshine.com",
        is_verified: true,
        expiry_date: "2026-12-31"
      }
    ]
  },

  // 24. RENPHO (Smart Health Scales, Massagers & Wellness Gear - MRGE 5% CPA)
  {
    id: 804,
    name: "RENPHO",
    slug: "renpho",
    aliases: ["renpho-us"],
    website: "https://renpho.com",
    affiliate_url: "https://renpho.com",
    logo: "/logos/renpho.png",
    country: "US",
    description: "Pioneering smart wellness technology: Bluetooth smart body fat scales, percussion massage guns, heated eye massagers, and smart fitness bikes.",
    coupons: [
      {
        id: "renpho-deal-1",
        code: "WBROOKS8",
        is_auto_applied: false,
        discount: "10% OFF",
        title: "10% off verified partner discount code sitewide",
        description: "Apply working coupon code WBROOKS8 in your cart for 10% off smart body composition scales and massagers.",
        affiliate_url: "https://renpho.com",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "renpho-deal-2",
        code: "WRRENPHO15L",
        is_auto_applied: false,
        discount: "15% OFF",
        title: "15% off promo code on smart scales & eye massagers",
        description: "Save 15% on bestselling Eyeris eye massagers and Elis smart scales with verified code WRRENPHO15L.",
        affiliate_url: "https://renpho.com",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "renpho-deal-3",
        code: "KICK15",
        is_auto_applied: false,
        discount: "15% OFF",
        title: "15% off seasonal wellness promo code",
        description: "Use active discount code KICK15 for 15% off percussion massage guns, air purifiers, and AI smart bikes.",
        affiliate_url: "https://renpho.com",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "renpho-deal-4",
        code: "",
        is_auto_applied: true,
        discount: "FREE SHIPPING",
        title: "Free standard shipping on all US orders",
        description: "Enjoy zero shipping fees calculated automatically on all orders delivered anywhere within the continental United States.",
        affiliate_url: "https://renpho.com",
        is_verified: true,
        expiry_date: "2026-12-31"
      }
    ]
  },

  // 25. PONGBOT (AI Tennis Ball Machines & Intelligent Table Tennis Robots - Direct UpPromote)
  {
    id: 805,
    name: "PongBot",
    slug: "pongbot",
    aliases: ["pongbot-us", "pongbotsports", "pongbot-sports", "pong-bot", "pongbot-deals", "pongbot-robot"],
    website: "https://store.pongbotsports.com/?sca_ref=12565715.tCWxyKe3eRDS01",
    affiliate_url: "https://store.pongbotsports.com/?sca_ref=12565715.tCWxyKe3eRDS01",
    logo: "/logos/pongbot.png",
    country: "US",
    description: "Industry-leading AI tennis ball machines and smart table tennis robots: Pace S Pro, Nova S Pro, Omni S Pro, and adaptive solo training systems.",
    coupons: [
      {
        id: "pongbot-deal-1",
        code: "",
        is_auto_applied: true,
        discount: "UP TO $900 OFF",
        title: "Save up to $900 on Aura AI multi-sport training robot",
        description: "Transform your court practice with pro-level trajectory control and up to $900 in direct package savings on the Aura AI system. No coupon code needed.",
        affiliate_url: "https://store.pongbotsports.com/?sca_ref=12565715.tCWxyKe3eRDS01",
        is_verified: true,
        expiry_date: "2026-11-28"
      },
      {
        id: "pongbot-deal-2",
        code: "",
        is_auto_applied: true,
        discount: "UP TO 55% OFF",
        title: "Up to 55% off limited-time warehouse & seasonal specials",
        description: "Limited-time warehouse specials featuring massive markdowns across top-rated tennis ball machines and table tennis robots. Instant discount activated directly.",
        affiliate_url: "https://store.pongbotsports.com/?sca_ref=12565715.tCWxyKe3eRDS01",
        is_verified: true,
        expiry_date: "2026-11-28"
      },
      {
        id: "pongbot-deal-3",
        code: "",
        is_auto_applied: true,
        discount: "50% OFF",
        title: "50% off Nova S smart table tennis trainer",
        description: "Master your spin and footwork drills at half price. Instant 50% discount automatically applied on Nova S training robots.",
        affiliate_url: "https://store.pongbotsports.com/?sca_ref=12565715.tCWxyKe3eRDS01",
        is_verified: true,
        expiry_date: "2026-11-28"
      },
      {
        id: "pongbot-deal-4",
        code: "",
        is_auto_applied: true,
        discount: "$100 OFF",
        title: "$100 direct manufacturer discount on flagship robot systems",
        description: "Upgrade your solo training setup and get $100 instant direct manufacturer savings on premium robot packages over $1,000.",
        affiliate_url: "https://store.pongbotsports.com/?sca_ref=12565715.tCWxyKe3eRDS01",
        is_verified: true,
        expiry_date: "2026-11-28"
      },
      {
        id: "pongbot-deal-5",
        code: "",
        is_auto_applied: true,
        discount: "FREE SHIPPING",
        title: "Free tracked US courier delivery on all machines",
        description: "Every PongBot sports robot ships 100% free with full tracking and protective packaging right to your doorstep across the US.",
        affiliate_url: "https://store.pongbotsports.com/?sca_ref=12565715.tCWxyKe3eRDS01",
        is_verified: true,
        expiry_date: "2026-11-28"
      },
      {
        id: "pongbot-deal-6",
        code: "",
        is_auto_applied: true,
        discount: "45% OFF",
        title: "45% off Omni S Plus adaptive ball launcher",
        description: "Get 45% direct factory savings on custom spin drills and programmable shot rhythms on tournament-grade Omni S Plus.",
        affiliate_url: "https://store.pongbotsports.com/?sca_ref=12565715.tCWxyKe3eRDS01",
        is_verified: true,
        expiry_date: "2026-11-28"
      },
      {
        id: "pongbot-deal-7",
        code: "",
        is_auto_applied: true,
        discount: "40% OFF",
        title: "40% off robot starter bundles & catch net kits",
        description: "Bundle and save 40% automatically on automatic recycling collection nets, multi-ball feeders, and wireless remote accessories.",
        affiliate_url: "https://store.pongbotsports.com/?sca_ref=12565715.tCWxyKe3eRDS01",
        is_verified: true,
        expiry_date: "2026-11-28"
      },
      {
        id: "pongbot-deal-8",
        code: "",
        is_auto_applied: true,
        discount: "FREE GIFT",
        title: "Free practice accessory bundle on qualifying orders",
        description: "Score a complimentary set of high-durability training balls and setup essentials automatically added with select robot models.",
        affiliate_url: "https://store.pongbotsports.com/?sca_ref=12565715.tCWxyKe3eRDS01",
        is_verified: true,
        expiry_date: "2026-11-28"
      },
      {
        id: "pongbot-deal-9",
        code: "",
        is_auto_applied: true,
        discount: "35% OFF",
        title: "35% off Halo S Pro adaptive training robot",
        description: "Experience realistic match simulation drills and dynamic ball feeds with 35% discount on Halo S Pro units.",
        affiliate_url: "https://store.pongbotsports.com/?sca_ref=12565715.tCWxyKe3eRDS01",
        is_verified: true,
        expiry_date: "2026-11-28"
      },
      {
        id: "pongbot-deal-10",
        code: "",
        is_auto_applied: true,
        discount: "10% OFF",
        title: "10% direct welcome discount for first-time players",
        description: "New to PongBot? Unlock an easy 10% direct welcome savings across training equipment on your initial order.",
        affiliate_url: "https://store.pongbotsports.com/?sca_ref=12565715.tCWxyKe3eRDS01",
        is_verified: true,
        expiry_date: "2026-11-28"
      }
    ]
  },

  // 26. WOODLAND DIRECT (Fireplaces, Gas Logs, Fire Pits & Outdoor Living - Chirpy Link)
  {
    id: 806,
    name: "Woodland Direct",
    slug: "woodland-direct",
    aliases: ["woodland-direct-us", "woodlanddirect", "woodlanddirect-us"],
    website: "https://www.woodlanddirect.com",
    affiliate_url: "https://chirpy.st/u26844_U5XHl0",
    logo: "/logos/woodland-direct.png",
    country: "US",
    description: "America's premier online store for gas & wood fireplaces, chimney caps, gas logs, fire pits, patio heaters, BBQ grills, and premium outdoor living.",
    coupons: [
      {
        id: "woodland-deal-1",
        code: "",
        is_auto_applied: true,
        discount: "10% OFF",
        title: "10% off verified discount on fireplaces, patio & outdoor living",
        description: "Save 10% automatically applied through this exclusive partner link on fireplaces, fire pits, patio furniture, and accessories.",
        affiliate_url: "https://chirpy.st/u26844_U5XHl0",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "woodland-deal-2",
        code: "",
        is_auto_applied: true,
        discount: "20% OFF",
        title: "Up to 20% off on selected items and seasonal clearance",
        description: "Save up to 20% on selected gas logs, fire bowls, and outdoor accessories. Discount applied automatically at checkout.",
        affiliate_url: "https://chirpy.st/u26844_U5XHl0",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "woodland-deal-3",
        code: "",
        is_auto_applied: true,
        discount: "10% OFF",
        title: "10% off on DCS grills & premium outdoor kitchens",
        description: "Instant 10% discount automatically unlocked on DCS gas grills and outdoor kitchen components.",
        affiliate_url: "https://chirpy.st/u26844_U5XHl0",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "woodland-deal-4",
        code: "",
        is_auto_applied: true,
        discount: "FREE SHIPPING",
        title: "Free shipping on qualifying orders over $99",
        description: "Enjoy free standard shipping to the contiguous US on thousands of products when you spend $99 or more.",
        affiliate_url: "https://chirpy.st/u26844_U5XHl0",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "woodland-deal-5",
        code: "",
        is_auto_applied: true,
        discount: "10% OFF",
        title: "10% off on vented & ventless gas log sets",
        description: "Save 10% automatically on top-rated gas log sets. Includes natural gas and liquid propane configurations.",
        affiliate_url: "https://chirpy.st/u26844_U5XHl0",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "woodland-deal-6",
        code: "",
        is_auto_applied: true,
        discount: "FROM $349",
        title: "Gas fire pits and outdoor fire tables starting from $349",
        description: "Explore a massive selection of propane and natural gas fire pits starting at just $349 with fast home delivery.",
        affiliate_url: "https://chirpy.st/u26844_U5XHl0",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "woodland-deal-7",
        code: "",
        is_auto_applied: true,
        discount: "FROM $476",
        title: "Luxury patio furniture and dining collections from $476",
        description: "Shop all-weather wicker, aluminum, and teak outdoor patio furniture sets starting from $476.",
        affiliate_url: "https://chirpy.st/u26844_U5XHl0",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "woodland-deal-8",
        code: "",
        is_auto_applied: true,
        discount: "FROM $1,069",
        title: "Wood fireplaces and high-efficiency wood inserts from $1,069",
        description: "Discover EPA-certified wood burning fireplaces, zero-clearance models, and stove inserts starting at $1,069.",
        affiliate_url: "https://chirpy.st/u26844_U5XHl0",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "woodland-deal-9",
        code: "",
        is_auto_applied: true,
        discount: "10% OFF",
        title: "10% off on newsletter email sign-up",
        description: "Sign up for Woodland Direct emails to receive an instant 10% discount on your upcoming purchase.",
        affiliate_url: "https://chirpy.st/u26844_U5XHl0",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "woodland-deal-10",
        code: "",
        is_auto_applied: true,
        discount: "5% OFF",
        title: "5% off on BBQ grills & smokers",
        description: "Automatic 5% savings applied on built-in and freestanding BBQ grills and smokers.",
        affiliate_url: "https://chirpy.st/u26844_U5XHl0",
        is_verified: true,
        expiry_date: "2026-12-31"
      }
    ]
  },

  // 27. RGB HALO KITS (Automotive Headlight Halos, Underglow & LED Lighting - UpPromote)
  {
    id: 807,
    name: "RGB Halo Kits",
    slug: "rgb-halo-kits",
    aliases: ["rgbhalokits", "rgb-halo-kit", "rgbhalokit"],
    website: "https://rgbhalokits.com",
    affiliate_url: "https://rgbhalokits.com?sca_ref=12581527.Berepf0CbvflW",
    logo: "/logos/rgb-halo-kits.png",
    country: "US",
    description: "Industry-leading automotive custom lighting: Flow Series color-chasing halo headlight kits, RGBW DRL boards, LED underglow kits, lighted badges, and twinkle starlight headliners.",
    coupons: [
      {
        id: "rgb-deal-1",
        code: "RGBMETHEWDIPPY",
        is_auto_applied: false,
        discount: "15% OFF",
        title: "15% off verified exclusive partner discount code sitewide",
        description: "Apply working coupon code RGBMETHEWDIPPY at checkout to unlock 15% off halo kits, DRL boards, underglow, and LED emblems.",
        affiliate_url: "https://rgbhalokits.com?sca_ref=12581527.Berepf0CbvflW",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "rgb-deal-2",
        code: "FLOW10",
        is_auto_applied: false,
        discount: "10% OFF",
        title: "10% off promo code on Flow Series multicolor halo kits",
        description: "Save 10% on app-controlled sequential chasing LED halo rings and custom vehicle DRL board upgrades with code FLOW10.",
        affiliate_url: "https://rgbhalokits.com?sca_ref=12581527.Berepf0CbvflW",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "rgb-deal-3",
        code: "UNDERGLOW15",
        is_auto_applied: false,
        discount: "15% OFF",
        title: "15% off discount code on LED underglow & wheel ring kits",
        description: "Use active voucher code UNDERGLOW15 to receive 15% off high-output 4pc & 6pc flexible underbody light strips and quad wheel lights.",
        affiliate_url: "https://rgbhalokits.com?sca_ref=12581527.Berepf0CbvflW",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "rgb-deal-4",
        code: "STARLIGHT20",
        is_auto_applied: false,
        discount: "$20 OFF",
        title: "$20 off coupon on twinkle starlight fiber optic ceiling kits",
        description: "Get $20 instant savings on 650-piece and 1000-piece Bluetooth twinkle fiber optic starlight headliner bundles with code STARLIGHT20.",
        affiliate_url: "https://rgbhalokits.com?sca_ref=12581527.Berepf0CbvflW",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "rgb-deal-5",
        code: "",
        is_auto_applied: true,
        discount: "FREE SHIPPING",
        title: "Free tracked US ground shipping on orders over $150",
        description: "Enjoy zero shipping costs automatically applied at checkout for all domestic US orders over $150.",
        affiliate_url: "https://rgbhalokits.com?sca_ref=12581527.Berepf0CbvflW",
        is_verified: true,
        expiry_date: "2026-12-31"
      }
    ]
  },

  // 28. SWA SABERS (Combat Dueling Sabers, Neopixel & Replica Lightsabers - UpPromote Direct)
  {
    id: 808,
    name: "SWA Sabers",
    slug: "swa-sabers",
    aliases: ["swasabers", "swa-saber", "swasaber"],
    website: "https://swasabers.com",
    affiliate_url: "https://swasabers.com?sca_ref=12581612.1kP736bJt9AA",
    logo: "/logos/swa-sabers.png",
    country: "US",
    description: "The most trusted lightsabers in the galaxy: heavy dueling combat sabers, Neopixel, Xenopixel V3, Proffie 2.2 boards, and collector-grade screen-accurate replica hilts.",
    coupons: [
      {
        id: "swa-deal-1",
        code: "",
        is_auto_applied: true,
        discount: "UP TO 25% OFF",
        title: "Up to 25% off automatic sitewide discount on custom lightsabers",
        description: "Instant discount automatically activated through this official partner link on all Xenopixel, Proffie, and Baselit dueling sabers.",
        affiliate_url: "https://swasabers.com?sca_ref=12581612.1kP736bJt9AA",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "swa-deal-2",
        code: "",
        is_auto_applied: true,
        discount: "UP TO $100 OFF",
        title: "Save up to $100 on Neopixel & Proffie flagship replica hilts",
        description: "Automatic price drops on iconic collector replica sabers including Ahsoka, Anakin, Luke, Vader, and Kenobi configurations.",
        affiliate_url: "https://swasabers.com?sca_ref=12581612.1kP736bJt9AA",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "swa-deal-3",
        code: "",
        is_auto_applied: true,
        discount: "FROM $79",
        title: "Baselit combat dueling lightsabers starting from just $79",
        description: "Heavy-grade aircraft aluminum hilt dueling sabers with 12 sound fonts and smooth swing technology starting at $79.",
        affiliate_url: "https://swasabers.com?sca_ref=12581612.1kP736bJt9AA",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "swa-deal-4",
        code: "",
        is_auto_applied: true,
        discount: "FREE SHIPPING",
        title: "Free tracked galaxy courier shipping on orders over $100",
        description: "Receive free insured delivery with live tracking numbers on all lightsaber orders totaling $100 or more.",
        affiliate_url: "https://swasabers.com?sca_ref=12581612.1kP736bJt9AA",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "swa-deal-5",
        code: "",
        is_auto_applied: true,
        discount: "SPECIAL DEAL",
        title: "Mystery Saber Box offers with guaranteed pixel & hilt upgrades",
        description: "Unlock limited edition mystery saber box tiers with guaranteed high-tier blade upgrades and accessory cases.",
        affiliate_url: "https://swasabers.com?sca_ref=12581612.1kP736bJt9AA",
        is_verified: true,
        expiry_date: "2026-12-31"
      }
    ]
  },

  // Staged for live launch upon user request:
    // 29. LARINE (Remineralizing Gum, Mints & Oral Probiotic Care - Snowball / BuyLarine)
  {
    id: 809,
    name: "Larine",
    slug: "larine",
    aliases: ["larine-us", "buylarine", "buylarine-com", "larine-co"],
    website: "https://www.buylarine.com",
    affiliate_url: "https://www.buylarine.com/METHEW23131",
    logo: "/logos/larine.png",
    country: "US",
    description: "Doctor-formulated remineralizing oral care: sugar-free enamel repair chewing gum, breath mints, remineralizing pouches, and oral probiotic starter kits.",
    coupons: [
      {
        id: "larine-deal-1",
        code: "METHEW23131",
        is_auto_applied: false,
        discount: "15% OFF",
        title: "15% off verified exclusive discount code sitewide",
        description: "Apply working coupon code METHEW23131 at checkout to save 15% on remineralizing gum, mints, and oral health bundles.",
        affiliate_url: "https://www.buylarine.com/METHEW23131",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "larine-deal-2",
        code: "METHEW23131",
        is_auto_applied: false,
        discount: "10% OFF",
        title: "10% off verified promo code on all enamel care kits",
        description: "Use active discount code METHEW23131 to unlock savings on Enamel Starter Kits and variety packs.",
        affiliate_url: "https://www.buylarine.com/METHEW23131",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "larine-deal-3",
        code: "",
        is_auto_applied: true,
        discount: "UP TO 60% OFF",
        title: "Up to 60% off on Enamel Starter Kits & bundles",
        description: "Save up to 60% on complete remineralizing starter sets with gum, mints, and pouches automatically at checkout.",
        affiliate_url: "https://www.buylarine.com/METHEW23131",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "larine-deal-4",
        code: "",
        is_auto_applied: true,
        discount: "UP TO $80 OFF",
        title: "Up to $80 off on bulk remineralizing gum boxes",
        description: "Get up to $80 in instant volume savings when purchasing multi-box bundles of nano-hydroxyapatite gum.",
        affiliate_url: "https://www.buylarine.com/METHEW23131",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "larine-deal-5",
        code: "",
        is_auto_applied: true,
        discount: "25% OFF",
        title: "25% off on long-lasting fresh breath mints",
        description: "Enjoy 25% off clean ingredient breath mints designed to balance your oral microbiome.",
        affiliate_url: "https://www.buylarine.com/METHEW23131",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "larine-deal-6",
        code: "",
        is_auto_applied: true,
        discount: "FREE SHIPPING",
        title: "Free US standard shipping on qualifying orders",
        description: "Automatic free delivery applied at checkout on all eligible domestic US subscriptions and bundles.",
        affiliate_url: "https://www.buylarine.com/METHEW23131",
        is_verified: true,
        expiry_date: "2026-12-31"
      }
    ]
  },

  // 30. PLATED SKIN SCIENCE (Exosome Skincare & Anti-Aging Serums - MRGE 10% CPA)
  {
    id: 810,
    name: "Plated Skin Science",
    slug: "plated-skin",
    aliases: ["plated-skin-science", "plated", "buypated", "platedskinscience"],
    website: "https://platedskinscience.com",
    affiliate_url: "https://connectadtrack.com/?s=cpa&u=4scw8ip03bvjtb1113tujbn362i4gnjwwbtf6e27fhe0piecupu&url=https%3A%2F%2Fplatedskinscience.com%2F",
    logo: "/logos/plated-skin.png",
    country: "US",
    description: "Breakthrough exosome skincare formulated with Renewosome™ technology. Clinically proven to accelerate cellular renewal, reduce redness, and smooth deep wrinkles.",
    coupons: [
      {
        id: "plated-deal-1",
        code: "",
        is_auto_applied: true,
        discount: "20% OFF",
        title: "Up to 20% off auto-applied at checkout",
        description: "Receive an instant 20% discount on clinically proven exosome serums automatically applied at cart. No coupon code required.",
        affiliate_url: "https://connectadtrack.com/?s=cpa&u=4scw8ip03bvjtb1113tujbn362i4gnjwwbtf6e27fhe0piecupu&url=https%3A%2F%2Fplatedskinscience.com%2F",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "plated-deal-2",
        code: "",
        is_auto_applied: true,
        discount: "20% OFF",
        title: "20% off INTENSE Serum for rapid cellular renewal",
        description: "Enjoy 20% off highest-concentration exosome INTENSE Serum automatically activated at checkout. No code needed.",
        affiliate_url: "https://connectadtrack.com/?s=cpa&u=4scw8ip03bvjtb1113tujbn362i4gnjwwbtf6e27fhe0piecupu&url=https%3A%2F%2Fplatedskinscience.com%2F",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "plated-deal-3",
        code: "",
        is_auto_applied: true,
        discount: "15% OFF",
        title: "15% off DAILY Serum for radiant skin barrier repair",
        description: "Save 15% on DAILY exosome serum designed to defend against environmental aging. No promo code needed.",
        affiliate_url: "https://connectadtrack.com/?s=cpa&u=4scw8ip03bvjtb1113tujbn362i4gnjwwbtf6e27fhe0piecupu&url=https%3A%2F%2Fplatedskinscience.com%2F",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "plated-deal-4",
        code: "",
        is_auto_applied: true,
        discount: "20% OFF",
        title: "20% off CALM Serum and Hair Density Recovery Serum",
        description: "Instant 20% savings on scalp revitalization and post-procedure calm serums applied directly at checkout.",
        affiliate_url: "https://connectadtrack.com/?s=cpa&u=4scw8ip03bvjtb1113tujbn362i4gnjwwbtf6e27fhe0piecupu&url=https%3A%2F%2Fplatedskinscience.com%2F",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "plated-deal-5",
        code: "",
        is_auto_applied: true,
        discount: "UP TO $65 OFF",
        title: "Up to $65 off on Duo & Trio Skincare Bundles",
        description: "Save up to $65 automatically when purchasing the complete Intense + Daily serum regimen bundle.",
        affiliate_url: "https://connectadtrack.com/?s=cpa&u=4scw8ip03bvjtb1113tujbn362i4gnjwwbtf6e27fhe0piecupu&url=https%3A%2F%2Fplatedskinscience.com%2F",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "plated-deal-6",
        code: "",
        is_auto_applied: true,
        discount: "FREE SHIPPING",
        title: "Free tracked US shipping on all skincare orders",
        description: "Enjoy 100% complimentary tracked delivery across the United States automatically applied at checkout.",
        affiliate_url: "https://connectadtrack.com/?s=cpa&u=4scw8ip03bvjtb1113tujbn362i4gnjwwbtf6e27fhe0piecupu&url=https%3A%2F%2Fplatedskinscience.com%2F",
        is_verified: true,
        expiry_date: "2026-12-31"
      }
    ]
  },

  // 31. NUVIO RECOVERY (Red Light Therapy, Infrared Saunas & Ice Baths)
  {
    id: 811,
    name: "Nuvio Recovery",
    slug: "nuvio-recovery",
    aliases: ["nuvio", "nuviorecovery", "nuvio-us"],
    website: "https://nuviorecovery.com",
    affiliate_url: "https://nuviorecovery.com/collections/all-products?sca_ref=12515963.4GAOkTKNceGUU",
    logo: "/logos/nuvio-recovery.png",
    country: "US",
    description: "Professional-grade wellness and recovery equipment: high-irradiance red light therapy panels, portable infrared home saunas, ice baths, and cold plunge systems.",
    coupons: [
      {
        id: "nuvio-deal-1",
        code: "METHEW50",
        is_auto_applied: false,
        discount: "$50 OFF",
        title: "$50 off verified discount code sitewide",
        description: "Save an instant $50 on any red light therapy panel, infrared sauna, or cold plunge tub with code METHEW50.",
        affiliate_url: "https://nuviorecovery.com/collections/all-products?sca_ref=12515963.4GAOkTKNceGUU",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "nuvio-deal-2",
        code: "METHEW50",
        is_auto_applied: false,
        discount: "$50 OFF",
        title: "$50 off clinical red light therapy panels",
        description: "Apply promo code METHEW50 to receive $50 off targeted and full-body medical-grade red light panels.",
        affiliate_url: "https://nuviorecovery.com/collections/all-products?sca_ref=12515963.4GAOkTKNceGUU",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "nuvio-deal-3",
        code: "METHEW50",
        is_auto_applied: false,
        discount: "$50 OFF",
        title: "$50 off portable infrared home saunas & domes",
        description: "Get $50 off premium low-EMF infrared saunas and sauna blankets with working voucher code METHEW50.",
        affiliate_url: "https://nuviorecovery.com/collections/all-products?sca_ref=12515963.4GAOkTKNceGUU",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "nuvio-deal-4",
        code: "METHEW50",
        is_auto_applied: false,
        discount: "$50 OFF",
        title: "$50 off portable ice baths & cold plunge tubs",
        description: "Take $50 off insulated ice bath recovery tubs and cold water plunge systems using code METHEW50.",
        affiliate_url: "https://nuviorecovery.com/collections/all-products?sca_ref=12515963.4GAOkTKNceGUU",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "nuvio-deal-5",
        code: "",
        is_auto_applied: true,
        discount: "UP TO 35% OFF",
        title: "Up to 35% off recovery bundle packs",
        description: "Save up to 35% on combo recovery kits combining infrared sauna blankets and red light therapy units.",
        affiliate_url: "https://nuviorecovery.com/collections/all-products?sca_ref=12515963.4GAOkTKNceGUU",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "nuvio-deal-6",
        code: "",
        is_auto_applied: true,
        discount: "FREE SHIPPING",
        title: "Free express shipping + 1-year full warranty",
        description: "All orders include fast express doorstep shipping, 30-day money-back guarantee, and full 1-year product warranty.",
        affiliate_url: "https://nuviorecovery.com/collections/all-products?sca_ref=12515963.4GAOkTKNceGUU",
        is_verified: true,
        expiry_date: "2026-12-31"
      }
    ]
  },

  // 166. RENUE BY SCIENCE (US - NMN & Cellular Longevity Supplements - Weekly PayPal Payouts)
  {
    id: 766,
    name: "Renue By Science",
    slug: "renue-by-science",
    aliases: ["renuebyscience", "renue", "renue-science", "renue-by-science-us"],
    logo: "https://logo.clearbit.com/renuebyscience.com",
    website: "https://renuebyscience.com",
    affiliate_url: "https://renuebyscience.com",
    country: "US",
    description: "Research-backed liposomal NMN, NAD+ precursors, resveratrol, and cellular longevity supplements formulated for maximum bioavailability.",
    coupons: [
      {
        id: "rbs-deal-1",
        code: "RENUE10",
        discount: "10% OFF",
        title: "10% off sitewide on Liposomal NMN & NAD+ Longevity Supplements",
        description: "Apply verified discount code RENUE10 at checkout for 10% off all liposomal capsules, sublingual powders, and NAD+ nasal sprays.",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "rbs-deal-2",
        code: "LONGEVITY15",
        discount: "15% OFF",
        title: "15% off Subscribe & Save cellular longevity bundles",
        description: "Save 15% on recurring liposomal NMN, Spermidine, and Quercetin bundles with verified promo code LONGEVITY15.",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "rbs-deal-3",
        code: "",
        discount: "FREE SHIPPING",
        title: "Free US tracked shipping on all longevity orders over $50",
        description: "Enjoy fast, complimentary tracked delivery across the United States on orders of $50 or more.",
        is_verified: true,
        expiry_date: "2026-12-31"
      }
    ]
  },

  // 167. COMMOMY DECOR (US - 3D Peel & Stick Wall Tiles - Weekly UpPromote Payouts)
  {
    id: 767,
    name: "Commomy Decor",
    slug: "commomy",
    aliases: ["commomy-decor", "commomydecor", "commomy-tiles", "commomy-us"],
    logo: "https://logo.clearbit.com/commomy.com",
    website: "https://commomy.com",
    affiliate_url: "https://commomy.com",
    country: "US",
    description: "3D peel-and-stick backsplash wall tiles, faux brick panels, stone textures, and DIY kitchen & fireplace makeover tiles.",
    coupons: [
      {
        id: "cmy-deal-1",
        code: "COMMOMY15",
        discount: "15% OFF",
        title: "15% off sitewide on 3D Peel & Stick Wall Tiles",
        description: "Use verified coupon code COMMOMY15 for 15% instant discount on faux brick, stone, and kitchen backsplash tiles.",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "cmy-deal-2",
        code: "DECOR20",
        discount: "20% OFF",
        title: "20% off multi-pack room renovation tile bundles",
        description: "Save 20% when ordering 20+ piece 3D wall tile bulk renovation sets with code DECOR20.",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "cmy-deal-3",
        code: "",
        discount: "FREE SHIPPING",
        title: "Free US shipping on qualifying DIY home tile orders",
        description: "Complimentary doorstep delivery on all qualifying peel-and-stick wall tile packages.",
        is_verified: true,
        expiry_date: "2026-12-31"
      }
    ]
  },

  // 168. PETALS AND TAILS (US - CBD Pet Wellness & Oils - Paid Every Friday)
  {
    id: 768,
    name: "Petals and Tails",
    slug: "petals-and-tails",
    aliases: ["petalsandtails", "petals-tails", "petals-and-tails-us"],
    logo: "https://logo.clearbit.com/petalsandtails.com",
    website: "https://petalsandtails.com",
    affiliate_url: "https://petalsandtails.com",
    country: "US",
    description: "Organic hemp oil tinctures, calming chews, salmon oil supplements, and natural paw care formulated for dogs and cats.",
    coupons: [
      {
        id: "pat-deal-1",
        code: "PETALS15",
        discount: "15% OFF",
        title: "15% off sitewide on Calming Pet Hemp Oils & Chews",
        description: "Redeem verified code PETALS15 at checkout for 15% off all organic pet tinctures, treats, and grooming balms.",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "pat-deal-2",
        code: "PAWS20",
        discount: "20% OFF",
        title: "20% off first auto-ship pet wellness bundle",
        description: "Get 20% off your initial pet wellness bundle order with coupon code PAWS20.",
        is_verified: true,
        expiry_date: "2026-12-31"
      }
    ]
  },

  // 169. ENIGWATCH (US - Luxury Watch Winders & Biometric Safes - Weekly Payouts)
  {
    id: 769,
    name: "Enigwatch",
    slug: "enigwatch",
    aliases: ["enigwatch-us", "enig-watch"],
    logo: "https://logo.clearbit.com/enigwatch.com",
    website: "https://enigwatch.com",
    affiliate_url: "https://enigwatch.com",
    country: "US",
    description: "Handcrafted luxury automatic watch winders, biometric fingerprint watch safes, and multi-rotor collector cabinets.",
    coupons: [
      {
        id: "eng-deal-1",
        code: "ENIG10",
        discount: "10% OFF",
        title: "10% off Luxury Automatic Watch Winders & Collector Safes",
        description: "Save 10% on silent Japanese Mabuchi motor watch winders and biometric safes with code ENIG10.",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "eng-deal-2",
        code: "",
        discount: "$75 OFF",
        title: "Up to $75 off Multi-Watch Cabinet Winders + Free Insured Shipping",
        description: "Instant savings on 6-watch and 12-watch luxury cabinets with free insured global delivery.",
        is_verified: true,
        expiry_date: "2026-12-31"
      }
    ]
  },

  // 170. UPERFECT (US / Global - 4K Portable Gaming & OLED Monitors)
  {
    id: 770,
    name: "UPERFECT",
    slug: "uperfect",
    aliases: ["uperfect-monitor", "uperfectmonitor", "uperfect-us"],
    logo: "https://logo.clearbit.com/uperfect.com",
    website: "https://www.uperfect.com",
    affiliate_url: "https://www.uperfect.com",
    country: "US",
    description: "4K OLED portable monitors, 144Hz gaming displays, dual-screen laptop extenders, and touchscreen workstation monitors.",
    coupons: [
      {
        id: "upf-deal-1",
        code: "UPERFECT30",
        discount: "$30 OFF",
        title: "$30 off 4K OLED & 144Hz Portable Gaming Monitors",
        description: "Apply verified code UPERFECT30 at checkout to save $30 on portable monitors and dual-screen extenders.",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "upf-deal-2",
        code: "UPERFECT15",
        discount: "15% OFF",
        title: "15% off Dual-Screen Folding Laptop Workstation Monitors",
        description: "Get 15% instant discount on UStation dual-screen portable displays with code UPERFECT15.",
        is_verified: true,
        expiry_date: "2026-12-31"
      }
    ]
  },

  // 171. FOSI AUDIO (US / Global - Hi-Fi Home Audio Amplifiers & DACs)
  {
    id: 771,
    name: "Fosi Audio",
    slug: "fosi-audio",
    aliases: ["fosiaudio", "fosi", "fosi-audio-us"],
    logo: "https://logo.clearbit.com/fosiaudio.com",
    website: "https://fosiaudio.com",
    affiliate_url: "https://fosiaudio.com",
    country: "US",
    description: "Compact audiophile Class D power amplifiers, tube preamplifiers, headphone DACs, and desktop hi-fi stereo receivers.",
    coupons: [
      {
        id: "fsi-deal-1",
        code: "FOSI15",
        discount: "15% OFF",
        title: "15% off V3 Mono, ZA3 & BT20A Pro Hi-Fi Power Amplifiers",
        description: "Save 15% sitewide on Fosi Audio Class D amplifiers, tube preamps, and DACs with verified code FOSI15.",
        is_verified: true,
        expiry_date: "2026-12-31"
      },
      {
        id: "fsi-deal-2",
        code: "AUDIO10",
        discount: "10% OFF",
        title: "10% off Audiophile Desktop DAC & Tube Preamp Bundles",
        description: "Redeem code AUDIO10 at checkout for 10% off complete desktop stereo bundles plus free tracked shipping.",
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

/**
 * Checks if a normal search query (without --) matches any confidential campaign store
 * in STORE_REGISTRY so it remains 100% hidden from public search & homepage.
 */
export function isSecretRegistryKeyword(rawQuery: string): boolean {
  const clean = rawQuery.toLowerCase().trim().replace(/[^a-z0-9]/g, "");
  if (clean.length < 2) return false;
  return STORE_REGISTRY.some((reg) => {
    const cleanName = reg.name.toLowerCase().replace(/[^a-z0-9]/g, "");
    const cleanSlug = reg.slug.toLowerCase().replace(/[^a-z0-9]/g, "");
    if (cleanName.includes(clean) || cleanSlug.includes(clean)) return true;
    if (reg.aliases) {
      return reg.aliases.some((a) => a.toLowerCase().replace(/[^a-z0-9]/g, "").includes(clean));
    }
    return false;
  });
}

/**
 * Searches all confidential stores in STORE_REGISTRY when the owner uses the `--` operator.
 * Automatically supports all current and future stores added to STORE_REGISTRY.
 */
export function searchSecretRegistryStores(secretKey: string): Store[] {
  const clean = secretKey.toLowerCase().trim().replace(/[^a-z0-9]/g, "");
  if (!clean) return [];

  const exactSlugMatch = ALIAS_LOOKUP[secretKey.toLowerCase().trim()];
  const results: Store[] = [];
  const seenSlugs = new Set<string>();

  if (exactSlugMatch) {
    seenSlugs.add(exactSlugMatch.slug);
    results.push({
      id: 999999,
      name: exactSlugMatch.name,
      slug: exactSlugMatch.slug,
      logo: exactSlugMatch.logo || getLogoUrl(exactSlugMatch.slug),
      website: `/store/${exactSlugMatch.slug}`,
      affiliate_url: `/store/${exactSlugMatch.slug}`,
    } as Store);
  }

  STORE_REGISTRY.forEach((reg) => {
    if (seenSlugs.has(reg.slug)) return;
    const cleanName = reg.name.toLowerCase().replace(/[^a-z0-9]/g, "");
    const cleanSlug = reg.slug.toLowerCase().replace(/[^a-z0-9]/g, "");
    const aliasMatch = reg.aliases?.some((a) =>
      a.toLowerCase().replace(/[^a-z0-9]/g, "").includes(clean)
    );
    if (cleanName.includes(clean) || cleanSlug.includes(clean) || aliasMatch) {
      seenSlugs.add(reg.slug);
      results.push({
        id: 999999,
        name: reg.name,
        slug: reg.slug,
        logo: reg.logo || getLogoUrl(reg.slug),
        website: `/store/${reg.slug}`,
        affiliate_url: `/store/${reg.slug}`,
      } as Store);
    }
  });

  return results;
}
