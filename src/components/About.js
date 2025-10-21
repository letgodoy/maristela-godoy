import React from 'react'
import * as styles from './About.module.css'

const About = () => {
  return (
    <section id="sobre-mim" className={styles.about}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.textContent}>
            <h1 className={styles.title}>Quem eu sou</h1>
            <p className={styles.description}>
              Atualmente me dedico ao meu doutorado na Unilasalle em Memória
              Social e Bens Culturais, enquanto estou afastada do Instituto
              Federal do Rio Grande do Sul, onde sou servidora. Minha trajetória
              acadêmica é soma das graduações em Filosofia e Psicologia, bem
              como da formação em Relações Familiares e de Casal, EMDR e o
              mestrado em Filosofia. Além disso, sou intérprete de Língua
              Brasileira de Sinais, com certificação pelo MEC, PROLIBRAS em
              2007.
            </p>
            <p className={styles.description}>
              Com mais de uma década de experiência no exercício da psicologia,
              pude atuar em diferentes contextos que contribuíram
              significativamente para minha visão multicultural, tais como o
              atendimento a pessoas com doenças mentais no Hospital Psiquiátrico
              Bezerra de Menezes em Passo Fundo e o convívio com outras culturas
              em países como Filipinas, Camboja e Guiné Bissau, África
              Ocidental, onde também tive a oportunidade de ministrar aulas de
              filosofia para os seminaristas da diocese de Bissau e Bafatá.
            </p>
            <p className={styles.description}>
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

        <div className={styles.infoBoxes}>
          <div className={styles.infoBox}>
            <div className={styles.iconContainer}>
              <div className={styles.icon}>
                <svg viewBox="0 0 640 512" fill="currentColor">
                  <path d="M622.34 153.2L343.4 67.5c-15.2-4.67-31.6-4.67-46.79 0L17.66 153.2c-23.54 7.23-23.54 38.36 0 45.59l48.63 14.94c-10.67 13.19-17.23 29.28-17.88 46.9C38.78 266.15 32 276.11 32 288c0 10.78 5.68 19.85 13.86 25.65L20.33 428.53C18.11 438.52 25.71 448 35.94 448h56.11c10.24 0 17.84-9.48 15.62-19.47L82.14 313.65C90.32 307.85 96 298.78 96 288c0-11.57-6.47-21.25-15.66-26.87.76-15.02 8.44-28.3 20.69-36.72L296.6 284.5c9.06 2.78 26.44 6.25 46.79 0l278.95-85.7c23.55-7.24 23.55-38.36 0-45.6zM352.79 315.09c-28.53 8.76-52.84 3.92-65.59 0l-145.02-44.55L128 384c0 35.35 85.96 64 192 64s192-28.65 192-64l-14.18-113.47-145.03 44.56z"></path>
                </svg>
              </div>
            </div>
            <div className={styles.textContent}>
              <h4 className={styles.infoTitle}>Formação</h4>
              <p className={styles.infoText}>
                – Graduação em Filosofia e Psicologia
                <br />
                – Mestrado em Filosofia: Ética e Subjetividade
                <br />– Doutoranda em Memória Social e Bens Culturais
              </p>
            </div>
          </div>

          <div className={styles.infoBox}>
            <div className={styles.iconContainer}>
              <div className={styles.icon}>
                <svg viewBox="0 0 512 512" fill="currentColor">
                  <path d="M352 96c0-53.02-42.98-96-96-96s-96 42.98-96 96 42.98 96 96 96 96-42.98 96-96zM233.59 241.1c-59.33-36.32-155.43-46.3-203.79-49.05C13.55 191.13 0 203.51 0 219.14v222.8c0 14.33 11.59 26.28 26.49 27.05 43.66 2.29 131.99 10.68 193.04 41.43 9.37 4.72 20.48-1.71 20.48-11.87V252.56c-.01-4.67-2.32-8.95-6.42-11.46zm248.61-49.05c-48.35 2.74-144.46 12.73-203.78 49.05-4.1 2.51-6.41 6.96-6.41 11.63v245.79c0 10.19 11.14 16.63 20.54 11.9 61.04-30.72 149.32-39.11 192.97-41.4 14.9-.78 26.49-12.73 26.49-27.06V219.14c-.01-15.63-13.56-28.01-29.81-27.09z"></path>
                </svg>
              </div>
            </div>
            <div className={styles.textContent}>
              <h4 className={styles.infoTitle}>Cursos</h4>
              <p className={styles.infoText}>
                – Relações sistêmicas de casal, familia e individual
                <br />
                – EMDR
                <br />
                – Inclusão de deficientes
                <br />– Libras
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
