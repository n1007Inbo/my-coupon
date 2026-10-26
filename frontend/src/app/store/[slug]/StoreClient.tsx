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
  const [bannerLogoError, setBannerLogoError] = useState(false);

  // Clearbit logo fallback for store banner
  const bannerLogo = useMemo(() => {
    if (bannerLogoError) return null;
    if (store.logo) return store.logo;
    // Try Clearbit
    const website = store.website;
    if (website) {
      try {
        const hostname = new URL(website).hostname.replace(/^www\./, "");
        const redirectDomains = ["vert.si", "litl.si", "csl.admitad.com", "fatcoupon.com", "shrsl.com"];
        if (!redirectDomains.some(d => hostname.includes(d))) {
          if (hostname.endsWith(".myshopify.com")) {
            const brand = hostname.replace(".myshopify.com", "").replace(/3d-?/g, "");
            return `https://logo.clearbit.com/${brand}.com`;
          }
          return `https://logo.clearbit.com/${hostname}`;
        }
      } catch { /* ignore */ }
    }
    // Guess from store name
    const clean = store.name.toLowerCase().replace(/[^a-z0-9]/g, "");
    return `https://logo.clearbit.com/${clean}.com`;
  }, [store.logo, store.website, store.name, bannerLogoError]);

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
    const rawStoreUrl = coupon.affiliate_url || (coupon as any).affiliate_link || (coupon as any).affiliateLink || (store as any).affiliateLink || (store as any).affiliate_link || (store as any).affiliate_url || website || `https://www.google.com/search?q=${encodeURIComponent(storeName + " official website")}`;
    
    // Append Google Ads campaign and keyword SubIDs if it's an affiliate redirect link
    let storeUrl = rawStoreUrl;
    if (typeof window !== "undefined" && rawStoreUrl) {
      const isAffiliate = rawStoreUrl.includes("admitad") || 
                          rawStoreUrl.includes("convert") || 
                          rawStoreUrl.includes("csl") || 
                          rawStoreUrl.includes("bouquetsbypost") || 
                          rawStoreUrl.includes("litl.si") ||
                          rawStoreUrl.includes("fatcoupon") ||
                          rawStoreUrl.includes("/go/");
      if (isAffiliate) {
        try {
          const utmCampaign = sessionStorage.getItem("utm_campaign") || "";
          const utmTerm = sessionStorage.getItem("utm_term") || "";
          const gclid = sessionStorage.getItem("gclid") || "";
          
          const urlObj = rawStoreUrl.startsWith("http")
            ? new URL(rawStoreUrl)
            : new URL(rawStoreUrl, window.location.origin);
          
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

    // GA4 Button Click Event Tracking
    if (typeof window !== "undefined" && (window as any).gtag) {
      (window as any).gtag("event", "generate_lead", {
        event_category: "Affiliate Button Click",
        event_label: `${storeName} - ${coupon.discount}`,
        value: 1.0,
        currency: "USD",
        coupon_id: String(coupon.id),
        is_direct_deal: isDirect
      });
    }

    // 2. Redirect the current active tab to the merchant store's affiliate URL
    window.location.href = storeUrl;
  };

  const [officialWebsiteUrl, setOfficialWebsiteUrl] = useState<string | null>(null);

  const baseStoreUrl = (store as any).affiliateLink || (store as any).affiliate_link || (store as any).affiliate_url || coupons.find(c => c.affiliate_url || (c as any).affiliate_link || (c as any).affiliateLink)?.affiliate_url || (coupons.find(c => (c as any).affiliate_link) as any)?.affiliate_link || (coupons.find(c => (c as any).affiliateLink) as any)?.affiliateLink || store.website || `https://www.google.com/search?q=${encodeURIComponent(store.name + " official website")}`;

  React.useEffect(() => {
    let finalUrl = baseStoreUrl;
    try {
      if (baseStoreUrl) {
        const isAffiliate = baseStoreUrl.includes("admitad") || 
                            baseStoreUrl.includes("convert") || 
                            baseStoreUrl.includes("csl") || 
                            baseStoreUrl.includes("bouquetsbypost") || 
                            baseStoreUrl.includes("litl.si") ||
                            baseStoreUrl.includes("fatcoupon") ||
                            baseStoreUrl.includes("/go/");
        if (isAffiliate) {
          const utmCampaign = sessionStorage.getItem("utm_campaign") || "";
          const utmTerm = sessionStorage.getItem("utm_term") || "";
          const gclid = sessionStorage.getItem("gclid") || "";
          
          const urlObj = baseStoreUrl.startsWith("http")
            ? new URL(baseStoreUrl)
            : new URL(baseStoreUrl, window.location.origin);
          
          if (utmCampaign) urlObj.searchParams.set("subid1", utmCampaign);
          if (utmTerm) urlObj.searchParams.set("subid2", utmTerm);
          if (gclid) urlObj.searchParams.set("subid3", gclid);
          
          finalUrl = urlObj.toString();
        }
      }
    } catch (e) {
      console.warn("Failed to process officialWebsiteUrl:", e);
    }
    setOfficialWebsiteUrl(finalUrl);
  }, [baseStoreUrl]);

  return (
    <div className={storeStyles.pageContainer}>
      {/* Back button link */}
      <div className={storeStyles.backLinkContainer}>
        <a href="/" className={storeStyles.backLink}>
          <BackIcon />
          <span>Back to All Stores</span>
        </a>
      </div>

      {/* Clean Elevated Store Header (PerkVue Luxury Standard) */}
      <section className={storeStyles.storeHeader}>
        <div className={storeStyles.brandInfo}>
          {bannerLogo ? (
            <img 
              src={bannerLogo} 
              alt={`${store.name} Logo`} 
              className={storeStyles.storeLogo} 
              width={96}
              height={96}
              decoding="async"
              fetchPriority="high"
              onError={() => setBannerLogoError(true)}
            />
          ) : (
            <div className={storeStyles.fallbackLogo}>
              {store.name.charAt(0).toUpperCase()}
            </div>
          )}
          <div>
            <h1 className={storeStyles.storeTitle}>{store.name} Promo Codes & Deals</h1>
            <p className={storeStyles.storeSubtitle}>
              Direct verified savings &amp; exclusive partner discounts. Tested active today.
            </p>
          </div>
        </div>

        <div className={storeStyles.trustPill}>
          <span className={storeStyles.pulseDot}></span> Tested Active Today
        </div>
      </section>

      {/* Direct Coupon Cards Focus Grid (Above-the-fold) */}
      <section className={storeStyles.cardsGrid}>
        {filteredCoupons.length > 0 ? (
          filteredCoupons.map((coupon, idx) => (
            <div key={coupon.id} className={storeStyles.cardWrapper}>
              <CouponCard 
                coupon={coupon} 
                onGetCode={handleGetCode} 
                isBestDeal={idx === 0} 
              />
            </div>
          ))
        ) : (
          <div className={styles.noResults}>
            <h3>No active coupons found</h3>
            <p>Please check back later or explore other partner stores.</p>
          </div>
        )}
      </section>

      {/* Clean Trust Strip */}
      <section className={storeStyles.trustNote}>
        <div className={storeStyles.trustNoteText}>
          <strong>PromoRegistry Direct Checkout Standard:</strong> Clicking any offer automatically copies your code and opens the official {store.name} checkout.
        </div>
        <span className={storeStyles.secureBadge}>🔒 Direct Checkout Verified</span>
      </section>

      {/* Copy Modal */}
      {activeCoupon && (
        <CopyModal
          coupon={activeCoupon}
          onClose={() => setActiveCoupon(null)}
        />
      )}
    </div>
  );
}
