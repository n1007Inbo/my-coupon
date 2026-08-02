import { Coupon, Store } from "../components/CouponCard";

// Helper to retrieve beautiful corporate logos dynamically from local SVG files
export const getLogoUrl = (slug: string | undefined | null) => {
  if (!slug || typeof slug !== "string") return "/logos/default.svg";
  if (slug.startsWith("desktronic-")) return "/logos/desktronic.svg";
  if (slug.startsWith("tenways-")) return "/logos/tenways.svg";
  if (slug === "parc-asterix-fr") return "/logos/parc-asterix-fr.jpg";
  if (slug === "bouquets-by-post") return "/logos/bouquets-by-post.jpg";
  if (slug === "im8health") return "/logos/im8health.jpg";
  if (slug === "redusculpt") return "/logos/redusculpt.jpg";
  if (slug === "evolution-power-tools") return "/logos/evolution-power-tools.jpg";
  if (slug === "maple-prime") return "/logos/maple-prime.png";
  if (slug === "nobodys-child") return "/logos/nobodys-child.jpg";
  if (slug === "anycubic-us") return "/logos/anycubic.svg";
  if (slug === "hitway-uk") return "/logos/hitway.svg";
  if (slug === "wolfbox-uk") return "/logos/wolfbox.svg";
  if (slug === "fitueyes-uk") return "/logos/fitueyes.svg";
  if (slug === "helvetus") return "/logos/helvetus.svg";
  if (slug === "xsteel-targets") return "/logos/xsteel-targets.svg";
  if (slug === "reconstitution-solution") return "/logos/reconstitution-solution.svg";
  if (slug === "tuxmat-us") return "/logos/tuxmat.svg";
  return `/logos/${slug}.svg`;
};

// Mock fallback identical dataset
export const FALLBACK_STORES: Store[] = [
  { id: 1, name: "Amazon", slug: "amazon", logo: getLogoUrl("amazon"), website: "https://amazon.com" },
  { id: 2, name: "Nike", slug: "nike", logo: getLogoUrl("nike"), website: "https://nike.com" },
  { id: 3, name: "Hostinger", slug: "hostinger", logo: getLogoUrl("hostinger"), website: "https://hostinger.com" },
  { id: 4, name: "Adidas", slug: "adidas", logo: getLogoUrl("adidas"), website: "https://adidas.com" },
  { id: 5, name: "Walmart", slug: "walmart", logo: getLogoUrl("walmart"), website: "https://walmart.com" },
  { id: 6, name: "eBay", slug: "ebay", logo: getLogoUrl("ebay"), website: "https://ebay.com" },
  { id: 7, name: "Target", slug: "target", logo: getLogoUrl("target"), website: "https://target.com" },
  { id: 8, name: "Apple", slug: "apple", logo: getLogoUrl("apple"), website: "https://apple.com" },
  { id: 9, name: "Starbucks", slug: "starbucks", logo: getLogoUrl("starbucks"), website: "https://starbucks.com" },
  { id: 10, name: "Steam", slug: "steam", logo: getLogoUrl("steam"), website: "https://steampowered.com" },
  { id: 11, name: "AliExpress", slug: "aliexpress", logo: getLogoUrl("aliexpress"), website: "https://aliexpress.com" },
  { id: 12, name: "Adobe", slug: "adobe", logo: getLogoUrl("adobe"), website: "https://adobe.com" },
  { id: 13, name: "Canva", slug: "canva", logo: getLogoUrl("canva"), website: "https://canva.com" },
  { id: 14, name: "Samsung", slug: "samsung", logo: getLogoUrl("samsung"), website: "https://samsung.com" },
  { id: 15, name: "NordVPN", slug: "nordvpn", logo: getLogoUrl("nordvpn"), website: "https://nordvpn.com" },
  { id: 16, name: "Lenovo", slug: "lenovo", logo: getLogoUrl("lenovo"), website: "https://lenovo.com" },
  { id: 17, name: "Puma", slug: "puma", logo: getLogoUrl("puma"), website: "https://puma.com" },
  { id: 18, name: "Fiverr", slug: "fiverr", logo: getLogoUrl("fiverr"), website: "https://fiverr.com" },
  { id: 19, name: "Booking.com", slug: "bookingcom", logo: getLogoUrl("bookingcom"), website: "https://booking.com" },
  { id: 20, name: "Udemy", slug: "udemy", logo: getLogoUrl("udemy"), website: "https://udemy.com" },
  { id: 21, name: "Desktronic UK", slug: "desktronic-uk", logo: getLogoUrl("desktronic-uk"), website: "/go/desktronic-uk" },
  { id: 22, name: "Desktronic US", slug: "desktronic-us", logo: getLogoUrl("desktronic-us"), website: "/go/desktronic-us" },
  { id: 23, name: "Tenways UK", slug: "tenways-uk", logo: getLogoUrl("tenways-uk"), website: "https://tenways.com/pages/uk-store" },
  { id: 24, name: "Tenways US", slug: "tenways-us", logo: getLogoUrl("tenways-us"), website: "https://tenways.com" },
  { id: 25, name: "Geekbuying", slug: "geekbuying", logo: getLogoUrl("geekbuying"), website: "https://geekbuying.com" },
  { id: 26, name: "Banggood", slug: "banggood", logo: getLogoUrl("banggood"), website: "https://banggood.com" },
  { id: 27, name: "Zaful", slug: "zaful", logo: getLogoUrl("zaful"), website: "https://zaful.com" },
  { id: 28, name: "MassiveMobile", slug: "massivemobile", logo: getLogoUrl("massivemobile"), website: "https://massivemobile.de" },
  { id: 29, name: "DHgate", slug: "dhgate", logo: getLogoUrl("dhgate"), website: "https://dhgate.com" },
  { id: 30, name: "Envato Elements", slug: "envato", logo: getLogoUrl("envato"), website: "https://elements.envato.com" },
  { id: 31, name: "Semrush", slug: "semrush", logo: getLogoUrl("semrush"), website: "https://semrush.com" },
  { id: 32, name: "Namecheap", slug: "namecheap", logo: getLogoUrl("namecheap"), website: "https://namecheap.com" },
  { id: 33, name: "Squarespace", slug: "squarespace", logo: getLogoUrl("squarespace"), website: "https://squarespace.com" },
  { id: 34, name: "HostGator", slug: "hostgator", logo: getLogoUrl("hostgator"), website: "https://hostgator.com" },
  { id: 35, name: "Bluehost", slug: "bluehost", logo: getLogoUrl("bluehost"), website: "https://bluehost.com" },
  { id: 36, name: "Coursera", slug: "coursera", logo: getLogoUrl("coursera"), website: "https://coursera.org" },
  { id: 37, name: "Skillshare", slug: "skillshare", logo: getLogoUrl("skillshare"), website: "https://skillshare.com" },
  { id: 38, name: "NordPass", slug: "nordpass", logo: getLogoUrl("nordpass"), website: "https://nordpass.com" },
  { id: 39, name: "GoDaddy", slug: "godaddy", logo: getLogoUrl("godaddy"), website: "https://godaddy.com" },
  { id: 40, name: "Gymshark", slug: "gymshark", logo: getLogoUrl("gymshark"), website: "https://gymshark.com" },
  { id: 41, name: "Desktronic NL", slug: "desktronic-nl", logo: getLogoUrl("desktronic-nl"), website: "/go/desktronic-nl" },
  { id: 42, name: "Parc Astérix FR", slug: "parc-asterix-fr", logo: getLogoUrl("parc-asterix-fr"), website: "https://litl.si/Tlxjk" },
  { id: 43, name: "Bouquets by Post", slug: "bouquets-by-post", logo: getLogoUrl("bouquets-by-post"), website: "https://bouquetsbypost.com/muhammadhaziqueali" },
  { id: 44, name: "IM8 Health US", slug: "im8health", logo: getLogoUrl("im8health"), website: "https://www.im8health.com/METHEW29111" },
  { id: 45, name: "Redu Sculpt US", slug: "redusculpt", logo: getLogoUrl("redusculpt"), website: "https://www.redusculpt.com/METHEW46097" },
  { id: 46, name: "Evolution Power Tools US", slug: "evolution-power-tools", logo: getLogoUrl("evolution-power-tools"), website: "https://store.evolutionpowertools.com/?ref=METHEWDIPPY" },
  { id: 47, name: "Maple Prime US", slug: "maple-prime", logo: getLogoUrl("maple-prime"), website: "https://mapleprime.com/collections/all?bg_ref=al8eMAdGYf&utm_source=Muhammad%20Hazique%20Ali&utm_medium=affiliate&utm_campaign=Maple%20Prime%20Affiliate%20Program" },
  { id: 48, name: "Nobody's Child US", slug: "nobodys-child", logo: getLogoUrl("nobodys-child"), website: "https://www.nobodyschild.com/" },
  { id: 49, name: "Anycubic US", slug: "anycubic-us", logo: getLogoUrl("anycubic-us"), website: "/go/anycubic-us" },
  { id: 50, name: "Hitway UK", slug: "hitway-uk", logo: getLogoUrl("hitway-uk"), website: "/go/hitway-uk" },
  { id: 51, name: "Wolfbox UK", slug: "wolfbox-uk", logo: getLogoUrl("wolfbox-uk"), website: "/go/wolfbox-uk" },
  { id: 52, name: "Fitueyes UK", slug: "fitueyes-uk", logo: getLogoUrl("fitueyes-uk"), website: "/go/fitueyes-uk" },
  { id: 53, name: "Helvetus US", slug: "helvetus", logo: getLogoUrl("helvetus"), website: "/go/helvetus" },
  { id: 54, name: "Xsteel Targets US", slug: "xsteel-targets", logo: getLogoUrl("xsteel-targets"), website: "/go/xsteel-targets" },
  { id: 55, name: "Reconstitution Solution US", slug: "reconstitution-solution", logo: getLogoUrl("reconstitution-solution"), website: "/go/reconstitution-solution" },
  { id: 56, name: "TuxMat US", slug: "tuxmat-us", logo: getLogoUrl("tuxmat-us"), website: "/go/tuxmat-us" }
];

