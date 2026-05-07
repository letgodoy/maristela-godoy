import { Network, Eye } from "lucide-react";

export function Approach() {
  return (
    <section id="abordagem" className="py-24 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary font-medium text-sm tracking-wide uppercase">
            Metodologia
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-2 mb-6">
            Abordagem
          </h2>
          <p className="text-muted-foreground leading-relaxed text-pretty">
            Como terapeuta, adoto uma abordagem integrativa para tratar as
            necessidades dos pacientes, o que é eficaz diante da complexidade
            das questões psicológicas. A Terapia Sistêmica e o EMDR são duas
            metodologias distintas, mas complementares no tratamento de
            problemas psicológicos. A Terapia Sistêmica enfoca as dinâmicas
            relacionais e comportamentais do paciente, enquanto o EMDR processa
            experiências traumáticas por meio de movimentos oculares.
          </p>
        </div>

        {/* Approach Cards */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Systemic Therapy */}
          <div className="group bg-card rounded-2xl p-8 shadow-sm hover:shadow-lg transition-all duration-300 border border-border/50">
            <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
              <Network className="h-7 w-7 text-primary" />
            </div>
            <h3 className="font-serif text-2xl font-semibold text-foreground mb-4">
              Terapia Sistêmica
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-6 text-pretty">
              A terapia sistêmica é uma abordagem terapêutica eficaz tanto no
              atendimento familiar como no individual. Ela se baseia no
              entendimento de que o indivíduo faz parte de um sistema maior,
              buscando compreender as relações familiares e padrões de
              comportamento que influenciam a vida do paciente.
            </p>
            <p className="text-muted-foreground leading-relaxed text-pretty">
              O objetivo é promover mudanças, desenvolver novas formas de
              relacionamento e melhorar a comunicação, resultando em maior
              compreensão e empatia entre os membros da família.
            </p>
          </div>

          {/* EMDR */}
          <div className="group bg-card rounded-2xl p-8 shadow-sm hover:shadow-lg transition-all duration-300 border border-border/50">
            <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
              <Eye className="h-7 w-7 text-primary" />
            </div>
            <h3 className="font-serif text-2xl font-semibold text-foreground mb-4">
              EMDR
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-6 text-pretty">
              A EMDR é uma técnica terapêutica utilizada para tratar transtornos
              relacionados ao estresse pós-traumático (TEPT) e outras condições
              associadas a memórias dolorosas.
            </p>
            <p className="text-muted-foreground leading-relaxed text-pretty">
              Consiste na estimulação bilateral alternada dos hemisférios
              cerebrais por meio de movimentos oculares, sons ou toques, com o
              objetivo de integrar neuroquimicamente as memórias traumáticas e
              reduzir a intensidade emocional e sintomas associados.
            </p>
            <iframe
              width="625"
              height="405"
              src="https://www.youtube.com/embed/zVdAhPL78WM"
              title="Como funciona a Psicoterapia EMDR em seu cérebro?"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              className="w-full h-auto aspect-video rounded-xl overflow-hidden shadow-2xl mt-8"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  )
}
