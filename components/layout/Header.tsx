"use client"
import { useState } from "react";
import { Menu, X, Clock, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { usePathname } from 'next/navigation';
import logo from "@/assets/rsz_2logo.png"
import Link from "next/link";
import Image from "next/image";

const navLinks = [
  { name: "Bosh sahifa", href: "/ru", isRoute: true },
  { name: "Protection Film", href: "/ru/protection", isRoute: true },
  { name: "Automotive Film", href: "/ru/automotive", isRoute: true },
  { name: "Texnologiya", href: "/#technology", isRoute: false },
  { name: "Bog'lanish", href: "/#contact", isRoute: false },
];

const languages = [
  { code: 'ru', name: 'Русский', flag: '🇷🇺' },
  { code: 'uz', name: "O'zbek", flag: '🇺🇿' },
  { code: 'en', name: 'English', flag: '🇬🇧' },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLangMenuOpen, setIsLangMenuOpen] = useState(false);
  const pathname = usePathname();

  // Get current language from pathname
  const currentLang = pathname.split('/')[1] || 'ru';
  const currentLanguage = languages.find(lang => lang.code === currentLang) || languages[0];

  // Function to change language in URL
  const getLocalizedPath = (langCode: string) => {
    const pathParts = pathname.split('/');
    pathParts[1] = langCode;
    return pathParts.join('/') || `/${langCode}`;
  };

  return (
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border/50">
        <div className="container mx-auto px-4 lg:px-8">
          {/* Top bar */}
          <div className="hidden lg:flex items-center justify-end py-2 text-sm text-muted-foreground border-b border-border/30">
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              <span>Ish vaqti: 10:00 - 20:00</span>
            </div>
          </div>

          {/* Main nav */}
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <Link href={`/${currentLang}`} className="flex items-center gap-3 group">
              <Image src={logo} alt={"thompson window film"} width={250} height={150} />
            </Link>

            {/* Desktop nav */}
            <nav className="hidden xl:flex items-center gap-8">
              {navLinks.map((link) => {
                const localizedHref = link.isRoute ? link.href.replace('/ru', `/${currentLang}`) : link.href;
                return link.isRoute ? (
                    <Link
                        key={link.name}
                        href={localizedHref}
                        className={`transition-colors duration-300 relative group ${
                            pathname === localizedHref
                                ? "text-primary"
                                : "text-muted-foreground hover:text-foreground"
                        }`}
                    >
                      {link.name}
                      <span className={`absolute bottom-0 left-0 h-0.5 bg-primary transition-all duration-300 ${
                          pathname === localizedHref ? "w-full" : "w-0 group-hover:w-full"
                      }`} />
                    </Link>
                ) : (
                    <a
                        key={link.name}
                        href={link.href}
                        className="text-muted-foreground hover:text-foreground transition-colors duration-300 relative group"
                    >
                      {link.name}
                      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
                    </a>
                );
              })}
            </nav>

            {/* Right side - Language + CTA */}
            <div className="hidden xl:flex items-center gap-4">
              {/* Language Switcher */}
              <div className="relative">
                <button
                    onClick={() => setIsLangMenuOpen(!isLangMenuOpen)}
                    className="flex items-center gap-2 px-3 py-2 rounded-lg border border-border/50 hover:border-primary/50 transition-colors"
                >
                  <Globe className="w-4 h-4" />
                  <span className="text-sm font-medium"> {currentLanguage.code.toUpperCase()}</span>
                </button>

                {/* Language Dropdown */}
                {isLangMenuOpen && (
                    <>
                      {/* Backdrop */}
                      <div
                          className="fixed inset-0 z-40"
                          onClick={() => setIsLangMenuOpen(false)}
                      />

                      {/* Dropdown Menu */}
                      <div className="absolute right-0 mt-2 w-48 bg-card border border-border/50 rounded-lg shadow-lg overflow-hidden z-50 animate-fade-in">
                        {languages.map((lang) => (
                            <Link
                                key={lang.code}
                                href={getLocalizedPath(lang.code)}
                                onClick={() => setIsLangMenuOpen(false)}
                                className={`flex items-center gap-3 px-4 py-3 hover:bg-accent transition-colors ${
                                    currentLang === lang.code ? 'bg-accent text-white' : ''
                                }`}
                            >
                              <span className="text-sm font-medium">{lang.name}</span>
                            </Link>
                        ))}
                      </div>
                    </>
                )}
              </div>

              {/* CTA Button */}
              <Button variant="hero" size="lg">
                Bepul konsultatsiya
              </Button>
            </div>

            {/* Mobile menu button */}
            <button
                className="xl:hidden p-2 text-foreground"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
            <div className="xl:hidden bg-card border-t border-border overflow-hidden animate-fade-in">
              <div className="container mx-auto px-4 py-6 space-y-4">
                {navLinks.map((link) => {
                  const localizedHref = link.isRoute ? link.href.replace('/ru', `/${currentLang}`) : link.href;
                  return link.isRoute ? (
                      <Link
                          key={link.name}
                          href={localizedHref}
                          onClick={() => setIsMenuOpen(false)}
                          className={`block text-lg transition-colors py-2 ${
                              pathname === localizedHref
                                  ? "text-primary"
                                  : "text-muted-foreground hover:text-foreground"
                          }`}
                      >
                        {link.name}
                      </Link>
                  ) : (
                      <a
                          key={link.name}
                          href={link.href}
                          onClick={() => setIsMenuOpen(false)}
                          className="block text-lg text-muted-foreground hover:text-foreground transition-colors py-2"
                      >
                        {link.name}
                      </a>
                  );
                })}

                {/* Mobile Language Switcher */}
                <div className="pt-4 border-t border-border/50">
                  <div className="text-sm text-muted-foreground mb-3">Til / Language</div>
                  <div className="grid grid-cols-3 gap-2">
                    {languages.map((lang) => (
                        <Link
                            key={lang.code}
                            href={getLocalizedPath(lang.code)}
                            onClick={() => setIsMenuOpen(false)}
                            className={`flex flex-col items-center gap-2 p-3 rounded-lg border transition-colors ${
                                currentLang === lang.code
                                    ? 'border-primary bg-primary/10 text-primary'
                                    : 'border-border/50 hover:border-primary/50'
                            }`}
                        >
                          <span className="text-2xl">{lang.flag}</span>
                          <span className="text-xs font-medium">{lang.code.toUpperCase()}</span>
                        </Link>
                    ))}
                  </div>
                </div>

                <Button variant="hero" className="w-full mt-4">
                  Bepul konsultatsiya
                </Button>
              </div>
            </div>
        )}
      </header>
  );
};

export default Header;