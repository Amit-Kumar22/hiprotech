/** @type {import('next').NextConfig} */
const nextConfig = {
  // output: "export", // This enables static HTML export
  images: {
    unoptimized: true, // REQUIRED for static exports
    // Remove domains array as it won't work with static export
  },
  // Optional: Add if deploying to subdirectory
  basePath: process.env.NEXT_PUBLIC_BASE_PATH || "",
  assetPrefix: process.env.NEXT_PUBLIC_BASE_PATH || "",
};

export default nextConfig;