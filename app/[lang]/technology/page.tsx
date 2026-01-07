import {getDictionary} from "@/lib/dictionary";
import {i18n, Locale} from "@/i18n-config";
import {notFound} from "next/navigation";

const Technology = async ({
                              params
                          }: {
    params: Promise<{ lang: Locale }>
}) => {
    const { lang } = await params;

    if (!i18n.locales.includes(lang)) {
        notFound();
    }
    const dict = await getDictionary(lang, "technology");

    const technologies = [
        {
            title: dict.technology.one_title,
            description: dict.technology.one
        },
        {
            title: dict.technology.two_title,
            description: dict.technology.two
        },
        {
            title: dict.technology.three_title,
            description: dict.technology.three
        },
        {
            title: dict.technology.four_title,
            description: dict.technology.four
        },
        {
            title: dict.technology.five_title,
            description: dict.technology.five
        },
        {
            title: dict.technology.six_title,
            description: dict.technology.six
        }
    ];

    return (
        <div className="min-h-screen bg-background">
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
                        {dict.hero.title}
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
                                <h2 className="text-2xl md:text-3xl font-bold text-primary mb-4">
                                    {tech.title}
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
        </div>
    );
};

export default Technology;