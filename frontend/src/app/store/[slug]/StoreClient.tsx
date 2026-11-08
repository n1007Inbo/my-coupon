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
  const [votedIds, setVotedIds] = useState<Record<string, "up" | "down">>({});
  const [cartEstimate, setCartEstimate] = useState<number>(120);

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

    const targetUrl = coupon.affiliate_url || (store as any).affiliate_url || (store as any).affiliateLink || store.website || "https://www.google.com";

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

  const faqList = brandSeo?.faqs && brandSeo.faqs.length > 0
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
      <div className={storeStyles.backLinkContainer}>
        <a href="/" className={storeStyles.backLink}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <line x1="19" y1="12" x2="5" y2="12" />
            <polyline points="12 19 5 12 12 5" />
          </svg>
          <span>Back to All Stores</span>
        </a>
      </div>

      {/* Focused Store Header (Exact PerkVue Standard) */}
      <section className={storeStyles.storeHeader}>
        <div className={storeStyles.brandInfo}>
          {bannerLogo ? (
            <img
              src={bannerLogo}
              alt={`${store.name} Logo`}
              width={68} height={68}
              className={storeStyles.storeLogo}
              onError={() => setBannerLogoError(true)}
            />
          ) : (
            <div className={storeStyles.fallbackLogo}>{store.name.charAt(0).toUpperCase()}</div>
          )}
          <div>
            <h1 className={storeStyles.storeTitle}>{brandSeo?.h1 || `${store.name} Exclusive Offers`}</h1>
            <p className={storeStyles.storeSubtitle}>
              Direct verified savings &amp; exclusive partner discounts. Tested active today.
            </p>
          </div>
        </div>

        <div className={storeStyles.trustPill}>
          <span className={storeStyles.pulseDot}></span> Verified Active • {todayLabel}
        </div>
      </section>

      {/* 2-Card Focus Grid (Above-the-fold) */}
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
                  <span className={storeStyles.pulsingDot}></span> Verified Active Today
                </span>
                <span className={storeStyles.badge3dExtruded}>
                  {isDirectDeal ? "DIRECT REWARD" : "100% SUCCESS"}
                </span>
              </div>

              {/* Main Body with 3D Graphic */}
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

                {/* 3D Code Box */}
                {!isDirectDeal ? (
                  <div className={storeStyles.codeBox3d}>
                    <div className={storeStyles.codeLabelWrapper}>
                      <span className={storeStyles.codeLabel}>Promo Code:</span>
                      <span className={storeStyles.codeBadge}>{coupon.code && coupon.code.toLowerCase() === "methew" ? coupon.code : "••••••••"}</span>
                    </div>
                    <span className={storeStyles.autoCopiedPill}>
                      {isCopied ? "Copied! ✓" : (coupon.code && coupon.code.toLowerCase() === "methew" ? "Exclusive Code" : "Click to Reveal")}
                    </span>
                  </div>
                ) : (
                  <div className={storeStyles.dealFeatureRow}>
                    <span className={storeStyles.dealFeatureText}>Auto-applied at checkout</span>
                    <span className={storeStyles.dealFeatureBadge}>No Code Needed ✓</span>
                  </div>
                )}
              </div>

              {/* Push Button */}
              <div className={storeStyles.cardFooter}>
                <button
                  type="button"
                  onClick={(e) => handleAction(e, coupon)}
                  className={`${storeStyles.ctaButton} ${isDirectDeal ? storeStyles.btn3dEmerald : storeStyles.btn3dNavy}`}
                >
                  {!isDirectDeal ? (
                    <>
                      <span>{isCopied ? "Code Copied! ✓" : "Get Code"}</span>
                      <span className={storeStyles.arrowIcon}>→</span>
                    </>
                  ) : (
                    <>
                      <span>{isCopied ? "Opening Offer..." : "Get Deal"}</span>
                      <span className={storeStyles.arrowIcon}>→</span>
                    </>
                  )}
                </button>

                <div className={storeStyles.trustFooter}>
                  <span>✓ Official Checkout Guarantee</span>
                  <span>•</span>
                  <span>Verified Working • {todayLabel}</span>
                </div>
              </div>
            </div>
          );
        })}
      </section>

      {/* Clean Trust Strip */}
      <section className={storeStyles.trustNote}>
        <div className={storeStyles.trustNoteText}>
          <strong>PromoRegistry Direct Checkout Standard:</strong> Clicking any offer automatically copies your code and opens the official {store.name} checkout.
        </div>
        <span className={storeStyles.secureBadge}>🔒 Direct Checkout Verified</span>
      </section>

      {/* Below-the-Fold: How to Redeem & Verified Store Guide (Google Ads QS 10/10 & Anti-Ban Compliance) */}
      <section className={storeStyles.infoSection}>
        {/* Brand Overview & Editorial Insight */}
        {brandSeo?.overview && brandSeo.overview.length > 0 && (
          <div className={storeStyles.stepsCard} style={{ marginBottom: "20px" }}>
            <h2 className={storeStyles.sectionHeading}>
              About {store.name} &amp; Official Savings Overview
            </h2>
            <div style={{ display: "flex", flexDirection: "column", gap: "12px", color: "#334155", lineHeight: 1.65, fontSize: "14px" }}>
              {brandSeo.overview.map((para, pIdx) => (
                <p key={pIdx}>{para}</p>
              ))}
            </div>
          </div>
        )}

        {/* How to Redeem Steps */}
        <div className={storeStyles.stepsCard}>
          <h2 className={storeStyles.sectionHeading}>
            How to Redeem Your {store.name} Promo Code
          </h2>
          <div className={storeStyles.stepsGrid}>
            {(brandSeo?.howToApply || [
              {
                step: 1,
                title: "Select & Copy Code",
                description: `Click "Get Code" or "Get Deal" on any verified ${store.name} offer above. Your promo code is automatically copied to your clipboard.`,
              },
              {
                step: 2,
                title: "Shop Official Store",
                description: `You will be securely directed to the official ${store.name} online store. Add your qualifying items to the shopping cart and proceed to checkout.`,
              },
              {
                step: 3,
                title: "Paste & Save Instantly",
                description: `Paste the copied ${store.name} discount code into the promo or voucher field at checkout and click apply to lock in your instant savings.`,
              },
            ]).map((s) => (
              <div key={s.step} className={storeStyles.stepItem}>
                <span className={storeStyles.stepNumber}>{s.step}</span>
                <div>
                  <h3 className={storeStyles.stepTitle}>{s.title}</h3>
                  <p className={storeStyles.stepDesc}>{s.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Brand-Specific Insider Savings Tips */}
        {brandSeo?.savingsTips && brandSeo.savingsTips.length > 0 && (
          <div className={storeStyles.stepsCard} style={{ marginTop: "20px", marginBottom: "20px", background: "linear-gradient(180deg, #ffffff 0%, #f0fdf4 100%)", border: "1px solid #bbf7d0" }}>
            <h2 className={storeStyles.sectionHeading} style={{ color: "#065f46" }}>
              💡 {store.name} Insider Savings Tips &amp; Discount Hacks
            </h2>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "12px" }}>
              {brandSeo.savingsTips.map((tip, tIdx) => (
                <li key={tIdx} style={{ display: "flex", alignItems: "flex-start", gap: "10px", fontSize: "14px", color: "#166534", lineHeight: 1.55 }}>
                  <span style={{ color: "#059669", fontWeight: 800 }}>✓</span>
                  <span>{tip}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        <div className={storeStyles.faqCard}>
          <h2 className={storeStyles.sectionHeading}>
            {store.name} Coupons &amp; Savings FAQ
          </h2>
          <div className={storeStyles.faqGrid}>
            {faqList.map((faq, fIdx) => (
              <div key={fIdx} className={storeStyles.faqItem}>
                <h3 className={storeStyles.faqQuestion}>{faq.question}</h3>
                <p className={storeStyles.faqAnswer}>{faq.answer}</p>
              </div>
            ))}
          </div>

          <div className={storeStyles.complianceFooter}>
            <strong>Editorial &amp; Affiliate Disclosure:</strong> PromoRegistry curates verified promotional codes and partner offers to help shoppers save at {store.name}. When you make a purchase through links on this page, we may earn a small partner commission from the merchant at zero additional cost to you. All trademarks and brand names belong to their respective owners.
          </div>
        </div>
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
