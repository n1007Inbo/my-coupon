import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import HeaderClient from "./HeaderClient";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-outfit",
});

export const metadata: Metadata = {
  title: "PromoRegistry | 100% Verified Promo Codes & Discount Coupons",
  description: "Find the latest 100% verified coupon codes, discount offers, and promotional deals for Amazon, Nike, Adidas, Hostinger, eBay, Target, Starbucks, and more on PromoRegistry.com.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={outfit.variable}>
      <head>
        <link rel="icon" href="/favicon.png" type="image/png" />
        {/* Rich Structured JSON-LD Schema Markup */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "name": "PromoRegistry",
              "url": "https://promoregistry.com",
              "description": "Find 100% verified promo codes and discount coupons for top brands.",
              "potentialAction": {
                "@type": "SearchAction",
                "target": "https://promoregistry.com/?q={search_term_string}",
                "query-input": "required name=search_term_string"
              }
            })
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "PromoRegistry",
              "url": "https://promoregistry.com",
              "logo": "https://promoregistry.com/favicon.png"
            })
          }}
        />
      </head>
      <body style={{ fontFamily: "var(--font-outfit), sans-serif" }}>
        {/* Navigation Header */}
        <HeaderClient />

        {/* Main Content */}
        <main style={{ flex: 1, paddingBottom: "60px" }}>
          {children}
        </main>

        {/* Elegant Footer */}
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
            </div>

            <div className="footerLinksContainer">
              <div className="footerColumn">
                <h4 className="footerColHeader">Quick Links</h4>
                <a href="/" className="footerLinkItem">Home</a>
                <a href="/#stores" className="footerLinkItem">Featured Stores</a>
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
            <p style={{ fontSize: "0.85rem", color: "var(--text-tertiary)" }}>
              © {new Date().getFullYear()} PromoRegistry.com. All Rights Reserved.
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}
