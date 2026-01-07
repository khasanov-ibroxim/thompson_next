// app/[lang]/automotive/[product]/page.tsx
import {Metadata} from "next";
import {getDictionary} from "@/lib/dictionary";
import {i18n, Locale} from "@/i18n-config";
import {notFound} from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import {Check} from "lucide-react";

// Product slug mapping
const productSlugs = [
    'hp-ceramic',
    'nano-ceramic',
    'xr-ceramic-plus',
    'classic-exclusive',
    'core'
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
    const dict = await getDictionary(lang, "automotive");

    // Find product by slug
    const productIndex = productSlugs.indexOf(product);
    if (productIndex === -1) return {};

    const categoryData = dict.categories[productIndex];

    const langMap = {
        ru: {
            title: `Thompson ${categoryData.title} - Автомобильная Тонировка | Керамика`,
            description: `Thompson ${categoryData.title} - ${categoryData.description.substring(0, 150)}...`
        },
        en: {
            title: `Thompson ${categoryData.title} - Automotive Window Tint | Ceramic`,
            description: `Thompson ${categoryData.title} - ${categoryData.description.substring(0, 150)}...`
        },
        uz: {
            title: `Thompson ${categoryData.title} - Avtomobil Tonirovka | Keramika`,
            description: `Thompson ${categoryData.title} - ${categoryData.description.substring(0, 150)}...`
        }
    };

    const meta = langMap[lang] || langMap.ru;

    return {
        title: meta.title,
        description: meta.description,
        keywords: ` ${categoryData.title}, Thompson automotive film, керамическая тонировка, ceramic tint, ${categoryData.features.slice(0, 3).join(', ')}, Tashkent, Uzbekistan`,
        openGraph: {
            title: meta.title,
            description: meta.description,
            url: `https://thompsonwindowfilm.com/${lang}/automotive/${product}`,
            type: "website",
            images: [
                {
                    url: `https://thompsonwindowfilm.com${categoryData.auto_img}`,
                    width: 1200,
                    height: 630,
                    alt: `Thompson ${categoryData.title}`
                }
            ],
        },
        alternates: {
            canonical: `https://thompsonwindowfilm.com/${lang}/automotive/${product}`,
            languages: {
                'ru': `https://thompsonwindowfilm.com/ru/automotive/${product}`,
                'en': `https://thompsonwindowfilm.com/en/automotive/${product}`,
                'uz': `https://thompsonwindowfilm.com/uz/automotive/${product}`,
            },
        },
    };
}

