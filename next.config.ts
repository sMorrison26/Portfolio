import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Redirect users from unused or old pages to the homepage
  async redirects(){
    return [
      {
        source: '/itws-charity-finder',
        destination: '/',
        permanent: true
      },
      {
        source: '/about',
        destination: '/',
        permanent: true
      },
      {
        source: '/construction',
        destination: '/',
        permanent: true
      },
      {
        source: '/weather',
        destination: '/',
        permanent: true
      },
    ]
  },
  reactStrictMode: true,
};

module.exports = nextConfig;
