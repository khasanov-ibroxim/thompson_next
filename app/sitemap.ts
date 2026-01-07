// app/sitemap.ts
import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://thompsonwindowfilm.com';
    const languages = ['ru', 'en', 'uz'];
    const pages = ['', 'protection', 'automotive', 'technology', 'contact'];

    const routes: MetadataRoute.Sitemap = [];

    languages.forEach(lang => {
        pages.forEach(page => {
            const url = page ? `${baseUrl}/${lang}/${page}` : `${baseUrl}/${lang}`;
            routes.push({
                url,
                lastModified: new Date(),
                changeFrequency: page === '' ? 'daily' : 'weekly',
                priority: page === '' ? 1 : 0.8,
                alternates: {
                    languages: {
                        ru: `${baseUrl}/ru${page ? `/${page}` : ''}`,
                        en: `${baseUrl}/en${page ? `/${page}` : ''}`,
                        uz: `${baseUrl}/uz${page ? `/${page}` : ''}`,
                    },
                },
            });
        });
    });

    return routes;
}