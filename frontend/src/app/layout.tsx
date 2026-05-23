import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import HeaderClient from "./HeaderClient";
import FooterClient from "./FooterClient";

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

        {/* Elegant Footer with Secret Admin Access */}
        <FooterClient />
      </body>
    </html>
  );
}
