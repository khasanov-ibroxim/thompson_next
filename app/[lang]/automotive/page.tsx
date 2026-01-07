
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import automotiveFilm from "";
import heroCar from "";
import protectionFilm from "";
import Image, {StaticImageData} from "next/image";
import {getDictionary} from "@/lib/dictionary";
import {i18n, Locale} from "@/i18n-config";
import {notFound} from "next/navigation";




const  AutomotiveFilm  = async ({
                                    params
                                }: {

    params: Promise<{ lang: Locale }>
}) => {
    const { lang } = await params;

    if (!i18n.locales.includes(lang)) {
        notFound();
    }
    const dict = await getDictionary(lang , "automotive" );

    console.log(dict);
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
                            <Button variant="hero" size="lg">
                                {dict.hero.cta}
                            </Button>
                        </div>
                    </div>
                </section>

                {/* Product Categories */}
                <section className="py-16">
                    <div className="container mx-auto px-4 lg:px-8 space-y-24">
                        {dict.categories.map((category, index) => (
                            <div key={category.id} id={category.id} className="scroll-mt-32">
                                {/* Category Header */}
                                <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-8">
                                    {category.title}
                                </h2>

                                {/* Content Grid */}
                                <div className={`grid lg:grid-cols-2 gap-8 lg:gap-12 mb-10 ${index % 2 === 1 ? "" : ""}`}>
                                    {/* Description & Features */}
                                    <div className={`${index % 2 === 1 ? "lg:order-2" : ""}`}>
                                        <p className="text-muted-foreground mb-6 leading-relaxed">
                                            {category.description}
                                        </p>
                                        <div className="grid sm:grid-cols-2 gap-3">
                                            {category.features.map((feature, idx) => (
                                                <div key={idx} className="flex items-center gap-3">
                                                    <Check className="w-4 h-4 text-primary flex-shrink-0" />
                                                    <span className="text-foreground text-sm">{feature}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Image */}
                                    <div className={`${index % 2 === 1 ? "lg:order-1" : ""}`}>
                                        <div className="relative rounded-2xl overflow-hidden">
                                            <Image
                                                src={category.image}
                                                alt={category.title}
                                                className="w-full h-64 lg:h-80 object-cover"
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
                                        </div>
                                    </div>
                                </div>

                                {/* Specifications Table */}
                                <div className="overflow-x-auto">
                                    <table className="w-full border-collapse">
                                        <thead>
                                        <tr className="bg-primary text-primary-foreground">
                                            <th className="px-4 py-3 text-left text-sm font-semibold">PRODUCT</th>
                                            <th className="px-4 py-3 text-center text-sm font-semibold">VLT(%)</th>
                                            <th className="px-4 py-3 text-center text-sm font-semibold">UV IRIS (%)</th>
                                            <th className="px-4 py-3 text-center text-sm font-semibold">TSER (%)</th>
                                            <th className="px-4 py-3 text-center text-sm font-semibold">
                                                <span className="hidden sm:inline">INFRARED BLOCKING (%)</span>
                                                <span className="sm:hidden">IR (%)</span>
                                            </th>
                                            <th className="px-4 py-3 text-center text-sm font-semibold">
                                                <span className="hidden sm:inline">SOLAR ENERGY BLOCKING (%)</span>
                                                <span className="sm:hidden">SE (%)</span>
                                            </th>
                                            <th className="px-4 py-3 text-center text-sm font-semibold">
                                                <span className="hidden sm:inline">THICKNESS (MIL)</span>
                                                <span className="sm:hidden">THICK</span>
                                            </th>
                                            <th className="px-4 py-3 text-center text-sm font-semibold">
                                                <span className="hidden sm:inline">WARRANTY (Years)</span>
                                                <span className="sm:hidden">WTY</span>
                                            </th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        {category.specs.map((spec, idx) => (
                                            <tr
                                                key={idx}
                                                className={`border-b border-border ${
                                                    idx % 2 === 0 ? "bg-card" : "bg-card/50"
                                                } hover:bg-accent/10 transition-colors`}
                                            >
                                                <td className="px-4 py-3 text-foreground font-medium text-sm">{spec.name}</td>
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
                        ))}
                    </div>
                </section>
            </main>

        </div>
    );
};

export default AutomotiveFilm;
