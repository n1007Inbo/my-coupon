"use client";

import React, { useState } from "react";

export default function HeaderClient() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => setIsOpen(!isOpen);

  return (
    <>
      {/* Institutional Audit Top Bar */}
      <div
        style={{
          background: "linear-gradient(90deg, #0f172a 0%, #1e3a8a 50%, #0f172a 100%)",
          color: "#f8fafc",
          fontSize: "0.75rem",
          fontWeight: 600,
          padding: "7px 16px",
          borderBottom: "1px solid rgba(255,255,255,0.1)",
        }}
      >
        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "8px",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
            <span
              style={{
                display: "inline-block",
                width: "7px",
                height: "7px",
                borderRadius: "50%",
                backgroundColor: "#10b981",
                boxShadow: "0 0 8px #10b981",
              }}
            />
            <span style={{ letterSpacing: "0.03em" }}>
              OFFICIAL US MERCHANT VERIFICATION REGISTRY • LIVE CART AUDIT ACTIVE
            </span>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "16px", color: "#cbd5e1" }}>
            <span>🏛️ 644+ Audited Retailers</span>
            <span>•</span>
            <span style={{ color: "#fbbf24", fontWeight: 700 }}>✓ 99.4% Code Pass Rate</span>
          </div>
        </div>
      </div>

      <header className="mainHeader">
        <div className="headerContainer">
          {/* Logo Area */}
          <a href="/" className="logoContainer">
            <img
              src="/favicon.png"
              alt="PromoRegistry Logo"
              width="34"
              height="34"
              style={{
                borderRadius: "8px",
                objectFit: "contain",
                border: "1px solid #dbeafe",
                padding: "2px",
                background: "#eff6ff",
              }}
            />
            <div style={{ display: "flex", flexDirection: "column", lineHeight: 1.1 }}>
              <span className="logoText">
                Promo<span style={{ color: "var(--primary-blue)" }}>Registry</span>
              </span>
              <span
                style={{
                  fontSize: "0.65rem",
                  fontWeight: 700,
                  color: "#64748b",
                  letterSpacing: "0.06em",
                  textTransform: "uppercase",
                }}
              >
                Verified Code Index
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="navLinks desktopOnly">
            <a href="/" className="navLinkItem">
              Registry Home
            </a>
            <a href="/#stores" className="navLinkItem">
              A–Z Store Index
            </a>
            <a href="/#coupons" className="navLinkItem">
              Audited Vouchers
            </a>
            <a href="/blog" className="navLinkItem">
              Research & Guides
            </a>
            <a href="/about" className="navLinkItem">
              Verification Standards
            </a>
          </nav>

          {/* Desktop Action Area */}
          <div className="actionsArea desktopOnly" style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <span
              style={{
                fontSize: "0.74rem",
                fontWeight: 700,
                color: "#059669",
                background: "#ecfdf5",
                border: "1px solid #a7f3d0",
                padding: "6px 12px",
                borderRadius: "999px",
              }}
            >
              🛡️ Audit Status: Live
            </span>
            <a href="/#stores" className="ctaButton">
              Merchant Directory →
            </a>
          </div>

          {/* Mobile Hamburger Toggle Button */}
          <button
            className={`mobileMenuToggle ${isOpen ? "active" : ""}`}
            onClick={toggleSidebar}
            aria-label="Toggle menu"
          >
            <div className="menuBar"></div>
            <div className="menuBar"></div>
            <div className="menuBar"></div>
          </button>
        </div>
      </header>

      {/* Off-Canvas Sidebar Backdrop Overlay */}
      {isOpen && <div className="sidebarOverlay" onClick={toggleSidebar}></div>}

      {/* Off-Canvas Sidebar Menu */}
      <aside className={`offCanvasSidebar ${isOpen ? "open" : ""}`}>
        <div className="sidebarHeader">
          <div className="logoContainer">
            <img
              src="/favicon.png"
              alt="PromoRegistry Logo"
              width="28"
              height="28"
              style={{ borderRadius: "var(--radius-sm)", objectFit: "contain" }}
            />
            <span className="logoText" style={{ fontSize: "1.2rem" }}>
              Promo<span style={{ color: "var(--primary-blue)" }}>Registry</span>
            </span>
          </div>
          <button className="sidebarCloseButton" onClick={toggleSidebar} aria-label="Close menu">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
        </div>

        <nav className="sidebarNavLinks">
          <a href="/" className="sidebarNavLinkItem" onClick={toggleSidebar}>
            <span className="sidebarLinkIcon">🏛️</span> Registry Home
          </a>
          <a href="/#stores" className="sidebarNavLinkItem" onClick={toggleSidebar}>
            <span className="sidebarLinkIcon">🗂️</span> A–Z Store Index
          </a>
          <a href="/#coupons" className="sidebarNavLinkItem" onClick={toggleSidebar}>
            <span className="sidebarLinkIcon">🛡️</span> Audited Vouchers
          </a>
          <a href="/blog" className="sidebarNavLinkItem" onClick={toggleSidebar}>
            <span className="sidebarLinkIcon">📘</span> Research & Guides
          </a>
          <a href="/about" className="sidebarNavLinkItem" onClick={toggleSidebar}>
            <span className="sidebarLinkIcon">✨</span> Verification Standards
          </a>
          <a href="/contact" className="sidebarNavLinkItem" onClick={toggleSidebar}>
            <span className="sidebarLinkIcon">📞</span> Contact Compliance
          </a>
        </nav>

        <div className="sidebarFooter">
          <a href="/#stores" className="sidebarCtaButton" onClick={toggleSidebar}>
            Explore Merchant Directory
          </a>
          <p className="sidebarFooterText">Institutional Retail Coupon Verification</p>
        </div>
      </aside>
    </>
  );
}
