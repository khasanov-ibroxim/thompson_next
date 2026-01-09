import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    // ✅ Dynamic routes uchun static export yoqilmagan

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

    // ✅ MUHIM: CSS optimizatsiyasi
    experimental: {
        optimizeCss: true,
    },

    // ✅ Webpack konfiguratsiyasi
    webpack: (config, { isServer }) => {
        if (!isServer) {
            // ✅ CSS modules uchun
            config.optimization.splitChunks = {
                chunks: 'all',
                cacheGroups: {
                    default: false,
                    vendors: false,
                    // ✅ CSS ni alohida fayl sifatida ajratish
                    styles: {
                        name: 'styles',
                        test: /\.(css|scss|sass)$/,
                        chunks: 'all',
                        enforce: true,
                    },
                },
            };
        }
        return config;
    },
};

export default nextConfig;