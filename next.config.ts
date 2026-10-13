import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  experimental: {
    agentFeedback: true,
  },
  cacheComponents: true,
  partialPrefetching: true,
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
  async redirects() {
    return [
      {
        source: '/understand',
        destination: '/understand-vitiligo',
        permanent: true,
      },
      {
        source: '/understand/stigma',
        destination: '/understand-vitiligo/stigma-and-misconceptions',
        permanent: true,
      },
      {
        source: '/my-life',
        destination: '/living-with-vitiligo',
        permanent: true,
      },
      {
        source: '/treatment',
        destination: '/treatment-and-care',
        permanent: true,
      },
      {
        source: '/global-data',
        destination: '/understand-vitiligo#p02-s06',
        permanent: true,
      },
      {
        source: '/patient-journeys',
        destination: '/expert-insights',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
