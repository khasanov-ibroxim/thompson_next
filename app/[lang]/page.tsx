// app/[lang]/page.tsx
import {getDictionary} from "@/lib/dictionary";
import HeroSection from "@/components/sections/HeroSection";
import FeaturesSection from "@/components/sections/FeaturesSection";
import ServicesSection from "@/components/sections/ServicesSection";
import ContactSection from "@/components/sections/ContactSection";
import { notFound } from "next/navigation";
import {i18n , Locale} from "@/i18n-config";

export async function generateStaticParams() {
    return i18n.locales.map((locale) => ({ lang: locale }));
}

export default async function Home({
                                       params
                                   }: {
    children: React.ReactNode,
    params: Promise<{ lang: Locale }>
}) {

    const { lang } = await params;

    if (!i18n.locales.includes(lang)) {
        notFound();
    }
    const dict = await getDictionary(lang , "home" );
    const dictContact = await getDictionary(lang, "contact");

    return (
        <>
            <main>
                <HeroSection dict={dict}/>
                <FeaturesSection dict={dict}/>
                <ServicesSection dict={dict} lang={lang}/>
                {/* Pass the contact part of home dictionary */}
                <ContactSection dict={dictContact}/>
            </main>
        </>
    );
}