import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    output: 'export',
    images: {
        unoptimized: true,
    },
    trailingSlash: true,
    // ✅ Skip trailing slash for root
    skipTrailingSlashRedirect: false,
};

export default nextConfig;