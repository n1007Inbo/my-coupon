import { MetadataRoute } from "next";
import { BLOGS_DATABASE } from "../lib/blogs";

const STORE_SLUGS = [
  "amazon", "nike", "hostinger", "adidas", "walmart", "ebay", "target", "apple",
  "starbucks", "steam", "aliexpress", "adobe", "canva", "samsung", "nordvpn",
  "lenovo", "puma", "fiverr", "bookingcom", "udemy", "desktronic-uk", "desktronic-us",
  "tenways-uk", "tenways-us", "geekbuying", "banggood", "zaful", "massivemobile",
  "dhgate", "envato", "semrush", "namecheap", "squarespace", "hostgator",
  "bluehost", "coursera", "skillshare", "nordpass", "godaddy", "gymshark",
  "desktronic-nl", "parc-asterix-fr", "bouquets-by-post", "im8health", "redusculpt", "evolution-power-tools", "maple-prime", "nobodys-child", "anycubic-us", "hitway-uk", "wolfbox-uk", "fitueyes-uk", "helvetus", "xsteel-targets", "reconstitution-solution", "tuxmat-us"
, "agoda", "viator", "turo", "masterclass", "hellofresh", "cider", "temu", "costco", "best-buy", "kohls", "asos", "etsy", "wayfair", "home-depot", "expedia", "uber", "sephora", "ulta", "lululemon", "fabletics", "iherb", "myprotein", "seatgeek", "hertz", "avis", "tripadvisor", "hotels-com", "under-armour", "airbnb"
, "harrys", "shipt", "meowant", "shelly-eu-", "larine-company", "spothero", "taylor-made", "choice-hotels", "meshy", "kate-spade", "hilo", "legalzoom", "bedsure", "dewenwils", "torras", "jack-rogers", "suzanne-somers", "the-wine-collective", "sleepyhead", "sperry", "evelyn-bobbie", "1inkcom", "flick-vpn", "champion-life-insurance", "remedy-meds", "norton-lifelock", "network-solutions", "cars24", "nexburn", "asknow", "lyca-mobile-us", "factor", "american-dream-auto-protect", "bark-parental-controls", "aura-parental-controls", "droppscom", "greencross-vets", "bullion", "deleteme", "college-ave", "select-home-warranty", "insurify", "comparecom", "homesafe", "the-times-literary-supplement", "dabella", "income-insurance-limited", "claim-climbers", "patriot-frontline", "docsearch-glp-1", "docsearch", "lemonaid-health", "global-trade-rates", "flashcloud", "macroplate", "mint-home", "artlist", "remedy-place", "neu-money-no-interest-credit-card", "neu-money-no-annual-fee-credit-card", "qtrade", "neo-financial", "spring-financial", "amazingclubs", "mcafee", "endurance", "fanatiz-sports-streaming", "quicken", "thimble", "strype-wellness", "western-union-north-america", "swooped", "mighties", "akko", "helloprenup", "newself-ventures", "onetravel", "splitero", "rvezy", "hintmeds-inc", "legendz", "smartcredit", "upwork-freelance-marketplace", "neo-ca-credit-card", "whitebridge", "winona", "binge-movies-tv", "ecco", "tryhackme", "flashark", "backcountry", "neiman-marcus", "saks-fifth-avenue", "xsuit", "g-star-raw", "wildflower-cases", "ubeauty", "myaerotel", "supercom-travel"];

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = "https://promoregistry.com";
  const apiUrl = process.env.NEXT_PUBLIC_STRAPI_API_URL || "http://localhost:1337";
  const staticDate = new Date("2026-07-01T00:00:00Z");

  let slugs = STORE_SLUGS;

  try {
    const res = await fetch(`${apiUrl}/api/stores?pagination[pageSize]=200`, {
      cache: "no-store",
    });
    if (res.ok) {
      const data = await res.json();
      if (Array.isArray(data.data) && data.data.length > 0) {
        slugs = data.data.map((s: any) => s.slug);
      }
    }
  } catch (err) {
    console.warn("Sitemap: Failed to fetch dynamic stores from Strapi, using premium fallback list.", err);
  }

  // Core static pages
  const staticPages = [
    {
      url: baseUrl,
      lastModified: staticDate,
      changeFrequency: "daily" as const,
      priority: 1.0,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: staticDate,
      changeFrequency: "weekly" as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: staticDate,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: staticDate,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/privacy`,
      lastModified: staticDate,
      changeFrequency: "monthly" as const,
      priority: 0.5,
    },
    {
      url: `${baseUrl}/terms`,
      lastModified: staticDate,
      changeFrequency: "monthly" as const,
      priority: 0.5,
    },
  ];

  // Dynamic store pages
  const storePages = slugs.map((slug) => ({
    url: `${baseUrl}/store/${slug}`,
    lastModified: staticDate,
    changeFrequency: "weekly" as const,
    priority: 0.9,
  }));

  // Blog post pages
  const blogPages = Object.keys(BLOGS_DATABASE).map((slug) => ({
    url: `${baseUrl}/blog/${slug}`,
    lastModified: staticDate,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [...staticPages, ...storePages, ...blogPages];
}
