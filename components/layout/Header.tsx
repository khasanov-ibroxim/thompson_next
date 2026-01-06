"use client"
import { useState } from "react";
import { Menu, X, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { usePathname } from 'next/navigation';
import Link from "next/link";

const navLinks = [
  { name: "Bosh sahifa", href: "/ru", isRoute: true },
  { name: "Protection Film", href: "/ru/protection", isRoute: true },
  { name: "Automotive Film", href: "/ru/automotive", isRoute: true },
  { name: "Texnologiya", href: "/#technology", isRoute: false },
  { name: "Bog'lanish", href: "/#contact", isRoute: false },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

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
            <Link href="/ru" className="flex items-center gap-3 group">
              <div className="relative">
                <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center transform transition-transform group-hover:scale-110">
                  <span className="text-primary-foreground font-bold text-xl">T</span>
                </div>
                <div className="absolute inset-0 bg-primary/50 rounded-lg blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              <span className="text-2xl font-bold text-foreground">Thompson</span>
            </Link>

            {/* Desktop nav */}
            <nav className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                  link.isRoute ? (
                      <Link
                          key={link.name}
                          href={link.href}
                          className={`transition-colors duration-300 relative group ${
                              pathname === link.href
                                  ? "text-primary"
                                  : "text-muted-foreground hover:text-foreground"
                          }`}
                      >
                        {link.name}
                        <span className={`absolute bottom-0 left-0 h-0.5 bg-primary transition-all duration-300 ${
                            pathname === link.href ? "w-full" : "w-0 group-hover:w-full"
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
                  )
              ))}
            </nav>

            {/* CTA Button */}
            <div className="hidden lg:block">
              <Button variant="hero" size="lg">
                Bepul konsultatsiya
              </Button>
            </div>

            {/* Mobile menu button */}
            <button
                className="lg:hidden p-2 text-foreground"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
            <div className="lg:hidden bg-card border-t border-border overflow-hidden animate-fade-in">
              <div className="container mx-auto px-4 py-6 space-y-4">
                {navLinks.map((link) => (
                    link.isRoute ? (
                        <Link
                            key={link.name}
                            href={link.href}
                            onClick={() => setIsMenuOpen(false)}
                            className={`block text-lg transition-colors py-2 ${
                                pathname === link.href
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
                    )
                ))}
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