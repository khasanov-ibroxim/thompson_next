// app/[lang]/protection/[product]/page.tsx
import {Metadata} from "next";
import {getDictionary} from "@/lib/dictionary";
import {i18n, Locale} from "@/i18n-config";
import {notFound} from "next/navigation";
import Image from "next/image";
import Link from "next/link";

// Product slug mapping
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

// Generate static paths for all products
export async function generateStaticParams() {
    const paths: { lang: Locale; product: string }[] = [];

    i18n.locales.forEach(locale => {
        productSlugs.forEach(slug => {
            paths.push({ lang: locale, product: slug });
        });
    });

    return paths;
}

// Generate metadata for each product
export async function generateMetadata({
                                           params,
                                       }: {
    params: Promise<{ lang: Locale; product: string }>;
}): Promise<Metadata> {
    const { lang, product } = await params;
    const dict = await getDictionary(lang, "protection");

    // Find product by slug
    const productIndex = productSlugs.indexOf(product);
    if (productIndex === -1) return {};

    const productData = dict.products[productIndex];

    const langMap = {
        ru: {
            title: ` ${productData.name} - Защитная Пленка PPF | ${productData.specs.join(', ')}`,
            description: ` ${productData.name} - премиальная защитная пленка для автомобиля. ${productData.featuresLeft.join(', ')}. Гарантия качества.`
        },
        en: {
            title: ` ${productData.name} - Paint Protection Film PPF | ${productData.specs.join(', ')}`,
            description: ` ${productData.name} - premium automotive paint protection film. ${productData.featuresLeft.join(', ')}. Quality guaranteed.`
        },
        uz: {
            title: ` ${productData.name} - Himoya Plyonkasi PPF | ${productData.specs.join(', ')}`,
            description: ` ${productData.name} - premium avtomobil himoya plyonkasi. ${productData.featuresLeft.join(', ')}. Sifat kafolati.`
        }
    };

    const meta = langMap[lang] || langMap.ru;

    return {
        title: meta.title,
        description: meta.description,
        keywords: `${productData.name}, Thompson PPF, ${productData.brand}, защитная пленка, paint protection film, ${productData.specs.join(', ')}, Tashkent, Uzbekistan`,
        openGraph: {
            title: meta.title,
            description: meta.description,
            url: `https://thompsonwindowfilm.com/${lang}/protection/${product}`,
            type: "website",
            images: productData.images?.map((img: string) => ({
                url: `https://thompsonwindowfilm.com${img}`,
                width: 1200,
                height: 630,
                alt: `Thompson ${productData.name}`
            })) || [],
        },
        alternates: {
            canonical: `https://thompsonwindowfilm.com/${lang}/protection/${product}`,
            languages: {
                'ru': `https://thompsonwindowfilm.com/ru/protection/${product}`,
                'en': `https://thompsonwindowfilm.com/en/protection/${product}`,
                'uz': `https://thompsonwindowfilm.com/uz/protection/${product}`,
            },
        },
    };
}

