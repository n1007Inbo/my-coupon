import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
  async redirects() {
    return [
      {
        source: "/privacy-policy",
        destination: "/privacy",
        permanent: true,
      },
      {
        source: "/terms-of-service",
        destination: "/terms",
        permanent: true,
      },
      {
        source: "/go/desktronic-uk",
        destination: "https://desktronic.co.uk/muhammadhaziqueali",
        permanent: true,
      },
      {
        source: "/go/desktronic-us",
        destination: "https://desktronic.com/methewdippy",
        permanent: true,
      },
      {
        source: "/go/desktronic-nl",
        destination: "https://desktronic.nl/methewdippy",
        permanent: true,
      },
      {
        source: "/go/desktronic-4leg",
        destination: "https://desktronic.co.uk/products/4-leg-standing-desk?bg_ref=fek2GZmWHH&utm_source=fek2GZmWHH&utm_medium=partner&utm_campaign=Beginner%20Program",
        permanent: true,
      },
      {
        source: "/go/desktronic-frame-homeone",
        destination: "https://desktronic.co.uk/products/height-adjustable-desk-frame-homeone?bg_ref=fek2GZmWHH&utm_source=fek2GZmWHH&utm_medium=partner&utm_campaign=Beginner%20Program",
        permanent: true,
      },
      {
        source: "/go/desktronic-frame-homepro",
        destination: "https://desktronic.co.uk/products/height-adjustable-desk-frame-homepro?bg_ref=fek2GZmWHH&utm_source=fek2GZmWHH&utm_medium=partner&utm_campaign=Beginner%20Program",
        permanent: true,
      },
      {
        source: "/go/desktronic-desk-homepro",
        destination: "https://desktronic.co.uk/products/height-adjustable-desk-homepro?bg_ref=fek2GZmWHH&utm_source=fek2GZmWHH&utm_medium=partner&utm_campaign=Beginner%20Program",
        permanent: true,
      },
      {
        source: "/go/desktronic-desk-homeone",
        destination: "https://desktronic.co.uk/products/height-adjustable-desk-homeone?bg_ref=fek2GZmWHH&utm_source=fek2GZmWHH&utm_medium=partner&utm_campaign=Beginner%20Program",
        permanent: true,
      },
      {
        source: "/go/aliexpress",
        destination: "https://litl.si/maEX3",
        permanent: true,
      },
      {
        source: "/go/aliexpress-uk",
        destination: "https://clickm.me/KcGRy",
        permanent: true,
      },
      {
        source: "/go/aliexpress-de",
        destination: "https://clickm.me/XG6K4",
        permanent: true,
      },
      {
        source: "/go/lululemon",
        destination: "https://vert.si/Ji_M2o",
        permanent: true,
      },
      {
        source: "/go/samsung",
        destination: "https://clickm.me/z-MUd",
        permanent: true,
      },
      {
        source: "/go/samsung-uk",
        destination: "https://vert.si/ytzp9",
        permanent: true,
      },
      {
        source: "/go/songmics",
        destination: "https://clickm.me/-B5pP1",
        permanent: true,
      },
      {
        source: "/go/songmics-de",
        destination: "https://clickm.me/i4mrOB",
        permanent: true,
      },
      {
        source: "/go/lookfantastic",
        destination: "https://litl.si/mbiiz0",
        permanent: true,
      },
      {
        source: "/go/lookfantastic-de",
        destination: "https://clickm.me/RdyZ3-",
        permanent: true,
      },
      {
        source: "/go/lookfantastic-nl",
        destination: "https://clickm.me/BJu1xe",
        permanent: true,
      },
      {
        source: "/go/kiko",
        destination: "https://www.kikocosmetics.com",
        permanent: true,
      },
      {
        source: "/go/aosom",
        destination: "https://vert.si/ReOuZI",
        permanent: true,
      },

    ];
  },
};

export default nextConfig;
