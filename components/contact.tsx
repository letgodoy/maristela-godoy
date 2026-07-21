// "use client";

// import { useState } from "react";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { Textarea } from "@/components/ui/textarea";
// import { Label } from "@/components/ui/label";
import { MessageCircle, Send, Phone } from "lucide-react";
import Image from "next/image";
import { publicUrl } from "@/lib/public-url";

export function Contact() {
  // const [isSubmitting, setIsSubmitting] = useState(false);
  // const [isSubmitted, setIsSubmitted] = useState(false);

  // const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
  //   e.preventDefault();
  //   setIsSubmitting(true);
    
  //   // Simulate form submission
  //   await new Promise((resolve) => setTimeout(resolve, 1000));
    
  //   setIsSubmitting(false);
  //   setIsSubmitted(true);
  // };

  return (
    <section id="contato" className="py-24 bg-card">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 lg:items-stretch">
          {/* Left Column - Info (define a altura da linha no desktop) */}
          <div className="min-h-0">
            <span className="text-primary font-medium text-sm tracking-wide uppercase">
              Contato
            </span>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-2 mb-6">
              Vamos Conversar?
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-8 text-pretty">
              Se você deseja marcar um horário para uma sessão de psicologia ou
              tem alguma dúvida sobre o processo terapêutico, entre em contato
              comigo. Você pode marcar uma consulta prévia para conversarmos
              sobre suas necessidades e expectativas em relação à terapia. Você 
              pode entrar em contato comigo pelo WhatsApp. Estou sempre
              disponível para ajudá-lo(a) da melhor forma possível.
            </p>

            {/* WhatsApp Card */}
            <div className="bg-secondary/50 rounded-2xl p-6 mb-6">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-xl bg-green-100 flex items-center justify-center">
                  <MessageCircle className="h-6 w-6 text-green-600" />
                </div>
                <div>
                  <h3 className="font-serif text-lg font-semibold text-foreground">
                    WhatsApp
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    Resposta rápida
                  </p>
                </div>
              </div>
              <a
                href="https://wa.me/5551982730771"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-foreground font-medium hover:text-primary transition-colors"
              >
                <Phone className="h-4 w-4" />
                +55 51 98273-0771
              </a>
            </div>

            <p className="text-sm text-muted-foreground">
              Atendimento online disponível para todo o Brasil.
            </p>
          </div>

          {/* Right Column - imagem preenche a altura da coluna esquerda */}
          <div className="relative min-h-[600px] lg:min-h-0 lg:h-full overflow-hidden bg-background rounded-2xl shadow-lg border border-border/50">
            {/* {isSubmitted ? (
              <div className="text-center py-12">
                <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4">
                  <Send className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="font-serif text-2xl font-semibold text-foreground mb-2">
                  Mensagem Enviada!
                </h3>
                <p className="text-muted-foreground">
                  Obrigada pelo contato. Retornarei em breve!
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Nome *</Label>
                  <Input
                    id="name"
                    name="name"
                    placeholder="Digite aqui seu nome"
                    required
                    className="bg-secondary/30"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email *</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="Digite aqui seu email"
                    required
                    className="bg-secondary/30"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone">Telefone *</Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder="Digite aqui seu telefone"
                    required
                    className="bg-secondary/30"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Mensagem *</Label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Digite aqui sua mensagem"
                    required
                    className="bg-secondary/30 min-h-[120px] resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
                  size="lg"
                >
                  {isSubmitting ? "Enviando..." : "Enviar Mensagem"}
                </Button>
              </form>
            )} */}

            <Image
              src={publicUrl('/images/depoimentos.jpeg')}
              alt="Maristela Godoy - Psicóloga"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover object-center rounded-2xl min-h-[700px]"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
