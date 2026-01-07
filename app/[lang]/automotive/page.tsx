// app/[lang]/automotive/page.tsx - UPDATED
import {Metadata} from "next";
import {Check} from "lucide-react";
import Image from "next/image";
import {getDictionary} from "@/lib/dictionary";
import {i18n, Locale} from "@/i18n-config";
import {notFound} from "next/navigation";
import Link from "next/link";

// Product slugs for URLs
const productSlugs = [
    'hp-ceramic',
    'nano-ceramic',
    'xr-ceramic-plus',
    'classic-exclusive',
    'core'
];

export async function generateMetadata({
                                           params,
                                       }: {
    params: Promise<{ lang: Locale }>;
}): Promise<Metadata> {
    const { lang } = await params;
    const dict = await getDictionary(lang, "automotive");

    const langMap = {
        ru: {
            title: "Thompson Автомобильная Тонировка | HP Ceramic, Nano Ceramic, XR Plus",
            description: "Профессиональная автомобильная тонировка Thompson в Ташкенте. HP Ceramic, Nano Ceramic (90% IR), XR Ceramic Plus. Пожизненная гарантия. Защита от жары и УФ до 99%."
        },
        en: {
            title: "Thompson Automotive Window Tint | HP Ceramic, Nano Ceramic, XR Plus",
            description: "Professional Thompson automotive window tinting in Tashkent. HP Ceramic, Nano Ceramic (90% IR), XR Ceramic Plus. Lifetime warranty. Heat & UV protection up to 99%."
        },
        uz: {
            title: "Thompson Avtomobil Tonirovka | HP Ceramic, Nano Ceramic, XR Plus",
            description: "Professional Thompson avtomobil tonirovka Toshkentda. HP Ceramic, Nano Ceramic (90% IR), XR Ceramic Plus. Umrbod kafolat. Issiqlik va UV himoya 99% gacha."
        }
    };

    const meta = langMap[lang] || langMap.en;

    return {
        title: meta.title,
        description: meta.description,
        keywords: "Thompson automotive film, Thompson HP Ceramic, Thompson Nano Ceramic, Thompson XR Ceramic Plus, автомобильная тонировка, car window tint, Thompson Classic exclusive, Thompson CORE, ceramic tint, IR blocking, UV protection, avtomobil tonirovka, Tashkent tinting",
        openGraph: {
            title: meta.title,
            description: meta.description,
            url: `https://thompsonwindowfilm.com/${lang}/automotive`,
            type: "website",
            images: [
                {
                    url: "https://thompsonwindowfilm.com/images/automotive-film.jpg",
                    width: 1200,
                    height: 630,
                    alt: "Thompson Automotive Window Film"
                }
            ],
        },
        twitter: {
            card: "summary_large_image",
            title: meta.title,
            description: meta.description,
        },
        alternates: {
            canonical: `https://thompsonwindowfilm.com/${lang}/automotive`,
            languages: {
                'ru': 'https://thompsonwindowfilm.com/ru/automotive',
                'en': 'https://thompsonwindowfilm.com/en/automotive',
                'uz': 'https://thompsonwindowfilm.com/uz/automotive',
            },
        },
    };
}

const AutomotiveFilm = async ({
                                  params
                              }: {
    params: Promise<{ lang: Locale }>
}) => {
    const { lang } = await params;

    if (!i18n.locales.includes(lang)) {
        notFound();
    }
    const dict = await getDictionary(lang, "automotive");

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
                            <p className="text-lg text-muted-foreground mb-5">
                                {dict.hero.description}
                            </p>
                            <Link href={`/${lang}/contact`} className="px-8 bg-[hsl(var(--thompson-red))] text-white py-3 rounded-xl inline-block hover:opacity-90 transition">
                                {dict.hero.cta}
                            </Link>
                        </div>
                    </div>
                </section>

                {/* Product Categories */}
                <section className="py-16">
                    <div className="container mx-auto px-4 lg:px-8 space-y-24">
                        {dict.categories.map((category: any, index: number) => {
                            const productSlug = productSlugs[index];

                            return (
                                <article
                                    key={index}
                                    className="scroll-mt-32"
                                    itemScope
                                    itemType="https://schema.org/Product"
                                >
                                    <meta itemProp="name" content={`${category.title}`} />
                                    <meta itemProp="brand" content="Thompson Window Film" />
                                    <meta itemProp="description" content={category.description} />

                                    {/* Category Header */}
                                    <Link href={`/${lang}/automotive/${productSlug}`}>
                                        <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-8 hover:text-primary/80 transition" itemProp="name">
                                             {category.title}
                                        </h2>
                                    </Link>

                                    {/* Content Grid */}
                                    <div className={`grid lg:grid-cols-2 gap-8 lg:gap-12 mb-10`}>
                                        {/* Description & Features */}
                                        <div className={`${index % 2 === 1 ? "lg:order-2" : ""}`}>
                                            <p className="text-muted-foreground mb-6 leading-relaxed" itemProp="description">
                                                {category.description}
                                            </p>
                                            <div className="grid sm:grid-cols-2 gap-3 mb-6">
                                                {category.features.slice(0, 6).map((feature: string, idx: number) => (
                                                    <div key={idx} className="flex items-center gap-3">
                                                        <Check className="w-4 h-4 text-primary flex-shrink-0" />
                                                        <span className="text-foreground text-sm">{feature}</span>
                                                    </div>
                                                ))}
                                            </div>

                                            <Link
                                                href={`/${lang}/automotive/${productSlug}`}
                                                className="inline-block px-6 py-2 bg-card border border-border rounded-lg hover:bg-accent transition text-sm"
                                            >
                                                {lang === 'ru' ? 'Подробнее' : lang === 'en' ? 'Learn More' : 'Batafsil'}
                                            </Link>
                                        </div>

                                        {/* Image */}
                                        <div className={`${index % 2 === 1 ? "lg:order-1" : ""}`}>
                                            <Link href={`/${lang}/automotive/${productSlug}`}>
                                                <div className="relative rounded-2xl overflow-hidden group cursor-pointer">
                                                    <Image
                                                        src={category.auto_img}
                                                        alt={`Thompson ${category.title} automotive window film`}
                                                        width={800}
                                                        height={600}
                                                        className="w-full h-64 lg:h-80 object-cover group-hover:scale-105 transition-transform duration-300"
                                                        itemProp="image"
                                                    />
                                                    <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
                                                </div>
                                            </Link>
                                        </div>
                                    </div>

                                    {/* Specifications Table - показываем только первые 3 строки */}
                                    {category.specs && category.specs.length > 0 && (
                                        <div className="overflow-x-auto">
                                            <table className="w-full border-collapse">
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
                                                        <span className="hidden sm:inline">{dict.table?.warranty || "WARRANTY (Years)"}</span>
                                                        <span className="sm:hidden">{dict.table?.warrantyShort || "WTY"}</span>
                                                    </th>
                                                </tr>
                                                </thead>
                                                <tbody>
                                                {category.specs.map((spec: any, idx: number) => (
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
                                                        <td className="px-4 py-3 text-center text-muted-foreground text-sm">{spec.warranty}</td>
                                                    </tr>
                                                ))}
                                                </tbody>
                                            </table>
                                        </div>
                                    )}
                                </article>
                            );
                        })}
                    </div>
                </section>
            </main>
        </div>
    );
};

export default AutomotiveFilm;