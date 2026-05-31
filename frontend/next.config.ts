import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/go/desktronic-uk",
        destination: "https://desktronic.co.uk/muhammadhaziqueali",
        permanent: false,
      },
      {
        source: "/go/desktronic-us",
        destination: "https://desktronic.com",
        permanent: false,
      },
      {
        source: "/go/desktronic-nl",
        destination: "https://desktronic.nl",
        permanent: false,
      },
      {
        source: "/go/desktronic-4leg",
        destination: "https://desktronic.co.uk/products/4-leg-standing-desk?bg_ref=fek2GZmWHH&utm_source=fek2GZmWHH&utm_medium=partner&utm_campaign=Beginner%20Program",
        permanent: false,
      },
      {
        source: "/go/desktronic-frame-homeone",
        destination: "https://desktronic.co.uk/products/height-adjustable-desk-frame-homeone?bg_ref=fek2GZmWHH&utm_source=fek2GZmWHH&utm_medium=partner&utm_campaign=Beginner%20Program",
        permanent: false,
      },
      {
        source: "/go/desktronic-frame-homepro",
        destination: "https://desktronic.co.uk/products/height-adjustable-desk-frame-homepro?bg_ref=fek2GZmWHH&utm_source=fek2GZmWHH&utm_medium=partner&utm_campaign=Beginner%20Program",
        permanent: false,
      },
      {
        source: "/go/desktronic-desk-homepro",
        destination: "https://desktronic.co.uk/products/height-adjustable-desk-homepro?bg_ref=fek2GZmWHH&utm_source=fek2GZmWHH&utm_medium=partner&utm_campaign=Beginner%20Program",
        permanent: false,
      },
      {
        source: "/go/desktronic-desk-homeone",
        destination: "https://desktronic.co.uk/products/height-adjustable-desk-homeone?bg_ref=fek2GZmWHH&utm_source=fek2GZmWHH&utm_medium=partner&utm_campaign=Beginner%20Program",
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
