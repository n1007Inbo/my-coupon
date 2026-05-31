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

  // Search Icon Component
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
  const filteredCoupons = useMemo(() => {
    return initialCoupons.filter((coupon) => {
      const isStoreObject = typeof coupon.store === "object" && coupon.store !== null;
      const storeName = isStoreObject ? (coupon.store as Store).name : (coupon.store as string);
      const storeSlug = isStoreObject ? (coupon.store as Store).slug : storeName.toLowerCase().replace(/\s+/g, "-");

      // Filter by store slug if selected
      if (selectedStoreSlug && storeSlug !== selectedStoreSlug) {
        return false;
      }

      // Filter by search query (match store name, coupon code, or description)
      if (searchQuery.trim() !== "") {
        const query = searchQuery.toLowerCase();
        const matchesStore = storeName ? storeName.toLowerCase().includes(query) : false;
        const matchesCode = coupon.code ? coupon.code.toLowerCase().includes(query) : false;
        const matchesDesc = coupon.description ? coupon.description.toLowerCase().includes(query) : false;
        const matchesDiscount = coupon.discount ? coupon.discount.toLowerCase().includes(query) : false;

        return matchesStore || matchesCode || matchesDesc || matchesDiscount;
      }

      return true;
    });
  }, [initialCoupons, searchQuery, selectedStoreSlug]);

  const handleGetCode = (coupon: Coupon) => {
    const isStoreObject = typeof coupon.store === "object" && coupon.store !== null;
    const storeName = isStoreObject ? (coupon.store as Store).name : (coupon.store as string);
    const website = isStoreObject ? (coupon.store as Store).website : undefined;
    const storeUrl = coupon.affiliate_url || website || `https://www.google.com/search?q=${encodeURIComponent(storeName + " official website")}`;
    
    // Automatically copy code to user's clipboard instantly on click
    try {
      if (typeof navigator !== "undefined" && navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(coupon.code);
      }
    } catch (err) {
      console.warn("Failed to automatically copy code to clipboard:", err);
    }

    // 1. Open our own website in a new tab, passing the coupon query params to auto-trigger the modal
    try {
      const ourSiteUrl = `${window.location.origin}${window.location.pathname}?coupon=${coupon.id}&code=${coupon.code}`;
      window.open(ourSiteUrl, "_blank", "noopener,noreferrer");
    } catch (err) {
      console.warn("Failed to open our website in a new tab:", err);
    }

    // 2. Redirect the current active tab to the merchant store's affiliate URL
    window.location.href = storeUrl;
  };

  // Dynamically find matching stores based on the search query
  const matchedStores = useMemo(() => {
    if (searchQuery.trim() === "") return [];
    const query = searchQuery.toLowerCase();
    return initialStores.filter(store => store.name.toLowerCase().includes(query));
  }, [initialStores, searchQuery]);

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
          </div>

          {/* Premium Popular Searches Tagline */}
          <div className={styles.popularSearches}>
            <span className={styles.popularSearchesTitle}>⚡ Popular Searches:</span>
            {["Desktronic", "Amazon", "Nike", "Hostinger"].map((tag) => (
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

      {/* Infinite Auto-Scrolling Trending Brands Carousel */}
      <div className={styles.carouselContainer}>
        <p className={styles.carouselTitle}>🔥 Hot Trending Brands</p>
        <div className={styles.carouselSlider}>
          <div className={styles.carouselTrack}>
            {/* First Set of Brands */}
            {initialStores.map((store) => (
              <a 
                key={`slide1-${store.id || store.slug}`} 
                href={`/store/${store.slug}`} 
                className={styles.carouselItem}
                title={`Visit ${store.name} Store`}
              >
                {store.logo ? (
                  <img src={store.logo} alt={store.name} className={styles.carouselLogo} />
                ) : (
                  <div className={styles.carouselFallback}>{store.name.charAt(0).toUpperCase()}</div>
                )}
                <span>{store.name}</span>
              </a>
            ))}
            {/* Second Duplicate Set for Seamless Loop */}
            {initialStores.map((store) => (
              <a 
                key={`slide2-${store.id || store.slug}`} 
                href={`/store/${store.slug}`} 
                className={styles.carouselItem}
                title={`Visit ${store.name} Store`}
              >
                {store.logo ? (
                  <img src={store.logo} alt={store.name} className={styles.carouselLogo} />
                ) : (
                  <div className={styles.carouselFallback}>{store.name.charAt(0).toUpperCase()}</div>
                )}
                <span>{store.name}</span>
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Main Content Layout */}
      <div className={styles.contentLayout}>
        
        {/* Dynamic Search Results: Matching Stores */}
        {matchedStores.length > 0 && (
          <section className={styles.filterSection}>
            <h3 className={styles.sectionTitle} style={{ fontSize: "1.2rem", color: "var(--primary-blue)" }}>
              Matching Brands ({matchedStores.length})
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
                      <img src={store.logo} alt={store.name} className={styles.storeCardLogo} />
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
            {initialStores.map((store) => (
              <a
                key={store.id || store.slug}
                href={`/store/${store.slug}`}
                className={styles.storeCard}
              >
                {store.logo ? (
                  <div className={styles.storeCardLogoWrapper}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={store.logo} alt={store.name} className={styles.storeCardLogo} />
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
            <div className={styles.couponsGrid}>
              {filteredCoupons.map((coupon) => (
                <div key={coupon.id} className="animate-slide-up">
                  <CouponCard coupon={coupon} onGetCode={handleGetCode} />
                </div>
              ))}
            </div>
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
