import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import protectionFilm from "@/assets/images/protection-film.jpg";
import automotiveFilm from "@/assets/images/automotive-film.jpg";
import technology from "@/assets/images/technology.jpg";
import Image from "next/image";
import type { HomeDictionary } from "@/lib/dictionary-types";

interface ServicesSectionProps {
  dict: HomeDictionary;
}

const ServicesSection = ({dict}: ServicesSectionProps) => {
  const services = [
    {
      id: "protection",
      title: dict.services.items[0].title,
      description: dict.services.items[0].description,
      image: protectionFilm,
    },
    {
      id: "automotive",
      title: dict.services.items[1].title,
      description: dict.services.items[1].description,
      image: automotiveFilm,
    },
    {
      id: "technology",
      title: dict.services.items[2].title,
      description: dict.services.items[2].description,
      image: technology,
    },
  ];

  return (
      <section id="protection" className="py-24 lg:py-32 bg-thompson-darker relative overflow-hidden">
        {/* Background decorations */}
        <div className="absolute top-1/2 -translate-y-1/2 left-0 w-[500px] h-[500px] bg-primary/3 rounded-full blur-[200px]" />

        <div className="container mx-auto px-4 lg:px-8 relative z-10 ">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-primary text-sm font-semibold uppercase tracking-widest">{dict.services.badge}</span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold py-5 text-gradient">
              {dict.services.title}
            </h2>
          </div>

          <div className="space-y-8">
            {services.map((service, index) => (
                <div
                    key={service.id}
                    id={service.id === "automotive" ? "automotive" : service.id === "technology" ? "technology" : undefined}
                    className="group"
                >
                  <div className={`grid lg:grid-cols-2 gap-8 items-center ${index % 2 === 1 ? "lg:flex-row-reverse" : ""}`}>
                    {/* Image */}
                    <div className={`relative overflow-hidden rounded-2xl ${index % 2 === 1 ? "lg:order-2" : ""}`}>
                      <div className="aspect-[4/3] relative group-hover:scale-105 transition-transform duration-500">
                        <Image
                            src={service.image}
                            alt={service.title}
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
                      </div>
                    </div>

                    {/* Content */}
                    <div className={`p-8 lg:p-12 ${index % 2 === 1 ? "lg:order-1" : ""}`}>
                      <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                        {service.title}
                      </h3>
                      <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                        {service.description}
                      </p>
                      <Button variant="heroOutline" size="lg" className="group/btn">
                        <span>{dict.services.cta}</span>
                        <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                      </Button>
                    </div>
                  </div>
                </div>
            ))}
          </div>
        </div>
      </section>
  );
};

export default ServicesSection;