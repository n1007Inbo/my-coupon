import React from "react";
import HomeClient from "./HomeClient";
import { Coupon, Store } from "../components/CouponCard";

// Helper to retrieve beautiful corporate logos dynamically from local SVG files
const getLogoUrl = (slug: string) => {
  if (slug.startsWith("desktronic-")) return "/logos/desktronic.svg";
  if (slug.startsWith("tenways-")) return "/logos/tenways.svg";
  return `/logos/${slug}.svg`;
};

// Mock Fallback Data in case the Strapi API is offline during build or run
const FALLBACK_STORES: Store[] = [
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
  { id: 21, name: "Desktronic UK", slug: "desktronic-uk", logo: getLogoUrl("desktronic-uk"), website: "https://desktronic.co.uk/muhammadhaziqueali" },
  { id: 22, name: "Desktronic US", slug: "desktronic-us", logo: getLogoUrl("desktronic-us"), website: "https://desktronic.com" },
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
  { id: 40, name: "Gymshark", slug: "gymshark", logo: getLogoUrl("gymshark"), website: "https://gymshark.com" }
];

const FALLBACK_COUPONS: Coupon[] = [
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
  { id: 51, code: "MarkPaul15", discount: "15% OFF", description: "Exclusive 15% off discount code sitewide on premium standing desks and frames.", expiry_date: "2026-12-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[20], affiliate_url: "https://desktronic.co.uk/muhammadhaziqueali" },
  { id: 52, code: "MarkPaul15", discount: "15% OFF", description: "Save 15% on high-performance 4-Leg standing desks for professional workspaces.", expiry_date: "2026-12-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[20], affiliate_url: "https://desktronic.co.uk/products/4-leg-standing-desk?bg_ref=fek2GZmWHH&utm_source=fek2GZmWHH&utm_medium=partner&utm_campaign=Beginner%20Program" },
  { id: 53, code: "MarkPaul15", discount: "15% OFF", description: "Get 15% off Height Adjustable Desk Frame (HomeOne) with advanced single-motor preset memory.", expiry_date: "2026-12-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[20], affiliate_url: "https://desktronic.co.uk/products/height-adjustable-desk-frame-homeone?bg_ref=fek2GZmWHH&utm_source=fek2GZmWHH&utm_medium=partner&utm_campaign=Beginner%20Program" },
  { id: 54, code: "MarkPaul15", discount: "15% OFF", description: "Save 15% off Height Adjustable Desk Frame (HomePro) dual-motor model.", expiry_date: "2026-12-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[20], affiliate_url: "https://desktronic.co.uk/products/height-adjustable-desk-frame-homepro?bg_ref=fek2GZmWHH&utm_source=fek2GZmWHH&utm_medium=partner&utm_campaign=Beginner%20Program" },
  { id: 55, code: "MarkPaul15", discount: "15% OFF", description: "Enjoy 15% off Height Adjustable Standing Desk (HomePro) dual-motor complete setup.", expiry_date: "2026-12-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[20], affiliate_url: "https://desktronic.co.uk/products/height-adjustable-desk-homepro?bg_ref=fek2GZmWHH&utm_source=fek2GZmWHH&utm_medium=partner&utm_campaign=Beginner%20Program" },
  { id: 56, code: "MarkPaul15", discount: "15% OFF", description: "Enjoy 15% off Height Adjustable Standing Desk (HomeOne) single-motor complete setup.", expiry_date: "2026-12-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[20], affiliate_url: "https://desktronic.co.uk/products/height-adjustable-desk-homeone?bg_ref=fek2GZmWHH&utm_source=fek2GZmWHH&utm_medium=partner&utm_campaign=Beginner%20Program" },
  { id: 57, code: "MarkPaul15", discount: "Free Shipping", description: "Get free standard UK delivery on all orders above £100.", expiry_date: "2026-12-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[20], affiliate_url: "https://desktronic.co.uk/muhammadhaziqueali" }

  // Desktronic US
  { id: 64, code: "DESKUS10", discount: "10% OFF", description: "Get 10% off your next purchase of advanced standing desks.", expiry_date: "2026-12-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[21] },
  { id: 65, code: "SPRING36", discount: "36% OFF", description: "Enjoy 36% off during our limited-time Spring Sale promotion.", expiry_date: "2026-12-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[21] },
  { id: 66, code: "USWIDE10", discount: "10% OFF", description: "Exclusive 10% off discount code sitewide on all ergonomic frames.", expiry_date: "2026-12-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[21] },
  { id: 67, code: "ERGOUS35", discount: "35% OFF", description: "Save 35% on high-performance ergonomic office chairs.", expiry_date: "2026-12-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[21] },
  { id: 68, code: "FREESHIPUS", discount: "Free Shipping", description: "Free delivery on all shipments across the United States.", expiry_date: "2026-12-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[21] },
  { id: 69, code: "ACCESSUS35", discount: "35% OFF", description: "Get 35% off on desk accessories, cable sleeves, and mouse mats.", expiry_date: "2026-12-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[21] },
  { id: 70, code: "FRAMEUS30", discount: "30% OFF", description: "Save 30% on smart height-adjustable desk frames.", expiry_date: "2026-12-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[21] },
  { id: 71, code: "BESTSELL30", discount: "30% OFF", description: "Enjoy 30% off on our best-selling ergonomic furniture.", expiry_date: "2026-12-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[21] },
  { id: 72, code: "SELECT20", discount: "20% OFF", description: "Save 20% on selected ergonomic office setups and accessories.", expiry_date: "2026-12-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[21] },
  { id: 73, code: "USNEWS10", discount: "10% OFF", description: "Enjoy 10% off your first purchase when subscribing to the newsletter.", expiry_date: "2026-12-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[21] },

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
  { id: 121, code: "SHARKSTUDENT", discount: "15% OFF", description: "Impact exclusive: Students save 15% on latest fitness clothes.", expiry_date: "2026-08-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[39] }
];

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
  }

  return <HomeClient initialCoupons={coupons} initialStores={stores} />;
}
