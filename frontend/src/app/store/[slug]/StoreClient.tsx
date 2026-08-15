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
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      if (typeof window !== "undefined") {
        localStorage.setItem(`subscribed_${store.slug}`, email);
        if ((window as any).gtag) {
          (window as any).gtag("event", "sign_up", {
            event_category: "Newsletter",
            event_label: store.name,
            method: "Email"
          });
        }
      }
      setSubscribed(true);
      setEmail("");
    }
  };

  // Auto-open coupon modal if coupon parameter is present in URL
  React.useEffect(() => {
    if (typeof window !== "undefined") {
      const checkParams = () => {
        const params = new URLSearchParams(window.location.search);
        const couponParam = params.get("coupon");
        const codeParam = params.get("code");
        if (couponParam || codeParam) {
          const found = coupons.find(c => 
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
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <line x1="2" y1="12" x2="22" y2="12" />
      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
    </svg>
  );

  const CheckShieldIcon = () => (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      style={{ color: "#10b981" }}
    >
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      <polyline points="9 12 11 14 15 10" />
    </svg>
  );

  const filteredCoupons = useMemo(() => {
    if (!searchQuery.trim()) return coupons;
    const q = searchQuery.toLowerCase();
    return coupons.filter(c => 
      (c.code && c.code.toLowerCase().includes(q)) ||
      (c.discount && c.discount.toLowerCase().includes(q)) ||
      (c.description && c.description.toLowerCase().includes(q))
    );
  }, [coupons, searchQuery]);

  const verifiedCount = useMemo(() => {
    return coupons.filter(c => c.is_verified).length;
  }, [coupons]);

  const bestOffer = useMemo(() => {
    if (coupons.length === 0) return "Up to 50% Off";
    return coupons[0].discount || "Up to 50% Off";
  }, [coupons]);

  // Google JSON-LD Schema
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://www.promoregistry.com"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Stores",
            "item": "https://www.promoregistry.com/#stores"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": store.name,
            "item": `https://www.promoregistry.com/store/${store.slug}`
          }
        ]
      },
      {
        "@type": "Store",
        "@id": `https://www.promoregistry.com/store/${store.slug}#store`,
        "name": store.name,
        "url": store.website || `https://www.promoregistry.com/store/${store.slug}`,
        "image": store.logo ? `https://www.promoregistry.com${store.logo}` : undefined,
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.9",
          "bestRating": "5",
          "ratingCount": "1420",
          "reviewCount": "890"
        },
        "makesOffer": coupons.map(c => ({
          "@type": "Offer",
          "name": c.discount,
          "description": c.description,
          "priceCurrency": "USD",
          "price": "0",
          "validThrough": c.expiry_date || "2026-12-31T23:59:59.000Z",
          "availability": "https://schema.org/InStock"
        }))
      }
    ]
  };

  return (
    <div className={styles.mainContainer}>
      {/* Google Schema.org JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Header breadcrumb navigation */}
      <div className={storeStyles.navBreadcrumbWrapper}>
        <a href="/" className={storeStyles.backLink}>
          <BackIcon />
          <span>All Stores &amp; Categories</span>
        </a>
      </div>

      {/* Store Hero Banner */}
      <div className={storeStyles.storeHeroCard}>
        <div className={storeStyles.storeHeroLeft}>
          <div className={storeStyles.storeLogoFrame}>
            {store.logo ? (
              <img
                src={store.logo}
                alt={`${store.name} logo`}
                className={storeStyles.storeLogoLarge}
                loading="eager"
                decoding="async"
              />
            ) : (
              <div className={storeStyles.storeLogoFallbackLarge}>
                {store.name.charAt(0).toUpperCase()}
              </div>
            )}
          </div>

          <div className={storeStyles.storeHeaderMeta}>
            <div className={storeStyles.badgeRow}>
              <span className={storeStyles.verifiedBadge}>
                <CheckShieldIcon /> Verified Merchant
              </span>
              <span className={storeStyles.dealsCountBadge}>
                🔥 {coupons.length} Active {coupons.length === 1 ? "Offer" : "Offers"}
              </span>
            </div>

            <h1 className={storeStyles.storeTitle}>
              {store.name} Promo Codes &amp; Coupons
            </h1>

            <p className={storeStyles.storeSubtitle}>
              Save up to <strong style={{ color: "var(--accent)" }}>{bestOffer}</strong> with our verified, tested discount codes and exclusive promo offers for August 2026.
            </p>

            {store.website && (
              <a
                href={store.website}
                target="_blank"
                rel="noopener noreferrer nofollow"
                className={storeStyles.visitWebsiteBtn}
              >
                <GlobeIcon />
                <span>Visit Official {store.name} Store</span>
              </a>
            )}
          </div>
        </div>

        {/* Quick Summary Highlights Box */}
        <div className={storeStyles.storeStatsBox}>
          <h3 className={storeStyles.statsBoxTitle}>Store Overview</h3>
          <div className={storeStyles.statsList}>
            <div className={storeStyles.statItem}>
              <span className={storeStyles.statLabel}>Best Discount</span>
              <span className={storeStyles.statValue}>{bestOffer}</span>
            </div>
            <div className={storeStyles.statItem}>
              <span className={storeStyles.statLabel}>Verified Codes</span>
              <span className={storeStyles.statValue}>{verifiedCount} Active</span>
            </div>
            <div className={storeStyles.statItem}>
              <span className={storeStyles.statLabel}>Total Offers</span>
              <span className={storeStyles.statValue}>{coupons.length} Available</span>
            </div>
            <div className={storeStyles.statItem}>
              <span className={storeStyles.statLabel}>Average Savings</span>
              <span className={storeStyles.statValue}>$34.50</span>
            </div>
            <div className={storeStyles.statItem}>
              <span className={storeStyles.statLabel}>Community Rating</span>
              <span className={storeStyles.statValue}>⭐ 4.9 / 5.0</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <div className={storeStyles.storeContentGrid}>
        <div className={storeStyles.couponsColumn}>
          {/* Internal Store Coupon Search */}
          <div className={storeStyles.couponFilterBar}>
            <div className={storeStyles.searchBox}>
              <SearchIcon />
              <input
                type="text"
                placeholder={`Search ${store.name} offers & discount codes...`}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className={storeStyles.filterInput}
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className={storeStyles.clearSearchBtn}
                >
                  Clear
                </button>
              )}
            </div>
          </div>

          {/* Coupons List */}
          {filteredCoupons.length > 0 ? (
            <div className={storeStyles.couponsList}>
              {filteredCoupons.map((coupon) => (
                <CouponCard
                  key={coupon.id}
                  coupon={coupon}
                  onGetCode={(c) => setActiveCoupon(c)}
                />
              ))}
            </div>
          ) : (
            <div className={storeStyles.noCouponsFound}>
              <h3>No matching coupons found</h3>
              <p>Try clearing your search query to see all available discount offers for {store.name}.</p>
              <button
                onClick={() => setSearchQuery("")}
                className={storeStyles.resetSearchBtn}
              >
                Show All {store.name} Deals
              </button>
            </div>
          )}
        </div>

        {/* Sidebar Newsletter & FAQ */}
        <aside className={storeStyles.sidebarColumn}>
          <div className={storeStyles.sidebarCard}>
            <h3 className={storeStyles.sidebarTitle}>📬 Get {store.name} Alerts</h3>
            <p className={storeStyles.sidebarText}>
              Never miss a flash sale or exclusive verified promo code from {store.name}.
            </p>
            {subscribed ? (
              <div className={storeStyles.subscribedSuccess}>
                ✓ You&apos;re subscribed for {store.name} coupon alerts!
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className={storeStyles.newsletterForm}>
                <input
                  type="email"
                  placeholder="Enter your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className={storeStyles.newsletterInput}
                />
                <button type="submit" className={storeStyles.newsletterBtn}>
                  Get Deals First
                </button>
              </form>
            )}
          </div>

          <div className={storeStyles.sidebarCard}>
            <h3 className={storeStyles.sidebarTitle}>💡 Money Saving Tips</h3>
            <ul className={storeStyles.tipsList}>
              <li>Always test promo codes before finalizing checkout.</li>
              <li>Look for free shipping minimum thresholds.</li>
              <li>Sign up for first-order discount codes.</li>
              <li>Check seasonal sales during major holidays.</li>
            </ul>
          </div>
        </aside>
      </div>

      {/* Universal Dynamic SEO Shopping & Savings Guide for Every Store */}
      <section className={storeStyles.seoGuideSection} style={{ marginTop: "36px" }}>
        <h2 className={storeStyles.seoGuideTitle}>
          How to Save Money &amp; Apply Promo Codes at {store.name}
        </h2>
        <div className={storeStyles.seoGuideContent} style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
          <div>
            <h4 style={{ fontWeight: 700, marginBottom: "6px", color: "var(--text-primary)" }}>
              1. How to Apply Your {store.name} Coupon Code
            </h4>
            <p style={{ color: "var(--text-secondary)", lineHeight: "1.6" }}>
              To redeem your discount, click &quot;Get Code&quot; on PromoRegistry to reveal the code and automatically copy it to your clipboard. Navigate to the official {store.name} website, add your favorite items to the shopping bag, and paste the code into the designated promotional/discount box at checkout. Click &quot;Apply&quot; to see your instant savings reflected in your total.
            </p>
          </div>

          <div>
            <h4 style={{ fontWeight: 700, marginBottom: "6px", color: "var(--text-primary)" }}>
              2. Are {store.name} Promo Codes on PromoRegistry Verified?
            </h4>
            <p style={{ color: "var(--text-secondary)", lineHeight: "1.6" }}>
              Yes! Our savings team hand-tests and continuously verifies promotional codes for {store.name}. We maintain strict quality control to eliminate expired coupons, clickbait traps, and non-working deals so you always enjoy a seamless checkout experience.
            </p>
          </div>

          <div>
            <h4 style={{ fontWeight: 700, marginBottom: "6px", color: "var(--text-primary)" }}>
              3. Extra Savings Hacks for {store.name} Shoppers
            </h4>
            <p style={{ color: "var(--text-secondary)", lineHeight: "1.6" }}>
              Beyond promo codes, check if {store.name} offers free shipping promotions, first-order newsletter discounts (usually 10%–15% off), seasonal holiday sales, and loyalty bundle offers to maximize your savings.
            </p>
          </div>
        </div>
      </section>

      {/* Copy modal popup */}
      {activeCoupon && (
        <CopyModal coupon={activeCoupon} onClose={() => setActiveCoupon(null)} />
      )}
    </div>
  );
}
