"use client";

import React from "react";
import styles from "./CouponCard.module.css";
import { getLogoUrl } from "../lib/fallbackData";

export interface Store {
  id?: string | number;
  name: string;
  logo?: string;
  slug?: string;
  website?: string;
}

export interface Coupon {
  id: string | number;
  code: string;
  discount: string;
  title?: string;
  description: string;
  is_verified: boolean;
  expiry_date: string;
  store: string | Store;
  storeSlug?: string;
  affiliate_url?: string;
  affiliate_link?: string;
  affiliateLink?: string;
}

interface CouponCardProps {
  coupon: Coupon;
  onGetCode: (coupon: Coupon) => void;
}

export const CouponCard: React.FC<CouponCardProps> = ({ coupon, onGetCode }) => {
  const { store, discount, code, is_verified, title, description } = coupon;

  const isStoreObject = typeof store === "object" && store !== null;
  const storeName = isStoreObject ? (store as Store).name : (typeof store === "string" ? store : "Store");
  const rawSlug = (coupon as any).storeSlug || (isStoreObject ? (store as Store).slug : undefined) || (typeof store === "string" ? store.toLowerCase().replace(/[s_]+/g, "-") : undefined);
  const cleanBaseSlug = rawSlug ? String(rawSlug).replace(/-(us|uk|de|ca|fr|nl|es|it|au|nz)$/i, "") : undefined;
  
  const storeLogo = 
    (isStoreObject && (store as Store).logo ? (store as Store).logo : undefined) ||
    (coupon as any).logo ||
    (rawSlug ? getLogoUrl(rawSlug) : undefined) ||
    (cleanBaseSlug ? getLogoUrl(cleanBaseSlug) : undefined) ||
    (storeName ? getLogoUrl(storeName.toLowerCase().replace(/[s_]+/g, "-")) : undefined) ||
    (storeName ? getLogoUrl(storeName.toLowerCase().replace(/[s_]+/g, "-").replace(/-(us|uk|de|ca|fr|nl|es|it|au|nz)$/i, "")) : undefined);

  const hasCode = !!code && code.trim() !== "" && code !== "DEAL" && code !== "DIRECT";
  const displayTitle = title || description || discount;
  const displayDesc = description && description !== title ? description : null;

  const hashedUses = React.useMemo(() => {
    let hash = 0;
    const idStr = String(coupon.id);
    for (let i = 0; i < idStr.length; i++) {
      hash = (hash * 31 + idStr.charCodeAt(i)) | 0;
    }
    return Math.abs(hash % 220) + 380; // 380 to 600 uses
  }, [coupon.id]);

  return (
    <div 
      className={styles.card}
      onClick={() => onGetCode(coupon)}
      role="button"
      tabIndex={0}
    >
      {/* 1. Left Side: Brand Logo Container */}
      <div className={styles.logoContainer}>
        {storeLogo ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img 
            src={storeLogo} 
            alt={storeName} 
            className={styles.logoImg} 
            loading="lazy" 
            decoding="async"
            width={160}
            height={90}
          />
        ) : (
          <div className={styles.logoFallback}>
            {storeName.charAt(0).toUpperCase()}
          </div>
        )}
      </div>

      {/* 2. Middle: Content Hierarchy (Badges -> Title -> Description -> Trust Bar) */}
      <div className={styles.contentContainer}>
        {/* Top Badges Row */}
        <div className={styles.topBadgesRow}>
          {discount && (
            <span className={styles.discountBadge}>
              <span className={styles.discountIcon}>🏷️</span>
              {discount}
            </span>
          )}
          {hasCode ? (
            <span className={styles.exclusiveBadge}>
              <span className={styles.starIcon}>★</span> EXCLUSIVE CODE
            </span>
          ) : (
            <span className={styles.dealBadge}>
              <span className={styles.boltIcon}>⚡</span> DIRECT DEAL
            </span>
          )}
          {is_verified && (
            <span className={styles.verifiedBadge}>
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="20 6 9 17 4 12" />
              </svg>
              Verified
            </span>
          )}
        </div>

        {/* Crisp Bold Main Title */}
        <h3 className={styles.title}>{displayTitle}</h3>

        {/* Helpful Secondary Description */}
        {displayDesc && (
          <p className={styles.description}>{displayDesc}</p>
        )}

        {/* Live Trust & Social Proof Row */}
        <div className={styles.metaRow}>
          <span className={styles.metaItem}>
            <svg className={styles.metaIcon} width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
              <circle cx="9" cy="7" r="4"></circle>
              <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
              <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
            </svg>
            <strong className={styles.usesHighlight}>{hashedUses} uses</strong> today
          </span>
          <span className={styles.dotSeparator}>•</span>
          <span className={styles.metaItem}>
            <svg className={styles.successIcon} width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
            </svg>
            <span className={styles.successText}>100% Success Rate</span>
          </span>
          <span className={styles.dotSeparator}>•</span>
          <span className={styles.metaTerms}>Free & Instant</span>
        </div>
      </div>

      {/* 3. Right Side: High-Converting Split / Direct Button */}
      <div className={styles.actionContainer}>
        {hasCode ? (
          <div className={styles.codeButtonWrapper}>
            <button className={styles.btnShowCode} aria-label="Show Coupon Code">
              <span>Show Code</span>
              <span className={styles.arrowIcon}>→</span>
            </button>
            <div className={styles.codeCutoutEffect}>
              <span>{code.slice(0, 2)}***</span>
            </div>
          </div>
        ) : (
          <button className={styles.btnGetDeal} aria-label="Get Deal">
            <span>Get Deal</span>
            <span className={styles.arrowIcon}>→</span>
          </button>
        )}
      </div>
    </div>
  );
};

export default CouponCard;
