import Image from "next/image";
import Link from "next/link";
import { publicUrl } from "@/lib/public-url";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function Hero() {
  return (
    <section
      id="inicio"
      className="min-h-screen flex items-center pt-24"
    >
      {/* Background Pattern */}
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Content */}
          <div className="order-2 md:order-1 text-center md:text-left">
            <span className="inline-block text-primary font-medium text-sm mb-4 tracking-wide uppercase">
              Como posso te ajudar?
            </span>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6">
              <span className="text-balance">Maristela</span>
              <br />
              <span className="text-primary">Godoy</span>
            </h1>
            <div className="space-y-4 mb-8">
              <h2 className="text-xl md:text-2xl font-serif text-foreground/90">
                Ei, tudo bem?
              </h2>
              <p className="text-muted-foreground leading-relaxed text-pretty text-justify max-w-lg mx-auto lg:mx-0">
                Se você está passando por um momento difícil e precisa de ajuda
                para lidar com problemas emocionais ou psicológicos, eu estou
                aqui para ajudar! Vamos bater um papo, tomar um café virtual e
                construir juntos um caminho de autoconhecimento e bem-estar.
                Então, vem comigo nessa jornada rumo a uma vida mais leve e
                feliz!
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button
                asChild
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground"
              >
                <Link href="#contato">
                  Agendar Consulta
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-primary/30 hover:bg-primary/5 text-foreground"
              >
                <Link href="#sobre">Conheça-me Melhor</Link>
              </Button>
            </div>
          </div>

          {/* Image */}
          <div className="order-1 md:order-2 flex justify-center md:justify-center">              
              <div className="rounded-2xl overflow-hidden shadow-2xl w-full" style={{ maxHeight: '70dvh', aspectRatio: '683/1024' }}>
                <Image
                  src={publicUrl('/images/hero.jpeg')}
                  alt="Maristela Godoy - Psicóloga"
                  width={683}
                  height={1024}
                  priority
                  className="object-cover m-auto w-full"
                />
              </div>
            </div>
          </div>
        </div>
    </section>
  );
}
