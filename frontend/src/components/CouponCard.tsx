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
}

interface CouponCardProps {
  coupon: Coupon;
  onGetCode: (coupon: Coupon) => void;
}

// Icons
const CalendarIcon = () => (
  <svg
    width="14"
    height="14"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={styles.icon}
  >
    <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
    <line x1="16" y1="2" x2="16" y2="6" />
    <line x1="8" y1="2" x2="8" y2="6" />
    <line x1="3" y1="10" x2="21" y2="10" />
  </svg>
);

const VerifiedIcon = () => (
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
    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
    <polyline points="22 4 12 14.01 9 11.01" />
  </svg>
);

const ClockIcon = () => (
  <svg
    width="14"
    height="14"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={styles.icon}
  >
    <circle cx="12" cy="12" r="10" />
    <polyline points="12 6 12 12 16 14" />
  </svg>
);

const TicketIcon = () => (
  <svg
    width="14"
    height="14"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M15 5v2M15 11v2M15 17v2M5 5h14a2 2 0 0 1 2 2v3a2 2 0 0 0 0 4v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-3a2 2 0 0 0 0-4V7a2 2 0 0 1 2-2z" />
  </svg>
);

const ArrowRightIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={styles.arrowIcon}
  >
    <line x1="5" y1="12" x2="19" y2="12" />
    <polyline points="12 5 19 12 12 19" />
  </svg>
);

export const CouponCard: React.FC<CouponCardProps> = ({ coupon, onGetCode }) => {
  const { store, discount, description, is_verified, expiry_date } = coupon;

  // Extract store properties safely
  const isStoreObject = typeof store === "object" && store !== null;
  const storeName = isStoreObject ? (store as Store).name : (store as string);
  const storeLogo = isStoreObject ? (store as Store).logo : undefined;

  // Formatting date nicely
  const formatExpiryDate = (dateString: string) => {
    if (!dateString) return "No expiration";
    try {
      const date = new Date(dateString);
      if (isNaN(date.getTime())) return dateString;
      return date.toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
        year: "numeric",
      });
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

  return (
    <div 
      className={`${styles.card} ${isExpired ? styles.cardExpired : ""}`}
      onClick={() => !isExpired && onGetCode(coupon)}
    >
      {/* Decorative dashed separator inside card to represent a coupon cut */}
      <div className={styles.cutLineLeft}></div>
      <div className={styles.cutLineRight}></div>

      {/* Card Header: Store information & dynamic badges */}
      <div className={styles.header}>
        <a 
          href={`/store/${isStoreObject ? (store as Store).slug : storeName.toLowerCase().replace(/\s+/g, "-")}`}
          className={styles.storeContainer}
          title={`View all ${storeName} coupons`}
          onClick={(e) => e.stopPropagation()}
        >
          {storeLogo ? (
            <div className={styles.logoWrapper}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={storeLogo} alt={storeName} className={styles.logoImg} />
            </div>
          ) : (
            <div className={styles.logoFallback}>
              {storeName.charAt(0).toUpperCase()}
            </div>
          )}
          <span className={styles.storeName}>{storeName}</span>
        </a>

        <div className={styles.badgeContainer}>
          {is_verified ? (
            <span className={styles.verifiedBadge}>
              <VerifiedIcon />
              <span>Verified</span>
            </span>
          ) : (
            <span className={styles.dealBadge}>
              <ClockIcon />
              <span>Active Deal</span>
            </span>
          )}
        </div>
      </div>

      {/* Card Body: Discount & Description */}
      <div className={styles.body}>
        <div className={styles.discountRow}>
          <span className={styles.discountText}>{discount}</span>
          <span className={styles.discountTypeBadge}>
            <TicketIcon />
            <span>PROMO CODE</span>
          </span>
        </div>
        <p className={styles.description}>{description}</p>
      </div>

      {/* Card Footer: Expiry info & Glowing call-to-action button */}
      <div className={styles.footer}>
        <div className={styles.expiryInfo}>
          <CalendarIcon />
          <span className={isExpired ? styles.expiredText : ""}>
            {isExpired ? "Expired: " : "Expires: "}
            {formatExpiryDate(expiry_date)}
          </span>
        </div>

        <button
          onClick={(e) => { e.stopPropagation(); onGetCode(coupon); }}
          className={styles.btnGetCode}
          aria-label={`Get promo code for ${storeName}`}
          disabled={isExpired}
        >
          <span>Get Code</span>
          <ArrowRightIcon />
        </button>
      </div>
    </div>
  );
};

export default CouponCard;
