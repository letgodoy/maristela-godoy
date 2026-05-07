import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const services = [
  {
    image: '/images/te-ind.jpeg',
    title: 'Terapia Individual',
    description:
      'A Terapia Sistêmica individual pode ajudar o indivíduo a reconhecer como seu histórico familiar, relacionamentos e experiências moldaram sua identidade e seu modo de agir.',
  },
  {
    image: '/images/te-casal.jpeg',
    title: 'Terapia de Casal',
    description:
      'A terapia sistêmica de casal é uma abordagem eficaz para ajudar os parceiros a entenderem as complexidades de seu relacionamento e a desenvolverem novas habilidades e estratégias para melhorar a comunicação e o entendimento.',
  },
  {
    image: '/images/te-familia.jpeg',
    title: 'Terapia de Família',
    description:
      'A Terapia Familiar Sistêmica trabalha com a família como um todo, visando melhorar a comunicação, a resolução de conflitos e promover o bem-estar emocional e psicológico de todos os envolvidos.',
  },
  {
    image: '/images/te-sistemica.jpeg',
    title: 'Terapia Sistêmica',
    description:
      'A terapia sistêmica pode ser usada para tratar uma ampla variedade de questões, incluindo problemas de relacionamento, problemas familiares, transtornos alimentares, transtornos de ansiedade e depressão.',
  },
]

export function Services() {
  return (
    <section id="servicos" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary font-medium text-sm tracking-wide uppercase">
            Serviços
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-2 mb-6">
            Como posso te ajudar
          </h2>
          <p className="text-muted-foreground leading-relaxed text-pretty">
            Ofereço diferentes modalidades de atendimento para melhor atender às
            suas necessidades individuais, de relacionamento ou familiares.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-card rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 border border-border/50 flex flex-col"
            >
              <div className="w-full h-auto aspect-square rounded-xl bg-primary/10 flex items-center justify-center mb-5 relative">
                <Image src={service.image} alt={service.title} className="object-cover" fill />
              </div>
              <h3 className="font-serif text-xl font-semibold text-foreground mb-3">
                {service.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed flex-grow text-pretty">
                {service.description}
              </p>
              <Button
                asChild
                variant="link"
                className="p-0 mt-4 text-primary hover:text-primary/80 justify-start h-auto"
              >
                <Link href="#contato">Saiba Mais</Link>
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
