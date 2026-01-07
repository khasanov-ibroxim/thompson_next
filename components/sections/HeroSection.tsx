"use client"
import { ArrowRight, Shield, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

import heroImage from "@/assets/images/hero-car.jpg";
import Image from "next/image";

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden pt-20 lg:pt-40 pb-10">
      {/* Background image with overlay */}
      <div className="absolute inset-0">
        <Image
          src={heroImage}
          alt="Premium sports car"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-background/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
      </div>

      {/* Decorative elements */}
      <div className="absolute top-1/4 left-10 w-72 h-72 bg-primary/10 rounded-full blur-[120px]" />
      <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-primary/5 rounded-full blur-[150px]" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="max-w-3xl">
          <div className="flex items-center gap-2 mb-0 " >
            <motion.div
                viewport={{ once: true, amount: 0.5 }}
                initial={{ y: "100%", opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
                className="flex items-center gap-2 px-4 py-2 bg-secondary/50 rounded-full border border-border/50 backdrop-blur-sm"
            >
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm text-muted-foreground">Premium himoya yechimlari</span>
            </motion.div>
          </div>


          <motion.h1
              viewport={{ once: true, amount: 0.5 }}
              initial={{ y: "100%", opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
              className="text-5xl md:text-7xl lg:text-8xl font-bold leading-tight mb-6 " >
            <span className="text-gradient">Thompson</span>
            <br />
            <span className="text-gradient-red">Window film</span>
          </motion.h1>

          <motion.p
              viewport={{ once: true}}
              initial={{ x: "-100%", opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, ease: "easeInOut" }}
              className="text-xl md:text-2xl text-muted-foreground max-w-xl mb-10 leading-relaxed " >
            Himoya plyonkalari avtomobilingizni tashqi ta`sirlardan,
            chang, ifloslanish, tosh va boshqa narsalardan himoya qiladi.
          </motion.p>

          <motion.div
              viewport={{ once: true, amount: 0.5 }}
              initial={{ y: "100%", opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
              className="flex flex-col sm:flex-row gap-4" >
            <Button variant="hero" size="xl" className="group">
              <span>Ko`proq bilish</span>
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button variant="heroOutline" size="xl">
              <Shield className="w-5 h-5" />
              <span>Xizmatlarimiz</span>
            </Button>
          </motion.div>

          {/* Stats */}
          <motion.div
              viewport={{ once: true, amount: 0.5 }}
              initial={{ y: "100%", opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
              className="mt-16 grid grid-cols-3 gap-8 max-w-lg" style={{ animationDelay: "0.6s" }}>
            {[
              { value: "500+", label: "Mamnun mijozlar" },
              { value: "10+", label: "Yillik tajriba" },
              { value: "100%", label: "Kafolat" },
            ].map((stat, index) => (
              <div key={index} className="text-center sm:text-left">
                <div className="text-3xl md:text-4xl font-bold text-foreground">{stat.value}</div>
                <div className="text-sm text-muted-foreground mt-1">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

    </section>
  );
};

export default HeroSection;
