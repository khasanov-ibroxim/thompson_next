import React from 'react';
import ContactSection from "@/components/sections/ContactSection";
import {i18n, Locale} from "@/i18n-config";
import {notFound} from "next/navigation";
import {getDictionary} from "@/lib/dictionary";

const Contact = async ({
                           params
                       }: {
    children: React.ReactNode,
    params: Promise<{ lang: Locale }>
}) => {
    const { lang } = await params;

    if (!i18n.locales.includes(lang)) {
        notFound();
    }

    // ✅ FIX: Load 'contact' dictionary instead of 'home'
    const dict = await getDictionary(lang, "contact");

    return (
        <>
            <div className="py-10">
                <ContactSection dict={dict}/>
            </div>
        </>
    );
};

export default Contact;