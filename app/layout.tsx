import type {Metadata} from "next";
import {Instrument_Sans, Inter_Tight} from "next/font/google";
import "./globals.css";
import {Toaster} from "@/components/ui/toaster";
import {Toaster as Sonner} from "@/components/ui/sonner";
import {TooltipProvider} from "@/components/ui/tooltip";
import Script from "next/script";
import YandexMetrika from "@/components/YandexMetric";

const instrumentSans = Instrument_Sans({
    variable: "--font-instrument-sans",
    subsets: ["latin"],
    display: 'swap', // ✅ Font optimizatsiyasi
});

const interTight = Inter_Tight({
    variable: "--font-inter-tight",
    subsets: ["latin"],
    display: 'swap', // ✅ Font optimizatsiyasi
});

export const metadata: Metadata = {
    title: "Thompson Window Film - Защитная и Автомобильная Пленка в Ташкенте",
    description: "Thompson Window Film - профессиональная автомобильная тонировка и защитная пленка (PPF) в Ташкенте, Узбекистан. Нано керамика, технология самовосстановления, УФ защита с пожизненной гарантией.",
    keywords: "Thompson Window Film, автомобильная пленка, защитная пленка, PPF, керамическая пленка, нано керамика, тонировка авто, УФ защита, Ташкент, Узбекистан, тонировка стекол, Thompson, automotive film, paint protection film, avtomobil plyonka, himoya plyonka",
    authors: [{name: "Thompson Window Film"}],
    openGraph: {
        title: "Thompson Window Film - Защитная и Автомобильная Пленка",
        description: "Профессиональная автомобильная тонировка и защитная пленка в Узбекистане. Нано керамическая технология с пожизненной гарантией.",
        url: "https://thompsonwindowfilm.com",
        siteName: "Thompson Window Film",
        locale: "ru_RU",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Thompson Window Film - Автомобильная Пленка",
        description: "Профессиональная автомобильная тонировка и защитная пленка в Узбекистане",
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            'max-image-preview': 'large',
            'max-snippet': -1,
        },
    },
    alternates: {
        canonical: `https://thompsonwindowfilm.com/`,
        languages: {
            'ru': 'https://thompsonwindowfilm.com/ru/',
            'en': 'https://thompsonwindowfilm.com/en/',
            'uz': 'https://thompsonwindowfilm.com/uz/',
        },
    },
    // ✅ Viewport metadata
    viewport: {
        width: 'device-width',
        initialScale: 1,
        maximumScale: 5,
    },
};

export default function RootLayout({children}: { children: React.ReactNode }) {
    return (
        <html suppressHydrationWarning lang="ru">
        <head>
            {/* ✅ Preconnect for faster loading */}
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

            <link rel="icon" href="/logo.png" sizes="any"/>
            <link rel="icon" type="image/png" href="/logo.png" sizes="32x32"/>
            <link rel="icon" type="image/png" href="/logo.png" sizes="16x16"/>
            <link rel="apple-touch-icon" href="/logo.png"/>
            <meta name="google-site-verification" content="3Y3EpUhukGBKHII_K05g0qtmZyz4jwaxECk9yJNiXlM" />

            {/* ✅ Yandex Metrika */}
            <Script
                id="yandex-metrika"
                strategy="afterInteractive"
            >
                {`
                    (function(m,e,t,r,i,k,a){
                        m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
                        m[i].l=1*new Date();
                        for (var j = 0; j < document.scripts.length; j++) {
                            if (document.scripts[j].src === r) { return; }
                        }
                        k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)
                    })(window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");

                    ym(106173768, "init", {
                        clickmap:true,
                        trackLinks:true,
                        accurateTrackBounce:true,
                        webvisor:true,
                        ecommerce:"dataLayer"
                    });
                `}
            </Script>

            {/* ✅ Google Analytics */}
            <Script
                strategy="afterInteractive"
                src="https://www.googletagmanager.com/gtag/js?id=G-CCYL59P75M"
            />
            <Script
                id="google-analytics"
                strategy="afterInteractive"
            >
                {`
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());
                    gtag('config', 'G-CCYL59P75M', {
                        page_path: window.location.pathname,
                    });
                `}
            </Script>

            {/* Structured Data - Organization */}
            <Script
                id="structured-data-organization"
                type="application/ld+json"
            >
                {JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "Organization",
                    "name": "Thompson Window Film",
                    "url": "https://thompsonwindowfilm.com",
                    "logo": "https://thompsonwindowfilm.com/logo.png",
                    "contactPoint": {
                        "@type": "ContactPoint",
                        "telephone": "+998-99-800-24-25",
                        "contactType": "Служба поддержки",
                        "areaServed": "UZ",
                        "availableLanguage": ["Русский", "Узбекский", "Английский"]
                    },
                    "address": {
                        "@type": "PostalAddress",
                        "streetAddress": "ул. Фазилтепа, 35",
                        "addressLocality": "Ташкент",
                        "addressCountry": "UZ"
                    },
                    "sameAs": [
                        "https://www.instagram.com/thompsonwindowfilm.com",
                        "https://t.me/thompson_uz"
                    ]
                })}
            </Script>

            {/* Structured Data - Local Business */}
            <Script
                id="structured-data-local-business"
                type="application/ld+json"
            >
                {JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "LocalBusiness",
                    "name": "Thompson Window Film",
                    "image": "https://thompsonwindowfilm.com/images/hero-car.jpg",
                    "description": "Премиальная автомобильная тонировка и защитная пленка в Ташкенте, Узбекистан",
                    "address": {
                        "@type": "PostalAddress",
                        "streetAddress": "ул. Фазилтепа, 35",
                        "addressLocality": "Ташкент",
                        "addressCountry": "UZ"
                    },
                    "telephone": "+998998002425",
                    "openingHoursSpecification": {
                        "@type": "OpeningHoursSpecification",
                        "dayOfWeek": [
                            "Понедельник",
                            "Вторник",
                            "Среда",
                            "Четверг",
                            "Пятница",
                            "Суббота",
                            "Воскресенье"
                        ],
                        "opens": "10:00",
                        "closes": "20:00"
                    },
                    "priceRange": "$$"
                })}
            </Script>
        </head>
        <body
            className={`${instrumentSans.variable} ${interTight.variable} antialiased`}
            suppressHydrationWarning
        >
        <noscript>
            <div>
                <img src="https://mc.yandex.ru/watch/106173768" style={{position:"absolute", left:"-9999px"}} alt="" />
            </div>
        </noscript>
        <YandexMetrika/>
        <TooltipProvider>
            <Toaster/>
            <Sonner/>
            {children}
        </TooltipProvider>
        </body>
        </html>
    );
}