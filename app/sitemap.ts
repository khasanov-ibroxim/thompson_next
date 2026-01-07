// app/sitemap.ts
import { MetadataRoute } from 'next';

export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://thompsonwindowfilm.com';
    const languages = ['ru', 'en', 'uz'];
    const pages = ['', 'protection', 'automotive', 'technology', 'contact'];

    // Protection product slugs
    const protectionProducts = [
        'premium', 'i-300', 'special-plus', 'special',
        'ppf-i200', 'ppf-xgloss', 'ppf-x99', 'ppf-ultra-gloss'
    ];

    // Automotive product slugs
    const automotiveProducts = [
        'hp-ceramic', 'nano-ceramic', 'xr-ceramic-plus',
        'classic-exclusive', 'core'
    ];

    const routes: MetadataRoute.Sitemap = [];

    // Main pages
    languages.forEach(lang => {
        pages.forEach(page => {
            const url = page ? `${baseUrl}/${lang}/${page}` : `${baseUrl}/${lang}`;
            routes.push({
                url,
                lastModified: new Date(),
                changeFrequency: page === '' ? 'daily' : 'weekly',
                priority: page === '' ? 1 : 0.8,
            });
        });
    });

    // Protection product pages
    languages.forEach(lang => {
        protectionProducts.forEach(product => {
            routes.push({
                url: `${baseUrl}/${lang}/protection/${product}`,
                lastModified: new Date(),
                changeFrequency: 'weekly',
                priority: 0.7,
            });
        });
    });

    // Automotive product pages
    languages.forEach(lang => {
        automotiveProducts.forEach(product => {
            routes.push({
                url: `${baseUrl}/${lang}/automotive/${product}`,
                lastModified: new Date(),
                changeFrequency: 'weekly',
                priority: 0.7,
            });
        });
    });

    return routes;
}