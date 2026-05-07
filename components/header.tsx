"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { publicUrl } from "@/lib/public-url";

const navLinks = [
  { href: "#inicio", label: "Início" },
  { href: "#sobre", label: "Sobre mim" },
  { href: "#abordagem", label: "Abordagem" },
  { href: "#servicos", label: "Serviços" },
  { href: "#contato", label: "Contato" },
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled
          ? 'bg-card/95 backdrop-blur-md shadow-sm py-3'
          : 'bg-transparent py-5'
      )}
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="#inicio" className="flex items-center gap-2">
            <Image
              src={publicUrl('/images/logo.png')}
              alt="Maristela Godoy - Psicóloga"
              width={50}
              height={50}
            />
            <span className="font-serif text-2xl lg:text-3xl font-bold text-primary">
              Maristela Godoy
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map(link => (
              <Link
                key={link.href}
                href={link.href}
                className="text-foreground/80 hover:text-primary transition-colors text-sm font-medium"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Social Links & CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <div className="flex items-center gap-2">
              <Link
                href="https://www.instagram.com/amaristelagodoy"
                target="_blank"
                className="text-foreground/60 hover:text-primary transition-colors p-2"
              >
                <Instagram className="h-4 w-4" />
              </Link>
              {/* <Link
                href="https://youtube.com"
                target="_blank"
                className="text-foreground/60 hover:text-primary transition-colors p-2"
              >
                <Youtube className="h-4 w-4" />
              </Link>
              <Link
                href="https://facebook.com"
                target="_blank"
                className="text-foreground/60 hover:text-primary transition-colors p-2"
              >
                <Facebook className="h-4 w-4" />
              </Link> */}
            </div>
            <Button
              asChild
              className="bg-primary hover:bg-primary/90 text-primary-foreground"
            >
              <Link href="#contato">Entre em Contato</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-foreground"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? 'Fechar menu' : 'Abrir menu'}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <nav className="lg:hidden mt-4 p-4 bg-card/95 w-full backdrop-blur-md shadow-sm rounded-lg">
            <div className="flex flex-col gap-4">
              {navLinks.map(link => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-foreground/80 hover:text-primary transition-colors text-base font-medium"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <Button
                asChild
                className="mt-2 bg-primary hover:bg-primary/90 text-primary-foreground"
              >
                <Link href="#contato" onClick={() => setIsOpen(false)}>
                  Entre em Contato
                </Link>
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}
