"use client"
import { ArrowRight, Shield, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

interface HeroSectionProps {
  dict:{
    hero:{
      badge:string,
      title:string,
      subtitle:string,
      description:string,
      cta: {
        primary: string,
        secondary: string
      },
      stats: {
        customers: string,
        experience: string,
        warranty: string
      }
    }
  }
}

const HeroSection = ({dict}:HeroSectionProps) => {
  // ✅ Fixed scroll function
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
      <section id="home" className="relative min-h-screen flex items-center overflow-hidden pt-20 lg:pt-40 pb-10">
        {/* Background image with overlay */}
        <div className="absolute inset-0">
          <img
              src="/images/hero-car.jpg"
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
            <div className="flex items-center gap-2 mb-0">
              <div className="flex items-center gap-2 px-4 py-2 bg-secondary/50 rounded-full border border-border/50 backdrop-blur-sm">
                <Sparkles className="w-4 h-4 text-primary" />
                <span className="text-sm text-muted-foreground">{dict.hero.badge}</span>
              </div>
            </div>

            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-tight mb-6">
              <span className="text-gradient">{dict.hero.title}</span>
              <br />
              <span className="text-gradient-red">{dict.hero.subtitle}</span>
            </h1>

            <p className="text-xl md:text-2xl text-muted-foreground max-w-xl mb-10 leading-relaxed">
              {dict.hero.description}
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                  onClick={() => scrollToSection('feature')}
                  variant="hero"
                  size="xl"
                  className="group"
              >
                <span>{dict.hero.cta.primary}</span>
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button
                  onClick={() => scrollToSection('Services')}
                  variant="heroOutline"
                  size="xl"
              >
                <Shield className="w-5 h-5" />
                <span>{dict.hero.cta.secondary}</span>
              </Button>
            </div>

            {/* Stats */}
            <div className="mt-16 grid grid-cols-3 gap-8 max-w-lg">
              {[
                { value: "10000+", label: dict.hero.stats.customers },
                { value: "10+", label: dict.hero.stats.experience },
                { value: "100%", label: dict.hero.stats.warranty },
              ].map((stat, index) => (
                  <div key={index} className="text-center sm:text-left">
                    <div className="text-3xl md:text-4xl font-bold text-foreground">{stat.value}</div>
                    <div className="text-sm text-muted-foreground mt-1">{stat.label}</div>
                  </div>
              ))}
            </div>
          </div>
        </div>
      </section>
  );
};

export default HeroSection;