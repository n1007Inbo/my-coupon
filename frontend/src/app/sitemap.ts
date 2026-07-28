import { MetadataRoute } from "next";
import { BLOGS_DATABASE } from "../lib/blogs";

const STORE_SLUGS = [
  "amazon", "nike", "hostinger", "adidas", "walmart", "ebay", "target", "apple",
  "starbucks", "steam", "aliexpress", "adobe", "canva", "samsung", "nordvpn",
  "lenovo", "puma", "fiverr", "bookingcom", "udemy", "desktronic-uk", "desktronic-us",
  "tenways-uk", "tenways-us", "geekbuying", "banggood", "zaful", "massivemobile",
  "dhgate", "envato", "semrush", "namecheap", "squarespace", "hostgator",
  "bluehost", "coursera", "skillshare", "nordpass", "godaddy", "gymshark",
  "desktronic-nl", "parc-asterix-fr", "bouquets-by-post", "im8health", "redusculpt", "evolution-power-tools"
];

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
