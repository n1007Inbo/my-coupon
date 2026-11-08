import { NextRequest, NextResponse } from "next/server";
import { STORE_REGISTRY } from "../../../lib/storeRegistry";
import { getLogoUrl, FALLBACK_STORES } from "../../../lib/fallbackData";

export const dynamic = "force-dynamic";

/**
 * Confidential Backdoor Search API (PromoRegistry)
 * Strictly returns empty results unless the secret operator '--' is passed.
 * Automatically unlocks any current or future store added to STORE_REGISTRY or FALLBACK_STORES.
 */
export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const rawQ = (searchParams.get("q") || "").trim();

  if (!rawQ.endsWith("--") && !rawQ.includes("--")) {
    return NextResponse.json({ results: [] });
  }

  const query = rawQ.replace(/-+$/, "").trim().toLowerCase();
  const cleanQuery = query.replace(/[^a-z0-9]/g, "");

  if (!query || cleanQuery.length === 0) {
    return NextResponse.json({ results: [] });
  }

  const tokens = query.split(/\s+/).filter(Boolean);
  const seenSlugs = new Set<string>();
  const results: Array<{
    id: number | string;
    name: string;
    slug: string;
    logo: string;
    website: string;
    couponCount: number;
    isSecretUnlocked: boolean;
  }> = [];

  // 1. Search STORE_REGISTRY first (highest priority)
  for (const store of STORE_REGISTRY) {
    if (!store) continue;
    const name = (store.name || "").toLowerCase();
    const slug = (store.slug || "").toLowerCase();
    const cleanName = name.replace(/[^a-z0-9]/g, "");
    const cleanSlug = slug.replace(/[^a-z0-9]/g, "");
    const aliases = (store.aliases || []).map((a) => a.toLowerCase());
    const cleanAliases = aliases.map((a) => a.replace(/[^a-z0-9]/g, ""));

    const matched =
      name === query ||
      slug === query ||
      aliases.includes(query) ||
      cleanName.includes(cleanQuery) ||
      cleanSlug.includes(cleanQuery) ||
      cleanAliases.some((ca) => ca.includes(cleanQuery)) ||
      (tokens.length > 1 &&
        tokens.every(
          (token) =>
            name.includes(token) ||
            slug.includes(token) ||
            aliases.some((a) => a.includes(token))
        ));

    if (matched && !seenSlugs.has(slug)) {
      seenSlugs.add(slug);
      results.push({
        id: store.id,
        name: store.name,
        slug: store.slug,
        logo: store.logo || getLogoUrl(store.slug) || "",
        website: store.website,
        couponCount: store.coupons ? store.coupons.length : 0,
        isSecretUnlocked: true,
      });
    }
  }

  // 2. Also search FALLBACK_STORES if not already in results
  for (const store of FALLBACK_STORES) {
    if (!store || !store.slug) continue;
    const slug = store.slug.toLowerCase();
    if (seenSlugs.has(slug)) continue;
    const name = (store.name || "").toLowerCase();
    const cleanName = name.replace(/[^a-z0-9]/g, "");
    const cleanSlug = slug.replace(/[^a-z0-9]/g, "");

    if (name.includes(query) || slug.includes(query) || cleanName.includes(cleanQuery) || cleanSlug.includes(cleanQuery)) {
      seenSlugs.add(slug);
      results.push({
        id: store.id || slug,
        name: store.name,
        slug: store.slug,
        logo: store.logo || getLogoUrl(store.slug) || "",
        website: store.website || `/store/${store.slug}`,
        couponCount: 4,
        isSecretUnlocked: true,
      });
    }
  }

  return NextResponse.json({
    results: results.slice(0, 20),
  });
}
