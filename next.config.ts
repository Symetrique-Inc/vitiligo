import type { NextConfig } from "next";
import path from "path";

// Restrict libuv threadpool to prevent container thread exhaustion (OS error 11) on Hostinger
process.env.UV_THREADPOOL_SIZE = process.env.UV_THREADPOOL_SIZE || "2";

const nextConfig: NextConfig = {
  /* config options here */
  experimental: {
    agentFeedback: true,
    agentUpgrade: "security",
    cpus: 1,
    workerThreads: false,
    webpackBuildWorker: false,
  },
  webpack: (config) => {
    config.resolve.alias = {
      ...(config.resolve.alias || {}),
      '@': path.resolve(__dirname),
    };
    return config;
  },
  cacheComponents: true,
  partialPrefetching: true,
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
