"use client"
import { motion } from "framer-motion";
import { Shield, Palette, Sun, Car, PiggyBank, Lock } from "lucide-react";

const features = [
  {
    icon: Shield,
    title: "Himoya",
    description: "Himoya plyonkalari avtomobilingizni tashqi ta'sirlardan, chang, ifloslanish, zararli moddalar, tosh va boshqa narsalardan himoya qiladi.",
  },
  {
    icon: Palette,
    title: "Estetik ko'rinish",
    description: "Avtomobil plyonkalari mashinangiz ko'rinishini yaxshilashga, unga yangi, zamonaviy va chiroyli ko'rinish berishga yordam beradi.",
  },
  {
    icon: Sun,
    title: "UV himoya",
    description: "Plyonkalar avtomobil bo'yog'ini ultrabinafsha (UV) nurlaridan himoya qiladi, bo'yoq rangining so'nishini oldini oladi.",
  },
  {
    icon: Car,
    title: "Salon himoyasi",
    description: "Oynalarga qo'llanganda, avtomobil plyonkalari salonni issiq havodan va UV nurlaridan himoya qiladi, salonda qulay haroratni saqlaydi.",
  },
  {
    icon: PiggyBank,
    title: "Tejamkorlik",
    description: "Avtomobil va himoya plyonkalari avtomobil egalariga ta'mirlash va bo'yash xarajatlarini kamaytirishga yordam beradi.",
  },
  {
    icon: Lock,
    title: "Maxfiylik",
    description: "Tonirovka qilingan oynalar uchun ishlatiladigan plyonkalar avtomobil ichkarisining tashqaridan ko'rinishini kamaytiradi.",
  },
];

const FeaturesSection = () => {
  return (
    <section className="py-24 lg:py-32 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-[150px]" />
      <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-primary/5 rounded-full blur-[120px]" />

      <div

          className="container mx-auto px-4 lg:px-8 relative z-10">
        <motion.div
            viewport={{ once: true, amount: 0.5 }}
            initial={{ y: "100%", opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary text-sm font-semibold uppercase tracking-widest">Afzalliklar</span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mt-4 mb-6 text-gradient">
            Nima uchun Thompson?
          </h2>
          <p className="text-lg text-muted-foreground">
            Avtomobilingizni professional himoya plyonkalari bilan himoya qiling
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group h-full p-8 rounded-2xl bg-gradient-card border border-border/50 hover:border-primary/30 transition-all duration-500 hover:shadow-[0_0_60px_hsl(0_72%_51%/0.15)]"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <feature.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-4">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
