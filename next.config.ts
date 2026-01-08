import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    output: 'export',
    images: {
        unoptimized: true,
    },
    trailingSlash: true,
    // ✅ Add this for proper static export with dynamic routes
    distDir: 'out',
    // ✅ Ensure proper asset handling
    assetPrefix: undefined,
};

export default nextConfig;