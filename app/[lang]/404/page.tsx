// app/[lang]/404/page.tsx
import { Metadata } from "next";
import { i18n, Locale } from "@/i18n-config";
import { getDictionary } from "@/lib/dictionary";
import Link from "next/link";

export async function generateStaticParams() {
    return i18n.locales.map((locale) => ({ lang: locale }));
}

export async function generateMetadata({
                                           params,
                                       }: {
    params: Promise<{ lang: Locale }>;
}): Promise<Metadata> {
    const { lang } = await params;

    return {
        title: lang === 'ru' ? 'Страница не найдена | Thompson' :
            lang === 'en' ? 'Page Not Found | Thompson' :
                'Sahifa topilmadi | Thompson',
    };
}

export default async function NotFoundPage({
                                               params
                                           }: {
    params: Promise<{ lang: Locale }>
}) {
    const { lang } = await params;

    const texts = {
        ru: {
            title: "404",
            subtitle: "Страница не найдена",
            description: "К сожалению, запрашиваемая страница не существует или была перемещена.",
            home: "На главную",
            contact: "Связаться с нами"
        },
        en: {
            title: "404",
            subtitle: "Page Not Found",
            description: "Sorry, the page you are looking for does not exist or has been moved.",
            home: "Go Home",
            contact: "Contact Us"
        },
        uz: {
            title: "404",
            subtitle: "Sahifa topilmadi",
            description: "Kechirasiz, siz qidirayotgan sahifa mavjud emas yoki ko'chirilgan.",
            home: "Bosh sahifa",
            contact: "Bog'lanish"
        }
    };

    const t = texts[lang] || texts.ru;

    return (
        <div className="min-h-screen bg-background flex items-center justify-center px-4">
            <div className="text-center max-w-2xl">
                {/* 404 Number */}
                <h1 className="text-9xl md:text-[200px] font-bold text-primary/20 mb-4">
                    {t.title}
                </h1>

                {/* Title */}
                <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                    {t.subtitle}
                </h2>

                {/* Description */}
                <p className="text-lg text-muted-foreground mb-12 max-w-md mx-auto">
                    {t.description}
                </p>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <a
                        href={`/${lang}/`}
                        className="px-8 py-3 bg-primary text-white rounded-xl hover:bg-primary/90 transition font-semibold"
                    >
                        {t.home}
                    </a>
                    <a
                        href={`/${lang}/contact/`}
                        className="px-8 py-3 bg-card border border-border rounded-xl hover:bg-accent transition font-semibold"
                    >
                        {t.contact}
                    </a>
                </div>

                {/* Decorative elements */}
                <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl -z-10" />
                <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-primary/5 rounded-full blur-3xl -z-10" />
            </div>
        </div>
    );
}