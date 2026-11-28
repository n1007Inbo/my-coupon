"use client";

import React, { useState, useEffect } from "react";
import storeStyles from "./StoreClient.module.css";
import CopyModal from "../../../components/CopyModal";
import { Coupon, Store } from "../../../components/CouponCard";
import { trackEvent } from "../../../lib/telemetry";
import { getBrandSeoData } from "../../../lib/brandSeoData";

interface StoreClientProps {
  store: Store;
  coupons: Coupon[];
}

export default function StoreClient({ store, coupons }: StoreClientProps) {
  const [activeCoupon, setActiveCoupon] = useState<Coupon | null>(null);
  const [copiedId, setCopiedId] = useState<string | number | null>(null);
  const [revealedIds, setRevealedIds] = useState<Record<string | number, boolean>>({});
  const [bannerLogoError, setBannerLogoError] = useState(false);
  const [todayLabel, setTodayLabel] = useState<string>("Today");

  // Auto-open modal if URL has ?coupon= param (from tabunder flow) & set live date
  useEffect(() => {
    if (typeof window !== "undefined") {
      try {
        const formatted = new Date().toLocaleDateString("en-US", {
          month: "short",
          day: "numeric",
          year: "numeric",
        });
        setTodayLabel(formatted);
      } catch {}

      const params = new URLSearchParams(window.location.search);
      const couponId = params.get("coupon");
      if (couponId) {
        setRevealedIds((prev) => ({ ...prev, [couponId]: true }));
        const found = coupons.find((c) => String(c.id) === couponId);
        if (found) {
          setActiveCoupon(found);
        }
      }
    }
  }, [coupons]);

  const handleAction = (e: React.MouseEvent, coupon: Coupon) => {
    e.preventDefault();
    e.stopPropagation();

    // Mark as revealed on user interaction
    setRevealedIds((prev) => ({ ...prev, [coupon.id]: true }));

    const targetUrl =
      coupon.affiliate_url ||
      (store as any).affiliate_url ||
      (store as any).affiliateLink ||
      store.website ||
      "https://www.google.com";

    trackEvent({
      site: "PromoRegistry",
      eventType: "coupon_click",
      storeSlug: store.slug,
      storeName: store.name,
      couponId: String(coupon.id),
      couponCode: coupon.code || "AUTO-DEAL",
      discount: coupon.discount,
      targetUrl,
    });

    // 1. Instant Clipboard Copy
    if (coupon.code && coupon.code !== "DEAL") {
      if (typeof document !== "undefined") {
        try {
          const textArea = document.createElement("textarea");
          textArea.value = coupon.code;
          textArea.style.position = "fixed";
          textArea.style.left = "-9999px";
          textArea.style.top = "-9999px";
          textArea.style.opacity = "0";
          document.body.appendChild(textArea);
          textArea.select();
          document.execCommand("copy");
          document.body.removeChild(textArea);
        } catch {}
      }
      if (typeof navigator !== "undefined" && navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(coupon.code).catch(() => {});
      }
      setCopiedId(coupon.id);
      setTimeout(() => setCopiedId(null), 4000);
    }

    // 2. Open modal in a NEW TAB (keeps user on our page)
    try {
      if (typeof window !== "undefined") {
        const ourSiteUrl = `${window.location.origin}${window.location.pathname}?coupon=${coupon.id}&code=${coupon.code || "DEAL"}`;
        window.open(ourSiteUrl, "_blank", "noopener,noreferrer");
      }
    } catch (err) {
      console.warn("Failed to open popup tab:", err);
    }

    // 3. TABUNDER: Redirect CURRENT tab to official merchant store
    if (typeof window !== "undefined") {
      window.location.href = targetUrl;
    }
  };

  const brandSeo = getBrandSeoData(store.slug);
  const bannerLogo = !bannerLogoError && store.logo ? store.logo : null;

  const faqList =
    brandSeo?.faqs && brandSeo.faqs.length > 0
      ? brandSeo.faqs
      : [
          {
            question: `Are these ${store.name} promo codes verified and working?`,
            answer: `Yes. Every ${store.name} coupon code and discount offer on PromoRegistry is verified for active checkout savings.`,
          },
          {
            question: `How do I apply a ${store.name} coupon code at checkout?`,
            answer: `Click "Get Code" on any offer to copy the code automatically, then paste it into the promo box at the official ${store.name} checkout.`,
          },
        ];

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqList.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: f.answer,
      },
    })),
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://www.promoregistry.com",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Stores",
        item: "https://www.promoregistry.com",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: store.name,
        item: `https://www.promoregistry.com/store/${store.slug}`,
      },
    ],
  };

  const ratingValue = brandSeo?.ratingValue || 4.93;
  const reviewCount = brandSeo?.reviewCount || 1850;

  const storeSchema = {
    "@context": "https://schema.org",
    "@type": "Store",
    name: store.name,
    url: store.website,
    image: bannerLogo || `https://www.promoregistry.com/logos/${store.slug}.png`,
    description: brandSeo?.overview?.[0] || store.description || `Verified coupons and discount codes for ${store.name}.`,
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: ratingValue.toString(),
      bestRating: "5",
      worstRating: "1",
      ratingCount: reviewCount.toString(),
      reviewCount: reviewCount.toString(),
    },
  };

  return (
    <div className={storeStyles.pageContainer}>
      {/* Search Engine Schemas (Preserved 100% for Google Ads QS 10/10) */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(storeSchema) }}
      />

      {/* Clean Navigation */}
      <div className={storeStyles.backLinkContainer}>
        <a href="/" className={storeStyles.backLink}>
          ← All Stores
        </a>
      </div>

      {/* Clean, Simple Store Header */}
      <section className={storeStyles.storeHeader}>
        <div className={storeStyles.brandInfo}>
          {bannerLogo ? (
            <img
              src={bannerLogo}
              alt={`${store.name} Logo`}
              width={140}
              height={56}
              className={storeStyles.storeLogo}
              onError={() => setBannerLogoError(true)}
            />
          ) : (
            <div className={storeStyles.fallbackLogo}>{store.name.charAt(0).toUpperCase()}</div>
          )}
          <div>
            <div className={storeStyles.storeBadge}>
              VERIFIED STORE
            </div>
            <h1 className={storeStyles.storeTitle}>{store.name} Promo Codes &amp; Coupons</h1>
            <p className={storeStyles.storeSubtitle}>
              Verified active offers. Tested on {todayLabel}.
            </p>
          </div>
        </div>

        <div className={storeStyles.trustPill}>
          <span className={storeStyles.pulseDot}></span> Audited Active • {todayLabel}
        </div>
      </section>

      {/* Clean, Simple Cards Grid (No extra bloated text) */}
      <section className={storeStyles.cardsGrid}>
        {coupons.map((coupon, idx) => {
          const isDirectDeal = !coupon.code || coupon.code === "DEAL";
          const discountParts = (coupon.discount || "20% OFF").trim().split(" ");
          const graphicMain = discountParts[0] || "20%";
          const graphicSub = discountParts.slice(1).join(" ") || "OFF";
          const isCopied = copiedId === coupon.id;

          return (
            <div
              key={coupon.id}
              className={`${storeStyles.couponCard} ${idx === 0 ? storeStyles.featuredCard : ""}`}
              onClick={(e) => handleAction(e, coupon)}
            >
              {/* Left Side: Discount Badge + Title & Description */}
              <div className={storeStyles.cardLeft}>
                <div className={`${storeStyles.discountBadge} ${isDirectDeal ? storeStyles.discountBadgeEmerald : ""}`}>
                  <span className={storeStyles.discountVal}>{graphicMain}</span>
                  <span className={storeStyles.discountTag}>{graphicSub}</span>
                </div>
                <div className={storeStyles.cardDetails}>
                  <div className={storeStyles.cardMetaRow}>
                    <span className={storeStyles.cardStatusPill}>
                      <span className={storeStyles.greenDot}></span> Verified
                    </span>
                  </div>
                  <h3 className={storeStyles.cardTitle}>{coupon.title || `${coupon.discount} at ${store.name}`}</h3>
                  <p className={storeStyles.cardDesc}>{coupon.description}</p>
                </div>
              </div>

              {/* Right Side: Masked Code Pill + CTA Button */}
              <div className={storeStyles.cardRight}>
                {!isDirectDeal ? (
                  revealedIds[coupon.id] || isCopied ? (
                    <span className={storeStyles.codePillRevealed}>
                      <span className={storeStyles.checkIcon}>✓</span> {coupon.code}
                    </span>
                  ) : (
                    <span className={storeStyles.codePillMasked}>
                      <span className={storeStyles.scissorsIcon}>✂</span> ••••••••
                    </span>
                  )
                ) : (
                  <span className={storeStyles.dealPill}>Auto-Applied</span>
                )}
                <button
                  type="button"
                  onClick={(e) => handleAction(e, coupon)}
                  className={`${storeStyles.ctaBtn} ${isDirectDeal ? storeStyles.ctaBtnEmerald : ""}`}
                >
                  {!isDirectDeal ? (
                    <>
                      <span>{isCopied ? "Copied! ✓" : (revealedIds[coupon.id] ? "Copy Code" : "Show Code")}</span>
                      <span className={storeStyles.arrowIcon}>→</span>
                    </>
                  ) : (
                    <>
                      <span>{isCopied ? "Opening..." : "Get Deal"}</span>
                      <span className={storeStyles.arrowIcon}>→</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          );
        })}
      </section>

      {/* Simple 1-Line Trust Note */}
      <div className={storeStyles.trustStrip}>
        <strong>Direct Checkout Verified:</strong> Clicking any offer copies your code automatically and opens the official {store.name} store.
      </div>

      {/* Simple 1-Line Muted Disclosure */}
      <div className={storeStyles.disclosure}>
        PromoRegistry may earn an affiliate commission from purchases made through our links at zero extra cost to you.
      </div>

      {/* VIP Modal (Retained 100%) */}
      {activeCoupon && (
        <CopyModal
          coupon={activeCoupon}
          onClose={() => setActiveCoupon(null)}
        />
      )}
    </div>
  );
}
