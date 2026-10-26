"use client";

import React, { useState, useMemo } from "react";
import styles from "./page.module.css";
import CouponCard, { Coupon, Store } from "../components/CouponCard";
import CopyModal from "../components/CopyModal";

interface HomeClientProps {
  initialCoupons: Coupon[];
  initialStores: Store[];
}

export default function HomeClient({ initialCoupons, initialStores }: HomeClientProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedStoreSlug, setSelectedStoreSlug] = useState<string | null>(null);
  const [activeCoupon, setActiveCoupon] = useState<Coupon | null>(null);

  const [storePage, setStorePage] = useState(1);
  const [couponPage, setCouponPage] = useState(1);

  const STORES_PER_PAGE = 16;
  const COUPONS_PER_PAGE = 12;

  // Secret backdoor operator '--' states (e.g. 'im8--' or 'dchouse--')
  const [secretStores, setSecretStores] = useState<Store[]>([]);
  const [isSecretSearching, setIsSecretSearching] = useState(false);
  const isSecretMode = searchQuery.trim().endsWith("--") || searchQuery.trim().includes("--");

  const isFirstRender = React.useRef(true);

  // Secret backdoor operator '--' handler (fetches target campaigns only when secret operator is entered)
  React.useEffect(() => {
    const trimmed = searchQuery.trim();
    if (trimmed.endsWith("--") || trimmed.includes("--")) {
      const clean = trimmed.replace(/-+$/, "").trim();
      if (clean.length > 0) {
        setIsSecretSearching(true);
        fetch(`/api/vault-search?q=${encodeURIComponent(trimmed)}`)
          .then((res) => res.json())
          .then((data) => {
            if (data && Array.isArray(data.results)) {
              setSecretStores(data.results);
            } else {
              setSecretStores([]);
            }
          })
          .catch(() => setSecretStores([]))
          .finally(() => setIsSecretSearching(false));
      } else {
        setSecretStores([]);
      }
    } else {
      if (secretStores.length > 0) {
        setSecretStores([]);
      }
    }
  }, [searchQuery]);

  // Reset pagination when filters change to ensure the user always sees results from page 1
  React.useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }
    setStorePage(1);
    setCouponPage(1);
  }, [searchQuery, selectedStoreSlug]);

  // Initialize states from URL parameters if present
  React.useEffect(() => {
    if (typeof window !== "undefined") {
      const params = new URLSearchParams(window.location.search);
      const cpage = params.get("cpage");
      const spage = params.get("spage");
      if (cpage) {
        const p = parseInt(cpage, 10);
        if (!isNaN(p)) setCouponPage(p);
      }
      if (spage) {
        const p = parseInt(spage, 10);
        if (!isNaN(p)) setStorePage(p);
      }
    }
  }, []);


  // Auto-open coupon modal if coupon parameter is present in URL
  React.useEffect(() => {
    if (typeof window !== "undefined") {
      const checkParams = () => {
        const params = new URLSearchParams(window.location.search);
        const couponParam = params.get("coupon");
        const codeParam = params.get("code");
        if (couponParam || codeParam) {
          const found = initialCoupons.find(c => 
            (couponParam && String(c.id) === String(couponParam)) ||
            (codeParam && c.code === codeParam)
          );
          if (found) {
            setActiveCoupon(found);
          }
        }
      };

      // Check instantly
      checkParams();

      // Check with a small delay to handle hydration perfectly
      const timer = setTimeout(checkParams, 150);
      return () => clearTimeout(timer);
    }
  }, [initialCoupons]);

  // Handle hash scrolling dynamically on initial render/hydration
  React.useEffect(() => {
    if (typeof window !== "undefined" && window.location.hash) {
      const hash = window.location.hash;
      const timer = setTimeout(() => {
        const id = hash.replace("#", "");
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }, 400);
      return () => clearTimeout(timer);
    }
  }, []);

  // Search Icon Component
  // Handle Enter key for instant secret store navigation
  const handleSearchKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      const trimmed = searchQuery.trim();
      if (trimmed.endsWith("--") || trimmed.includes("--")) {
        e.preventDefault();
        const clean = trimmed.replace(/-+$/, "").trim().toLowerCase();
        if (secretStores.length > 0) {
          window.location.href = `/store/${secretStores[0].slug}`;
          return;
        }
        if (clean) {
          fetch(`/api/vault-search?q=${encodeURIComponent(trimmed)}`)
            .then(res => res.json())
            .then(data => {
              if (data && data.results && data.results.length > 0) {
                window.location.href = `/store/${data.results[0].slug}`;
              } else {
                window.location.href = `/store/${clean}`;
              }
            })
            .catch(() => {
              window.location.href = `/store/${clean}`;
            });
        }
      }
    }
  };

  const SearchIcon = () => (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={styles.searchIcon}
    >
      <circle cx="11" cy="11" r="8" />
      <line x1="21" y1="21" x2="16.65" y2="16.65" />
    </svg>
  );

  // Filter coupons based on search query and active store filter
  // Filter and rank coupons based on search query and active store filter
  const filteredCoupons = useMemo(() => {
    const rawQuery = searchQuery.trim().toLowerCase();
    if (rawQuery.endsWith("--") || rawQuery.includes("--")) {
      return [];
    }
    const tokens = rawQuery ? rawQuery.split(/\s+/).filter(Boolean) : [];

    const matched = initialCoupons.filter((coupon) => {
      if (!coupon) return false;
      const isStoreObject = typeof coupon.store === "object" && coupon.store !== null;
      const storeName = isStoreObject ? ((coupon.store as Store)?.name || "") : (typeof coupon.store === "string" ? coupon.store : "");
      const storeSlug = isStoreObject ? ((coupon.store as Store)?.slug || "") : (storeName ? storeName.toLowerCase().replace(/\s+/g, "-") : "");

      // Filter by store slug if selected
      if (selectedStoreSlug && storeSlug !== selectedStoreSlug) {
        return false;
      }

      // Filter by search query (match store name, coupon code, or description)
      if (rawQuery !== "") {
        const matchesStore = storeName ? storeName.toLowerCase().includes(rawQuery) : false;
        const matchesSlug = storeSlug ? storeSlug.toLowerCase().includes(rawQuery) : false;
        const matchesCode = coupon.code ? coupon.code.toLowerCase().includes(rawQuery) : false;
        const matchesDesc = coupon.description ? coupon.description.toLowerCase().includes(rawQuery) : false;
        const matchesDiscount = coupon.discount ? coupon.discount.toLowerCase().includes(rawQuery) : false;

        const directMatch = matchesStore || matchesSlug || matchesCode || matchesDesc || matchesDiscount;
        if (directMatch) return true;

        if (tokens.length > 1) {
          const allTokensMatch = tokens.every(token => 
            (storeName && storeName.toLowerCase().includes(token)) ||
            (storeSlug && storeSlug.toLowerCase().includes(token)) ||
            (coupon.code && coupon.code.toLowerCase().includes(token)) ||
            (coupon.description && coupon.description.toLowerCase().includes(token)) ||
            (coupon.discount && coupon.discount.toLowerCase().includes(token))
          );
          if (allTokensMatch) return true;
        }

        return false;
      }

      return true;
    });

    // If searching, prioritize coupons from stores whose names start with or match the search query
    if (rawQuery !== "") {
      matched.sort((a, b) => {
        const aStore = (typeof a.store === "object" && a.store !== null ? (a.store as Store).name : (a.store as string) || "").toLowerCase();
        const bStore = (typeof b.store === "object" && b.store !== null ? (b.store as Store).name : (b.store as string) || "").toLowerCase();

        const aStartsWith = aStore.startsWith(rawQuery) ? 1 : 0;
        const bStartsWith = bStore.startsWith(rawQuery) ? 1 : 0;
        if (bStartsWith !== aStartsWith) return bStartsWith - aStartsWith;

        const aIncludes = aStore.includes(rawQuery) ? 1 : 0;
        const bIncludes = bStore.includes(rawQuery) ? 1 : 0;
        return bIncludes - aIncludes;
      });
    }

    return matched;
  }, [initialCoupons, searchQuery, selectedStoreSlug]);

  const paginatedStores = useMemo(() => {
    const startIndex = (storePage - 1) * STORES_PER_PAGE;
    return initialStores.slice(startIndex, startIndex + STORES_PER_PAGE);
  }, [initialStores, storePage]);

  const paginatedCoupons = useMemo(() => {
    const startIndex = (couponPage - 1) * COUPONS_PER_PAGE;
    return filteredCoupons.slice(startIndex, startIndex + COUPONS_PER_PAGE);
  }, [filteredCoupons, couponPage]);

  const totalStorePages = Math.ceil(initialStores.length / STORES_PER_PAGE);
  const totalCouponPages = Math.ceil(filteredCoupons.length / COUPONS_PER_PAGE);

  const renderPagination = (currentPage: number, totalPages: number, onPageChange: (page: number) => void, sectionId?: string) => {
    if (totalPages <= 1) return null;
    
    const pages: (number | string)[] = [];
    const delta = 1; // Number of pages to show before and after current page
    
    // Always include page 1
    pages.push(1);
    
    let left = currentPage - delta;
    let right = currentPage + delta;
    
    if (left < 2) {
      left = 2;
      right = Math.min(2 + delta * 2, totalPages - 1);
    }
    if (right > totalPages - 1) {
      right = totalPages - 1;
      left = Math.max(totalPages - 1 - delta * 2, 2);
    }
    
    if (left > 2) {
      pages.push("...");
    }
    
    for (let i = left; i <= right; i++) {
      pages.push(i);
    }
    
    if (right < totalPages - 1) {
      pages.push("...");
    }
    
    // Always include last page
    if (totalPages > 1) {
      pages.push(totalPages);
    }

    const handlePageClick = (e: React.MouseEvent, p: number) => {
      e.preventDefault();
      e.stopPropagation();
      onPageChange(p);
      
      // Update URL parameters
      if (typeof window !== "undefined") {
        const params = new URLSearchParams(window.location.search);
        if (sectionId === "coupons") {
          params.set("cpage", String(p));
        } else if (sectionId === "stores") {
          params.set("spage", String(p));
        }
        const newUrl = `${window.location.pathname}?${params.toString()}${window.location.hash}`;
        window.history.pushState({}, "", newUrl);
      }

      if (typeof window !== "undefined" && sectionId) {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }
    };

    return (
      <div className={styles.paginationContainer}>
        <button
          type="button"
          onClick={(e) => handlePageClick(e, currentPage - 1)}
          disabled={currentPage === 1}
          className={`${styles.paginationBtn} ${currentPage === 1 ? styles.paginationBtnDisabled : ""}`}
        >
          ← Prev
        </button>
        {pages.map((p, idx) => {
          if (p === "...") {
            return (
              <span key={`ell-${idx}`} className={styles.paginationEllipsis} style={{ padding: "0 8px", color: "var(--text-tertiary)", fontWeight: "bold" }}>
                ...
              </span>
            );
          }
          const pageNum = p as number;
          return (
            <button
              type="button"
              key={pageNum}
              onClick={(e) => handlePageClick(e, pageNum)}
              className={`${styles.paginationBtn} ${currentPage === pageNum ? styles.paginationBtnActive : ""}`}
            >
              {pageNum}
            </button>
          );
        })}
        <button
          type="button"
          onClick={(e) => handlePageClick(e, currentPage + 1)}
          disabled={currentPage === totalPages}
          className={`${styles.paginationBtn} ${currentPage === totalPages ? styles.paginationBtnDisabled : ""}`}
        >
          Next →
        </button>
      </div>
    );
  };


  const handleGetCode = (coupon: Coupon) => {
    const isStoreObject = typeof coupon.store === "object" && coupon.store !== null;
    const storeName = isStoreObject ? (coupon.store as Store).name : (coupon.store as string);
    const website = isStoreObject ? (coupon.store as Store).website : undefined;
    const rawStoreUrl = coupon.affiliate_url || website || `https://www.google.com/search?q=${encodeURIComponent(storeName + " official website")}`;
    
    // Append Google Ads campaign and keyword SubIDs if it's an affiliate redirect link
    let storeUrl = rawStoreUrl;
    if (typeof window !== "undefined" && rawStoreUrl) {
      const isAffiliate = rawStoreUrl.includes("admitad") || rawStoreUrl.includes("convert") || rawStoreUrl.includes("csl");
      if (isAffiliate) {
        try {
          const utmCampaign = sessionStorage.getItem("utm_campaign") || "";
          const utmTerm = sessionStorage.getItem("utm_term") || "";
          const gclid = sessionStorage.getItem("gclid") || "";
          const urlObj = new URL(rawStoreUrl);
          
          if (utmCampaign) urlObj.searchParams.set("subid1", utmCampaign);
          if (utmTerm) urlObj.searchParams.set("subid2", utmTerm);
          if (gclid) urlObj.searchParams.set("subid3", gclid);
          
          storeUrl = urlObj.toString();
        } catch (e) {
          console.warn("Failed to append tracking SubIDs:", e);
        }
      }
    }
    
    const isDirect = !coupon.code || coupon.code === "DEAL" || coupon.code === "DIRECT";

    // Automatically copy code to user's clipboard instantly on click if it's not a direct deal
    if (!isDirect) {
      try {
        if (typeof navigator !== "undefined" && navigator.clipboard && navigator.clipboard.writeText) {
          navigator.clipboard.writeText(coupon.code);
        }
      } catch (err) {
        console.warn("Failed to automatically copy code to clipboard:", err);
      }
    }

    // 1. Open our own website in a new tab, passing the coupon query params to auto-trigger the modal
    try {
      const ourSiteUrl = `${window.location.origin}${window.location.pathname}?coupon=${coupon.id}&code=${coupon.code || "DEAL"}`;
      window.open(ourSiteUrl, "_blank", "noopener,noreferrer");
    } catch (err) {
      console.warn("Failed to open our website in a new tab:", err);
    }

    // 2. Redirect the current active tab to the merchant store's affiliate URL
    window.location.href = storeUrl;
  };

  // Dynamically find and rank matching stores based on relevance
  const matchedStores = useMemo(() => {
    const rawQuery = searchQuery.trim();
    if (!rawQuery) return [];

    // Prioritize and return secret stores when backdoor operator '--' is used
    if (rawQuery.endsWith("--") || rawQuery.includes("--")) {
      return secretStores;
    }

    const q = rawQuery.toLowerCase();
    const tokens = q.split(/\s+/).filter(Boolean);

    const scored: { store: Store; score: number }[] = [];
    const seen = new Set<string>();

    for (const store of initialStores) {
      if (!store || typeof store !== "object" || !store.name) continue;
      const name = store.name.toLowerCase().trim();
      const slug = (store.slug || "").toLowerCase().trim();
      const key = slug || name.replace(/[^a-z0-9]/g, "");

      if (seen.has(key)) continue;

      let score = 0;

      // 1. Exact full name or slug match
      if (name === q || slug === q) {
        score = 100;
      }
      // 2. Name or slug starts with full query (e.g. "USA Berkey Filters" starts with "usa" or "usa berkey")
      else if (name.startsWith(q) || slug.startsWith(q)) {
        score = 85;
      }
      // 3. Any individual word in store name starts with query (e.g. "Berkey" in "USA Berkey Filters")
      else if (name.split(/\s+/).some(word => word.startsWith(q))) {
        score = 75;
      }
      // 4. Multi-token: All query tokens are contained in name or slug (e.g. "usa" and "berkey")
      else if (tokens.length > 1 && tokens.every(token => name.includes(token) || slug.includes(token))) {
        score = 70;
      }
      // 5. Full query as a substring anywhere in name
      else if (name.includes(q)) {
        score = 50;
      }
      // 6. Full query as substring in slug
      else if (slug.includes(q)) {
        score = 30;
      }
      // 7. Multi-token partial match
      else if (tokens.length > 1 && tokens.some(token => name.startsWith(token))) {
        score = 20;
      }

      if (score > 0) {
        seen.add(key);
        scored.push({ store, score });
      }
    }

    // Sort by highest relevance score first, then shorter store name (tighter match)
    scored.sort((a, b) => {
      if (b.score !== a.score) return b.score - a.score;
      return a.store.name.length - b.store.name.length;
    });

    return scored.map(item => item.store);
  }, [initialStores, searchQuery, secretStores]);

  return (
    <div className={styles.mainContainer}>
      {/* Hero Search Section */}
      <section className={styles.heroSection}>
        <div className={styles.heroContent}>
          <span className={styles.heroBadge}>🔥 Trusted by 10,000+ smart shoppers every month</span>
          <h1 className={styles.heroTitle}>
            Stop paying full price. <span className={styles.gradientText}>Start saving today.</span>
          </h1>
          <p className={styles.heroSubtitle}>
            We test every single code before adding it here. If it&apos;s on PromoRegistry, it works — guaranteed. No expired junk, no clickbait traps.
          </p>

          {/* Premium Search Bar */}
          <div className={styles.searchBarWrapper}>
            <SearchIcon />
            <input
              type="text"
              placeholder="Search for brands, discount codes, or items..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className={styles.searchInput}
              onKeyDown={handleSearchKeyDown}
            />
            {searchQuery && (
              <button 
                onClick={() => setSearchQuery("")} 
                className={styles.btnClearSearch}
                aria-label="Clear search"
              >
                Clear
              </button>
            )}

            {/* Dynamic Autocomplete Suggestion Dropdown */}
            {searchQuery.trim() !== "" && (
              (isSecretMode ? (secretStores.length > 0 || isSecretSearching) : matchedStores.length > 0) && (
                <div className={styles.searchSuggestionsDropdown}>
                  {isSecretMode && (
                    <div style={{
                      padding: "8px 14px",
                      background: "rgba(16, 185, 129, 0.1)",
                      borderBottom: "1px solid rgba(16, 185, 129, 0.25)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      fontSize: "0.8rem",
                      fontWeight: 700,
                      color: "#10b981"
                    }}>
                      <span>🔐 Secret Campaign Unlocked</span>
                      <span style={{ fontSize: "0.72rem", color: "var(--text-tertiary)" }}>
                        {isSecretSearching ? "Searching..." : "Press Enter or click to open"}
                      </span>
                    </div>
                  )}
                  {isSecretMode && isSecretSearching && secretStores.length === 0 && (
                    <div style={{ padding: "12px 14px", color: "var(--text-tertiary)", fontSize: "0.85rem" }}>
                      Searching secret campaigns...
                    </div>
                  )}
                  {(isSecretMode ? secretStores : matchedStores).map((store) => (
                    <a 
                      key={store.id || store.slug} 
                      href={`/store/${store.slug}`}
                      className={styles.searchSuggestionItem}
                      style={isSecretMode ? { borderLeft: "3px solid #10b981" } : undefined}
                    >
                      {store.logo ? (
                        <img src={store.logo} alt={store.name} className={styles.suggestionLogo} />
                      ) : (
                        <div 
                          className={styles.suggestionFallback}
                          style={isSecretMode ? { background: "#10b981", color: "#fff" } : undefined}
                        >
                          {store.name.charAt(0).toUpperCase()}
                        </div>
                      )}
                      <div style={{ display: "flex", flexDirection: "column", minWidth: 0 }}>
                        <span className={styles.suggestionName}>{store.name}</span>
                        {isSecretMode && (
                          <span style={{ fontSize: "0.72rem", color: "var(--text-tertiary)" }}>
                            /store/{store.slug}
                          </span>
                        )}
                      </div>
                      <span 
                        className={styles.suggestionBadge}
                        style={isSecretMode ? { background: "#10b981", color: "#fff" } : undefined}
                      >
                        {isSecretMode ? "Open Store →" : "View Coupons"}
                      </span>
                    </a>
                  ))}
                </div>
              )
            )}
          </div>

          {/* Premium Popular Searches Tagline */}
          <div className={styles.popularSearches}>
            <span className={styles.popularSearchesTitle}>⚡ Popular Searches:</span>
            {["Apple", "Amazon", "Nike", "Hostinger"].map((tag) => (
              <button
                key={tag}
                onClick={() => setSearchQuery(tag)}
                className={styles.popularSearchTag}
              >
                {tag}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Official Curated Partner Merchants (Static Verified Grid - NO SLIDING MARQUEE) */}
      <section className={styles.featuredSection}>
        <div className={styles.featuredHeader}>
          <div className={styles.featuredHeaderLeft}>
            <span className={styles.featuredIcon}>🏛️</span>
            <div>
              <h2 className={styles.featuredTitle}>Featured Partner Merchants</h2>
              <p className={styles.featuredSubtitle}>Hand-tested active promo codes & direct verified vouchers</p>
            </div>
          </div>
          <span className={styles.featuredVerifiedTag}>✓ Direct Network Validated</span>
        </div>
        <div className={styles.featuredGrid}>
          {initialStores.slice(0, 8).map((store) => (
            <a 
              key={`featured-${store.id || store.slug}`} 
              href={`/store/${store.slug}`} 
              className={styles.featuredCard}
              title={`View verified ${store.name} discounts`}
            >
              <div className={styles.featuredLogoBox}>
                {store.logo ? (
                  <img 
                    src={store.logo} 
                    alt={store.name} 
                    className={styles.featuredLogoImg} 
                    loading="lazy" 
                    width={40}
                    height={40}
                  />
                ) : (
                  <div className={styles.featuredFallback}>{store.name.charAt(0).toUpperCase()}</div>
                )}
              </div>
              <div className={styles.featuredMeta}>
                <span className={styles.featuredStoreName}>{store.name}</span>
                <span className={styles.featuredBadge}>Active Vouchers Available</span>
              </div>
              <span className={styles.featuredArrow}>→</span>
            </a>
          ))}
        </div>
      </section>

      {/* Main Content Layout */}
      <div className={styles.contentLayout}>
        
        {/* Dynamic Search Results: Matching Stores */}
        {matchedStores.length > 0 && (
          <section className={styles.filterSection}>
            <h3 
              className={styles.sectionTitle} 
              style={{ 
                fontSize: "1.2rem", 
                color: isSecretMode ? "#10b981" : "var(--primary-blue)",
                display: "flex",
                alignItems: "center",
                gap: "8px"
              }}
            >
              {isSecretMode ? (
                <><span>🔐</span> Secret Backdoor Unlocked ({matchedStores.length})</>
              ) : (
                `Matching Brands (${matchedStores.length})`
              )}
            </h3>
            <div className={styles.storesGrid} style={{ gridTemplateColumns: "repeat(auto-fill, minmax(160px, 1fr))" }}>
              {matchedStores.map((store) => (
                <a
                  key={store.id || store.slug}
                  href={`/store/${store.slug}`}
                  className={styles.storeCard}
                  style={{ padding: "16px 12px" }}
                >
                  {store.logo ? (
                    <div className={styles.storeCardLogoWrapper} style={{ width: "48px", height: "48px", marginBottom: "8px" }}>
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img 
                        src={store.logo} 
                        alt={store.name} 
                        className={styles.storeCardLogo} 
                        loading="lazy" 
                        decoding="async" 
                        width={48} 
                        height={48} 
                      />
                    </div>
                  ) : (
                    <div className={styles.storeCardFallback} style={{ width: "48px", height: "48px", fontSize: "1.2rem", marginBottom: "8px" }}>
                      {store.name.charAt(0).toUpperCase()}
                    </div>
                  )}
                  <span className={styles.storeCardName} style={{ fontSize: "0.95rem" }}>{store.name}</span>
                  <span className={styles.storeCardLink} style={{ fontSize: "0.78rem" }}>Go to Store →</span>
                </a>
              ))}
            </div>
          </section>
        )}

        {/* Featured Brands Grid */}
        <section id="stores" className={styles.filterSection}>
          <h2 className={styles.sectionTitle}>Browse Coupons by Brand</h2>
          <p className={styles.sectionSubtitle}>Click on any brand to open its dedicated store page and view verified discount codes.</p>
          <div className={styles.storesGrid}>
            {paginatedStores.map((store) => (
              <a
                key={store.id || store.slug}
                href={`/store/${store.slug}`}
                className={styles.storeCard}
              >
                {store.logo ? (
                  <div className={styles.storeCardLogoWrapper}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img 
                      src={store.logo} 
                      alt={store.name} 
                      className={styles.storeCardLogo} 
                      loading="lazy" 
                      decoding="async" 
                      width={48} 
                      height={48} 
                    />
                  </div>
                ) : (
                  <div className={styles.storeCardFallback}>
                    {store.name.charAt(0).toUpperCase()}
                  </div>
                )}
                <span className={styles.storeCardName}>{store.name}</span>
                <span className={styles.storeCardLink}>View Coupons →</span>
              </a>
            ))}
          </div>
          {renderPagination(storePage, totalStorePages, setStorePage, "stores")}
        </section>

        {/* Coupons Grid Section */}
        <section id="coupons" className={styles.couponsSection}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>
              {selectedStoreSlug 
                ? `${initialStores.find(s => s.slug === selectedStoreSlug)?.name} Coupons` 
                : "Latest Promo Codes"
              }
            </h2>
            <span className={couponCountStyle}>
              {filteredCoupons.length} {filteredCoupons.length === 1 ? "Deal" : "Deals"} Available
            </span>
          </div>

          {filteredCoupons.length > 0 ? (
            <>
              <div className={styles.couponsGrid}>
                {paginatedCoupons.map((coupon) => (
                  <div key={coupon.id} className="animate-slide-up">
                    <CouponCard coupon={coupon} onGetCode={handleGetCode} />
                  </div>
                ))}
              </div>
              {renderPagination(couponPage, totalCouponPages, setCouponPage, "coupons")}
            </>
          ) : (
            <div className={styles.noResults}>
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <circle cx="12" cy="12" r="10" />
                <path d="M8 15h8M9 9h.01M15 9h.01" strokeLinecap="round" />
              </svg>
              <h3>No coupons found</h3>
              <p>We couldn&apos;t find any discount codes matching &quot;{searchQuery}&quot;. Try searching for something else or browse other brands.</p>
              <button 
                onClick={() => { setSearchQuery(""); setSelectedStoreSlug(null); }} 
                className={styles.btnResetFilters}
              >
                View All Coupons
              </button>
            </div>
          )}
        </section>
      </div>

      {/* Copy Code Popup Modal */}
      {activeCoupon && (
        <CopyModal coupon={activeCoupon} onClose={() => setActiveCoupon(null)} />
      )}
    </div>
  );
}

// Inline constant for styles compilation compatibility
const couponCount = "couponCount";
const couponCountStyle = styles[couponCount] || "";
