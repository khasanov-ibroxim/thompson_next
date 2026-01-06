import React from 'react';
import Footer from "@/components/layout/Footer";
import ContactSection from "@/components/sections/ContactSection";
import Header from '@/components/layout/Header';

const Contact = () => {
    return (
        <>
            <Header />
            <div className="py-10">
                <ContactSection/>
            </div>

            <Footer/>
        </>
    );
};

export default Contact;