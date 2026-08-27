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
  const { store, discount, code, is_verified, expiry_date, title, description } = coupon;

  const isStoreObject = typeof store === "object" && store !== null;
  const storeName = isStoreObject ? (store as Store).name : (typeof store === "string" ? store : "Store");
  const rawSlug = (coupon as any).storeSlug || (isStoreObject ? (store as Store).slug : undefined) || (typeof store === "string" ? store.toLowerCase().replace(/[\s_]+/g, "-") : undefined);
  const cleanBaseSlug = rawSlug ? String(rawSlug).replace(/-(us|uk|de|ca|fr|nl|es|it|au|nz)$/i, "") : undefined;
  
  const storeLogo = 
    (isStoreObject && (store as Store).logo ? (store as Store).logo : undefined) ||
    (coupon as any).logo ||
    (rawSlug ? getLogoUrl(rawSlug) : undefined) ||
    (cleanBaseSlug ? getLogoUrl(cleanBaseSlug) : undefined) ||
    (storeName ? getLogoUrl(storeName.toLowerCase().replace(/[\s_]+/g, "-")) : undefined) ||
    (storeName ? getLogoUrl(storeName.toLowerCase().replace(/[\s_]+/g, "-").replace(/-(us|uk|de|ca|fr|nl|es|it|au|nz)$/i, "")) : undefined);

  const hasCode = !!code && code.trim() !== "" && code !== "DEAL" && code !== "DIRECT";
  const displayTitle = title || description || discount;

  const hashedValue = React.useMemo(() => {
    let hash = 0;
    const idStr = String(coupon.id);
    for (let i = 0; i < idStr.length; i++) {
      hash = (hash * 31 + idStr.charCodeAt(i)) | 0;
    }
    return Math.abs(hash % 280) + 320; // 320 to 600 uses
  }, [coupon.id]);

  return (
    <div 
      className={styles.card}
      onClick={() => onGetCode(coupon)}
    >
      {/* 1. Left Side: Store Brand Logo Box */}
      <div className={styles.logoContainer}>
        {storeLogo ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img 
            src={storeLogo} 
            alt={storeName} 
            className={styles.logoImg} 
            loading="lazy" 
            decoding="async"
            width={130}
            height={75}
          />
        ) : (
          <div className={styles.logoFallback}>
            {storeName.charAt(0).toUpperCase()}
          </div>
        )}
      </div>

      {/* 2. Middle: Clean Visual Content Stack */}
      <div className={styles.contentContainer}>
        {/* Top Badges Row */}
        <div className={styles.topBadgesRow}>
          {discount && (
            <span className={styles.discountPill}>{discount}</span>
          )}
          {hasCode && (
            <span className={styles.exclusivePill}>
              ★ EXCLUSIVE CODE
            </span>
          )}
          {is_verified && (
            <span className={styles.verifiedPill}>
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                <polyline points="20 6 9 17 4 12" />
              </svg>
              Verified
            </span>
          )}
        </div>

        {/* Card Title */}
        <h3 className={styles.title}>{displayTitle}</h3>

        {/* Bottom Metadata Info */}
        <div className={styles.metaRow}>
          <span className={styles.usesText}>{hashedValue} uses today</span>
          <span className={styles.dotSeparator}>•</span>
          <span className={styles.expiryText}>100% Success</span>
        </div>
      </div>

      {/* 3. Right Side: High-Converting Action Button */}
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