export default async function ProductPage({
                                              params
                                          }: {
    params: Promise<{ lang: Locale; product: string }>
}) {
    const { lang, product } = await params;

    if (!i18n.locales.includes(lang)) {
        notFound();
    }

    const dict = await getDictionary(lang, "protection");
    const productIndex = productSlugs.indexOf(product);

    if (productIndex === -1) {
        notFound();
    }

    const productData = dict.products[productIndex];

    return (
        <div className="min-h-screen bg-background">
            <main className="pt-24 lg:pt-32">
                {/* Breadcrumbs */}
                <section className="container mx-auto px-4 lg:px-8 py-4">
                    <nav className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Link href={`/${lang}`} className="hover:text-primary">
                            {lang === 'ru' ? 'Главная' : lang === 'en' ? 'Home' : 'Bosh sahifa'}
                        </Link>
                        <span>/</span>
                        <Link href={`/${lang}/protection`} className="hover:text-primary">
                            {lang === 'ru' ? 'Защитная пленка' : lang === 'en' ? 'Protection Film' : 'Himoya plyonka'}
                        </Link>
                        <span>/</span>
                        <span className="text-foreground">Thompson {productData.name}</span>
                    </nav>
                </section>

                {/* Product Details */}
                <section className="container mx-auto px-4 lg:px-8 py-16">
                    <article
                        itemScope
                        itemType="https://schema.org/Product"
                        className="grid lg:grid-cols-2 gap-12"
                    >
                        {/* Product Images */}
                        <div>
                            {productData.images && productData.images.length > 0 ? (
                                <div className="space-y-4">
                                    {productData.images.map((img: string, idx: number) => (
                                        <div key={idx} className="relative rounded-2xl overflow-hidden">
                                            <Image
                                                src={img}
                                                alt={`Thompson ${productData.name} - ${idx + 1}`}
                                                width={800}
                                                height={600}
                                                className="w-full h-auto object-cover"
                                                itemProp="image"
                                                priority={idx === 0}
                                            />
                                        </div>
                                    ))}
                                </div>
                            ) : (
                                <div className="bg-card rounded-2xl aspect-video flex items-center justify-center">
                                    <span className="text-muted-foreground">
                                        Thompson {productData.name}
                                    </span>
                                </div>
                            )}
                        </div>

                        {/* Product Info */}
                        <div>
                            <div className="flex items-start justify-between mb-6">
                                <h1
                                    className="text-4xl lg:text-5xl font-bold text-foreground"
                                    itemProp="name"
                                >
                                    Thompson {productData.name}
                                </h1>
                                <div className="bg-card border border-border rounded-lg px-4 py-2">
                                    <span className="text-primary font-bold text-xl" itemProp="brand">
                                        {productData.brand}
                                    </span>
                                </div>
                            </div>

                            {/* Specs */}
                            <div className="flex flex-wrap gap-3 mb-8">
                                {productData.specs.map((spec: string, idx: number) => (
                                    <span
                                        key={idx}
                                        className="px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-primary text-sm font-medium"
                                    >
                                        {spec}
                                    </span>
                                ))}
                            </div>

                            {/* Description */}
                            <div
                                className="prose prose-invert max-w-none mb-8"
                                itemProp="description"
                            >
                                <h2 className="text-2xl font-semibold text-foreground mb-4">
                                    {lang === 'ru' ? 'Особенности' : lang === 'en' ? 'Features' : 'Xususiyatlar'}
                                </h2>
                            </div>

                            {/* Features */}
                            <div className="grid sm:grid-cols-2 gap-x-8 gap-y-3 mb-8">
                                <div className="space-y-3">
                                    {productData.featuresLeft.map((feature: string, idx: number) => (
                                        <div key={idx} className="flex items-start gap-3">
                                            <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"/>
                                            <span className="text-foreground">{feature}</span>
                                        </div>
                                    ))}
                                </div>
                                <div className="space-y-3">
                                    {productData.featuresRight.map((feature: string, idx: number) => (
                                        <div key={idx} className="flex items-start gap-3">
                                            <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"/>
                                            <span className="text-foreground font-medium">{feature}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* CTA */}
                            <div className="flex gap-4">
                                <Link
                                    href={`/${lang}/contact`}
                                    className="px-8 bg-[hsl(var(--thompson-red))] text-white py-3 rounded-xl inline-block hover:opacity-90 transition"
                                >
                                    {dict.cta}
                                </Link>
                                <Link
                                    href={`/${lang}/protection`}
                                    className="px-8 bg-card border border-border py-3 rounded-xl inline-block hover:bg-accent transition"
                                >
                                    {lang === 'ru' ? 'Все продукты' : lang === 'en' ? 'All Products' : 'Barcha mahsulotlar'}
                                </Link>
                            </div>
                        </div>
                    </article>
                </section>
            </main>
        </div>
    );
}