/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    images: {
        unoptimized: true,
    },
    trailingSlash: true,
    // Disable Image Optimization for static export
    experimental: {
        optimizeCss: true,
    },
};

export default nextConfig;