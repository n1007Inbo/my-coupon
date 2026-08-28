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
  isBestDeal?: boolean;
}

export const CouponCard: React.FC<CouponCardProps> = ({ coupon, onGetCode, isBestDeal = false }) => {
  const { store, discount, code, is_verified, title, description, expiry_date } = coupon;

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

  // Format expiry date cleanly
  const formattedExpiry = React.useMemo(() => {
    if (!expiry_date) return null;
    try {
      const d = new Date(expiry_date);
      const now = new Date();
      if (d.getTime() < now.getTime()) return null;
      return d.toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" });
    } catch {
      return null;
    }
  }, [expiry_date]);

  return (
    <div 
      className={`${styles.card} ${isBestDeal ? styles.bestDealCard : ""}`}
      onClick={() => onGetCode(coupon)}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); onGetCode(coupon); } }}
    >
      {/* Left: Brand Logo */}
      <div className={styles.logoSection}>
        {storeLogo ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img 
            src={storeLogo} 
            alt={storeName} 
            className={styles.logoImg} 
            loading="lazy" 
            decoding="async"
            width={120}
            height={60}
          />
        ) : (
          <div className={styles.logoFallback}>
            {storeName.charAt(0).toUpperCase()}
          </div>
        )}
      </div>

      {/* Center: Content */}
      <div className={styles.contentSection}>
        {/* Tags row */}
        <div className={styles.tagsRow}>
          {discount && (
            <span className={styles.discountTag}>{discount}</span>
          )}
          {hasCode ? (
            <span className={styles.codeTag}>Code</span>
          ) : (
            <span className={styles.dealTag}>Deal</span>
          )}
          {is_verified && (
            <span className={styles.verifiedTag}>
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="20 6 9 17 4 12" />
              </svg>
              Verified
            </span>
          )}
          {isBestDeal && (
            <span className={styles.bestTag}>Best Deal</span>
          )}
        </div>

        {/* Title */}
        <h3 className={styles.title}>{displayTitle}</h3>

        {/* Description */}
        {displayDesc && (
          <p className={styles.desc}>{displayDesc}</p>
        )}

        {/* Expiry */}
        {formattedExpiry && (
          <span className={styles.expiry}>Expires {formattedExpiry}</span>
        )}
      </div>

      {/* Right: Action Button */}
      <div className={styles.actionSection}>
        {hasCode ? (
          <div className={styles.codeBtn}>
            <span className={styles.codeBtnLabel}>Get Code</span>
            <span className={styles.codeBtnPreview}>{code.slice(0, 3)}···</span>
          </div>
        ) : (
          <button className={styles.dealBtn}>
            Get Deal
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14"></path>
              <path d="M12 5l7 7-7 7"></path>
            </svg>
          </button>
        )}
      </div>
    </div>
  );
};

export default CouponCard;
