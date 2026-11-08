"use client";

import React, { useState, useEffect, useCallback } from "react";
import { trackEvent, captureUrlTrackingParams } from "../lib/telemetry";

export default function FooterClient() {
  const [clickCount, setClickCount] = useState(0);
  const [showPortalLink, setShowPortalLink] = useState(false);

  // Secret: Click on copyright text 5 times rapidly to reveal AI Portal link
  const handleCopyrightClick = () => {
    const newCount = clickCount + 1;
    setClickCount(newCount);
    if (newCount >= 5) {
      setShowPortalLink(true);
      setClickCount(0);
    }
  };

  // Reset click count after 3 seconds of inactivity
  useEffect(() => {
    if (clickCount > 0 && clickCount < 5) {
      const timer = setTimeout(() => setClickCount(0), 3000);
      return () => clearTimeout(timer);
    }
  }, [clickCount]);

  // Secret keyboard shortcut: Ctrl+Shift+K to navigate to AI Portal, Ctrl+Shift+D to Dashboard, Ctrl+Shift+T to Telemetry
  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (e.ctrlKey && e.shiftKey) {
      if (e.key === "K" || e.key === "k") {
        e.preventDefault();
        window.location.href = "/admin/ai-creator";
      } else if (e.key === "D" || e.key === "d") {
        e.preventDefault();
        window.location.href = "/admin/dashboard";
      } else if (e.key === "T" || e.key === "t") {
        e.preventDefault();
        window.location.href = "/admin/telemetry";
      }
    }
  }, []);

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handleKeyDown]);

  // Capture Google Ads tracking parameters and record live visitor telemetry
  useEffect(() => {
    if (typeof window !== "undefined") {
      captureUrlTrackingParams();
      const pathname = window.location.pathname || "/";
      const isStore = pathname.startsWith("/store/") || pathname.startsWith("/deals/");
      const slug = isStore ? pathname.split("/").filter(Boolean)[1] || "" : "";
      trackEvent({
        site: "PromoRegistry",
        eventType: isStore ? "store_view" : "page_view",
        path: pathname,
        storeSlug: slug,
      });
    }
  }, []);

  return (
    <footer className="mainFooter">
      <div className="footerContainer">
        <div className="footerMainSection">
          <a href="/" className="logoContainer" style={{ marginBottom: "12px", display: "inline-flex" }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img 
              src="/favicon.png" 
              alt="PromoRegistry Logo" 
              width="28" 
              height="28" 
              style={{ borderRadius: "var(--radius-sm)", objectFit: "contain" }} 
            />
            <span className="logoText" style={{ fontSize: "1.2rem", fontWeight: 700 }}>
              Promo<span style={{ color: "var(--primary-blue)" }}>Registry</span>
            </span>
          </a>
          <p style={{ color: "var(--text-secondary)", fontSize: "0.9rem", lineHeight: "1.6", maxWidth: "320px" }}>
            Your premier institutional registry for 100% verified shopping coupons, promotional codes, and direct merchant checkout discounts.
          </p>
          <p style={{ color: "var(--text-tertiary)", fontSize: "0.75rem", lineHeight: "1.5", maxWidth: "320px", marginTop: "12px" }}>
            PromoRegistry utilizes secure OAuth integrations, including the Google Ads API, strictly for internal campaign performance reporting, ad spend auditing, and ROI analysis.
          </p>
        </div>

        <div className="footerLinksContainer">
          <div className="footerColumn">
            <h4 className="footerColHeader">Registry Index</h4>
            <a href="/" className="footerLinkItem">Home Directory</a>
            <a href="/#stores" className="footerLinkItem">A–Z Verified Stores</a>
            <a href="/blog" className="footerLinkItem">Consumer Savings Research</a>
            <a href="/about" className="footerLinkItem">Audit Methodology</a>
            <a href="/contact" className="footerLinkItem">Compliance & Support</a>
          </div>
          <div className="footerColumn">
            <h4 className="footerColHeader">Digital Tools</h4>
            <a href="/budget-tracker" className="footerLinkItem">Budget Google Sheets</a>
            <a href="/notion-second-brain" className="footerLinkItem">Notion Second Brain</a>
            <a href="/giveaway" className="footerLinkItem">Gift Card Giveaways</a>
          </div>
          <div className="footerColumn">
            <h4 className="footerColHeader">Governance & Legal</h4>
            <a href="/privacy" className="footerLinkItem">Privacy Policy</a>
            <a href="/terms" className="footerLinkItem">Terms of Service</a>
          </div>
        </div>
      </div>
      <div className="footerBottom">
        <p 
          style={{ fontSize: "0.85rem", color: "var(--text-tertiary)", cursor: "default", userSelect: "none" }}
          onClick={handleCopyrightClick}
        >
          © {new Date().getFullYear()} PromoRegistry.com — Official Retail Voucher Verification Index. All Rights Reserved.
        </p>

        {/* Secret Owner Portal Links - Only appears after 5 rapid clicks on copyright */}
        {showPortalLink && (
          <div style={{ display: "flex", gap: "10px", justifyContent: "center", flexWrap: "wrap", marginTop: "12px" }}>
            <a 
              href="/admin/ai-creator"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "6px",
                padding: "6px 16px",
                fontSize: "0.78rem",
                fontWeight: 600,
                color: "#6366f1",
                backgroundColor: "rgba(99, 102, 241, 0.06)",
                border: "1px solid rgba(99, 102, 241, 0.15)",
                borderRadius: "999px",
                textDecoration: "none",
              }}
            >
              <span>🤖</span> AI Creator Portal
            </a>
            <a 
              href="/admin/dashboard"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "6px",
                padding: "6px 16px",
                fontSize: "0.78rem",
                fontWeight: 600,
                color: "#10b981",
                backgroundColor: "rgba(16, 185, 129, 0.06)",
                border: "1px solid rgba(16, 185, 129, 0.15)",
                borderRadius: "999px",
                textDecoration: "none",
              }}
            >
              <span>📈</span> AI ROI Dashboard
            </a>
            <a 
              href="/admin/telemetry"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "6px",
                padding: "6px 16px",
                fontSize: "0.78rem",
                fontWeight: 600,
                color: "#d97706",
                backgroundColor: "rgba(217, 119, 6, 0.08)",
                border: "1px solid rgba(217, 119, 6, 0.22)",
                borderRadius: "999px",
                textDecoration: "none",
              }}
            >
              <span>📡</span> Live User & Click Telemetry
            </a>
          </div>
        )}
      </div>
    </footer>
  );
}
