// app/[lang]/protection/page.tsx - UPDATED
import {Metadata} from "next";
import protectionFilm from "@/public/images/protection-film.jpg";
import heroCar from "@/public/images/hero-car.jpg";
import {getDictionary} from "@/lib/dictionary";
import {i18n, Locale} from "@/i18n-config";
import {notFound} from "next/navigation";
import ProductSwiper from "@/components/ui/ProductSwiper";
import Link from "next/link";

// Product slugs for URLs
const productSlugs = [
    'premium',
    'i-300',
    'special-plus',
    'special',
    'ppf-i200',
    'ppf-xgloss',
    'ppf-x99',
    'ppf-ultra-gloss'
];

export async function generateMetadata({
                                           params,
                                       }: {
    params: Promise<{ lang: Locale }>;
}): Promise<Metadata> {
    const { lang } = await params;
    const dict = await getDictionary(lang, "protection");

    const langMap = {
        ru: {
            title: "Защитная Пленка Thompson - PPF для Авто | Premium, I-300, Special Plus",
            description: "Профессиональная защитная пленка Thompson PPF в Ташкенте. Premium (214 мкм), I-300, Special Plus с самовосстановлением. Гарантия до 10 лет. Защита от царапин, УФ, камней."
        },
        en: {
            title: "Thompson Paint Protection Film - Premium PPF | I-300, Special Plus",
            description: "Professional Thompson PPF in Tashkent. Premium (214 micron), I-300, Special Plus with self-healing technology. Up to 10 years warranty. Protection from scratches, UV, stone chips."
        },
        uz: {
            title: "Thompson Himoya Plyonkasi - PPF Avtomobil Uchun | Premium, I-300",
            description: "Professional Thompson PPF Toshkentda. Premium (214 mikron), I-300, Special Plus o'z-o'zini tuzatish texnologiyasi. 10 yilgacha kafolat. Tirnalish, UV, toshlardan himoya."
        }
    };

    const meta = langMap[lang] || langMap.en;

    return {
        title: meta.title,
        description: meta.description,
        keywords: "Thompson PPF, paint protection film, Thompson Premium, Thompson I-300, Thompson Special Plus, самовосстановление, self-healing, защитная пленка, PPF Tashkent, PPF Uzbekistan, Thompson XGLOSS, Thompson X99, автомобильная защита, car protection film",
        openGraph: {
            title: meta.title,
            description: meta.description,
            url: `https://thompsonwindowfilm.com/${lang}/protection`,
            type: "website",
            images: [
                {
                    url: "https://thompsonwindowfilm.com/images/hero-car.jpg",
                    width: 1200,
                    height: 630,
                    alt: "Thompson Paint Protection Film"
                }
            ],
        },
        twitter: {
            card: "summary_large_image",
            title: meta.title,
            description: meta.description,
        },
        alternates: {
            canonical: `https://thompsonwindowfilm.com/${lang}/protection`,
            languages: {
                'ru': 'https://thompsonwindowfilm.com/ru/protection',
                'en': 'https://thompsonwindowfilm.com/en/protection',
                'uz': 'https://thompsonwindowfilm.com/uz/protection',
            },
        },
    };
}

