// app/[lang]/contact/page.tsx
import React from 'react';
import ContactSection from "@/components/sections/ContactSection";
import {i18n, Locale} from "@/i18n-config";
import {notFound} from "next/navigation";
import {getDictionary} from "@/lib/dictionary";
import {Metadata} from "next";

// ✅ Metadata generatsiya qiling
export async function generateMetadata({
                                           params,
                                       }: {
    params: Promise<{ lang: Locale }>;
}): Promise<Metadata> {
    const { lang } = await params;

    const langMap = {
        ru: {
            title: "Контакты - Thompson Window Film | Ташкент",
            description: "Свяжитесь с нами для консультации по защитным и автомобильным пленкам. Адрес: Ташкент, ул. Фазылтепа, 35. Телефон: +998 99 800 24 25"
        },
        en: {
            title: "Contact - Thompson Window Film | Tashkent",
            description: "Contact us for consultation on protection and automotive films. Address: 35 Faziltepa Street, Tashkent. Phone: +998 99 800 24 25"
        },
        uz: {
            title: "Bog'lanish - Thompson Window Film | Toshkent",
            description: "Himoya va avtomobil plyonkalari bo'yicha konsultatsiya uchun biz bilan bog'laning. Manzil: Toshkent, Faziltepa ko'chasi, 35-uy. Telefon: +998 99 800 24 25"
        }
    };

    const meta = langMap[lang] || langMap.ru;

    return {
        title: meta.title,
        description: meta.description,
        alternates: {
            canonical: `https://thompsonwindowfilm.com/${lang}/contact`,
            languages: {
                'ru': 'https://thompsonwindowfilm.com/ru/contact',
                'en': 'https://thompsonwindowfilm.com/en/contact',
                'uz': 'https://thompsonwindowfilm.com/uz/contact',
            },
        },
    };
}

const Contact = async ({
                           params
                       }: {
    params: Promise<{ lang: Locale }>
}) => {
    const { lang } = await params;

    if (!i18n.locales.includes(lang)) {
        notFound();
    }

    // ✅ 'contact' dictionary yuklash
    const dict = await getDictionary(lang, "contact");

    return (
        <div className="min-h-screen bg-background">
            <main className="pt-24 lg:pt-32">
                <ContactSection dict={dict}/>
            </main>
        </div>
    );
};

export default Contact;