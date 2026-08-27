"use client";

import React from "react";
import { getLogoUrl } from "../lib/fallbackData";
import styles from "./CouponCard.module.css";

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
  affiliate_url?: string;
  affiliate_link?: string;
  affiliateLink?: string;
}

interface CouponCardProps {
  coupon: Coupon;
  onGetCode: (coupon: Coupon) => void;
}

const ClockIcon = () => (
  <svg
    width="13"
    height="13"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={styles.clockIcon}
  >
    <circle cx="12" cy="12" r="10" />
    <polyline points="12 6 12 12 16 14" />
  </svg>
);

const EyeSparkleIcon = () => (
  <svg
    width="13"
    height="13"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
  </svg>
);

const CheckIcon = () => (
  <svg
    width="10"
    height="10"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="3.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

export const CouponCard: React.FC<CouponCardProps> = ({ coupon, onGetCode }) => {
  const { store, discount, code, is_verified, expiry_date, title, description } = coupon;

  const isStoreObject = typeof store === "object" && store !== null;
  const storeName = isStoreObject ? (store as Store).name : (coupon.storeName || (typeof store === "string" ? store : "Store"));
  const rawSlug = (coupon as any).storeSlug || (isStoreObject ? (store as Store).slug : undefined) || (typeof store === "string" ? store.toLowerCase().replace(/[\s_]+/g, "-") : undefined);
  const cleanBaseSlug = rawSlug ? String(rawSlug).replace(/-(us|uk|de|ca|fr|nl|es|it|au|nz)$/i, "") : undefined;
  
  const storeLogo = 
    (isStoreObject && (store as Store).logo ? (store as Store).logo : undefined) ||
    (coupon as any).logo ||
    (rawSlug ? getLogoUrl(rawSlug) : undefined) ||
    (cleanBaseSlug ? getLogoUrl(cleanBaseSlug) : undefined) ||
    (storeName ? getLogoUrl(storeName.toLowerCase().replace(/[\s_]+/g, "-")) : undefined) ||
    (storeName ? getLogoUrl(storeName.toLowerCase().replace(/[\s_]+/g, "-").replace(/-(us|uk|de|ca|fr|nl|es|it|au|nz)$/i, "")) : undefined);

  const formatExpiryDate = (dateString: string) => {
    if (!dateString) return "Dec 31, 2026";
    try {
      const date = new Date(dateString);
      if (isNaN(date.getTime())) return dateString;
      
      const day = date.getUTCDate();
      const year = date.getUTCFullYear();
      const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
      const month = months[date.getUTCMonth()];

      return `${month} ${day}, ${year}`;
    } catch {
      return dateString;
    }
  };

  const isExpired = React.useMemo(() => {
    if (!expiry_date) return false;
    try {
      const date = new Date(expiry_date);
      if (isNaN(date.getTime())) return false;
      return date.getTime() < new Date().setHours(0, 0, 0, 0);
    } catch {
      return false;
    }
  }, [expiry_date]);

  const hashedValue = React.useMemo(() => {
    let hash = 0;
    const idStr = String(coupon.id);
    for (let i = 0; i < idStr.length; i++) {
      hash = (hash * 31 + idStr.charCodeAt(i)) | 0;
    }
    hash ^= hash >>> 16;
    hash = Math.imul(hash, 0x85ebca6b);
    hash ^= hash >>> 13;
    hash = Math.imul(hash, 0xc2b2ae35);
    hash ^= hash >>> 16;
    return Math.abs(hash);
  }, [coupon.id]);

  const viewsCount = React.useMemo(() => {
    return (hashedValue % 380) + 240; // 240 to 620 views
  }, [hashedValue]);

  const isDirectDeal = !code || code === "DEAL" || code === "DIRECT";
  const displayTitle = title || description || discount;

  return (
    <div 
      className={`${styles.card} ${isExpired ? styles.cardExpired : ""}`}
      onClick={() => !isExpired && onGetCode(coupon)}
    >
      {/* 1. Left Side: Store Logo Box */}
      <div className={styles.logoContainer}>
        {storeLogo ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img 
            src={storeLogo} 
            alt={storeName || "Store Logo"} 
            className={styles.logoImg} 
            loading="lazy" 
            decoding="async"
            width={120}
            height={90}
          />
        ) : (
          <div className={styles.logoFallback}>
            {storeName ? storeName.charAt(0).toUpperCase() : "?"}
          </div>
        )}
      </div>

      {/* 2. Right Side: Content Stack */}
      <div className={styles.contentContainer}>
        {/* Header Row: Title & Exclusive Badge */}
        <div className={styles.headerRow}>
          <h3 className={styles.title}>{displayTitle}</h3>
          {!isDirectDeal && (
            <span className={styles.exclusiveBadge}>
              <span className={styles.star}>★</span> EXCLUSIVE
            </span>
          )}
        </div>

        {/* Badges Row: Discount Pill, Verified & Views */}
        <div className={styles.badgesRow}>
          {discount && (
            <span className={styles.discountPill}>
              {discount}
            </span>
          )}
          {is_verified && (
            <span className={styles.verifiedBadge}>
              <CheckIcon />
              <span>Verified</span>
            </span>
          )}
          <span className={styles.viewsBadge}>
            <EyeSparkleIcon />
            <span>{viewsCount} views</span>
          </span>
        </div>

        {/* Expiry Date Row */}
        <div className={styles.expiryRow}>
          <ClockIcon />
          <span>Expires {formatExpiryDate(expiry_date)}</span>
        </div>

        {/* Action Button: Wide, Bottom-Aligned */}
        <button
          onClick={(e) => { e.stopPropagation(); onGetCode(coupon); }}
          className={styles.btnAction}
          aria-label={isDirectDeal ? `Get deal for ${storeName}` : `Show coupon code for ${storeName}`}
          disabled={isExpired}
        >
          <span>{isDirectDeal ? "Get Deal →" : "Show Coupon Code →"}</span>
        </button>
      </div>
    </div>
  );
};

export default CouponCard;