const ProtectionFilm = async ({
                                  params
                              }: {
    params: Promise<{ lang: Locale }>
}) => {
    const {lang} = await params;

    if (!i18n.locales.includes(lang)) {
        notFound();
    }
    const dict = await getDictionary(lang, "protection");

    return (
        <div className="min-h-screen bg-background">
            <main className="pt-24 lg:pt-32">
                {/* Hero Section */}
                <section className="relative py-20 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-b from-primary/10 to-transparent"/>
                    <div className="container mx-auto px-4 lg:px-8 relative z-10">
                        <div className="text-center max-w-3xl mx-auto">
                            <h1 className="text-4xl lg:text-6xl font-bold text-foreground mb-6">
                                {dict.hero.title}
                            </h1>
                            <p className="text-lg text-muted-foreground">
                                {dict.hero.description}
                            </p>
                        </div>
                    </div>
                </section>

                {/* Products Section */}
                <section className="py-16">
                    <div className="container mx-auto px-4 lg:px-8 space-y-16">
                        {dict.products.map((product: any, index: number) => {
                            const productImage = index % 2 === 0 ? heroCar : protectionFilm;
                            const productSlug = productSlugs[index];

                            return (
                                <article
                                    key={product.name}
                                    className={`grid lg:grid-cols-2 gap-8 lg:gap-12 items-center ${
                                        index % 2 === 1 ? "lg:flex-row-reverse" : ""
                                    }`}
                                    itemScope
                                    itemType="https://schema.org/Product"
                                >
                                    <meta itemProp="name" content={` ${product.name}`} />
                                    <meta itemProp="brand" content="Thompson Window Film" />
                                    <meta itemProp="description" content={product.featuresLeft.join(", ")} />

                                    {/* Product Image with Swiper */}
                                    <div className={`${index % 2 === 1 ? "lg:order-2" : ""} overflow-hidden`}>
                                        <Link href={`/${lang}/protection/${productSlug}`}>
                                            <ProductSwiper
                                                images={product.images}
                                                productName={product.name}
                                                defaultImage={productImage}
                                            />
                                        </Link>
                                    </div>

                                    {/* Product Info */}
                                    <div className={`${index % 2 === 1 ? "lg:order-1" : ""}`}>
                                        <div className="flex items-start justify-between mb-6">
                                            <Link href={`/${lang}/protection/${productSlug}`}>
                                                <h2 className="text-3xl lg:text-4xl font-bold text-foreground hover:text-primary transition" itemProp="name">
                                                     {product.name}
                                                </h2>
                                            </Link>
                                            <div className="bg-card border border-border rounded-lg px-4 py-2">
                                                <span className="text-primary font-bold text-xl" itemProp="brand">
                                                    {product.brand}
                                                </span>
                                            </div>
                                        </div>

                                        {/* Specs Badges */}
                                        <div className="flex flex-wrap gap-3 mb-8">
                                            {product.specs.map((spec: string, idx: number) => (
                                                <span
                                                    key={idx}
                                                    className="px-4 py-2 bg-card border border-border rounded-full text-foreground text-sm font-medium"
                                                >
                                                    {spec}
                                                </span>
                                            ))}
                                        </div>

                                        {/* Features */}
                                        <div className="grid sm:grid-cols-2 gap-x-8 gap-y-3 mb-8">
                                            <div className="space-y-3">
                                                {product.featuresLeft.slice(0, 4).map((feature: string, idx: number) => (
                                                    <div key={idx} className="flex items-center gap-3">
                                                        <div className="w-2 h-2 rounded-full bg-primary"/>
                                                        <span className="text-foreground text-sm">{feature}</span>
                                                    </div>
                                                ))}
                                            </div>
                                            <div className="space-y-3">
                                                {product.featuresRight.slice(0, 4).map((feature: string, idx: number) => (
                                                    <div key={idx} className="flex items-center gap-3">
                                                        <div className="w-2 h-2 rounded-full bg-primary"/>
                                                        <span className="text-foreground font-medium text-sm">
                                                            {feature}
                                                        </span>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>

                                        {/* CTA Buttons */}
                                        <div className="flex gap-3">
                                            <Link
                                                href={`/${lang}/protection/${productSlug}`}
                                                className="px-6 bg-card border border-border py-3 rounded-xl inline-block hover:bg-accent transition text-sm"
                                            >
                                                {lang === 'ru' ? 'Подробнее' : lang === 'en' ? 'Learn More' : 'Batafsil'}
                                            </Link>
                                            <Link
                                                href={`/${lang}/contact`}
                                                className="px-6 bg-[hsl(var(--thompson-red))] text-white py-3 rounded-xl inline-block hover:opacity-90 transition text-sm"
                                            >
                                                {dict.cta}
                                            </Link>
                                        </div>
                                    </div>
                                </article>
                            );
                        })}
                    </div>
                </section>
            </main>
        </div>
    );
};

export default ProtectionFilm;