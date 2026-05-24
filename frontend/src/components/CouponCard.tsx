"use client";

import React from "react";
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
  description: string;
  is_verified: boolean;
  expiry_date: string;
  store: string | Store;
  affiliate_url?: string;
}

interface CouponCardProps {
  coupon: Coupon;
  onGetCode: (coupon: Coupon) => void;
}

// Icons
const ClockIcon = () => (
  <svg
    width="12"
    height="12"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={styles.icon}
  >
    <circle cx="12" cy="12" r="10" />
    <polyline points="12 6 12 12 16 14" />
  </svg>
);

const EyeIcon = () => (
  <svg
    width="12"
    height="12"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={styles.icon}
  >
    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
    <circle cx="12" cy="12" r="3" />
  </svg>
);

const CheckIcon = () => (
  <svg
    width="8"
    height="8"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="4"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

export const CouponCard: React.FC<CouponCardProps> = ({ coupon, onGetCode }) => {
  const { store, discount, code, is_verified, expiry_date } = coupon;

  // Extract store properties safely
  const isStoreObject = typeof store === "object" && store !== null;
  const storeName = isStoreObject ? (store as Store).name : (store as string);
  const storeLogo = isStoreObject ? (store as Store).logo : undefined;

  // Formatting date to matches image (e.g. 21st June 2026 or 21 June 2026)
  const formatExpiryDate = (dateString: string) => {
    if (!dateString) return "No expiration";
    try {
      const date = new Date(dateString);
      if (isNaN(date.getTime())) return dateString;
      
      const day = date.getDate();
      const month = date.toLocaleDateString("en-GB", { month: "long" });
      const year = date.getFullYear();

      // Add ordinal suffix (st, nd, rd, th)
      let suffix = "th";
      if (day === 1 || day === 21 || day === 31) suffix = "st";
      else if (day === 2 || day === 22) suffix = "nd";
      else if (day === 3 || day === 23) suffix = "rd";

      return `${day}${suffix} ${month} ${year}`;
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

  // Generates stable but random views between 180 and 380 based on ID
  const viewsCount = React.useMemo(() => {
    const idStr = String(coupon.id);
    const sum = idStr.split("").reduce((acc, char) => acc + char.charCodeAt(0), 0);
    return (sum % 200) + 180;
  }, [coupon.id]);

  // Determine if it is a Direct Deal (e.g. coupon has code "DEAL" or "DIRECT")
  const isDirectDeal = code === "DEAL" || code === "DIRECT";

  return (
    <div 
      className={`${styles.card} ${isExpired ? styles.cardExpired : ""}`}
      onClick={() => !isExpired && onGetCode(coupon)}
    >
      {/* 1. Left side: Store Logo */}
      <div className={styles.logoSection}>
        {storeLogo ? (
          <img src={storeLogo} alt={storeName} className={styles.logoImg} />
        ) : (
          <div className={styles.logoFallback}>
            {storeName.charAt(0).toUpperCase()}
          </div>
        )}
      </div>

      {/* 2. Middle: Content Section */}
      <div className={styles.infoSection}>
        {/* Title/Discount header */}
        <h3 className={styles.title}>{discount}</h3>

        {/* Badges Row */}
        <div className={styles.badgeContainer}>
          {!isDirectDeal && (
            <span className={styles.exclusiveBadge}>Exclusive</span>
          )}
          {is_verified && (
            <span className={styles.verifiedBadge}>
              <span className={styles.verifiedIcon}>
                <CheckIcon />
              </span>
              <span>Verified</span>
            </span>
          )}
        </div>

        {/* Meta details row */}
        <div className={styles.metaRow}>
          <div className={styles.metaItem}>
            <ClockIcon />
            <span>
              {isExpired ? "Expired: " : "Expires: "}
              {formatExpiryDate(expiry_date)}
            </span>
          </div>
          <div className={styles.metaItem}>
            <EyeIcon />
            <span>{viewsCount} views</span>
          </div>
        </div>
      </div>

      {/* 3. Right side: Action Button */}
      <div className={styles.actionSection}>
        <button
          onClick={(e) => { e.stopPropagation(); onGetCode(coupon); }}
          className={styles.btnGetCode}
          aria-label={isDirectDeal ? `Get deal for ${storeName}` : `Get promo code for ${storeName}`}
          disabled={isExpired}
        >
          {isDirectDeal ? "Get Deal" : "Show Coupon Code"}
        </button>
      </div>
    </div>
  );
};

export default CouponCard;
