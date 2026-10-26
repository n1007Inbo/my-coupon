import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import HeaderClient from "./HeaderClient";
import FooterClient from "./FooterClient";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-inter",
  display: "swap",
  preload: true,
});

export const metadata: Metadata = {
  title: "PromoRegistry | 100% Verified Promo Codes & Discount Coupons",
  description: "Find the latest 100% verified coupon codes, discount offers, and promotional deals for Amazon, Nike, Adidas, Hostinger, eBay, Target, Starbucks, and more on PromoRegistry.com.",
  openGraph: {
    title: "PromoRegistry | 100% Verified Promo Codes & Discount Coupons",
    description: "Find the latest 100% verified coupon codes, discount offers, and promotional deals for Amazon, Nike, Adidas, Hostinger, eBay, Target, Starbucks, and more on PromoRegistry.com.",
    url: 'https://www.promoregistry.com',
    siteName: 'PromoRegistry',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: "PromoRegistry | 100% Verified Promo Codes & Discount Coupons",
    description: "Find the latest 100% verified coupon codes, discount offers, and promotional deals for Amazon, Nike, Adidas, Hostinger, eBay, Target, Starbucks, and more on PromoRegistry.com.",
  },
  other: {
    'impact-site-verification': 'e8243051-e329-4f57-aedc-5f4539bfc2ac',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const gaId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;

  return (
    <html lang="en" className={inter.variable}>
      <head>
        <meta name="impact-site-verification" value="e8243051-e329-4f57-aedc-5f4539bfc2ac" />
        <meta name="impact-site-verification" content="e8243051-e329-4f57-aedc-5f4539bfc2ac" />
        {gaId && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
              strategy="afterInteractive"
            />
            <Script id="google-analytics" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${gaId}');
              `}
            </Script>
            <Script id="mrge-script" strategy="afterInteractive">
              {`
                (function(){
                  var loc = window.location.href;
                  var dd = document.createElement('script');
                  dd.type = 'text/javascript'; dd.src = '//static.publisher.mrge.com/promoregistry.js?loc=' + encodeURIComponent(loc);
                  var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(dd, s);
                })();
              `}
            </Script>
          </>
        )}
        {/* Crisp Live Chat Widget */}
        <Script id="crisp-widget" strategy="lazyOnload">
          {`
            window.$crisp=[];
            window.CRISP_WEBSITE_ID="c7db60dc-54a5-4cb2-ab98-3f52994e91b3";
            (function(){
              d=document;
              s=d.createElement("script");
              s.src="https://client.crisp.chat/l.js";
              s.async=1;
              d.getElementsByTagName("head")[0].appendChild(s);
            })();
          `}
        </Script>
        {/* AvantLink Affiliate Verification */}
        <Script
          id="avantlink-verification"
          src="https://classic.avantlink.com/affiliate_app_confirm.php?mode=js&authResponse=376c8fc11d613d19a45cd4c0fa5dddd7e411c6c9"
          strategy="lazyOnload"
        />
        <meta name="fo-verify" content="21153cba-a2c3-435d-aff2-e91717e8564c" />
        <meta name="verify-admitad" content="dc1c933d28" />
        {/* Offline High-Availability Service Worker Registration */}
        <Script id="sw-register" strategy="afterInteractive">
          {`
            if ('serviceWorker' in navigator) {
              function regSW() {
                navigator.serviceWorker.register('/sw.js').catch(function(err) {
                  console.log('SW registration error:', err);
                });
              }
              if (document.readyState === 'complete') {
                regSW();
              } else {
                window.addEventListener('load', regSW);
              }
            }
          `}
        </Script>
        {/* Sovrn / Commerce (emrldtp) Verification & Affiliate Tracking */}
        <script
          data-cmp-ab="2"
          dangerouslySetInnerHTML={{
            __html: `
              (function () {
                  var script = document.createElement("script");
                  script.async = 1;
                  script.setAttribute("data-cmp-ab","2");
                  script.src = 'https://emrldtp.com/NTc1MDEw.js?t=575010';
                  document.head.appendChild(script);
              })();
            `
          }}
        />
        <link rel="icon" href="/favicon.png" type="image/png" />
        <link rel="manifest" href="/manifest.json" />
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

        {/* Skimlinks script */}
        <Script 
          type="text/javascript" 
          src="https://s.skimresources.com/js/306923X1795194.skimlinks.js"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
