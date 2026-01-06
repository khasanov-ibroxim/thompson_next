import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const technologies = [
    {
        generation: "First Generation",
        title: "1 Ply Dyed Film",
        description: "It is the product in early stage, and only has hiding function and hardly any thermal insulation and ultraviolet ray insulation functions. The color shall be fully faded after one-year use, the cost is low, and there are such hazardous substances as formaldehyde and benzene in adhesive layer."
    },
    {
        generation: "Second Generation",
        title: "2 Ply Chip-Dyed Film",
        description: "There is no metal coating, dyeing is given on adhesive layer directly, the service life is two years, effects of thermal insulation and ultraviolet ray insulation are limited, definition is not high, and there are plenty of such hazardous substances as formaldehyde and benzene in adhesive layer."
    },
    {
        generation: "Third Generation",
        title: "Vacuum Aluminum Plating Film",
        description: "It adopts vacuum thermal evaporation principle and adds metal coating to the base material of film. Moreover, the metal is aluminum as ordinary, and the color is lasting and stable. It can be used for about 5 years, the definition is relative high, and thermal insulation is moderate."
    },
    {
        generation: "Fourth Generation",
        title: "Nano Ceramic Film",
        description: "It adopts coating or magnetron sputtering technology to spray nano ceramic particles on base material of film uniformly, and it has reached thermal insulation effect by absorbing heat. The product shall never show colorfastness, quality guarantee period is over 7 years as ordinary, and it has no interference to wireless signal."
    },
    {
        generation: "Fifth Generation",
        title: "Magnetron Sputtering Metal Film",
        description: "It adopts electromagnetic induction principle and sprays such precious metal alloy materials as gold, silver, titanium and nickel to high-quality base material uniformly, the definition is better than the vacuum aluminum plating film, thermal insulation is above the average, and it shall show no colorfastness for over 7 years' use."
    },
    {
        generation: "Sixth Generation",
        title: "Multi-layer Magnetron Sputtering Metal Film",
        description: "It adopts electromagnetic induction principle and sprays such precious metal alloy materials as gold, silver, titanium and nickel to high-quality base material for several layers uniformly, the definition is better than the vacuum aluminum plating film, it shall never show colorfastness, and it represents the highest level of thermal insulation film. It possesses features of high definition, high thermal insulation, low light reflection, scratch tolerance and good anti-bursting performance. Those with the most metal sputtering layers are representatives of S70 and SS70 series of KDX, and 11 metal layers shall be sprayed in one time."
    }
];

const Technology = () => {
    return (
        <div className="min-h-screen bg-background">
            <Header />

            {/* Hero Section */}
            <section className="relative h-[400px] flex items-center">
                <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: `url(https://c4.wallpaperflare.com/wallpaper/363/947/815/mercedes-benz-mercedes-amg-gt-black-car-car-mercedes-amg-hd-wallpaper-preview.jpg)` }}
                >
                    <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-transparent" />
                </div>
                <div className="container mx-auto px-4 relative z-10">
                    <h1 className="text-5xl md:text-6xl font-bold text-white animate-fade-in">
                        Technology
                    </h1>
                </div>
            </section>

            {/* Technology Generations */}
            <section className="py-16 bg-background">
                <div className="container mx-auto px-4">
                    <div className="space-y-16">
                        {technologies.map((tech, index) => (
                            <div
                                key={index}
                                className="animate-fade-in"
                                style={{ animationDelay: `${index * 100}ms` }}
                            >
                                <h2 className="text-2xl md:text-3xl font-bold text-thompson-red mb-4">
                                    {tech.generation} - {tech.title}
                                </h2>
                                <p className="text-muted-foreground text-lg leading-relaxed max-w-5xl">
                                    {tech.description}
                                </p>
                                {index < technologies.length - 1 && (
                                    <div className="mt-12 border-b border-border/30" />
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default Technology;