export const FALLBACK_COUPONS: Coupon[] = [
  // Amazon
  { id: 1, code: "AMZN20", discount: "20% OFF", description: "Get 20% off on all electronics and home appliances. Limited time offer.", expiry_date: "2026-12-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[0] },
  { id: 2, code: "FREEAMZN", discount: "Free Shipping", description: "Free shipping on orders above $35. Applicable sitewide.", expiry_date: "2026-08-15T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[0] },
  { id: 3, code: "AMZNBOOKS10", discount: "10% OFF", description: "Save an extra 10% on highly trending physical books and bestsellers.", expiry_date: "2026-09-30T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[0] },

  // Nike
  { id: 4, code: "JUSTDOIT15", discount: "15% OFF", description: "Save 15% on your next purchase of running shoes and athletic apparel.", expiry_date: "2026-09-30T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[1] },
  { id: 5, code: "NIKECLUB25", discount: "25% OFF", description: "Exclusive discount for Nike Club members on select merchandise.", expiry_date: "2026-10-10T23:59:59.000Z", is_verified: false, store: FALLBACK_STORES[1] },
  { id: 6, code: "NIKEFREESHIP", discount: "Free Shipping", description: "Free standard shipping sitewide for registered Nike Members.", expiry_date: "2026-11-15T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[1] },

  // Hostinger
  { id: 7, code: "HOSTING80", discount: "80% OFF", description: "Get up to 80% off on premium web hosting plans + free domain.", expiry_date: "2026-12-25T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[2] },
  { id: 8, code: "SAVE10", discount: "Extra 10% OFF", description: "Additional 10% discount on VPS and cloud hosting packages.", expiry_date: "2026-11-30T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[2] },
  { id: 9, code: "HOSTSPECIAL", discount: "Extra 7% OFF", description: "Save an extra 7% on all 48-month web hosting subscriptions.", expiry_date: "2026-12-15T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[2] },

  // Adidas
  { id: 10, code: "ADI30", discount: "30% OFF", description: "Get 30% off sitewide on shoes, sportswear, and accessories.", expiry_date: "2026-07-04T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[3] },
  { id: 11, code: "STRIPES20", discount: "20% OFF", description: "Extra 20% off for Creators Club members on select items.", expiry_date: "2026-10-25T23:59:59.000Z", is_verified: false, store: FALLBACK_STORES[3] },

  // Walmart
  { id: 12, code: "WALMART50", discount: "$10 OFF", description: "Get $10 off on your first grocery order of $50 or more.", expiry_date: "2026-06-30T23:59:59.000Z", is_verified: false, store: FALLBACK_STORES[4] },
  { id: 13, code: "WMFREESHIP", discount: "Free Shipping", description: "Free shipping on orders over $35 with no membership required.", expiry_date: "2026-09-15T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[4] },

  // eBay
  { id: 14, code: "EBAYFASH10", discount: "10% OFF", description: "Save an extra 10% on select brand clothing and accessories.", expiry_date: "2026-08-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[5] },
  { id: 15, code: "COLLECT25", discount: "25% OFF", description: "Get 25% off on vintage collectibles, action figures, and sports cards.", expiry_date: "2026-12-15T23:59:59.000Z", is_verified: false, store: FALLBACK_STORES[5] },
  { id: 16, code: "EBAYSAVE5", discount: "$5 OFF", description: "Get $5 off sitewide on any item orders over $25 or more.", expiry_date: "2026-07-20T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[5] },

  // Target
  { id: 17, code: "TARGETROOM", discount: "15% OFF", description: "Save 15% on home decor, bedding, and stylish furniture.", expiry_date: "2026-07-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[6] },
  { id: 18, code: "TGTBABY", discount: "$20 OFF", description: "Get $20 gift card when you spend $100 on baby essentials.", expiry_date: "2026-08-20T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[6] },

  // Apple
  { id: 19, code: "IPADSTUDENT", discount: "$100 OFF", description: "Students save up to $100 on the new iPad Air or iPad Pro.", expiry_date: "2026-09-15T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[7] },
  { id: 20, code: "APPLERED", discount: "Free Engraving", description: "Get free personalized engraving on any new AirPods or Apple Pencil.", expiry_date: "2026-12-25T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[7] },

  // Starbucks
  { id: 21, code: "BREWFREE", discount: "Buy 1 Get 1", description: "Buy one handcrafted beverage and get one of equal or lesser value free.", expiry_date: "2026-06-30T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[8] },
  { id: 22, code: "STAR2X", discount: "Double Stars", description: "Earn double stars on all purchases using the Starbucks App today.", expiry_date: "2026-07-15T23:59:59.000Z", is_verified: false, store: FALLBACK_STORES[8] },

  // Steam
  { id: 23, code: "STEAMSUMMER", discount: "50% OFF", description: "Save 50% or more on top-selling indie games during the seasonal sale.", expiry_date: "2026-08-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[9] },
  { id: 24, code: "HALFLIFE90", discount: "90% OFF", description: "Get 90% off the legendary Half-Life series for a limited time.", expiry_date: "2026-09-30T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[9] },

  // AliExpress
  { id: 25, code: "ALIEXNEW", discount: "$4 OFF", description: "Special ConvertSocial coupon: $4 off your first order of $5 or more.", expiry_date: "2026-12-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[10] },
  { id: 26, code: "ALSAVE12", discount: "$12 OFF", description: "Save $12 on select global orders valued at $80 or more.", expiry_date: "2026-10-15T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[10] },
  { id: 27, code: "ALISPRING5", discount: "5% OFF", description: "Save an extra 5% on super trending smart gadgets and tech accessories.", expiry_date: "2026-08-30T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[10] },

  // Adobe
  { id: 28, code: "ADOBECREATIVE", discount: "20% OFF", description: "Impact network exclusive: Save 20% on Creative Cloud All Apps plans.", expiry_date: "2026-12-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[11] },
  { id: 29, code: "ADOBESTUDENT", discount: "60% OFF", description: "Students & teachers save over 60% on entire Creative Cloud catalog.", expiry_date: "2026-11-20T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[11] },
  { id: 30, code: "ADOBEPRO", discount: "Extra 10% OFF", description: "Additional 10% off monthly Acrobat Pro document scanner subscriptions.", expiry_date: "2026-09-15T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[11] },

  // Canva
  { id: 31, code: "CANVAPRO30", discount: "30 Days Free", description: "Get 30 days of Canva Pro premium designer tools for absolutely free.", expiry_date: "2026-12-25T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[12] },
  { id: 32, code: "CANVAEDU", discount: "Free Access", description: "100% free premium class designs and workflows for verified educators.", expiry_date: "2026-12-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[12] },
  { id: 33, code: "CANVASAVE10", discount: "10% OFF", description: "Impact exclusive: Save 10% on annual Canva Pro premium subscriptions.", expiry_date: "2026-10-30T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[12] },

  // Samsung
  { id: 34, code: "SAMSUNGEVO", discount: "10% OFF", description: "Awin network exclusive: Save 10% on select premium Galaxy smartphones.", expiry_date: "2026-12-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[13] },
  { id: 35, code: "MEMBERS5", discount: "Extra 5% OFF", description: "Additional 5% discount sitewide for registered Samsung Members.", expiry_date: "2026-09-10T23:59:59.000Z", is_verified: false, store: FALLBACK_STORES[13] },
  { id: 36, code: "SAMSUNGTVS", discount: "$150 OFF", description: "Get $150 off on award-winning QLED 4K Smart TVs and sound systems.", expiry_date: "2026-08-25T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[13] },

  // NordVPN
  { id: 37, code: "NORDVPN68", discount: "68% OFF", description: "Save 68% on 2-year cybersecurity shield protection + 3 months free.", expiry_date: "2026-12-25T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[14] },
  { id: 38, code: "SECURE10", discount: "Extra 10% OFF", description: "Get 10% off high-speed NordVPN Dedicated IP add-on plans.", expiry_date: "2026-10-15T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[14] },
  { id: 39, code: "NORDPASS30", discount: "30% OFF", description: "Get 30% off NordPass Premium password locker subscriptions.", expiry_date: "2026-09-30T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[14] },

  // Lenovo
  { id: 40, code: "THINKPAD10", discount: "10% OFF", description: "Impact exclusive: Save 10% on elite ThinkPad corporate laptops.", expiry_date: "2026-12-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[15] },
  { id: 41, code: "LEGIONSAVE", discount: "15% OFF", description: "Get 15% off high-performance Legion esports gaming laptops.", expiry_date: "2026-08-30T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[15] },

  // Puma
  { id: 42, code: "PUMASPEED", discount: "20% OFF", description: "Awin exclusive: Save 20% on Puma nitro athletic footwear and tracksuits.", expiry_date: "2026-09-15T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[16] },
  { id: 43, code: "FOREVERFASTER", discount: "Extra 15% OFF", description: "Additional 15% off clearance items and summer sports merchandise.", expiry_date: "2026-10-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[16] },

  // Fiverr
  { id: 44, code: "FIVERRNEW10", discount: "10% OFF", description: "Awin exclusive: Get 10% off your first digital design or dev service order.", expiry_date: "2026-12-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[17] },
  { id: 45, code: "FIVERRBIZ", discount: "15% OFF", description: "Save 15% on Fiverr Business setup and corporate onboarding.", expiry_date: "2026-11-30T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[17] },

  // Booking.com
  { id: 46, code: "BOOKING15", discount: "15% OFF", description: "Impact exclusive: Save 15% or more on certified Genius hotel stays worldwide.", expiry_date: "2026-09-30T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[18] },
  { id: 47, code: "RENTALCAR10", discount: "10% OFF", description: "Get 10% off premium global car rentals when booked alongside stays.", expiry_date: "2026-08-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[18] },

  // Udemy
  { id: 48, code: "UDEMYLEARN", discount: "85% OFF", description: "Impact exclusive: Up to 85% off select digital developer courses.", expiry_date: "2026-12-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[19] },
  { id: 49, code: "SKILLS2026", discount: "Extra 10% OFF", description: "Save an extra 10% on business and project management courses.", expiry_date: "2026-10-15T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[19] },
  { id: 50, code: "UDEMYFIRST", discount: "$10 OFF", description: "Get any professional developer course for just $10 flat for new accounts.", expiry_date: "2026-12-25T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[19] },

  // Desktronic UK
  { id: 51, code: "MarkPaul15", discount: "15% off discount code", description: "Exclusive 15% off discount code sitewide on premium standing desks and frames.", expiry_date: "2026-10-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[20], affiliate_url: "/go/desktronic-uk" },
  { id: 52, code: "MarkPaul15", discount: "£150 off - Seasonal deals", description: "Save £150 on complete ergonomic office packages and standing desk bundles.", expiry_date: "2026-10-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[20], affiliate_url: "/go/desktronic-uk" },
  { id: 53, code: "MarkPaul15", discount: "20% off coupon code sitewide", description: "Verified 20% off coupon code sitewide on smart height-adjustable tables.", expiry_date: "2026-10-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[20], affiliate_url: "/go/desktronic-uk" },
  { id: 54, code: "MarkPaul15", discount: "50% off - limited time offer", description: "Huge 50% off limited-time offer on clearance ergonomic items.", expiry_date: "2026-10-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[20], affiliate_url: "/go/desktronic-uk" },
  { id: 55, code: "MarkPaul15", discount: "free shipping", description: "Get free standard UK delivery on all orders above £100.", expiry_date: "2026-10-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[20], affiliate_url: "/go/desktronic-uk" },
  { id: 56, code: "MarkPaul15", discount: "35% off on desk frame", description: "Save 35% off on desk frame bundles and motorized dual-motor models.", expiry_date: "2026-10-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[20], affiliate_url: "/go/desktronic-frame-homepro" },
  { id: 57, code: "MarkPaul15", discount: "34% off on height-adjustable desk", description: "Enjoy 34% off on height-adjustable desks with smart memory presets.", expiry_date: "2026-10-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[20], affiliate_url: "/go/desktronic-desk-homepro" },
  { id: 58, code: "MarkPaul15", discount: "30% off on office chairs", description: "Save 30% on active ergonomic office chairs with lumbar support.", expiry_date: "2026-10-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[20], affiliate_url: "/go/desktronic-uk" },
  { id: 59, code: "MarkPaul15", discount: "£199 for tabletops", description: "Special offer: Premium bamboo and oak tabletops starting from just £199.", expiry_date: "2026-10-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[20], affiliate_url: "/go/desktronic-uk" },
  { id: 60, code: "MarkPaul15", discount: "30% off on accessories", description: "Get 30% off on selected desk accessories, cable trays, and monitors.", expiry_date: "2026-10-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[20], affiliate_url: "/go/desktronic-uk" },
  { id: 61, code: "MarkPaul15", discount: "28% off on desk drawer", description: "Save an extra 28% on under-desk drawers and metal filing cabinets.", expiry_date: "2026-10-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[20], affiliate_url: "/go/desktronic-uk" },
  { id: 62, code: "MarkPaul15", discount: "20% off on solid wood desks", description: "Get 20% off on premium solid wood desktop collections.", expiry_date: "2026-10-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[20], affiliate_url: "/go/desktronic-uk" },
  { id: 63, code: "MarkPaul15", discount: "£15 off on newsletter signup", description: "Get £15 off your first standing desk order on newsletter signup.", expiry_date: "2026-10-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[20], affiliate_url: "/go/desktronic-uk" },
  { id: 631, code: "MarkPaul15", discount: "15% off student discount", description: "Verified 15% off student and educator discount code on premium ergonomic standing desks.", expiry_date: "2026-10-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[20], affiliate_url: "/go/desktronic-uk" },
  { id: 632, code: "MarkPaul15", discount: "£200 off - Corporate bulk deals", description: "Save an extra £200 on business and home office bulk standing desk package orders.", expiry_date: "2026-10-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[20], affiliate_url: "/go/desktronic-uk" },

  // Desktronic US
  { id: 64, code: "METHEWDIPPY", discount: "15% off discount code", description: "Exclusive $15 off discount code sitewide on premium standing desks and frames.", expiry_date: "2026-10-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[21], affiliate_url: "/go/desktronic-us" },
  { id: 65, code: "METHEWDIPPY", discount: "$150 off - Seasonal deals", description: "Save $150 on complete ergonomic office packages and standing desk bundles.", expiry_date: "2026-10-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[21], affiliate_url: "/go/desktronic-us" },
  { id: 66, code: "METHEWDIPPY", discount: "20% off coupon code sitewide", description: "Verified 20% off coupon code sitewide on smart height-adjustable tables.", expiry_date: "2026-10-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[21], affiliate_url: "/go/desktronic-us" },
  { id: 67, code: "METHEWDIPPY", discount: "50% off - limited time offer", description: "Huge 50% off limited-time offer on clearance ergonomic items.", expiry_date: "2026-10-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[21], affiliate_url: "/go/desktronic-us" },
  { id: 68, code: "METHEWDIPPY", discount: "free shipping", description: "Get free standard US delivery on all orders above $100.", expiry_date: "2026-10-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[21], affiliate_url: "/go/desktronic-us" },
  { id: 69, code: "METHEWDIPPY", discount: "35% off on desk frame", description: "Save 35% off on desk frame bundles and motorized dual-motor models.", expiry_date: "2026-10-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[21], affiliate_url: "/go/desktronic-us" },
  { id: 70, code: "METHEWDIPPY", discount: "34% off on height-adjustable desk", description: "Enjoy 34% off on height-adjustable desks with smart memory presets.", expiry_date: "2026-10-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[21], affiliate_url: "/go/desktronic-us" },
  { id: 71, code: "METHEWDIPPY", discount: "30% off on office chairs", description: "Save 30% on active ergonomic office chairs with lumbar support.", expiry_date: "2026-10-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[21], affiliate_url: "/go/desktronic-us" },
  { id: 72, code: "METHEWDIPPY", discount: "$199 for tabletops", description: "Special offer: Premium bamboo and oak tabletops starting from just $199.", expiry_date: "2026-10-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[21], affiliate_url: "/go/desktronic-us" },
  { id: 73, code: "METHEWDIPPY", discount: "30% off on accessories", description: "Get 30% off on selected desk accessories, cable trays, and monitors.", expiry_date: "2026-10-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[21], affiliate_url: "/go/desktronic-us" },
  { id: 731, code: "METHEWDIPPY", discount: "28% off on desk drawer", description: "Save an extra 28% on under-desk drawers and metal filing cabinets.", expiry_date: "2026-10-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[21], affiliate_url: "/go/desktronic-us" },
  { id: 732, code: "METHEWDIPPY", discount: "20% off on solid wood desks", description: "Get 20% off on premium solid wood desktop collections.", expiry_date: "2026-10-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[21], affiliate_url: "/go/desktronic-us" },
  { id: 733, code: "METHEWDIPPY", discount: "$15 off on newsletter signup", description: "Get $15 off your first standing desk order on newsletter signup.", expiry_date: "2026-10-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[21], affiliate_url: "/go/desktronic-us" },
  { id: 734, code: "METHEWDIPPY", discount: "15% off student discount", description: "Verified 15% off student and educator discount code on premium ergonomic standing desks.", expiry_date: "2026-10-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[21], affiliate_url: "/go/desktronic-us" },
  { id: 735, code: "METHEWDIPPY", discount: "$200 off - Corporate bulk deals", description: "Save an extra $200 on business and home office bulk standing desk package orders.", expiry_date: "2026-10-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[21], affiliate_url: "/go/desktronic-us" },

  // Tenways UK
  { id: 74, code: "TENWAYSUK", discount: "£50 OFF", description: "Special launch coupon: £50 off your first Tenways electric bike order.", expiry_date: "2026-12-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[22] },
  { id: 75, code: "RIDEGREEN", discount: "Free Guards", description: "Get free mudguards and structural safety upgrades with any e-bike.", expiry_date: "2026-09-30T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[22] },

  // Tenways US
  { id: 76, code: "TENWAYSUS", discount: "$60 OFF", description: "Get $60 off on sleek lightweight city e-bikes orders US wide.", expiry_date: "2026-12-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[23] },
  { id: 77, code: "ECOMOVE", discount: "Free Stand", description: "Get a free adjustable premium kickstand with any new e-bike purchase.", expiry_date: "2026-09-30T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[23] },

  // Geekbuying
  { id: 78, code: "GEEKNEW", discount: "$5 OFF", description: "ConvertSocial exclusive: Save $5 on orders over $50 sitewide.", expiry_date: "2026-12-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[24] },
  { id: 79, code: "GEEKTECH10", discount: "10% OFF", description: "Get 10% off high-speed 3D printers, lasers, and smart appliances.", expiry_date: "2026-09-15T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[24] },
  { id: 80, code: "GEEKSAVE", discount: "$15 OFF", description: "Get an additional $15 off on tech collections valued at $200+.", expiry_date: "2026-10-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[24] },

  // Banggood
  { id: 81, code: "BGNEW10", discount: "10% OFF", description: "ConvertSocial coupon: Save an extra 10% on your first wholesale order.", expiry_date: "2026-12-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[25] },
  { id: 82, code: "BGSPRING8", discount: "8% OFF", description: "Save 8% on active outdoor tools, smart electronics, and RC hobbies.", expiry_date: "2026-08-30T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[25] },
  { id: 83, code: "BGSAVE25", discount: "$25 OFF", description: "Save $25 on bulk orders valued at $150 or more sitewide.", expiry_date: "2026-11-15T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[25] },

  // Zaful
  { id: 84, code: "ZAFULNEW", discount: "15% OFF", description: "ConvertSocial exclusive: 15% off first order on clothing styles.", expiry_date: "2026-12-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[26] },
  { id: 85, code: "ZAFUL20", discount: "20% OFF", description: "Save 20% on visual design outfits on orders over $59.", expiry_date: "2026-10-15T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[26] },
  { id: 86, code: "ZAFULFREE", discount: "Free Shipping", description: "Get free standard shipping on apparel orders above $39.", expiry_date: "2026-09-30T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[26] },

  // MassiveMobile
  { id: 87, code: "MASSIVE10", discount: "10% OFF", description: "ConvertSocial deal: Save 10% on all modular tech mobile accessories.", expiry_date: "2026-12-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[27] },
  { id: 88, code: "MASSIVEFREE", discount: "Free Delivery", description: "Get free express courier delivery on orders above €100.", expiry_date: "2026-09-30T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[27] },

  // DHgate
  { id: 89, code: "DHNEW4", discount: "$4 OFF", description: "ConvertSocial coupon: $4 off on first order of $5 or more.", expiry_date: "2026-12-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[28] },
  { id: 90, code: "DHSAVE10", discount: "$10 OFF", description: "Get $10 off sitewide on bulk items orders above $100.", expiry_date: "2026-09-15T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[28] },
  { id: 91, code: "DHGATE20", discount: "$20 OFF", description: "Save an extra $20 on bulk orders valued at $200 or more.", expiry_date: "2026-10-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[28] },

  // Envato Elements
  { id: 92, code: "ENVATOSTUDENT", discount: "30% OFF", description: "Impact exclusive: Students save 30% on unlimited creative assets.", expiry_date: "2026-12-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[29] },
  { id: 93, code: "ENVATOTRIAL", discount: "7 Days Free", description: "Get 7 days of unlimited vector templates and media assets for free.", expiry_date: "2026-12-25T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[29] },
  { id: 94, code: "ENVATOSAVE10", discount: "10% OFF", description: "Save 10% on annual individual creative team registrations.", expiry_date: "2026-09-30T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[29] },

  // Semrush
  { id: 95, code: "SEMRUSHTRIAL", discount: "14 Days Free", description: "Impact network special: Get 14 days free access to Semrush Pro SEO suite.", expiry_date: "2026-12-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[30] },
  { id: 96, code: "SEMRUSHSAVE", discount: "17% OFF", description: "Save 17% on any annual SEO research plans Pro or Guru.", expiry_date: "2026-10-30T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[30] },
  { id: 97, code: "SEMRUSHGURU", discount: "7 Days Free", description: "Get 7 days free access to Semrush Guru marketing agency plan.", expiry_date: "2026-09-15T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[30] },

  // Namecheap
  { id: 98, code: "NAMECHEAP99", discount: "$0.99 Domains", description: "Get selected .com domain registration for just $0.99 for first year.", expiry_date: "2026-12-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[31] },
  { id: 99, code: "NAMECHEAPSAVE", discount: "20% OFF", description: "Impact network exclusive: Save 20% on Stellar shared web hosting.", expiry_date: "2026-10-15T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[31] },
  { id: 100, code: "SSLPROTECT", discount: "15% OFF", description: "Save 15% on Comodo SSL site certificates and security tools.", expiry_date: "2026-08-30T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[31] },

  // Squarespace
  { id: 101, code: "GIMME10", discount: "10% OFF", description: "Save 10% on your first website, commerce shop, or domain registration.", expiry_date: "2026-12-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[32] },
  { id: 102, code: "SQSSTUDENT", discount: "50% OFF", description: "Verified students save over 50% on annual website subscriptions.", expiry_date: "2026-10-30T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[32] },

  // HostGator
  { id: 103, code: "GATOR60", discount: "60% OFF", description: "Impact exclusive: Save 60% on WordPress Hatchling shared web hosting.", expiry_date: "2026-12-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[33] },
  { id: 104, code: "GATORPENNY", discount: "$0.01 First Mo", description: "Get your first month of shared web hosting for just one penny.", expiry_date: "2026-09-30T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[33] },
  { id: 105, code: "DOMAINGATOR", discount: "$4.99 Domains", description: "Save and get domains for just $4.99 during corporate promotions.", expiry_date: "2026-10-15T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[33] },

  // Bluehost
  { id: 106, code: "BLUEHOST75", discount: "75% OFF", description: "Impact network exclusive: Get 75% off managed WordPress hosting.", expiry_date: "2026-12-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[34] },
  { id: 107, code: "BLUEFREE", discount: "Free Domain", description: "Get a free custom domain registration with any annual plan order.", expiry_date: "2026-11-30T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[34] },
  { id: 108, code: "BLUESAVE10", discount: "Extra 10% OFF", description: "Save an extra 10% on WooCommerce online store registrations.", expiry_date: "2026-09-15T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[34] },

  // Coursera
  { id: 109, code: "COURSERAFREE", discount: "7 Days Free", description: "Impact exclusive: 7 days free access to standard Google & Meta certificates.", expiry_date: "2026-12-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[35] },
  { id: 110, code: "COURSERA10", discount: "10% OFF", description: "Get 10% off selected university professional degree courses.", expiry_date: "2026-10-15T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[35] },

  // Skillshare
  { id: 111, code: "SKILLSHARE30", discount: "30 Days Free", description: "Get 30 days free access to premium digital creative video catalog.", expiry_date: "2026-12-25T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[36] },
  { id: 112, code: "SKILLSHARE50", discount: "50% OFF", description: "Impact exclusive: Save 50% on annual premium memberships.", expiry_date: "2026-12-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[36] },
  { id: 113, code: "CREATIVE10", discount: "Extra 10% OFF", description: "Save 10% on corporate creative learning teams onboarding.", expiry_date: "2026-09-15T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[36] },

  // NordPass
  { id: 114, code: "NORDPASS50", discount: "50% OFF", description: "Impact network exclusive: Save 50% on 2-year password lockers.", expiry_date: "2026-12-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[37] },
  { id: 115, code: "PASSSECURE", discount: "Extra 10% OFF", description: "Get an extra 10% off NordPass Business identity packages.", expiry_date: "2026-08-30T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[37] },

  // GoDaddy
  { id: 116, code: "GODADDY30", discount: "30% OFF", description: "Save 30% on first year standard hosting and domain bundles.", expiry_date: "2026-12-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[38] },
  { id: 117, code: "COM10", discount: "$4.99 .com", description: "Get your first .com domain registration for just $4.99.", expiry_date: "2026-09-15T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[38] },
  { id: 118, code: "GODADDYHOST", discount: "50% OFF", description: "Save 50% on Economy Shared Web Hosting annual plans.", expiry_date: "2026-08-30T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[38] },

  // Gymshark
  { id: 119, code: "GYMSHARK10", discount: "10% OFF", description: "Save 10% sitewide on gym sportswear, activewear, and gear.", expiry_date: "2026-12-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[39] },
  { id: 120, code: "SHARKFREESHIP", discount: "Free Shipping", description: "Get free shipping on fitness gear orders above $75 sitewide.", expiry_date: "2026-09-15T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[39] },
  { id: 121, code: "SHARKSTUDENT", discount: "15% OFF", description: "Impact exclusive: Students save 15% on latest fitness clothes.", expiry_date: "2026-08-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[39] },

  // Desktronic NL
  { id: 122, code: "METHEW", discount: "15% actiecode", description: "Exclusieve kortingscode voor €15 korting op het hele assortiment sta-bureaus en frames.", expiry_date: "2026-10-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[40], affiliate_url: "/go/desktronic-nl" },
  { id: 123, code: "METHEW", discount: "€150 korting - Complete bureaus", description: "Bespaar €150 op complete ergonomische kantoorpakketten en sta-bureau combinaties.", expiry_date: "2026-10-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[40], affiliate_url: "/go/desktronic-nl" },
  { id: 124, code: "METHEW", discount: "20% kortingscode sitewide", description: "Geverifieerde 20% kortingscode op alle slimme in hoogte verstelbare bureaus.", expiry_date: "2026-10-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[40], affiliate_url: "/go/desktronic-nl" },
  { id: 125, code: "METHEW", discount: "50% korting - Tijdelijke aanbieding", description: "Enorme 50% korting op geselecteerde ergonomische kantoorartikelen.", expiry_date: "2026-10-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[40], affiliate_url: "/go/desktronic-nl" },
  { id: 126, code: "METHEW", discount: "gratis verzending", description: "Gratis standaard verzending in heel Nederland bij bestellingen vanaf €100.", expiry_date: "2026-10-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[40], affiliate_url: "/go/desktronic-nl" },
  { id: 127, code: "METHEW", discount: "35% korting op bureauframe", description: "Bespaar 35% op in hoogte verstelbare bureauframe (HomePro) met dubbele motor.", expiry_date: "2026-10-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[40], affiliate_url: "/go/desktronic-nl" },
  { id: 128, code: "METHEW", discount: "34% korting op sta-bureau", description: "Geniet van 34% korting op sta-bureaus met slimme gegensinstellingen.", expiry_date: "2026-10-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[40], affiliate_url: "/go/desktronic-nl" },
  { id: 129, code: "METHEW", discount: "30% korting op bureaustoelen", description: "Bespaar 30% op actieve ergonomische bureaustoelen met lendensteun.", expiry_date: "2026-10-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[40], affiliate_url: "/go/desktronic-nl" },
  { id: 130, code: "METHEW", discount: "€199 voor bureaubladen", description: "Speciale aanbieding: Premium bureaubladen collectie vanaf slechts €199.", expiry_date: "2026-10-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[40], affiliate_url: "/go/desktronic-nl" },
  { id: 131, code: "METHEW", discount: "30% korting op accessoires", description: "Ontvang 30% korting op geselecteerde bureau-accessoires, kabelgoten en armen.", expiry_date: "2026-10-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[40], affiliate_url: "/go/desktronic-nl" },
  { id: 132, code: "METHEW", discount: "28% korting op ladeblokken", description: "Bespaar 28% extra op onderbureau lades en metalen archiefkasten.", expiry_date: "2026-10-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[40], affiliate_url: "/go/desktronic-nl" },
  { id: 133, code: "METHEW", discount: "20% korting op massief hout", description: "Ontvang 20% korting op de premium bureaubladen collectie van massief hout.", expiry_date: "2026-10-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[40], affiliate_url: "/go/desktronic-nl" },
  { id: 134, code: "METHEW", discount: "€15 korting bij nieuwsbrief", description: "Meld je aan voor de nieuwsbrief en ontvang direct €15 korting op je eerste sta-bureau.", expiry_date: "2026-10-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[40], affiliate_url: "/go/desktronic-nl" },
  { id: 1341, code: "METHEW", discount: "15% studentenkorting", description: "Geverifieerde 15% studenten- en docentenkorting op het gehele assortiment sta-bureaus.", expiry_date: "2026-10-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[40], affiliate_url: "/go/desktronic-nl" },
  { id: 1342, code: "METHEW", discount: "€200 korting - Zakelijke bulkdeals", description: "Bespaar €200 extra op zakelijke en thuiswerkers bulkbestellingen van sta-bureaus.", expiry_date: "2026-10-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[40], affiliate_url: "/go/desktronic-nl" },

  // Parc Astérix FR
  { id: 1343, code: "DEAL", discount: "25% de réduction", description: "Bénéficiez de 25% de réduction sur les séjours Hôtel + Billets au Parc Astérix en réservant votre package en ligne.", expiry_date: "2026-12-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[41], affiliate_url: "https://litl.si/Tlxjk" },
  { id: 1344, code: "DEAL", discount: "15% de réduction", description: "Économisez 15% sur vos billets d'entrée adulte pour toute visite durant la saison estivale. Offre d'été limitée.", expiry_date: "2026-12-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[41], affiliate_url: "https://litl.si/Tlxjk" },
  { id: 1345, code: "DEAL", discount: "Dès 42€", description: "Profitez d'un tarif promotionnel exclusif web pour des visites en basse saison. Quantités très limitées.", expiry_date: "2026-12-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[41], affiliate_url: "https://litl.si/Tlxjk" },
  { id: 1346, code: "DEAL", discount: "Dès 49€", description: "Réservez vos billets datés à l'avance (Billet Futé) sur le site officiel et payez seulement 49€ au lieu du tarif plein.", expiry_date: "2026-12-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[41], affiliate_url: "https://litl.si/Tlxjk" },
  { id: 1347, code: "DEAL", discount: "10% de réduction", description: "Profitez de 10% de réduction supplémentaire sur vos réservations de billets effectuées à l'avance au Parc Astérix.", expiry_date: "2026-12-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[41], affiliate_url: "https://litl.si/Tlxjk" },
  { id: 1348, code: "DEAL", discount: "10% de réduction", description: "Inscrivez-vous à la newsletter du Parc Astérix et obtenez un code promo exclusif de 10% de réduction sur votre achat.", expiry_date: "2026-12-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[41], affiliate_url: "https://litl.si/Tlxjk" },
  { id: 1349, code: "DEAL", discount: "Dès 139€", description: "Achetez le Pass Gaulois à partir de 139€ et bénéficiez d'un accès illimité et de nombreux avantages exclusifs au parc.", expiry_date: "2026-12-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[41], affiliate_url: "https://litl.si/Tlxjk" },
  { id: 1350, code: "DEAL", discount: "15% de réduction", description: "Économisez 15% sur les billets famille du Parc Astérix. Une offre idéale pour profiter d'un moment inoubliable.", expiry_date: "2026-12-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[41], affiliate_url: "https://litl.si/Tlxjk" },
  { id: 1351, code: "DEAL", discount: "Dès 55€", description: "Achetez vos billets à prix spécial à partir de 55€ seulement. Profitez des attractions à un tarif exceptionnel.", expiry_date: "2026-12-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[41], affiliate_url: "https://litl.si/Tlxjk" },
  { id: 1352, code: "DEAL", discount: "Gratuit", description: "Entrée gratuite pour les enfants accompagnés d'un adulte muni d'un billet payant lors des périodes spéciales.", expiry_date: "2026-12-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[41], affiliate_url: "https://litl.si/Tlxjk" },
  { id: 1353, code: "DEAL", discount: "Dès 49€", description: "Tarif Tribu : Obtenez un tarif réduit à partir de 49€ par personne pour tout achat simultané de 5 à 15 billets.", expiry_date: "2026-12-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[41], affiliate_url: "https://litl.si/Tlxjk" },
  { id: 1354, code: "DEAL", discount: "Dès 10€", description: "Profitez de l'option coupe-file Filotomatix à partir de 10€ pour éviter les files d'attente aux attractions phares.", expiry_date: "2026-12-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[41], affiliate_url: "https://litl.si/Tlxjk" },
  
  // Bouquets by Post
  { id: 1355, code: "DEAL", discount: "10% off", description: "Exclusive 10% off coupon code sitewide on fresh flower gifts.", expiry_date: "2026-08-10T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[42], affiliate_url: "https://bouquetsbypost.com/muhammadhaziqueali" },
  { id: 1356, code: "DEAL", discount: "70% off", description: "Get up to 70% off on stunning hand-tied bouquets and flower arrangements.", expiry_date: "2026-08-07T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[42], affiliate_url: "https://bouquetsbypost.com/muhammadhaziqueali" },
  { id: 1357, code: "DEAL", discount: "5% off", description: "Exclusive 5% off discount code sitewide on all order values.", expiry_date: "2026-08-07T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[42], affiliate_url: "https://bouquetsbypost.com/muhammadhaziqueali" },
  { id: 1358, code: "DEAL", discount: "50% off", description: "Save 50% off on selected flower bouquets and summer collections.", expiry_date: "2026-08-08T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[42], affiliate_url: "https://bouquetsbypost.com/muhammadhaziqueali" },
  { id: 1359, code: "DEAL", discount: "Free shipping", description: "Free UK standard delivery on all flower orders. No minimum spend required.", expiry_date: "2026-08-08T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[42], affiliate_url: "https://bouquetsbypost.com/muhammadhaziqueali" },
  { id: 1360, code: "DEAL", discount: "50% off", description: "Birthday flowers promotion: Save 50% on special birthday flower arrangements.", expiry_date: "2026-08-07T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[42], affiliate_url: "https://bouquetsbypost.com/muhammadhaziqueali" },
  { id: 1361, code: "DEAL", discount: "45% off", description: "Enjoy 45% off on cute teddy bears when added to your flower order.", expiry_date: "2026-08-07T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[42], affiliate_url: "https://bouquetsbypost.com/muhammadhaziqueali" },
  { id: 1362, code: "DEAL", discount: "40% off", description: "Get 40% off on celebratory helium and latex balloons with your flowers.", expiry_date: "2026-08-06T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[42], affiliate_url: "https://bouquetsbypost.com/muhammadhaziqueali" },
  { id: 1363, code: "DEAL", discount: "20% off", description: "Save 20% off on custom greeting cards and personalized messages.", expiry_date: "2026-08-09T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[42], affiliate_url: "https://bouquetsbypost.com/muhammadhaziqueali" },
  { id: 1364, code: "DEAL", discount: "10% off", description: "Get 10% off your first flower delivery order when you sign up for newsletter updates.", expiry_date: "2026-08-10T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[42], affiliate_url: "https://bouquetsbypost.com/muhammadhaziqueali" },
  { id: 1365, code: "DEAL", discount: "5% off", description: "Save 5% on luxury chocolates and truffles bundles added to any order.", expiry_date: "2026-08-06T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[42], affiliate_url: "https://bouquetsbypost.com/muhammadhaziqueali" },

  // IM8 Health US
  { id: 1366, code: "METHEW29111", discount: "20% Off", description: "Get your exclusive 20% off coupon code on IM8 Health products.", expiry_date: "2026-08-20T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[43], affiliate_url: "https://www.im8health.com/METHEW29111" },
  { id: 1367, code: "METHEW29111", discount: "15% Off", description: "Get 15% off discount code sitewide on IM8 Health Daily Essentials.", expiry_date: "2026-08-23T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[43], affiliate_url: "https://www.im8health.com/METHEW29111" },
  { id: 1368, code: "METHEW29111", discount: "30% Off Welcome Kit", description: "Save 30% off - Welcome kit + 5 free sachets when you sign up today.", expiry_date: "2026-08-18T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[43], affiliate_url: "https://www.im8health.com/METHEW29111" },
  { id: 1369, code: "METHEW29111", discount: "Free Shipping", description: "Enjoy free shipping on all orders sitewide. Auto-applied with code.", expiry_date: "2026-08-20T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[43], affiliate_url: "https://www.im8health.com/METHEW29111" },
  { id: 1370, code: "METHEW29111", discount: "30% Off Subscription", description: "Get 30% off - Daily Ultimate Essentials Pro 90-Days Subscription.", expiry_date: "2026-08-23T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[43], affiliate_url: "https://www.im8health.com/METHEW29111" },
  { id: 1371, code: "METHEW29111", discount: "20% Off Subscription", description: "Save 20% off - Daily Ultimate Longevity Monthly Subscription.", expiry_date: "2026-08-21T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[43], affiliate_url: "https://www.im8health.com/METHEW29111" },
  { id: 1372, code: "METHEW29111", discount: "$208/mo Bundle", description: "Get The Beckham Stack Bundle starting from just $208/mo at checkout.", expiry_date: "2026-08-17T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[43], affiliate_url: "https://www.im8health.com/METHEW29111" },
  { id: 1373, code: "METHEW29111", discount: "5% Off Newsletter", description: "Get an extra 5% off on newsletter sign-up for your first order.", expiry_date: "2026-08-22T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[43], affiliate_url: "https://www.im8health.com/METHEW29111" },

  // Redu Sculpt US
  { id: 1374, code: "METHEW46097", discount: "15% Off", description: "Exclusive 15% off coupon code on all Redu Sculpt body sculpting products.", expiry_date: "2026-08-10T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[44], affiliate_url: "https://www.redusculpt.com/METHEW46097" },
  { id: 1375, code: "METHEW46097", discount: "45% Off Summer Sale", description: "Save 45% off during the summer sale on Redu Sculpt body sculpting essentials.", expiry_date: "2026-08-09T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[44], affiliate_url: "https://www.redusculpt.com/METHEW46097" },
  { id: 1376, code: "METHEW46097", discount: "10% Off Sitewide", description: "Get 10% off discount code sitewide on Redu Sculpt products.", expiry_date: "2026-08-10T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[44], affiliate_url: "https://www.redusculpt.com/METHEW46097" },
  { id: 1377, code: "METHEW46097", discount: "5% Off Promo Code", description: "Exclusive 5% off promo code on Redu Sculpt entire collection.", expiry_date: "2026-08-08T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[44], affiliate_url: "https://www.redusculpt.com/METHEW46097" },
  { id: 1378, code: "METHEW46097", discount: "60% Off Subscription", description: "Save 60% off on Redu Sculpt subscription plans and auto-delivery.", expiry_date: "2026-08-11T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[44], affiliate_url: "https://www.redusculpt.com/METHEW46097" },
  { id: 1379, code: "METHEW46097", discount: "Free Shipping", description: "Enjoy free shipping sitewide on all Redu Sculpt orders.", expiry_date: "2026-08-12T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[44], affiliate_url: "https://www.redusculpt.com/METHEW46097" },
  { id: 1380, code: "METHEW46097", discount: "60% Off Gel & Oil", description: "Get 60% off on Redu Sculpt sculpting gel and body oil products.", expiry_date: "2026-08-10T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[44], affiliate_url: "https://www.redusculpt.com/METHEW46097" },
  { id: 1381, code: "METHEW46097", discount: "46% Off Essentials", description: "Save 46% off on body sculpting essentials kit from Redu Sculpt.", expiry_date: "2026-08-08T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[44], affiliate_url: "https://www.redusculpt.com/METHEW46097" },
  { id: 1382, code: "METHEW46097", discount: "33% Off Bundles", description: "Get 33% off on Redu Sculpt product bundles and value packs.", expiry_date: "2026-08-11T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[44], affiliate_url: "https://www.redusculpt.com/METHEW46097" },
  { id: 1383, code: "METHEW46097", discount: "20% Off Supplements", description: "Save 20% off on Redu Sculpt health supplements and wellness products.", expiry_date: "2026-08-11T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[44], affiliate_url: "https://www.redusculpt.com/METHEW46097" },
  { id: 1384, code: "METHEW46097", discount: "$30 Off Green Tea", description: "Get $30 off on Redu Sculpt green tea dietary supplement.", expiry_date: "2026-08-09T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[44], affiliate_url: "https://www.redusculpt.com/METHEW46097" },
  { id: 1385, code: "METHEW46097", discount: "15% Off Newsletter", description: "Sign up for newsletter and get 15% off on your first Redu Sculpt order.", expiry_date: "2026-08-10T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[44], affiliate_url: "https://www.redusculpt.com/METHEW46097" },

  // Evolution Power Tools US
  { id: 1386, code: "METHEWDIPPY5", discount: "15% Off", description: "Exclusive 15% off coupon code on Evolution Power Tools products.", expiry_date: "2026-08-10T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[45], affiliate_url: "https://store.evolutionpowertools.com/?ref=METHEWDIPPY" },
  { id: 1387, code: "METHEWDIPPY5", discount: "10% Off Sitewide", description: "Get 10% off discount code sitewide on all Evolution Power Tools.", expiry_date: "2026-08-10T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[45], affiliate_url: "https://store.evolutionpowertools.com/?ref=METHEWDIPPY" },
  { id: 1388, code: "METHEWDIPPY5", discount: "10% Off Price Drop", description: "Save 10% off during the price drop sale on Evolution Power Tools.", expiry_date: "2026-08-08T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[45], affiliate_url: "https://store.evolutionpowertools.com/?ref=METHEWDIPPY" },
  { id: 1389, code: "METHEWDIPPY5", discount: "30% Off Selected", description: "Get 30% off on selected Evolution Power Tools items.", expiry_date: "2026-08-09T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[45], affiliate_url: "https://store.evolutionpowertools.com/?ref=METHEWDIPPY" },
  { id: 1390, code: "METHEWDIPPY5", discount: "Free Shipping", description: "Enjoy free shipping on all Evolution Power Tools orders.", expiry_date: "2026-08-11T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[45], affiliate_url: "https://store.evolutionpowertools.com/?ref=METHEWDIPPY" },
  { id: 1391, code: "METHEWDIPPY5", discount: "25% Off Drills", description: "Save 25% off on drills and cutters from Evolution Power Tools.", expiry_date: "2026-08-10T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[45], affiliate_url: "https://store.evolutionpowertools.com/?ref=METHEWDIPPY" },
  { id: 1392, code: "METHEWDIPPY5", discount: "20% Off Metal Cutting", description: "Get 20% off on metal cutting tools and blades.", expiry_date: "2026-08-08T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[45], affiliate_url: "https://store.evolutionpowertools.com/?ref=METHEWDIPPY" },
  { id: 1393, code: "METHEWDIPPY5", discount: "15% Off Outdoor", description: "Save 15% off on outdoor tools including chainsaws and blowers.", expiry_date: "2026-08-09T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[45], affiliate_url: "https://store.evolutionpowertools.com/?ref=METHEWDIPPY" },
  { id: 1394, code: "METHEWDIPPY5", discount: "$145 Off Chop Saw", description: "Get $145 off on chop saw stand combo from Evolution Power Tools.", expiry_date: "2026-08-11T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[45], affiliate_url: "https://store.evolutionpowertools.com/?ref=METHEWDIPPY" },
  { id: 1395, code: "METHEWDIPPY5", discount: "10% Off Accessories", description: "Save 10% off on service rewards and accessories.", expiry_date: "2026-08-10T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[45], affiliate_url: "https://store.evolutionpowertools.com/?ref=METHEWDIPPY" },
  { id: 1396, code: "METHEWDIPPY5", discount: "5% Off Newsletter", description: "Sign up for newsletter and get 5% off your first Evolution Power Tools order.", expiry_date: "2026-08-10T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[45], affiliate_url: "https://store.evolutionpowertools.com/?ref=METHEWDIPPY" },

  // Maple Prime US
  { id: 1397, code: "REF-7442", discount: "20% Off", description: "Exclusive 20% off coupon code on all Maple Prime fragrances and perfumes.", expiry_date: "2026-08-15T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[46], affiliate_url: "https://mapleprime.com/collections/all?bg_ref=al8eMAdGYf&utm_source=Muhammad%20Hazique%20Ali&utm_medium=affiliate&utm_campaign=Maple%20Prime%20Affiliate%20Program" },
  { id: 1398, code: "REF-7442", discount: "50% Off Summer Sale", description: "Save 50% off during the summer sale on Maple Prime collection.", expiry_date: "2026-08-12T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[46], affiliate_url: "https://mapleprime.com/collections/all?bg_ref=al8eMAdGYf&utm_source=Muhammad%20Hazique%20Ali&utm_medium=affiliate&utm_campaign=Maple%20Prime%20Affiliate%20Program" },
  { id: 1399, code: "REF-7442", discount: "15% Off Sitewide", description: "Get 15% off discount code sitewide on Maple Prime products.", expiry_date: "2026-08-15T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[46], affiliate_url: "https://mapleprime.com/collections/all?bg_ref=al8eMAdGYf&utm_source=Muhammad%20Hazique%20Ali&utm_medium=affiliate&utm_campaign=Maple%20Prime%20Affiliate%20Program" },
  { id: 1400, code: "REF-7442", discount: "10% Off Summer Vibes", description: "Get 10% off promo code - summer vibes collection on Maple Prime.", expiry_date: "2026-08-10T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[46], affiliate_url: "https://mapleprime.com/collections/all?bg_ref=al8eMAdGYf&utm_source=Muhammad%20Hazique%20Ali&utm_medium=affiliate&utm_campaign=Maple%20Prime%20Affiliate%20Program" },
  { id: 1401, code: "REF-7442", discount: "Free Shipping", description: "Enjoy free shipping on all Maple Prime orders over $49.", expiry_date: "2026-08-14T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[46], affiliate_url: "https://mapleprime.com/collections/all?bg_ref=al8eMAdGYf&utm_source=Muhammad%20Hazique%20Ali&utm_medium=affiliate&utm_campaign=Maple%20Prime%20Affiliate%20Program" },
  { id: 1402, code: "REF-7442", discount: "89% Off EDP", description: "Get up to 89% off on Eau de Parfum at Maple Prime fragrance outlet.", expiry_date: "2026-08-10T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[46], affiliate_url: "https://mapleprime.com/collections/all?bg_ref=al8eMAdGYf&utm_source=Muhammad%20Hazique%20Ali&utm_medium=affiliate&utm_campaign=Maple%20Prime%20Affiliate%20Program" },
  { id: 1403, code: "REF-7442", discount: "80% Off Perfume Oil", description: "Save 80% off on luxury perfume oils and roll-ons.", expiry_date: "2026-08-08T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[46], affiliate_url: "https://mapleprime.com/collections/all?bg_ref=al8eMAdGYf&utm_source=Muhammad%20Hazique%20Ali&utm_medium=affiliate&utm_campaign=Maple%20Prime%20Affiliate%20Program" },
  { id: 1404, code: "REF-7442", discount: "75% Off Unisex", description: "Get 75% off on popular unisex perfumes and signature scents.", expiry_date: "2026-08-09T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[46], affiliate_url: "https://mapleprime.com/collections/all?bg_ref=al8eMAdGYf&utm_source=Muhammad%20Hazique%20Ali&utm_medium=affiliate&utm_campaign=Maple%20Prime%20Affiliate%20Program" },
  { id: 1405, code: "REF-7442", discount: "70% Off Body Spray", description: "Save 70% off on body sprays and daily fragrance essentials.", expiry_date: "2026-08-11T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[46], affiliate_url: "https://mapleprime.com/collections/all?bg_ref=al8eMAdGYf&utm_source=Muhammad%20Hazique%20Ali&utm_medium=affiliate&utm_campaign=Maple%20Prime%20Affiliate%20Program" },
  { id: 1406, code: "REF-7442", discount: "60% Off Skincare", description: "Get 60% off on premium skincare and cosmetics brands at Maple Prime.", expiry_date: "2026-08-10T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[46], affiliate_url: "https://mapleprime.com/collections/all?bg_ref=al8eMAdGYf&utm_source=Muhammad%20Hazique%20Ali&utm_medium=affiliate&utm_campaign=Maple%20Prime%20Affiliate%20Program" },
  { id: 1407, code: "REF-7442", discount: "15% Off Newsletter", description: "Sign up for newsletter updates and get 15% off your first purchase.", expiry_date: "2026-08-15T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[46], affiliate_url: "https://mapleprime.com/collections/all?bg_ref=al8eMAdGYf&utm_source=Muhammad%20Hazique%20Ali&utm_medium=affiliate&utm_campaign=Maple%20Prime%20Affiliate%20Program" },

  // Nobody's Child US
  { id: 1408, code: "WELCOME15", discount: "15% Off", description: "Get 15% off your first order on newsletter sign up at Nobody's Child.", expiry_date: "2026-08-30T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[47], affiliate_url: "https://www.nobodyschild.com/" },
  { id: 1409, code: "STUDENT15", discount: "15% Off", description: "Verified 15% student discount at Nobody's Child via UNiDAYS.", expiry_date: "2026-08-30T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[47], affiliate_url: "https://www.nobodyschild.com/" },
  { id: 1410, code: "KEYWORKER20", discount: "20% Off", description: "Exclusive 20% keyworker discount for healthcare, teachers & transport staff.", expiry_date: "2026-08-30T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[47], affiliate_url: "https://www.nobodyschild.com/" },
  { id: 1411, code: "FRIEND20", discount: "20% Off", description: "Refer-a-friend and get 20% off your next purchase at Nobody's Child.", expiry_date: "2026-08-30T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[47], affiliate_url: "https://www.nobodyschild.com/" },
  { id: 1412, code: "DEAL", discount: "Up to 60% Off", description: "Save up to 60% off during the seasonal sale & outlet at Nobody's Child.", expiry_date: "2026-08-30T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[47], affiliate_url: "https://www.nobodyschild.com/" },
  { id: 1413, code: "DEAL", discount: "Free Shipping", description: "Enjoy free standard shipping on apparel orders over $120.", expiry_date: "2026-08-30T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[47], affiliate_url: "https://www.nobodyschild.com/" },
  { id: 1414, code: "NC15", discount: "15% Off", description: "Save an extra 15% off sitewide on sustainable womenswear.", expiry_date: "2026-08-30T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[47], affiliate_url: "https://www.nobodyschild.com/" },
  { id: 1415, code: "SAVE10", discount: "10% Off", description: "Get 10% off sitewide discount code on dresses, tops and outerwear.", expiry_date: "2026-08-30T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[47], affiliate_url: "https://www.nobodyschild.com/" },
  { id: 1416, code: "EXTRA5", discount: "5% Off", description: "Get an extra 5% off promo code on all sale items.", expiry_date: "2026-08-30T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[47], affiliate_url: "https://www.nobodyschild.com/" },
  { id: 1417, code: "STYLE15", discount: "15% Off", description: "Save 15% off on sustainable midi dresses and knitwear collection.", expiry_date: "2026-08-30T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[47], affiliate_url: "https://www.nobodyschild.com/" },
  { id: 1418, code: "DRESS10", discount: "10% Off", description: "Get 10% off selected dresses and tops at Nobody's Child.", expiry_date: "2026-08-30T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[47], affiliate_url: "https://www.nobodyschild.com/" },

  // Anycubic US
  { id: 1419, code: "PODI25", discount: "$25 Off", description: "Save $25 on your Anycubic 3D printers and wash & cure stations.", expiry_date: "2026-10-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[48], affiliate_url: "/go/anycubic-us" },
  { id: 1420, code: "ACSUN15", discount: "$15 Off", description: "Get $15 off on select Anycubic 3D printers and accessories.", expiry_date: "2026-10-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[48], affiliate_url: "/go/anycubic-us" },
  { id: 1421, code: "DEAL", discount: "Up to 30% Off", description: "Save up to 30% on Kobra & Photon series 3D printers in summer sale.", expiry_date: "2026-10-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[48], affiliate_url: "/go/anycubic-us" },
  { id: 1422, code: "DEAL", discount: "Free Shipping", description: "Free standard shipping on all printer orders over $100.", expiry_date: "2026-10-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[48], affiliate_url: "/go/anycubic-us" },

  // Hitway UK
  { id: 1423, code: "HW50", discount: "£50 Off", description: "Get £50 off on HITWAY electric bikes and scooters at checkout.", expiry_date: "2026-10-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[49], affiliate_url: "/go/hitway-uk" },
  { id: 1424, code: "DEAL", discount: "£20 Off", description: "Get £20 off your first e-bike order by signing up for the HITWAY newsletter.", expiry_date: "2026-10-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[49], affiliate_url: "/go/hitway-uk" },
  { id: 1425, code: "DEAL", discount: "Up to 45% Off", description: "Save up to 45% on electric scooters and hoverboards during summer sale.", expiry_date: "2026-10-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[49], affiliate_url: "/go/hitway-uk" },

  // Wolfbox UK
  { id: 1426, code: "WBBESTGEAR", discount: "25% Off", description: "Save 25% sitewide on WOLFBOX dash cams and backup cameras.", expiry_date: "2026-10-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[50], affiliate_url: "/go/wolfbox-uk" },
  { id: 1427, code: "ER20", discount: "20% Off", description: "Get 20% off sitewide on smart rear-view mirrors and inflators.", expiry_date: "2026-10-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[50], affiliate_url: "/go/wolfbox-uk" },
  { id: 1428, code: "DEAL", discount: "Free Shipping", description: "Enjoy free UK shipping on all WOLFBOX camera system orders.", expiry_date: "2026-10-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[50], affiliate_url: "/go/wolfbox-uk" },

  // Fitueyes UK
  { id: 1429, code: "JEAM", discount: "6% Off", description: "Get an extra 6% off sitewide on TV stands and ergonomic office desks.", expiry_date: "2026-10-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[51], affiliate_url: "/go/fitueyes-uk" },
  { id: 1430, code: "TRAVIES", discount: "6% Off", description: "Save 6% sitewide on smart height-adjustable standing desks.", expiry_date: "2026-10-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[51], affiliate_url: "/go/fitueyes-uk" },
  { id: 1431, code: "DEAL", discount: "5% Off", description: "Sign up for the newsletter and receive 5% off your first Fitueyes order.", expiry_date: "2026-10-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[51], affiliate_url: "/go/fitueyes-uk" },

  // Helvetus US
  { id: 1432, code: "WELCOME10", discount: "10% Off", description: "Get 10% off sitewide discount code on premium Helvetus Swiss products.", expiry_date: "2026-11-30T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[52], affiliate_url: "/go/helvetus" },
  { id: 1433, code: "DEAL", discount: "Free Shipping", description: "Enjoy free standard shipping worldwide on all orders from Helvetus.", expiry_date: "2026-11-30T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[52], affiliate_url: "/go/helvetus" },

  // Xsteel Targets US
  { id: 1434, code: "XSTEEL10", discount: "10% Off", description: "Save 10% off discount code sitewide on high-quality steel shooting targets.", expiry_date: "2026-11-30T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[53], affiliate_url: "/go/xsteel-targets" },
  { id: 1435, code: "DEAL", discount: "Free Shipping", description: "Free standard shipping on all steel targets orders over $150.", expiry_date: "2026-11-30T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[53], affiliate_url: "/go/xsteel-targets" },

  // Reconstitution Solution US
  { id: 1436, code: "WATER10", discount: "10% Off", description: "Get 10% off sitewide on sterile and bacteriostatic reconstitution water.", expiry_date: "2026-11-30T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[54], affiliate_url: "/go/reconstitution-solution" },
  { id: 1437, code: "DEAL", discount: "Free Shipping", description: "Free standard delivery on bacteriostatic water bulk packs.", expiry_date: "2026-11-30T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[54], affiliate_url: "/go/reconstitution-solution" },

  // TuxMat US
  { id: 1438, code: "DEAL", discount: "Free Shipping", description: "Get free standard shipping on all custom-fit floor mats in the US.", expiry_date: "2026-12-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[55], affiliate_url: "/go/tuxmat-us" },
  { id: 1439, code: "DEAL", discount: "$20 Off", description: "Returning customers can save $20 on their next order by contacting customer support.", expiry_date: "2026-12-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[55], affiliate_url: "/go/tuxmat-us" },
  { id: 1440, code: "DEAL", discount: "Lifetime Warranty", description: "Enjoy a lifetime warranty on laser-measured, premium custom car mats.", expiry_date: "2026-12-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[55], affiliate_url: "/go/tuxmat-us" }
];