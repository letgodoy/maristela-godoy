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
            <p className="text-lg text-muted-foreground leading-relaxed mb-8 text-pretty text-justify">
              Sou a Dra. Maristela de Godoy, psicóloga, intérprete de Língua
              Brasileira de Sinais (Libras) e terapeuta comprometida com o
              cuidado humanizado e a promoção da saúde mental. Minha atuação
              profissional é guiada pelo respeito à singularidade de cada
              pessoa, pela diversidade cultural e pela busca contínua de
              conhecimento, sempre com o propósito de oferecer um atendimento
              ético, acolhedor e baseado em evidências.
            </p>

            <div className="space-y-6 mb-10">
              <p className="text-muted-foreground leading-relaxed text-pretty text-justify">
                Atualmente, atuo na Universidade Federal da Integração
                Latino-Americana (UNILA). Minha formação acadêmica reúne as
                graduações em Filosofia e Psicologia, o mestrado em Filosofia, o
                doutorado em Memória Social e Bens Culturais, além das formações
                em Relações Familiares e de Casal e EMDR. Também sou intérprete
                de Libras, certificada pelo MEC por meio do PROLIBRAS desde
                2007.
              </p>
              <p className="text-muted-foreground leading-relaxed text-pretty text-justify">
                Com mais de dez anos de experiência na Psicologia, atuei em
                diferentes contextos que ampliaram meu olhar sobre o ser humano.
                Trabalhei no atendimento a pessoas com transtornos mentais no
                Hospital Psiquiátrico Bezerra de Menezes, em Passo Fundo, e vivi
                experiências interculturais em países como Filipinas, Camboja e
                Guiné-Bissau, onde também ministrei aulas de Filosofia para
                seminaristas das dioceses de Bissau e Bafatá.
              </p>
              <p className="text-muted-foreground leading-relaxed text-pretty text-justify">
                Possuo formação para atuação psicológica em situações de
                catástrofes e emergências humanitárias. Atuei no acolhimento
                psicológico das populações atingidas pelas enchentes no Vale do
                Taquari e, posteriormente, em Porto Alegre e municípios da
                região metropolitana, oferecendo suporte emocional às pessoas
                afetadas nesses momentos de grande vulnerabilidade.
              </p>
              <p className="text-muted-foreground leading-relaxed text-pretty text-justify">
                Na clínica, trabalho de forma integrativa, utilizando abordagens
                como a Terapia Sistêmica e o EMDR, que se complementam no
                cuidado das questões emocionais, relacionais e dos traumas
                psicológicos. Meu compromisso é oferecer um espaço seguro e
                acolhedor, que favoreça o bem-estar, o autoconhecimento e o
                desenvolvimento pessoal de cada paciente.
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
                  <span>Mestrado em Filosofia</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                  <span>Doutorado em Memória Social e Bens Culturais</span>
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
                  <span>Relações Familiares e de Casal</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                  <span>EMDR (Eye Movement Desensitization and Reprocessing)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                  <span>Psicologia em catástrofes e emergências humanitárias</span>
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
              <p className="text-muted-foreground text-sm leading-relaxed text-justify">
                Vivência intercultural em Filipinas, Camboja e Guiné-Bissau,
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
