import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import {Button} from "@/components/ui/button";
import protectionFilm from "@/assets/images/protection-film.jpg";
import heroCar from "@/assets/images/hero-car.jpg";
import Image from "next/image";

const products = [
    {
        id: 1,
        name: "LUMI – HP",
        brand: "KDX",
        image: heroCar,
        specs: ["193 micron", "Heat-Healing", "10year", "PPF"],
        featuresLeft: [
            "Fade & Erosion Resistant",
            "Preserve Vehicle Paint",
            "Easy to Install & Maintain",
            "UV & Acid Rain Protection",
        ],
        featuresRight: [
            "Superior Weather Resistant",
            "Supreme Stain Resistant",
            "Durable & Invisible",
            "Impact Resistant",
        ],
    },
    {
        id: 2,
        name: "LUMI – MATTE",
        brand: "KDX",
        image: protectionFilm,
        specs: ["180 micron", "Self-Healing", "8year", "PPF"],
        featuresLeft: [
            "Matte Finish Look",
            "Anti-Fingerprint",
            "Scratch Protection",
            "UV Protection",
        ],
        featuresRight: [
            "Weather Resistant",
            "Stain Resistant",
            "Long Lasting",
            "Premium Quality",
        ],
    },
    {
        id: 3,
        name: "LUMI – GLOSS",
        brand: "KDX",
        image: heroCar,
        specs: ["200 micron", "Heat-Healing", "12year", "PPF"],
        featuresLeft: [
            "High Gloss Finish",
            "Crystal Clear",
            "Self-Healing Technology",
            "Ultimate Protection",
        ],
        featuresRight: [
            "Hydrophobic Surface",
            "Chemical Resistant",
            "Factory Paint Look",
            "Premium Shield",
        ],
    },
];

const ProtectionFilm = () => {
    return (
        <div className="min-h-screen bg-background">
            <Header/>
            <main className="pt-24 lg:pt-32">
                {/* Hero Section */}
                <section className="relative py-20 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-b from-primary/10 to-transparent"/>
                    <div className="container mx-auto px-4 lg:px-8 relative z-10">
                        <div className="text-center max-w-3xl mx-auto">
                            <h1 className="text-4xl lg:text-6xl font-bold text-foreground mb-6">
                                Protection Film
                            </h1>
                            <p className="text-lg text-muted-foreground">
                                Avtomobilingizni eng yuqori sifatli himoya plyonkalari bilan himoyalang.
                                Premium sifat, uzoq muddat kafolat.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Products Section */}
                <section className="py-16">
                    <div className="container mx-auto px-4 lg:px-8 space-y-16">
                        {products.map((product, index) => (
                            <div
                                key={product.id}
                                className={`grid lg:grid-cols-2 gap-8 lg:gap-12 items-center ${
                                    index % 2 === 1 ? "lg:flex-row-reverse" : ""
                                }`}
                            >
                                {/* Product Image */}
                                <div className={`${index % 2 === 1 ? "lg:order-2" : ""}`}>
                                    <div className="relative rounded-2xl overflow-hidden group">
                                        <Image
                                            src={product.image}
                                            alt={product.name}
                                            className="w-full h-80 lg:h-96 object-cover transition-transform duration-700 group-hover:scale-105"
                                        />
                                        <div
                                            className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent"/>
                                    </div>
                                </div>

                                {/* Product Info */}
                                <div className={`${index % 2 === 1 ? "lg:order-1" : ""}`}>
                                    <div className="flex items-start justify-between mb-6">
                                        <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
                                            {product.name}
                                        </h2>
                                        <div className="bg-card border border-border rounded-lg px-4 py-2">
                                            <span className="text-primary font-bold text-xl">{product.brand}</span>
                                        </div>
                                    </div>

                                    {/* Specs Badges */}
                                    <div className="flex flex-wrap gap-3 mb-8">
                                        {product.specs.map((spec, idx) => (
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
                                            {product.featuresLeft.map((feature, idx) => (
                                                <div key={idx} className="flex items-center gap-3">
                                                    <div className="w-2 h-2 rounded-full bg-primary"/>
                                                    <span className="text-foreground">{feature}</span>
                                                </div>
                                            ))}
                                        </div>
                                        <div className="space-y-3">
                                            {product.featuresRight.map((feature, idx) => (
                                                <div key={idx} className="flex items-center gap-3">
                                                    <div className="w-2 h-2 rounded-full bg-primary"/>
                                                    <span className="text-foreground font-medium">{feature}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    {/* CTA Button */}
                                    <Button variant="hero" size="lg" className="px-8">
                                        Give me samples
                                    </Button>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
            </main>
            <Footer/>
        </div>
    );
};

export default ProtectionFilm;
