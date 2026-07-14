"use client";

import React, { useState, useEffect, useCallback } from "react";

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

  // Secret keyboard shortcut: Ctrl+Shift+K to navigate to AI Portal, Ctrl+Shift+D to Dashboard
  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (e.ctrlKey && e.shiftKey) {
      if (e.key === "K" || e.key === "k") {
        e.preventDefault();
        window.location.href = "/admin/ai-creator";
      } else if (e.key === "D" || e.key === "d") {
        e.preventDefault();
        window.location.href = "/admin/dashboard";
      }
    }
  }, []);

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handleKeyDown]);

  // Capture Google Ads tracking parameters and store them in sessionStorage
  useEffect(() => {
    if (typeof window !== "undefined") {
      try {
        const urlParams = new URLSearchParams(window.location.search);
        const trackingKeys = ["utm_campaign", "utm_term", "gclid", "utm_source"];
        trackingKeys.forEach(key => {
          const val = urlParams.get(key);
          if (val) {
            sessionStorage.setItem(key, val);
          }
        });
      } catch (err) {
        console.warn("Failed to capture tracking query parameters:", err);
      }
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
            Your premier source for 100% verified shopping coupons, promotional codes, and discount offers online.
          </p>
          <p style={{ color: "var(--text-tertiary)", fontSize: "0.75rem", lineHeight: "1.5", maxWidth: "320px", marginTop: "12px" }}>
            PromoRegistry utilizes secure OAuth integrations, including the Google Ads API, strictly for internal campaign performance reporting, ad spend auditing, and ROI analysis.
          </p>
        </div>

        <div className="footerLinksContainer">
          <div className="footerColumn">
            <h4 className="footerColHeader">Quick Links</h4>
            <a href="/" className="footerLinkItem">Home</a>
            <a href="/#stores" className="footerLinkItem">Featured Stores</a>
            <a href="/blog" className="footerLinkItem">Trending Blog</a>
            <a href="/about" className="footerLinkItem">About Us</a>
            <a href="/contact" className="footerLinkItem">Contact Us</a>
          </div>
          <div className="footerColumn">
            <h4 className="footerColHeader">Legal Policies</h4>
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
          © {new Date().getFullYear()} PromoRegistry.com. All Rights Reserved.
        </p>

        {/* Secret AI Portal Link - Only appears after 5 rapid clicks on copyright */}
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
                animation: "fadeIn 0.3s ease",
                transition: "all 0.2s ease"
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
                animation: "fadeIn 0.3s ease",
                transition: "all 0.2s ease"
              }}
            >
              <span>📈</span> AI ROI Dashboard
            </a>
          </div>
        )}
      </div>
    </footer>
  );
}
