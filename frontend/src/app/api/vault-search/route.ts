import { NextRequest, NextResponse } from "next/server";
import { STORE_REGISTRY } from "../../../lib/storeRegistry";
import { getLogoUrl } from "../../../lib/fallbackData";

export const dynamic = "force-dynamic";

/**
 * Confidential Backdoor Search API
 * Protected with secret '--' operator syntax.
 * Strictly returns empty results unless the secret operator '--' is passed.
 * e.g., 'im8--' or 'dchouse--' or 'dc house--' unlocks target campaign stores.
 */
export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const rawQ = (searchParams.get("q") || "").trim();

  // Stealth check: Must contain the secret operator '--'
  if (!rawQ.endsWith("--") && !rawQ.includes("--")) {
    return NextResponse.json({ results: [] });
  }

  // Strip trailing '--' and surrounding whitespace
  const query = rawQ.replace(/-+$/, "").trim().toLowerCase();

  if (!query || query.length === 0) {
    return NextResponse.json({ results: [] });
  }

  const tokens = query.split(/\s+/).filter(Boolean);

  // Search across official confidential STORE_REGISTRY
  const matched = STORE_REGISTRY.filter(store => {
    if (!store) return false;
    const name = (store.name || "").toLowerCase();
    const slug = (store.slug || "").toLowerCase();
    const aliases = (store.aliases || []).map(a => a.toLowerCase());

    // 1. Exact match
    if (name === query || slug === query || aliases.includes(query)) return true;

    // 2. Starts with query
    if (name.startsWith(query) || slug.startsWith(query) || aliases.some(a => a.startsWith(query))) return true;

    // 3. Substring match
    if (name.includes(query) || slug.includes(query) || aliases.some(a => a.includes(query))) return true;

    // 4. Multi-token match (e.g. "dc house" or "transparent labs")
    if (tokens.length > 1 && tokens.every(token => name.includes(token) || slug.includes(token) || aliases.some(a => a.includes(token)))) {
      return true;
    }

    return false;
  }).map(store => ({
    id: store.id,
    name: store.name,
    slug: store.slug,
    logo: store.logo || getLogoUrl(store.slug) || "",
    website: store.website,
    couponCount: store.coupons ? store.coupons.length : 0,
    isSecretUnlocked: true
  }));

  return NextResponse.json({
    results: matched
  });
}