export default async function AutomotiveProductPage({
                                                        params
                                                    }: {
    params: Promise<{ lang: Locale; product: string }>
}) {
    const { lang, product } = await params;

    if (!i18n.locales.includes(lang)) {
        notFound();
    }

    const dict = await getDictionary(lang, "automotive");
    const productIndex = productSlugs.indexOf(product);

    if (productIndex === -1) {
        notFound();
    }

    const categoryData = dict.categories[productIndex];

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
                        <Link href={`/${lang}/automotive`} className="hover:text-primary">
                            {lang === 'ru' ? 'Автомобильная пленка' : lang === 'en' ? 'Automotive Film' : 'Avtomobil plyonka'}
                        </Link>
                        <span>/</span>
                        <span className="text-foreground"> {categoryData.title}</span>
                    </nav>
                </section>

                {/* Product Details */}
                <section className="container mx-auto px-4 lg:px-8 py-16">
                    <article
                        itemScope
                        itemType="https://schema.org/Product"
                    >
                        <meta itemProp="name" content={` ${categoryData.title}`} />
                        <meta itemProp="brand" content="Thompson Window Film" />
                        <meta itemProp="description" content={categoryData.description} />

                        {/* Header */}
                        <div className="mb-12">
                            <h1 className="text-4xl lg:text-6xl font-bold text-primary mb-6" itemProp="name">
                                 {categoryData.title}
                            </h1>
                        </div>

                        {/* Content Grid */}
                        <div className="grid lg:grid-cols-2 gap-12 mb-16">
                            {/* Description & Features */}
                            <div>
                                <p className="text-muted-foreground mb-8 leading-relaxed text-lg" itemProp="description">
                                    {categoryData.description}
                                </p>

                                <h2 className="text-2xl font-semibold text-foreground mb-6">
                                    {lang === 'ru' ? 'Особенности' : lang === 'en' ? 'Features' : 'Xususiyatlar'}
                                </h2>

                                <div className="grid sm:grid-cols-2 gap-4">
                                    {categoryData.features.map((feature: string, idx: number) => (
                                        <div key={idx} className="flex items-center gap-3">
                                            <Check className="w-5 h-5 text-primary flex-shrink-0" />
                                            <span className="text-foreground">{feature}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Image */}
                            <div>
                                <div className="relative rounded-2xl overflow-hidden">
                                    <Image
                                        src={categoryData.auto_img}
                                        alt={`Thompson ${categoryData.title} automotive window film`}
                                        width={800}
                                        height={600}
                                        className="w-full h-96 object-cover"
                                        itemProp="image"
                                        priority
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
                                </div>
                            </div>
                        </div>

                        {/* Specifications Table */}
                        {categoryData.specs && categoryData.specs.length > 0 && (
                            <div className="mb-12">
                                <h2 className="text-3xl font-bold text-foreground mb-8">
                                    {lang === 'ru' ? 'Технические характеристики' : lang === 'en' ? 'Technical Specifications' : 'Texnik xususiyatlar'}
                                </h2>

                                <div className="overflow-x-auto">
                                    <table className="w-full border-collapse" itemProp="offers" itemScope itemType="https://schema.org/AggregateOffer">
                                        <thead>
                                        <tr className="bg-primary text-primary-foreground">
                                            <th className="px-4 py-3 text-left text-sm font-semibold">
                                                {dict.table?.product || "PRODUCT"}
                                            </th>
                                            <th className="px-4 py-3 text-center text-sm font-semibold">
                                                {dict.table?.vlt || "VLT(%)"}
                                            </th>
                                            <th className="px-4 py-3 text-center text-sm font-semibold">
                                                {dict.table?.uvIris || "UV IRIS (%)"}
                                            </th>
                                            <th className="px-4 py-3 text-center text-sm font-semibold">
                                                {dict.table?.tser || "TSER (%)"}
                                            </th>
                                            <th className="px-4 py-3 text-center text-sm font-semibold">
                                                <span className="hidden sm:inline">{dict.table?.infrared || "INFRARED BLOCKING (%)"}</span>
                                                <span className="sm:hidden">{dict.table?.infraredShort || "IR (%)"}</span>
                                            </th>
                                            <th className="px-4 py-3 text-center text-sm font-semibold">
                                                <span className="hidden sm:inline">{dict.table?.solarEnergy || "SOLAR ENERGY BLOCKING (%)"}</span>
                                                <span className="sm:hidden">{dict.table?.solarEnergyShort || "SE (%)"}</span>
                                            </th>
                                            <th className="px-4 py-3 text-center text-sm font-semibold">
                                                <span className="hidden sm:inline">{dict.table?.thickness || "THICKNESS (MIL)"}</span>
                                                <span className="sm:hidden">{dict.table?.thicknessShort || "THICK"}</span>
                                            </th>
                                            <th className="px-4 py-3 text-center text-sm font-semibold">
                                                <span className="hidden sm:inline">{dict.table?.warranty || "WARRANTY (Years)"}</span>
                                                <span className="sm:hidden">{dict.table?.warrantyShort || "WTY"}</span>
                                            </th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        {categoryData.specs.map((spec: any, idx: number) => (
                                            <tr
                                                key={idx}
                                                className={`border-b border-border ${
                                                    idx % 2 === 0 ? "bg-card" : "bg-card/50"
                                                } hover:bg-accent/10 transition-colors`}
                                                itemProp="itemOffered"
                                                itemScope
                                                itemType="https://schema.org/Product"
                                            >
                                                <td className="px-4 py-3 text-foreground font-medium text-sm" itemProp="name">
                                                     {spec.name}
                                                </td>
                                                <td className="px-4 py-3 text-center text-muted-foreground text-sm">{spec.vlt}</td>
                                                <td className="px-4 py-3 text-center text-muted-foreground text-sm">{spec.uvBlock}</td>
                                                <td className="px-4 py-3 text-center text-muted-foreground text-sm">{spec.tser}</td>
                                                <td className="px-4 py-3 text-center text-muted-foreground text-sm">{spec.irBlocking}</td>
                                                <td className="px-4 py-3 text-center text-muted-foreground text-sm">{spec.solarBlocking}</td>
                                                <td className="px-4 py-3 text-center text-muted-foreground text-sm">{spec.thickness}</td>
                                                <td className="px-4 py-3 text-center text-muted-foreground text-sm">{spec.warranty}</td>
                                            </tr>
                                        ))}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        )}

                        {/* CTA Section */}
                        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
                            <Link
                                href={`/${lang}/contact`}
                                className="px-8 bg-[hsl(var(--thompson-red))] text-white py-3 rounded-xl inline-block hover:opacity-90 transition"
                            >
                                {dict.hero.cta}
                            </Link>
                            <Link
                                href={`/${lang}/automotive`}
                                className="px-8 bg-card border border-border py-3 rounded-xl inline-block hover:bg-accent transition"
                            >
                                {lang === 'ru' ? 'Все категории' : lang === 'en' ? 'All Categories' : 'Barcha kategoriyalar'}
                            </Link>
                        </div>
                    </article>
                </section>
            </main>
        </div>
    );
}