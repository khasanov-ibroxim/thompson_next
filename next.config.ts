import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    // ❌ Remove static export for dynamic routes on Vercel
    // output: 'export',

    images: {
        unoptimized: true,
        remotePatterns: [
            {
                protocol: 'https',
                hostname: '**',
            },
        ],
    },

    // ✅ Keep trailing slash
    trailingSlash: true,



    // ✅ Disable x-powered-by header
    poweredByHeader: false,
};

export default nextConfig;