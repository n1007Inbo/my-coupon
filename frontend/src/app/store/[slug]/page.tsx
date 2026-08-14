// Trigger build for promoregistry-gateway
import React from "react";
import { Metadata } from "next";
import { notFound } from "next/navigation";
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
  let logoUrl = getLogoUrl(slug);
  
  // Try to fetch from CMS first to get the most accurate name and logo for SEO metadata
  const apiUrl = process.env.NEXT_PUBLIC_STRAPI_API_URL || "http://localhost:1337";
  try {
    const storesRes = await fetch(`${apiUrl}/api/stores?filters[slug][$eq]=${slug}`, { next: { revalidate: 600 } });
    if (storesRes.ok) {
      const storesData = await storesRes.json();
      if (Array.isArray(storesData.data) && storesData.data.length > 0) {
        const s = storesData.data[0];
        storeName = s.name;
        if (s.logo?.url) {
          logoUrl = s.logo.url.startsWith("http") ? s.logo.url : `${apiUrl}${s.logo.url}`;
        }
      }
    }
  } catch (err) {
    console.error(`Metadata fetch failed for store slug ${slug}, using fallback strategy.`, err);
  }

  // If fallback store matches, prefer its name as override
  const fallbackStore = FALLBACK_STORES.find(s => s.slug === slug);
  if (fallbackStore) {
    const isDefaultUnformatted = storeName === slug.split("-").map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(" ");
    if (isDefaultUnformatted) {
      storeName = fallbackStore.name;
    }
  }
  
  const logoUrlStr = logoUrl || "";
  const absoluteLogoUrl = logoUrlStr.startsWith("http") ? logoUrlStr : `https://www.promoregistry.com${logoUrlStr}`;

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
      card: 'summary_large_image',
      title: `${storeName} Promo Codes & Discount Codes | PromoRegistry`,
      description: `Save money at ${storeName} with active promo codes, coupon codes, and verified discount offers.`,
      images: [absoluteLogoUrl],
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
  "reconstitution-solution",
  "tuxmat-us",
  "hotel-tonight",
  "swatch",
  "harrys",
  "shipt",
  "meowant",
  "shelly-eu-",
  "larine-company",
  "spothero",
  "taylor-made",
  "choice-hotels",
  "meshy",
  "kate-spade",
  "hilo",
  "legalzoom",
  "bedsure",
  "dewenwils",
  "torras",
  "jack-rogers",
  "suzanne-somers",
  "the-wine-collective",
  "sleepyhead",
  "sperry",
  "evelyn-bobbie",
  "1inkcom",
  "flick-vpn",
  "champion-life-insurance",
  "remedy-meds",
  "norton-lifelock",
  "network-solutions",
  "cars24",
  "nexburn",
  "asknow",
  "lyca-mobile-us",
  "factor",
  "american-dream-auto-protect",
  "bark-parental-controls",
  "aura-parental-controls",
  "droppscom",
  "greencross-vets",
  "bullion",
  "deleteme",
  "college-ave",
  "select-home-warranty",
  "insurify",
  "comparecom",
  "homesafe",
  "the-times-literary-supplement",
  "dabella",
  "income-insurance-limited",
  "squarespace",
  "claim-climbers",
  "patriot-frontline",
  "docsearch-glp-1",
  "docsearch",
  "lemonaid-health",
  "global-trade-rates",
  "flashcloud",
  "macroplate",
  "mint-home",
  "artlist",
  "remedy-place",
  "neu-money-no-interest-credit-card",
  "neu-money-no-annual-fee-credit-card",
  "qtrade",
  "neo-financial",
  "spring-financial",
  "amazingclubs",
  "mcafee",
  "endurance",
  "fanatiz-sports-streaming",
  "quicken",
  "thimble",
  "strype-wellness",
  "western-union-north-america",
  "swooped",
  "mighties",
  "akko",
  "helloprenup",
  "newself-ventures",
  "onetravel",
  "splitero",
  "rvezy",
  "hintmeds-inc",
  "legendz",
  "smartcredit",
  "upwork-freelance-marketplace",
  "neo-ca-credit-card",
  "whitebridge",
  "winona",
  "binge-movies-tv",
  "ecco",
  "tryhackme",
  "flashark",
  "backcountry",
  "neiman-marcus",
  "saks-fifth-avenue",
  "xsuit",
  "g-star-raw",
  "wildflower-cases",
  "ubeauty",
  "myaerotel",
  "supercom-travel",
  "scholarshipowl",
  "mac-duggal",
  "daisysilk-trade-co-ltd",
  "kixies-inc",
  "novica-com",
  "pooky-us",
  "midwest-sports-dba-tennis-point",
  "montagne-vacances",
  "gardenreet",
  "mirlux",
  "silver-cross",
  "jackery",
  "innovet-pet",
  "afrm",
  "naghedi",
  "im8-health",
  "tuxmat",
  "performance-golf",
  "simkhai",
  "sexy-little-bath-us",
  "everblog",
  "printabout",
  "lumary",
  "young-electric-bikes",
  "storeyourboard",
  "urevo",
  "sbla",
  "joe-nimble",
  "oufer-body-jewelry-15-100-259-25-may-2026",
  "elevated-craft",
  "huega-house",
  "camp-chef",
  "colamy",
  "buy-fencing-direct",
  "back-to-the-office",
  "thermos",
  "cosori",
  "krewe",
  "ridstar",
  "bruno-marc-8-100-350-29-july-2026",
  "sunshine-tienda",
  "red-gorilla",
  "displays-outlet-us",
  "yvette-sports",
  "zeagoo",
  "buybackworld",
  "flextail-5-50-550-23-july-2026",
  "pelsbarn",
  "povison",
  "eternity-modern",
  "aviya-mattress-15-600-300-23-july-2026",
  "arq8",
  "babeyond",
  "suunto",
  "rma-defense",
  "eonon",
  "torro",
  "auctmarts",
  "missha-us",
  "himiway-bike",
  "mirlux-fr",
  "guta-tpms",
  "alashan-cashmere",
  "nushape",
  "adept",
  "underarmour",
  "eydology",
  "cambridge-satchel",
  "zonli-home",
  "3-suisses",
  "dowinx",
  "garden-benches",
  "knack-bags-6-200-450-27-july-2026",
  "popilush-2-150-275-27-july-2026",
  "seldom-seen-styles",
  "kixies",
  "le-permis-libre",
  "health-fitness",
  "tilswall",
  "levoit",
  "caydo",
  "tribesigns",
  "speediance",
  "ulanzi",
  "antler",
  "okun",
  "so-soft-beds",
  "grab-bags-us",
  "keycense",
  "tcksports-us",
  "power-smart",
  "eagle-creek",
  "overstock",
  "xero-shoes",
  "park-sleep-fly",
  "shelly",
  "sealy",
  "viviscal",
  "florsheim",
  "wiley-x",
  "im",
  "aerotel",
  "sperry-us",
  "miele",
  "patioliving",
  "joroto",
  "paddle-pro",
  "lovat-parks",
  "soldiers-nutrition",
  "comfrt",
  "elegant-shower",
  "anti-apex",
  "invisawear",
  "quickplay",
  "lumibricks",
  "tarkine-au",
  "filter-baby",
  "little-links-golf",
  "atoto",
  "proactiv",
  "desktronic",
  "redu-sculpt",
  "javvy-coffee",
  "origo-shoes",
  "monument-grills",
  "desktronic-se",
  "pretty-strap",
  "silkiee",
  "lumai-br",
  "love-in-faith",
  "pop-ups-brand",
  "tous",
  "meshy-ai",
  "wjs-home",
  "roto-rooter",
  "buy-larine-u",
  "badlands-gear-us",
  "fuji-sports",
  "jiaro-pack",
  "dc-house",
  "ohmmu",
  "waterdrop",
  "octobuddy-us",
  "mirai-clinical-us",
  "bulletproof-fitness-equipment-us",
  "acrtmatic",
  "pongbot",
  "bosshorn",
  "venalisa",
  "zero-waste-store",
  "burneek",
  "amyet-bikes",
  "parfait-lingerie",
  "avio-travel-us",
  "alpha-gear",
  "nikola-toy",
  "level",
  "it-just-works-deodorant",
  "strike-nutrition",
  "aecojoy",
  "enjoy-the-wood",
  "pure-bio-labs",
  "abacus-sportswear",
  "cosset",
  "evereden-us",
  "brightmeds",
  "nantahala-outdoor-center",
  "antler-uk",
  "aldo",
  "solo-stove",
  "eileen-fisher",
  "magpul",
  "democracy-clothing",
  "the-double-f",
  "brunt",
  "showpo",
  "sneaxx",
  "kittyspout",
  "ohora",
  "ballboyz",
  "rockbros",
  "double-oak-essentials",
  "parasol",
  "american-giant",
  "seagate",
  "frost-buddy",
  "cosabella",
  "swolverine",
  "outdoor-gear-exchange",
  "tuft-needle",
  "nexbelt",
  "sanfer-bike",
  "hyperice",
  "la-mer",
  "dermalogica",
  "lazyone",
  "steve-madden",
  "dashing-diva",
  "blue-seventy",
  "salt-life",
  "zulay-kitchen",
  "piedmontese",
  "coutr",
  "apolosign",
  "sublue",
  "celestyal-cruise",
  "charles-bentley",
  "hunter-fan",
  "qidi",
  "harlembling",
  "bond-mason",
  "silver-jeans",
  "puckipuppy-us",
  "mobapad",
  "rebecca-minkoff",
  "neo-sabers",
  "anastasia-beverly-hills",
  "jennibag",
  "professional-supplement-center",
  "nordictrack",
  "bodega"
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

  // If store is completely invalid/unknown, render a proper 404 response
  if (!store) {
    notFound();
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

  // Generate dynamic FAQ Schema based on store slug for rich snippet Google visibility
  const faqs = [];
  if (slug === "hotel-tonight") {
    faqs.push(
      {
        question: "How do I use a Hotel Tonight Promo Code?",
        answer: "Unlike typical booking engines, HotelTonight promo codes are designed to be applied directly in their mobile app. Open the app, go to your Account Profile, select \"Invites & Promo Codes\", and paste your coupon there. The credits will be deducted from your next reservation."
      },
      {
        question: "How do I join the HT Perks Loyalty Program?",
        answer: "HT Perks is HotelTonight's official rewards program. You level up automatically as you spend. Level 1 gets you extra 8% off, Level 2 gets you 12% off plus other perks, and Level 3 unlocks up to 15% off and additional booking credits."
      },
      {
        question: "What is the HotelTonight Daily Drop Deal?",
        answer: "Checking the app daily unlocks the \"Daily Drop\" feature, which provides highly discounted, localized rates (sometimes 30% to 40% off). These deals expire within 15 minutes of being revealed, so act fast!"
      }
    );
  } else if (slug === "swatch") {
    faqs.push(
      {
        question: "How do I join the Swatch Club?",
        answer: "Becoming a member of the Swatch Club grants you exclusive access to limited-edition watch releases (such as the MoonSwatch series), free entry to brand events, and members-only discount codes throughout the year."
      },
      {
        question: "How can I get Free Shipping on Swatch orders?",
        answer: "Swatch offers free standard shipping on all orders over $50. Since most Swatch watches cost between $80 and $250, you are almost guaranteed to qualify for free shipping."
      },
      {
        question: "What is the warranty and return policy for Swatch?",
        answer: "Every Swatch watch purchased using verified links comes with a 24-month international warranty, covering material and manufacturing defects. Plus, you get 14-day free returns on unworn items."
      }
    );
  } else if (slug === "tuxmat-us") {
    faqs.push(
      {
        question: "Why should I choose TuxMat Floor Liners?",
        answer: "TuxMat liners are laser-measured for exact vehicle specifications, providing up to 3x more coverage than competing brands. They cover the entire footwell and side panels, protecting your vehicle from snow, water, mud, and salt."
      },
      {
        question: "Does TuxMat Have a Lifetime Warranty?",
        answer: "Yes, TuxMat floor liners come with a lifetime warranty against manufacturer defects. This means your purchase is fully protected for the lifetime of your vehicle, making it a high-value purchase."
      },
      {
        question: "How do I save with TuxMat Promo Codes?",
        answer: "Use verified TuxMat promo codes to save up to 10% off sitewide, plus get free standard shipping across the United States. Signing up for their email list is also a great way to receive exclusive first-purchase coupon codes."
      }
    );
  } else if (slug === "harrys") {
    faqs.push(
      {
        question: "How can I get the $5 Harry's Trial Shave Set?",
        answer: "New customers can purchase a Harry's Starter Set for just $5 (valued at $13). This includes a Truman razor handle, a 5-blade cartridge, foaming shave gel, and a travel blade cover."
      },
      {
        question: "Should I subscribe to Harry's Shave Plan Refills?",
        answer: "By joining a custom shave plan, you save on replacement blade cartridges and receive free shipping on all recurring refills. You can easily adjust, pause, or cancel your subscription at any time."
      },
      {
        question: "How do I apply a Harry's Promo Code?",
        answer: "To redeem your coupon code at Harry's, add your razor sets, blades, or body wash to the cart. During checkout, paste your promo code in the discount field and click apply to see your updated total."
      }
    );
  } else if (slug === "shipt") {
    faqs.push(
      {
        question: "How can I save 50% on Shipt Annual Membership?",
        answer: "Look out for active promo codes that offer up to 50% off the annual Shipt membership, reducing the cost from $99 to just $49 for your first year of ultimate free deliveries on orders over $35."
      },
      {
        question: "How do I get Free Delivery on Shipt orders?",
        answer: "Shipt members get free delivery on all eligible retail, grocery, and pharmacy orders over $35. Combine smaller orders into a single weekly delivery to avoid standard delivery fees."
      },
      {
        question: "Where can I find Shipt weekly retailer deals?",
        answer: "Check the Shipt app daily for exclusive digital coupons and buy-one-get-one deals from popular local retailers like Target, CVS, Costco, and major grocery chains."
      }
    );
  } else {
    faqs.push(
      {
        question: `How do I redeem a ${store.name} promo code?`,
        answer: `Browse the active ${store.name} discount codes on PromoRegistry. Click 'Show Coupon Code' or 'Get Deal', copy the code, go to the official ${store.name} website, add your items to the shopping cart, and paste the code in the discount/coupon box at checkout to apply your discount.`
      },
      {
        question: `Are the ${store.name} coupons on PromoRegistry verified?`,
        answer: `Yes, all ${store.name} promo codes, discount codes, and special deals are verified and updated daily by the PromoRegistry editorial team to ensure they work at checkout.`
      },
      {
        question: `How much can I save using a ${store.name} discount code today?`,
        answer: `Savings vary depending on the active promotions, but shoppers typically save between 10% and 50% on their order using verified ${store.name} codes, plus potential extra savings like free shipping.`
      }
    );
  }

  const faqSchemaMarkup = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaMarkup) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchemaMarkup) }}
      />
      <StoreClient store={store} coupons={coupons} />
    </>
  );
}
