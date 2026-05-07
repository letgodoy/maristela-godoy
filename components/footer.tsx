import Link from "next/link";
import { Instagram, Heart } from "lucide-react";
import Image from "next/image";
import { publicUrl } from "@/lib/public-url";

const navLinks = [
  { href: "#inicio", label: "Início" },
  { href: "#sobre", label: "Sobre mim" },
  { href: "#abordagem", label: "Abordagem" },
  { href: "#servicos", label: "Serviços" },
  { href: "#contato", label: "Contato" },
];

export function Footer() {
  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid md:grid-cols-3 gap-6 items-center">
          {/* Logo */}
          <div>
            <Link
              href="#inicio"
              className="font-serif text-2xl font-bold flex items-center gap-2"
            >
              <Image
                src={publicUrl('/images/logo.png')}
                alt="Maristela Godoy - Psicóloga"
                width={30}
                height={30}
              />
              Maristela Godoy
            </Link>
            <p className="text-background/60 text-sm mt-2">
              Psicóloga Clínica | CRP RS
            </p>
          </div>

          {/* Navigation */}
          <nav className="flex flex-wrap justify-center gap-6">
            {navLinks.map(link => (
              <Link
                key={link.href}
                href={link.href}
                className="text-background/70 hover:text-background transition-colors text-sm"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Social Links */}
          <div className="flex justify-center md:justify-end gap-4">
            <Link
              href="https://www.instagram.com/amaristelagodoy"
              target="_blank"
              className="text-background/60 hover:text-background transition-colors p-2"
              aria-label="Instagram"
            >
              <Instagram className="h-5 w-5" />
            </Link>
            {/* <Link
              href="https://youtube.com"
              target="_blank"
              className="text-background/60 hover:text-background transition-colors p-2"
              aria-label="YouTube"
            >
              <Youtube className="h-5 w-5" />
            </Link>
            <Link
              href="https://facebook.com"
              target="_blank"
              className="text-background/60 hover:text-background transition-colors p-2"
              aria-label="Facebook"
            >
              <Facebook className="h-5 w-5" />
            </Link> */}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-background/10 mt-8 pt-8 text-center">
          <p className="text-background/50 text-sm flex items-center justify-center gap-1">
            © {new Date().getFullYear()} Maristela Godoy. Feito com{' '}
            <Heart className="h-3 w-3 fill-current text-primary" /> por{' '}
            <Link
              href="https://letgodoy.com"
              target="_blank"
              className="hover:text-background transition-colors underline underline-offset-2"
            >
              letgodoy.com
            </Link>
          </p>
        </div>
      </div>
    </footer>
  )
}
