"use client"
import { Phone, Mail, MapPin, Clock, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { toast } from "sonner";

interface ContactSectionProps {
  dict:{
    "contact": {
      "badge": "Bog'lanish",
      "title": "Biz bilan bog'laning",
      "description": "Savollaringiz bormi? Biz sizga yordam berishga tayyormiz",
      "address_value": string,
      "info": {
        "phone": "Telefon",
        "email": "Email",
        "address": "Manzil",
        "workTime": "Ish vaqti"
      },
      "form": {
        "title": "Bepul konsultatsiya",
        "name": "Ismingiz",
        "phone": "Telefon raqamingiz",
        "message": "Xabaringiz",
        "submit": "Yuborish",
        "success": "So'rovingiz qabul qilindi! Tez orada siz bilan bog'lanamiz."
      }
    }
  };
}

const ContactSection = ({dict}:ContactSectionProps) => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    message: "",
  });
  const contactInfo = [
    {
      icon: Phone,
      title: dict.contact.info.phone,
      value: "+998 90 123 45 67",
      href: "tel:+998901234567",
    },
    {
      icon: Mail,
      title: dict.contact.info.email,
      value: "info@thompson.uz",
      href: "mailto:info@thompson.uz",
    },
    {
      icon: MapPin,
      title: dict.contact.info.address,
      value: dict.contact.address_value,
      href: "#",
    },
    {
      icon: Clock,
      title: dict.contact.info.workTime,
      value: "10:00 - 20:00",
      href: "#",
    },
  ];
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success(dict.contact.form.success);
    setFormData({ name: "", phone: "", message: "" });
  };

  return (
      <section id="contact" className="py-24 lg:py-32 relative overflow-hidden">
        {/* Background decorations */}
        <div className="absolute top-1/2 -translate-y-1/2 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[200px]" />

        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-primary text-sm font-semibold uppercase tracking-widest">{dict.contact.badge}</span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold py-5 text-gradient">
              {dict.contact.title}
            </h2>
            <p className="text-lg text-muted-foreground">
              {dict.contact.description}
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Contact Info */}
            <div className="space-y-6">
              {/*<h3 className="text-2xl font-semibold text-foreground mb-8">*/}
              {/*  Aloqa ma'lumotlari*/}
              {/*</h3>*/}

              <div className="grid sm:grid-cols-2 gap-6">
                {contactInfo.map((item, index) => (
                    <a
                        key={index}
                        href={item.href}
                        className="group p-6 rounded-2xl bg-gradient-card border border-border/50 hover:border-primary/30 transition-all duration-300"
                    >
                      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                        <item.icon className="w-6 h-6 text-primary" />
                      </div>
                      <div className="text-sm text-muted-foreground mb-1">{item.title}</div>
                      <div className="text-foreground font-medium">{item.value}</div>
                    </a>
                ))}
              </div>
            </div>

            {/* Contact Form */}
            <div className="p-8 lg:p-10 rounded-2xl bg-gradient-card border border-border/50">
              <h3 className="text-2xl font-semibold text-foreground mb-8">
                {dict.contact.form.title}
              </h3>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Input
                      placeholder={dict.contact.form.name}
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                      className="h-12 bg-secondary/50 border-border/50 focus:border-primary"
                  />
                </div>
                <div>
                  <Input
                      type="tel"
                      placeholder={dict.contact.form.phone}
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      required
                      className="h-12 bg-secondary/50 border-border/50 focus:border-primary"
                  />
                </div>
                <div>
                  <Textarea
                      placeholder={dict.contact.form.message}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      rows={4}
                      className="bg-secondary/50 border-border/50 focus:border-primary resize-none"
                  />
                </div>
                <Button type="submit" variant="hero" size="lg" className="w-full group">
                  <span>{dict.contact.form.submit}</span>
                  <Send className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>
  );
};

export default ContactSection;