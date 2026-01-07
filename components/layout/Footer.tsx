import {Phone, Mail, MapPin} from "lucide-react";
import logo from "@/assets/rsz_2logo.png"
import Image from "next/image";
import Link from "next/link";

interface Props {
    dict: {
        footer: {
            description: string;
            pages: string;
            contact: string;
            address: string;
        },
        header: {
            nav:{
                home:string;
                protection:string;
                automotive:string;
                technology:string;
                contact:string
            },
        }

    }
    lang: string;
}

const Footer = ({dict , lang}: Props) => {

    const navLinks = [
        { name: dict.header.nav.home , href: `/${lang}`, isRoute: true },
        { name: dict.header.nav.protection, href: `/${lang}/protection`, isRoute: true },
        { name: dict.header.nav.automotive, href: `/${lang}/automotive`, isRoute: true },
        { name: dict.header.nav.technology, href: `/${lang}/technology`, isRoute: false },
        { name: dict.header.nav.contact, href: `/${lang}/contact`, isRoute: false },
    ];
    return (
        <footer className="py-12 border-t border-border/50 bg-thompson-darker">
            <div className="container mx-auto px-4 lg:px-8">
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
                    {/* Brand */}
                    <div className="lg:col-span-2">
                        <a href="#home" className="flex items-center gap-3 mb-4">
                            <Image src={logo} alt={"thompson window film"} width={300} height={300}/>
                        </a>
                        <p className="text-muted-foreground max-w-md leading-relaxed">
                            {dict.footer.description}
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-foreground font-semibold mb-4">{dict.footer.pages}</h4>
                        <ul className="space-y-3">
                            {navLinks.map((link,index) => (
                                <li key={index}>
                                    <Link href={link.href}
                                       className="text-muted-foreground hover:text-foreground transition-colors">
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="text-foreground font-semibold mb-4">{dict.footer.contact}</h4>
                        <ul className="space-y-3">
                            <li>
                                <a href="tel:+998901234567"
                                   className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors">
                                    <Phone className="w-4 h-4"/>
                                    <span>+998 90 123 45 67</span>
                                </a>
                            </li>
                            <li>
                                <a href="mailto:info@thompson.uz"
                                   className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors">
                                    <Mail className="w-4 h-4"/>
                                    <span>info@thompson.uz</span>
                                </a>
                            </li>
                            <li>
                                <div className="flex items-start gap-2 text-muted-foreground">
                                    <MapPin className="w-4 h-4 mt-1 flex-shrink-0"/>
                                    <span>{dict.footer.address}</span>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>

            </div>
        </footer>
    );
};

export default Footer;
