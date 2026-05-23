import { MetadataRoute } from "next";

const STORE_SLUGS = [
  "amazon", "nike", "hostinger", "adidas", "walmart", "ebay", "target", "apple",
  "starbucks", "steam", "aliexpress", "adobe", "canva", "samsung", "nordvpn",
  "lenovo", "puma", "fiverr", "bookingcom", "udemy", "desktronic-uk", "desktronic-us",
  "tenways-uk", "tenways-us", "geekbuying", "banggood", "zaful", "massivemobile",
  "dhgate", "envato", "semrush", "namecheap", "squarespace", "hostgator",
  "bluehost", "coursera", "skillshare", "nordpass", "godaddy", "gymshark"
];

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = "https://promoregistry.com";
  const apiUrl = process.env.NEXT_PUBLIC_STRAPI_API_URL || "http://localhost:1337";

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
      lastModified: new Date(),
      changeFrequency: "daily" as const,
      priority: 1.0,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/privacy`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.5,
    },
    {
      url: `${baseUrl}/terms`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.5,
    },
  ];

  // Dynamic store pages
  const storePages = slugs.map((slug) => ({
    url: `${baseUrl}/store/${slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.9,
  }));

  return [...staticPages, ...storePages];
}
