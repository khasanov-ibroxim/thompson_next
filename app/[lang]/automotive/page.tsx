import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import automotiveFilm from "@/assets/images/automotive-film.jpg";
import heroCar from "@/assets/images/hero-car.jpg";
import protectionFilm from "@/assets/images/protection-film.jpg";
import Image, {StaticImageData} from "next/image";

interface ProductSpec {
    name: string;
    vlt: number;
    uvBlock: string;
    tser: string;
    irBlocking: string;
    solarBlocking: string;
    thickness: number;
    warranty: number;
}

interface ProductCategory {
    id: string;
    title: string;
    description: string;
    image: StaticImageData;
    features: string[];
    specs: ProductSpec[];
}

const productCategories: ProductCategory[] = [
    {
        id: "hp-ceramic",
        title: "HP CERAMIC",
        description: "Our HP series is the series with the 10 year warranty, to a 1.6 mil thickness, excellent solar heat rejection. This film has the characteristics of the ratio of GPS signal while providing total solar energy rejection: TSER of up to 59%.",
        image: heroCar,
        features: [
            "99.9% UV Block",
            "Nano-Particle",
            "Clear Metal Free",
            "1.6 mil Alloy-Sputter",
            "Non-Reflective",
            "Dyed out 231 VLT rejection (99.999%)",
            "Enhanced Privacy",
            "Anti-Scratch Top Coat",
        ],
        specs: [
            { name: "HP CERAMIC 05", vlt: 5, uvBlock: "99%", tser: "70", irBlocking: "70", solarBlocking: "97", thickness: 56, warranty: 10 },
            { name: "HP CERAMIC 08", vlt: 8, uvBlock: "99%", tser: "65", irBlocking: "55", solarBlocking: "92", thickness: 55, warranty: 10 },
            { name: "HP CERAMIC 15", vlt: 15, uvBlock: "99%", tser: "52", irBlocking: "45", solarBlocking: "81", thickness: 54, warranty: 10 },
            { name: "HP CERAMIC 20", vlt: 20, uvBlock: "99%", tser: "50", irBlocking: "42", solarBlocking: "75", thickness: 52, warranty: 10 },
            { name: "HP CERAMIC 35", vlt: 35, uvBlock: "99%", tser: "45", irBlocking: "50", solarBlocking: "62", thickness: 12, warranty: 10 },
            { name: "HP CERAMIC 50", vlt: 50, uvBlock: "99%", tser: "42", irBlocking: "35", solarBlocking: "50", thickness: 12, warranty: 10 },
            { name: "HP CERAMIC 70", vlt: 70, uvBlock: "99%", tser: "15", irBlocking: "10", solarBlocking: "35", thickness: 12, warranty: 10 },
        ],
    },
    {
        id: "nano-ceramic",
        title: "NANO CERAMIC",
        description: "Our NANO Ceramic is the series with the 10 year warranty, to a 1.5 mil thickness, excellent solar heat rejection. This film has the characteristics of the ratio of GPS signal while providing total solar energy rejection: TSER of up to 56%.",
        image: automotiveFilm,
        features: [
            "99.9% UV Block",
            "Nano-Particle",
            "Clear Metal Free",
            "1.5 mil Alloy-Sputter",
            "Non-Reflective",
            "Enhanced Privacy",
            "Anti-Scratch Top Coat",
        ],
        specs: [
            { name: "NANO CERAMIC 5", vlt: 5, uvBlock: "99%", tser: "56", irBlocking: "45", solarBlocking: "85", thickness: 54, warranty: 10 },
            { name: "NANO CERAMIC 7", vlt: 7, uvBlock: "99%", tser: "52", irBlocking: "42", solarBlocking: "82", thickness: 52, warranty: 10 },
            { name: "NANO CERAMIC 10", vlt: 10, uvBlock: "99%", tser: "48", irBlocking: "40", solarBlocking: "80", thickness: 50, warranty: 10 },
            { name: "NANO CERAMIC 20", vlt: 20, uvBlock: "99%", tser: "70", irBlocking: "55", solarBlocking: "50", thickness: 52, warranty: 10 },
            { name: "NANO CERAMIC 30", vlt: 30, uvBlock: "99%", tser: "65", irBlocking: "70", solarBlocking: "50", thickness: 52, warranty: 10 },
            { name: "NANO CERAMIC 50", vlt: 50, uvBlock: "99%", tser: "78", irBlocking: "50", solarBlocking: "30", thickness: 52, warranty: 10 },
            { name: "NANO CERAMIC 70", vlt: 70, uvBlock: "99%", tser: "85", irBlocking: "78", solarBlocking: "30", thickness: 52, warranty: 10 },
        ],
    },
    {
        id: "xr-ceramic-plus",
        title: "XR CERAMIC PLUS",
        description: "Our XR CERAMIC PLUS series with the priority warranty, to a 1.5 mil thickness, excellent solar heat rejection. This film has the characteristics of the ratio of GPS signal while providing total solar energy rejection: TSER of up to 70%.",
        image: protectionFilm,
        features: [
            "99.9% UV Block",
            "Nano-Particle",
            "Clear Metal Free",
            "1.5 mil Alloy-Sputter",
            "Non-Reflective",
            "Enhanced Privacy",
            "Anti-Scratch Top Coat",
        ],
        specs: [
            { name: "XR CERAMIC PLUS 05", vlt: 5, uvBlock: "99%", tser: "70", irBlocking: "98", solarBlocking: "99", thickness: 1.5, warranty: 15 },
            { name: "XR CERAMIC PLUS 15", vlt: 15, uvBlock: "99%", tser: "68", irBlocking: "95", solarBlocking: "96", thickness: 1.5, warranty: 15 },
            { name: "XR CERAMIC PLUS 20", vlt: 20, uvBlock: "99%", tser: "65", irBlocking: "92", solarBlocking: "93", thickness: 1.5, warranty: 15 },
            { name: "XR CERAMIC PLUS 30", vlt: 30, uvBlock: "99%", tser: "60", irBlocking: "88", solarBlocking: "88", thickness: 1.5, warranty: 15 },
            { name: "XR CERAMIC PLUS 50", vlt: 50, uvBlock: "99%", tser: "55", irBlocking: "82", solarBlocking: "80", thickness: 1.5, warranty: 15 },
            { name: "XR CERAMIC PLUS 70", vlt: 70, uvBlock: "99%", tser: "50", irBlocking: "75", solarBlocking: "70", thickness: 1.5, warranty: 15 },
        ],
    },
    {
        id: "classic-exclusive",
        title: "Classic exclusive",
        description: "Our Classic series is the series with the 4 year warranty, to a 1.5 mil thickness, excellent solar heat rejection. This film does not interfere with a radio or GPS signal while providing total solar energy rejection: TSER of up to 70%.",
        image: heroCar,
        features: [
            "99.9% UV Block",
            "Nano-Particle",
            "Clear Metal Free",
            "1.5 mil Alloy-Sputter",
            "Non-Reflective",
            "Enhanced Privacy",
            "Anti-Scratch Top Coat",
        ],
        specs: [
            { name: "CLASSIC PREMIUM 05", vlt: 5, uvBlock: "99%", tser: "48", irBlocking: "42", solarBlocking: "60", thickness: 1.5, warranty: 4 },
            { name: "CLASSIC PREMIUM 15", vlt: 15, uvBlock: "99%", tser: "46", irBlocking: "12", solarBlocking: "52", thickness: 1.5, warranty: 4 },
            { name: "CLASSIC EXCLUSIVE 20", vlt: 20, uvBlock: "99%", tser: "46", irBlocking: "12", solarBlocking: "52", thickness: 1.5, warranty: 4 },
            { name: "CLASSIC EXCLUSIVE 30", vlt: 30, uvBlock: "99%", tser: "45", irBlocking: "80", solarBlocking: "52", thickness: 1.5, warranty: 4 },
            { name: "CLASSIC EXCLUSIVE 50", vlt: 50, uvBlock: "99%", tser: "46", irBlocking: "12", solarBlocking: "52", thickness: 1.5, warranty: 4 },
        ],
    },
    {
        id: "core",
        title: "CORE",
        description: "Our CORE Ceramic is the entry-level ceramic film with a 3 year warranty. This film does not interfere with a radio or GPS signal while providing excellent solar heat rejection: TSER of up to 50%.",
        image: automotiveFilm,
        features: [
            "99.9% UV Block",
            "Nano-Particle",
            "Clear Metal Free",
            "Standard Thickness",
            "Non-Reflective",
            "Anti-Scratch Top Coat",
        ],
        specs: [
            { name: "CORE 5", vlt: 5, uvBlock: "99%", tser: "50", irBlocking: "35", solarBlocking: "45", thickness: 1.5, warranty: 3 },
            { name: "CORE 15", vlt: 15, uvBlock: "99%", tser: "45", irBlocking: "30", solarBlocking: "40", thickness: 1.5, warranty: 3 },
            { name: "CORE 20", vlt: 20, uvBlock: "99%", tser: "42", irBlocking: "28", solarBlocking: "35", thickness: 1.5, warranty: 3 },
            { name: "CORE 35", vlt: 35, uvBlock: "99%", tser: "38", irBlocking: "25", solarBlocking: "30", thickness: 1.5, warranty: 3 },
            { name: "CORE 50", vlt: 50, uvBlock: "99%", tser: "35", irBlocking: "20", solarBlocking: "25", thickness: 1.5, warranty: 3 },
        ],
    },
];

const AutomotiveFilm = () => {
    return (
        <div className="min-h-screen bg-background">
            <Header />
            <main className="pt-24 lg:pt-32">
                {/* Hero Section */}
                <section className="relative py-20 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-b from-primary/10 to-transparent"/>
                    <div className="container mx-auto px-4 lg:px-8 relative z-10">
                        <div className="text-center max-w-3xl mx-auto">
                            <h1 className="text-4xl lg:text-6xl font-bold text-foreground mb-6">
                                Automotive Film
                            </h1>
                            <p className="text-lg text-muted-foreground mb-5">
                                Premium Automotive Tint Solutions.
                                Professional Grade Window Films.</p>
                            <Button variant="hero" size="lg">
                                Get a free sample
                            </Button>
                        </div>
                    </div>
                </section>

                {/* Product Categories */}
                <section className="py-16">
                    <div className="container mx-auto px-4 lg:px-8 space-y-24">
                        {productCategories.map((category, index) => (
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
            <Footer />
        </div>
    );
};

export default AutomotiveFilm;
