"use client";

import React, { useState, useMemo } from "react";
import styles from "../../page.module.css";
import storeStyles from "./StoreClient.module.css";
import CouponCard, { Coupon, Store } from "../../../components/CouponCard";
import CopyModal from "../../../components/CopyModal";

interface StoreClientProps {
  store: Store;
  coupons: Coupon[];
}

export default function StoreClient({ store, coupons }: StoreClientProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCoupon, setActiveCoupon] = useState<Coupon | null>(null);

  // Auto-open coupon modal if coupon parameter is present in URL
  React.useEffect(() => {
    if (typeof window !== "undefined") {
      const params = new URLSearchParams(window.location.search);
      const couponParam = params.get("coupon");
      if (couponParam) {
        const found = coupons.find(c => String(c.id) === String(couponParam));
        if (found) {
          setActiveCoupon(found);
        }
      }
    }
  }, [coupons]);

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

  // Back Arrow Icon
  const BackIcon = () => (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="19" y1="12" x2="5" y2="12" />
      <polyline points="12 19 5 12 12 5" />
    </svg>
  );

  const GlobeIcon = () => (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <line x1="2" y1="12" x2="22" y2="12" />
      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
    </svg>
  );

  // Filter coupons based on search query within this store
  const filteredCoupons = useMemo(() => {
    if (searchQuery.trim() === "") return coupons;
    const query = searchQuery.toLowerCase();
    return coupons.filter((coupon) => {
      const matchesCode = coupon.code ? coupon.code.toLowerCase().includes(query) : false;
      const matchesDesc = coupon.description ? coupon.description.toLowerCase().includes(query) : false;
      const matchesDiscount = coupon.discount ? coupon.discount.toLowerCase().includes(query) : false;
      return matchesCode || matchesDesc || matchesDiscount;
    });
  }, [coupons, searchQuery]);

  const verifiedCount = coupons.filter(c => c.is_verified).length;
  const successRate = coupons.length > 0 ? Math.round((verifiedCount / coupons.length) * 100) : 100;

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

    // 1. Show the copy coupon modal instantly in the active tab
    setActiveCoupon(coupon);

    // 2. Open the merchant store's affiliate URL in a new tab safely
    try {
      window.open(storeUrl, "_blank", "noopener,noreferrer");
    } catch (err) {
      console.warn("Failed to open merchant website in a new tab:", err);
      // Fallback: if popup is blocked, redirect the current tab instead
      window.location.href = storeUrl;
    }
  };

  const storeUrl = `https://www.google.com/search?q=${encodeURIComponent(store.name + " official website")}`;

  return (
    <div className={styles.mainContainer}>
      {/* Back button link */}
      <div className={storeStyles.backLinkContainer}>
        <a href="/" className={storeStyles.backLink}>
          <BackIcon />
          <span>Back to All Stores</span>
        </a>
      </div>

      {/* Store Header Banner Card */}
      <section className={storeStyles.storeBanner}>
        <div className={storeStyles.storeBannerHeader}>
          {store.logo ? (
            <div className={storeStyles.storeLargeLogoWrapper}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={store.logo} alt={store.name} className={storeStyles.storeLargeLogo} />
            </div>
          ) : (
            <div className={storeStyles.storeLargeLogoFallback}>
              {store.name.charAt(0).toUpperCase()}
            </div>
          )}
          
          <div className={storeStyles.storeMetaInfo}>
            <div className={storeStyles.storeTitleRow}>
              <h1 className={storeStyles.storeTitle}>{store.name} Promo Codes</h1>
              <span className={storeStyles.storeVerifiedBadge}>100% Working</span>
            </div>
            <p className={storeStyles.storeSubtitle}>
              Save money today at {store.name} with verified discounts, free shipping codes, and promotional deals.
            </p>
            
            <a 
              href={storeUrl} 
              target="_blank" 
              rel="noopener noreferrer" 
              className={storeStyles.storeWebsiteLink}
            >
              <GlobeIcon />
              <span>Visit Official {store.name} Website</span>
            </a>
          </div>
        </div>

        {/* Store Coupon Statistics Grid */}
        <div className={storeStyles.statsGrid}>
          <div className={storeStyles.statCard}>
            <span className={storeStyles.statValue}>{coupons.length}</span>
            <span className={storeStyles.statLabel}>Available Offers</span>
          </div>
          <div className={storeStyles.statCard}>
            <span className={storeStyles.statValue}>{verifiedCount}</span>
            <span className={storeStyles.statLabel}>Verified Codes</span>
          </div>
          <div className={storeStyles.statCard}>
            <span className={storeStyles.statValue} style={{ color: "var(--accent-green)" }}>
              {successRate}%
            </span>
            <span className={storeStyles.statLabel}>Success Rate</span>
          </div>
        </div>
      </section>

      {/* Search and Grid Filter Layout */}
      <div className={styles.contentLayout}>
        <div className={storeStyles.searchAndTitleRow}>
          <h2 className={styles.sectionTitle}>Active {store.name} Coupons</h2>
          
          <div className={`${styles.searchBarWrapper} ${storeStyles.searchBarOverride}`}>
            <SearchIcon />
            <input
              type="text"
              placeholder={`Search ${store.name} deals...`}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className={styles.searchInput}
            />
            {searchQuery && (
              <button 
                onClick={() => setSearchQuery("")} 
                className={styles.btnClearSearch}
              >
                Clear
              </button>
            )}
          </div>
        </div>

        <section className={styles.couponsSection}>
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
              <p>No matching coupons were found for &quot;{searchQuery}&quot; in this store.</p>
              <button 
                onClick={() => setSearchQuery("")} 
                className={styles.btnResetFilters}
              >
                Clear Search
              </button>
            </div>
          )}
        </section>
      </div>

      {/* Copy modal popup */}
      {activeCoupon && (
        <CopyModal coupon={activeCoupon} onClose={() => setActiveCoupon(null)} />
      )}
    </div>
  );
}
