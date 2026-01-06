
import { Phone, Mail, MapPin } from "lucide-react";
import logo from "@/assets/rsz_2logo.png"
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="py-12 border-t border-border/50 bg-thompson-darker">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <a href="#home" className="flex items-center gap-3 mb-4">
              <Image  src={logo} alt={"thompson window film"}  width={300} height={300} />
            </a>
            <p className="text-muted-foreground max-w-md leading-relaxed">
              Premium avtomobil himoya plyonkalari. Avtomobilingizni professional darajada himoya qiling.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-foreground font-semibold mb-4">Sahifalar</h4>
            <ul className="space-y-3">
              {["Bosh sahifa", "Himoya plyonkasi", "Avtomobil plyonkasi", "Texnologiya", "Bog'lanish"].map((link) => (
                <li key={link}>
                  <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-foreground font-semibold mb-4">Aloqa</h4>
            <ul className="space-y-3">
              <li>
                <a href="tel:+998901234567" className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors">
                  <Phone className="w-4 h-4" />
                  <span>+998 90 123 45 67</span>
                </a>
              </li>
              <li>
                <a href="mailto:info@thompson.uz" className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors">
                  <Mail className="w-4 h-4" />
                  <span>info@thompson.uz</span>
                </a>
              </li>
              <li>
                <div className="flex items-start gap-2 text-muted-foreground">
                  <MapPin className="w-4 h-4 mt-1 flex-shrink-0" />
                  <span>Toshkent shahar, Chilonzor tumani</span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-border/50 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} Thompson. Barcha huquqlar himoyalangan.
          </p>
          <div className="flex items-center gap-6 text-sm text-muted-foreground">
            <a href="#" className="hover:text-foreground transition-colors">Maxfiylik siyosati</a>
            <a href="#" className="hover:text-foreground transition-colors">Foydalanish shartlari</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
