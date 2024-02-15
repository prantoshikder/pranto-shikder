// @ts-check
import withPlaiceholder from "@plaiceholder/next";
/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  images: {
    domains: [
      "/",
      "http://",
      "flagcdn.com",
      "upload.wikimedia.org",
      // "dev-user.localbet.xyz",
    ],
    formats: ["image/avif", "image/webp"],
  },
  output: "standalone",
  distDir: ".next",
};

// module.exports = withPlaiceholder(nextConfig);
export default withPlaiceholder(nextConfig);
