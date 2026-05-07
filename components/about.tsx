import { GraduationCap, BookOpen, Globe } from "lucide-react";

export function About() {
  return (
    <section id="sobre" className="py-24 bg-card">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left Column - Main Content */}
          <div>
            <span className="text-primary font-medium text-sm tracking-wide uppercase">
              Conheça
            </span>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-2 mb-6">
              Quem eu sou
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8 text-pretty">
              Uma doutoranda, intérprete de libras e psicóloga com experiência em
              EMDR, que valoriza a diversidade cultural e viaja pelo mundo em
              busca de conhecimento e ampliação de horizontes. Uma mentora pronta
              para compartilhar suas experiências com o mundo.
            </p>

            <div className="space-y-6 mb-10">
              <p className="text-muted-foreground leading-relaxed text-pretty">
                Atualmente me dedico ao meu doutorado na Unilasalle em Memória
                Social e Bens Culturais, enquanto estou afastada do Instituto
                Federal do Rio Grande do Sul, onde sou servidora. Minha trajetória
                acadêmica é soma das graduações em Filosofia e Psicologia, bem
                como da formação em Relações Familiares e de Casal, EMDR e o
                mestrado em Filosofia. Além disso, sou intérprete de Língua
                Brasileira de Sinais, com certificação pelo MEC, PROLIBRAS em
                2007.
              </p>
              <p className="text-muted-foreground leading-relaxed text-pretty">
                Com mais de uma década de experiência no exercício da psicologia,
                pude atuar em diferentes contextos que contribuíram
                significativamente para minha visão multicultural, tais como o
                atendimento a pessoas com doenças mentais no Hospital Psiquiátrico
                Bezerra de Menezes em Passo Fundo e o convívio com outras culturas
                em países como Filipinas, Camboja e Guiné Bissau, África
                Ocidental, onde também tive a oportunidade de ministrar aulas de
                filosofia para os seminaristas da diocese de Bissau e Bafatá.
              </p>
              <p className="text-muted-foreground leading-relaxed text-pretty">
                Acredito que minha vivência multicultural é essencial para minha
                atuação profissional, pois enriquece meu potencial em oferecer um
                cuidado humano, ético e eficaz para o bem-estar psicológico de
                meus pacientes. Sou uma terapeuta que combina diferentes
                abordagens para melhor atender às necessidades dos meus pacientes.
                A Terapia Sistêmica e o EMDR possuem objetivos e métodos
                distintos, mas podem ser complementares no tratamento de questões
                psicológicas.
              </p>
            </div>
          </div>

          {/* Right Column - Qualifications */}
          <div className="space-y-8">
            {/* Formation Card */}
            <div className="bg-secondary/50 rounded-2xl p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <GraduationCap className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-serif text-xl font-semibold text-foreground">
                  Formação
                </h3>
              </div>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                  <span>Graduação em Filosofia e Psicologia</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                  <span>Mestrado em Filosofia: Ética e Subjetividade</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                  <span>Doutoranda em Memória Social e Bens Culturais</span>
                </li>
              </ul>
            </div>

            {/* Courses Card */}
            <div className="bg-secondary/50 rounded-2xl p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <BookOpen className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-serif text-xl font-semibold text-foreground">
                  Cursos e Especializações
                </h3>
              </div>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                  <span>Relações sistêmicas de casal, família e individual</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                  <span>EMDR (Eye Movement Desensitization and Reprocessing)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                  <span>Inclusão de deficientes</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                  <span>Libras - Certificação PROLIBRAS/MEC</span>
                </li>
              </ul>
            </div>

            {/* Experience Card */}
            <div className="bg-primary/5 rounded-2xl p-8 border border-primary/10">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Globe className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-serif text-xl font-semibold text-foreground">
                  Experiência Internacional
                </h3>
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Vivência multicultural em Filipinas, Camboja e Guiné Bissau,
                enriquecendo a prática terapêutica com uma visão global e
                humanizada.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
