// app/[lang]/page.tsx
import {getDictionary} from "@/lib/dictionary";
import {Locale} from "@/i18n-config";
import Header from "@/components/layout/Header";
import HeroSection from "@/components/sections/HeroSection";
import FeaturesSection from "@/components/sections/FeaturesSection";
import ServicesSection from "@/components/sections/ServicesSection";
import ContactSection from "@/components/sections/ContactSection";
import Footer from "@/components/layout/Footer";

interface HomeProps {
    params: Promise<{ lang: string }>;
}

export default async function Home({params}: HomeProps) {
    const {lang} = await params;
    const dict = await getDictionary(lang as Locale, 'home');

    return (
        <>
            <Header/>
            <main>
                <HeroSection/>
                <FeaturesSection/>
                <ServicesSection/>
                <ContactSection/>
            </main>
            <Footer/>
        </>
    );
}