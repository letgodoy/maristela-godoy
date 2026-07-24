"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";

const testimonials = [
  {
    quote:
      "Me chamo Selma Weiber, sou psicóloga clínica, conheci a Maristela na minha graduação onde ela foi minha professora e por sinal uma excelente professora, e após se tornou minha psicóloga, que foi onde consegui alavancar minha vida profissional, por meio do seu trabalho e técnicas.",
    author: "Selma Weiber",
    location: "Paraná",
  },
  {
    quote:
      "A Maristela é uma profissional incrível. Seu acolhimento e técnica me ajudaram muito em um momento difícil da minha vida. Recomendo de olhos fechados!",
    author: "Cliente Anônimo",
    location: "Rio Grande do Sul",
  },
  {
    quote:
      "Encontrei na Maristela uma terapeuta acolhedora e competente. A abordagem sistêmica mudou minha forma de ver os relacionamentos familiares.",
    author: "Cliente Anônimo",
    location: "São Paulo",
  },
];

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prev = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  return (
    <section className="py-24 bg-primary">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-primary-foreground/70 font-medium text-sm tracking-wide uppercase">
            Depoimentos
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mt-2 mb-4">
            O que dizem sobre mim
          </h2>
          <p className="text-primary-foreground/80 leading-relaxed">
            Depoimentos de clientes satisfeitos com a terapia e acolhimento
          </p>
        </div>

        {/* Testimonial Carousel */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-card rounded-2xl p-8 md:p-12 shadow-xl relative">
            <Quote className="absolute top-6 left-6 h-10 w-10 text-primary/10" />
            
            <div className="text-center">
              <p className="text-foreground text-lg md:text-xl leading-relaxed mb-8 text-pretty text-justify">
                {testimonials[currentIndex].quote}
              </p>
              <div>
                <p className="font-serif text-lg font-semibold text-foreground">
                  {testimonials[currentIndex].author}
                </p>
                <p className="text-muted-foreground text-sm">
                  {testimonials[currentIndex].location}
                </p>
              </div>
            </div>

            {/* Navigation */}
            <div className="flex items-center justify-center gap-4 mt-8">
              <Button
                variant="outline"
                size="icon"
                onClick={prev}
                className="rounded-full border-border hover:bg-primary/10"
                aria-label="Depoimento anterior"
              >
                <ChevronLeft className="h-5 w-5" />
              </Button>
              
              {/* Dots */}
              <div className="flex gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-2.5 h-2.5 rounded-full transition-colors ${
                      index === currentIndex
                        ? "bg-primary"
                        : "bg-border hover:bg-primary/50"
                    }`}
                    aria-label={`Ir para depoimento ${index + 1}`}
                  />
                ))}
              </div>
              
              <Button
                variant="outline"
                size="icon"
                onClick={next}
                className="rounded-full border-border hover:bg-primary/10"
                aria-label="Próximo depoimento"
              >
                <ChevronRight className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
