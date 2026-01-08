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
    // Generate 404.html that will redirect
    async generateBuildId() {
        return 'build-' + Date.now();
    },
};

export default nextConfig;