// app/[lang]/protection/page.tsx
import {Button} from "@/components/ui/button";
import protectionFilm from "@/public/images/protection-film.jpg";
import heroCar from "@/public/images/hero-car.jpg";
import {getDictionary} from "@/lib/dictionary";
import {i18n, Locale} from "@/i18n-config";
import {notFound} from "next/navigation";
import ProductSwiper from "@/components/ui/ProductSwiper";
import Link from "next/link";

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

    const handleAssignContact = ()=>{
        return window.location.assign("/contact");
    }

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

                            return (
                                <div
                                    key={product.name}
                                    className={`grid lg:grid-cols-2 gap-8 lg:gap-12 items-center ${
                                        index % 2 === 1 ? "lg:flex-row-reverse" : ""
                                    }`}
                                >
                                    {/* Product Image with Swiper */}
                                    <div className={`${index % 2 === 1 ? "lg:order-2" : ""} overflow-hidden`}>
                                        <ProductSwiper
                                            images={product.images}
                                            productName={product.name}
                                            defaultImage={productImage}
                                        />
                                    </div>

                                    {/* Product Info */}
                                    <div className={`${index % 2 === 1 ? "lg:order-1" : ""}`}>
                                        <div className="flex items-start justify-between mb-6">
                                            <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
                                                {product.name}
                                            </h2>
                                            <div className="bg-card border border-border rounded-lg px-4 py-2">
                        <span className="text-primary font-bold text-xl">
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
                                                {product.featuresLeft.map((feature: string, idx: number) => (
                                                    <div key={idx} className="flex items-center gap-3">
                                                        <div className="w-2 h-2 rounded-full bg-primary"/>
                                                        <span className="text-foreground">{feature}</span>
                                                    </div>
                                                ))}
                                            </div>
                                            <div className="space-y-3">
                                                {product.featuresRight.map((feature: string, idx: number) => (
                                                    <div key={idx} className="flex items-center gap-3">
                                                        <div className="w-2 h-2 rounded-full bg-primary"/>
                                                        <span className="text-foreground font-medium">
                              {feature}
                            </span>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>

                                        {/* CTA Button */}
                                        <Link href={`/${lang}/contact`}  className="px-8 bg-[hsl(var(--thompson-red))]  py-3 rounded-xl">
                                            {dict.cta}
                                        </Link>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </section>
            </main>
        </div>
    );
};

export default ProtectionFilm;