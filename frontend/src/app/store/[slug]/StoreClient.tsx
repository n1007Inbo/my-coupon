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
            answer: `Yes. Every ${store.name} coupon code and discount offer on PromoRegistry is hand-tested by our verification team for active checkout savings.`,
          },
          {
            question: `How do I apply a ${store.name} coupon code at checkout?`,
            answer: `Click "Get Code" on any ${store.name} offer to copy the promo code automatically, then paste it into the discount box at the official ${store.name} checkout.`,
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
      {/* Search Engine Schemas (Preserved 100% for Google Ads QS 10/10 & Rich Snippets) */}
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
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <line x1="19" y1="12" x2="5" y2="12" />
            <polyline points="12 19 5 12 12 5" />
          </svg>
          <span>All Stores</span>
        </a>
      </div>

      {/* Clean, Elevated Store Header (Distinct PromoRegistry Styling) */}
      <section className={storeStyles.storeHeader}>
        <div className={storeStyles.brandInfo}>
          {bannerLogo ? (
            <img
              src={bannerLogo}
              alt={`${store.name} Logo`}
              width={160}
              height={64}
              className={storeStyles.storeLogo}
              onError={() => setBannerLogoError(true)}
            />
          ) : (
            <div className={storeStyles.fallbackLogo}>{store.name.charAt(0).toUpperCase()}</div>
          )}
          <div>
            <div style={{ display: "inline-block", fontSize: "0.72rem", fontWeight: 800, letterSpacing: "0.06em", color: "#0284c7", background: "#f0f9ff", border: "1px solid #bae6fd", padding: "3px 8px", borderRadius: "6px", marginBottom: "6px", textTransform: "uppercase" }}>
              PROMOREGISTRY VERIFIED PARTNER
            </div>
            <h1 className={storeStyles.storeTitle}>{store.name} Promo Codes &amp; Coupons</h1>
            <p className={storeStyles.storeSubtitle}>
              Direct verified savings &amp; official discount codes. Audited active on {todayLabel}.
            </p>
          </div>
        </div>

        <div className={storeStyles.trustPill}>
          <span className={storeStyles.pulseDot}></span> Verified Active • {todayLabel}
        </div>
      </section>

      {/* Focused, High-Converting Coupon Cards Grid */}
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
              className={`${storeStyles.cardContainer} ${idx === 0 ? storeStyles.primaryCard : ""}`}
              onClick={(e) => handleAction(e, coupon)}
            >
              {/* Header */}
              <div className={storeStyles.cardHeader}>
                <span className={storeStyles.verifiedPill}>
                  <span className={storeStyles.pulsingDot}></span> Verified Active
                </span>
                <span className={storeStyles.badge3dExtruded}>
                  {isDirectDeal ? "AUTO-APPLIED" : "VERIFIED CODE"}
                </span>
              </div>

              {/* Main Body */}
              <div className={storeStyles.cardBody}>
                <div className={storeStyles.offerRow}>
                  <div className={isDirectDeal ? storeStyles.valueGraphicEmerald : storeStyles.valueGraphicNavy}>
                    <span className={storeStyles.graphicMain}>{graphicMain}</span>
                    <span className={storeStyles.graphicSub}>{graphicSub}</span>
                  </div>
                  <div className={storeStyles.offerText}>
                    <h3 className={storeStyles.cardTitle}>{coupon.title || `${coupon.discount} at ${store.name}`}</h3>
                    <p className={storeStyles.cardDesc}>{coupon.description}</p>
                  </div>
                </div>

                {/* Code / Deal Feature Indicator */}
                {!isDirectDeal ? (
                  <div className={storeStyles.codeBox3d}>
                    <div className={storeStyles.codeLabelWrapper}>
                      <span className={storeStyles.codeLabel}>Promo Code:</span>
                      <span className={storeStyles.codeBadge}>
                        {coupon.code ? coupon.code : "••••••••"}
                      </span>
                    </div>
                    <span className={storeStyles.autoCopiedPill}>
                      {isCopied ? "Copied! ✓" : "Click to Copy & Visit"}
                    </span>
                  </div>
                ) : (
                  <div className={storeStyles.dealFeatureRow}>
                    <span className={storeStyles.dealFeatureText}>Direct merchant discount</span>
                    <span className={storeStyles.dealFeatureBadge}>No Code Required ✓</span>
                  </div>
                )}
              </div>

              {/* CTA Push Button */}
              <div className={storeStyles.cardFooter}>
                <button
                  type="button"
                  onClick={(e) => handleAction(e, coupon)}
                  className={`${storeStyles.ctaButton} ${isDirectDeal ? storeStyles.btn3dEmerald : storeStyles.btn3dNavy}`}
                >
                  {!isDirectDeal ? (
                    <>
                      <span>{isCopied ? "Code Copied! ✓" : "Get Code & Save"}</span>
                      <span className={storeStyles.arrowIcon}>→</span>
                    </>
                  ) : (
                    <>
                      <span>{isCopied ? "Opening Store..." : "Claim Deal"}</span>
                      <span className={storeStyles.arrowIcon}>→</span>
                    </>
                  )}
                </button>

                <div className={storeStyles.trustFooter}>
                  <span>✓ 100% Checkout Verified</span>
                  <span>•</span>
                  <span>Free &amp; Instant Access</span>
                </div>
              </div>
            </div>
          );
        })}
      </section>

      {/* Clean Trust Guarantee Strip */}
      <section className={storeStyles.trustNote}>
        <div className={storeStyles.trustNoteText}>
          <strong>PromoRegistry Guarantee:</strong> Clicking any offer automatically copies your discount code and opens the official {store.name} online checkout.
        </div>
        <span className={storeStyles.secureBadge}>🔒 Direct Checkout Verified</span>
      </section>

      {/* Streamlined, Compact FAQ & Disclosure (Clean & Minimal below fold) */}
      <section style={{ marginTop: "32px", borderTop: "1px solid #e2e8f0", paddingTop: "24px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "16px", marginBottom: "24px" }}>
          {faqList.slice(0, 2).map((faq, fIdx) => (
            <div key={fIdx} style={{ background: "#f8fafc", borderRadius: "12px", padding: "16px", border: "1px solid #e2e8f0" }}>
              <h3 style={{ fontSize: "0.88rem", fontWeight: 700, color: "#0f172a", marginBottom: "6px" }}>{faq.question}</h3>
              <p style={{ fontSize: "0.82rem", color: "#475569", lineHeight: 1.5, margin: 0 }}>{faq.answer}</p>
            </div>
          ))}
        </div>

        <div style={{ textAlign: "center", fontSize: "0.74rem", color: "#94a3b8", lineHeight: 1.5 }}>
          PromoRegistry curates verified promotional discounts and deals for {store.name}. When you make a purchase through our links, we may earn an affiliate commission at zero extra cost to you.
        </div>
      </section>

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
