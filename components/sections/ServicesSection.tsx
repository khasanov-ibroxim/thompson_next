import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import protectionFilm from "@/assets/protection-film.jpg";
import automotiveFilm from "@/assets/automotive-film.jpg";
import technology from "@/assets/technology.jpg";

const services = [
  {
    id: "protection",
    title: "Himoya Plyonkasi",
    description: "Deyarli ko'rinmas uretan plyonka. Avtomobilingiz bo'yog'ini yoqimsiz shikastlanishlardan himoya qiladi va qayta sotish qiymatini maksimal darajada oshiradi. O'z-o'zini davolash, dog'larga chidamlilik va yuqori optik tiniqlik xususiyatlariga ega.",
    image: protectionFilm,
  },
  {
    id: "automotive",
    title: "Avtomobil Plyonkasi",
    description: "Avtomobilingizga himoya va uslub qo'shadi! Quyoshdan himoya, maxfiylik va chiroyli ko'rinish ta'minlaydi. Avtomobilingizni yangiday saqlang va unga zamonaviy ko'rinish bering.",
    image: automotiveFilm,
  },
  {
    id: "technology",
    title: "Texnologiya",
    description: "Yangi himoya plyonka texnologiyasi bilan avtomobilingizni tirnalishlar, chang va UV nurlaridan himoya qiling. Avtomobilingiz har doim yangi ko'rinsin!",
    image: technology,
  },
];

const ServicesSection = () => {
  return (
    <section id="protection" className="py-24 lg:py-32 bg-thompson-darker relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-1/2 -translate-y-1/2 left-0 w-[500px] h-[500px] bg-primary/3 rounded-full blur-[200px]" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary text-sm font-semibold uppercase tracking-widest">Xizmatlar</span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mt-4 mb-6 text-gradient">
            Bizning xizmatlarimiz
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
                    <img
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
                    <span>Batafsil</span>
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
