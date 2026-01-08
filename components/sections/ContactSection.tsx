"use client"
import {Phone, Mail, MapPin, Clock, Send, Loader2} from "lucide-react";
import {Button} from "@/components/ui/button";
import {Input} from "@/components/ui/input";
import {Textarea} from "@/components/ui/textarea";
import {useState} from "react";
import {toast} from "sonner";
import type {ContactDictionary} from "@/lib/dictionary-types";

interface ContactSectionProps {
    dict: ContactDictionary;
}

const ContactSection = ({dict}: ContactSectionProps) => {
    const [formData, setFormData] = useState({
        name: "",
        phone: "",
        message: "",
    });
    const [isSubmitting, setIsSubmitting] = useState(false);

    const contactInfo = [
        {
            icon: Phone,
            title: dict.info.phone.label,
            value: dict.info.phone.value,
            href: `tel:${dict.info.phone.value.replace(/\s/g, '')}`,
        },
        {
            icon: Mail,
            title: dict.info.email.label,
            value: dict.info.email.value,
            href: `mailto:${dict.info.email.value}`,
        },
        {
            icon: MapPin,
            title: dict.info.address.label,
            value: dict.info.address.value,
            href: "#",
        },
        {
            icon: Clock,
            title: dict.info.workTime.label,
            value: dict.info.workTime.value,
            href: "#",
        },
    ];

    // ✅ Validatsiya funksiyalari
    const validateName = (name: string): boolean => {
        const trimmedName = name.trim().replace(/\s+/g, '');
        if (/\d/.test(name)) return false;
        return trimmedName.length >= 3;
    };

    const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        const regex = /^[a-zA-Zа-яА-ЯёЁўғҳқўҚҒҲЎ\s'-]*$/;
        if (regex.test(value) || value === '') {
            setFormData({...formData, name: value});
        }
    };

    const validatePhone = (phone: string): boolean => {
        const cleanPhone = phone.replace(/\s+/g, '');
        const phoneRegex = /^\+?\d+$/;
        if (!phoneRegex.test(cleanPhone)) return false;
        const digitsOnly = cleanPhone.replace(/\+/g, '');
        return digitsOnly.length >= 8;
    };

    const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        const regex = /^[\+]?[\d\s]*$/;
        if (regex.test(value) || value === '') {
            setFormData({...formData, phone: value});
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        // ✅ Client-side validatsiya
        if (!validateName(formData.name)) {
            if (/\d/.test(formData.name)) {
                toast.error(dict.form.errors.nameNoNumbers);
            } else {
                toast.error(dict.form.errors.nameMin);
            }
            return;
        }

        if (!validatePhone(formData.phone)) {
            toast.error(dict.form.errors.phoneInvalid);
            return;
        }

        setIsSubmitting(true);

        try {
            // ✅ API URL ni to'g'ri aniqlash
            const apiUrl = process.env.NEXT_PUBLIC_API_URL || '';
            const url = apiUrl ? `${apiUrl}/api/telegram` : '/api/telegram';

            console.log('Sending to:', url); // Debug uchun

            const response = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    name: formData.name.trim(),
                    phone: formData.phone.replace(/\s+/g, ''),
                    message: formData.message.trim(),
                }),
            });

            const data = await response.json();
            console.log('Response:', data); // Debug uchun

            if (response.ok && data.success) {
                toast.success(dict.form.success);
                setFormData({name: "", phone: "", message: ""});
            } else {
                console.error('API Error:', data);
                toast.error(dict.form.errors.sendFailed);
            }

        } catch (error) {
            console.error('Fetch Error:', error);
            toast.error(dict.form.errors.sendFailed);
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section id="contact" className="py-24 lg:py-32 relative overflow-hidden">
            {/* Background decorations */}
            <div className="absolute top-1/2 -translate-y-1/2 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[200px]"/>

            <div className="container mx-auto px-4 lg:px-8 relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <span className="text-primary text-sm font-semibold uppercase tracking-widest">
                        {dict.title}
                    </span>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold py-5 text-gradient">
                        {dict.title}
                    </h2>
                    <p className="text-lg text-muted-foreground">
                        {dict.description}
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
                    {/* Contact Info */}
                    <div className="space-y-6">
                        <div className="grid sm:grid-cols-2 gap-6">
                            {contactInfo.map((item, index) => (
                                <a
                                    key={index}
                                    href={item.href}
                                    className="group p-6 rounded-2xl bg-gradient-card border border-border/50 hover:border-primary/30 transition-all duration-300"
                                >
                                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                                        <item.icon className="w-6 h-6 text-primary"/>
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
                            {dict.form.title}
                        </h3>

                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <Input
                                    placeholder={dict.form.name.placeholder}
                                    value={formData.name}
                                    onChange={handleNameChange}
                                    required
                                    disabled={isSubmitting}
                                    className="h-12 bg-secondary/50 border-border/50 focus:border-primary"
                                />
                            </div>
                            <div>
                                <Input
                                    type="tel"
                                    placeholder={dict.form.phone.placeholder}
                                    value={formData.phone}
                                    onChange={handlePhoneChange}
                                    required
                                    disabled={isSubmitting}
                                    className="h-12 bg-secondary/50 border-border/50 focus:border-primary"
                                />
                            </div>
                            <div>
                                <Textarea
                                    placeholder={dict.form.message.placeholder}
                                    value={formData.message}
                                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                                    rows={4}
                                    disabled={isSubmitting}
                                    className="bg-secondary/50 border-border/50 focus:border-primary resize-none"
                                />
                            </div>
                            <Button
                                type="submit"
                                variant="hero"
                                size="lg"
                                className="w-full group"
                                disabled={isSubmitting}
                            >
                                {isSubmitting ? (
                                    <>
                                        <Loader2 className="w-4 h-4 animate-spin"/>
                                        <span>Yuborilmoqda...</span>
                                    </>
                                ) : (
                                    <>
                                        <span>{dict.form.submit}</span>
                                        <Send className="w-4 h-4 transition-transform group-hover:translate-x-1"/>
                                    </>
                                )}
                            </Button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactSection;