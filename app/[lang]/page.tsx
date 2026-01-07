// app/[lang]/page.tsx
import {getCommonDictionary, getDictionary} from "@/lib/dictionary";
import Header from "@/components/layout/Header";
import HeroSection from "@/components/sections/HeroSection";
import FeaturesSection from "@/components/sections/FeaturesSection";
import ServicesSection from "@/components/sections/ServicesSection";
import ContactSection from "@/components/sections/ContactSection";
import Footer from "@/components/layout/Footer";
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

    return (
        <>

            <main>
                <HeroSection dict={dict}/>
                <FeaturesSection dict={dict}/>
                <ServicesSection dict={dict}/>
                <ContactSection dict={dict}/>
            </main>
        </>
    );
}