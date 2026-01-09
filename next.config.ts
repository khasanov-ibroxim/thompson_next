import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    // ✅ Turbopack configuration (empty to silence warnings)
    turbopack: {},

    images: {
        unoptimized: true,
        remotePatterns: [
            {
                protocol: 'https',
                hostname: '**',
            },
        ],
    },

    // ✅ Trailing slash
    trailingSlash: true,

    // ✅ Disable x-powered-by header
    poweredByHeader: false,

    // ✅ TypeScript settings
    typescript: {
        ignoreBuildErrors: false,
    },



    // ✅ Experimental features
    experimental: {
        optimizeCss: true,
    },
};

export default nextConfig;