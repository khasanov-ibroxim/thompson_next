// app/[lang]/layout.tsx
import {i18n, Locale} from "@/i18n-config";
import {getCommonDictionary} from "@/lib/dictionary";
import {notFound} from "next/navigation";

export async function generateStaticParams() {
    return i18n.locales.map((locale) => ({lang: locale}));
}

interface LangLayoutProps {
    children: React.ReactNode;
    params: Promise<{ lang: string }>;
}

export default async function LangLayout({
                                             children,
                                             params
                                         }: LangLayoutProps) {
    const {lang} = await params;

    // Type guard
    if (!i18n.locales.includes(lang as Locale)) {
        notFound();
    }

    const dict = await getCommonDictionary(lang as Locale);

    return (
        <>
            {children}
        </>
    );
}