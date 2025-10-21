import React from 'react'
import * as styles from './Approach.module.css'

const Approach = () => {
  return (
    <section id="abordagem" className={styles.approach}>
      <div className={styles.container}>
        <div className={styles.content}>
          <h1 className={styles.title}>Minha Abordagem</h1>
          <p className={styles.description}>
            Como terapeuta, adoto uma abordagem integrativa para tratar as
            necessidades dos pacientes, o que é eficaz diante da complexidade
            das questões psicológicas. A Terapia Sistêmica e o EMDR são duas
            metodologias distintas, mas complementares no tratamento de
            problemas psicológicos. A Terapia Sistêmica enfoca as dinâmicas
            relacionais e comportamentais do paciente, enquanto o EMDR processa
            experiências traumáticas por meio de movimentos oculares.
          </p>
        </div>

        <div className={styles.features}>
          <div className={styles.feature}>
            <div className={styles.featureIcon}>
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
              </svg>
            </div>
            <h3 className={styles.featureTitle}>Terapia Sistêmica</h3>
            <p className={styles.featureDescription}>
              A terapia sistêmica pode ser usada para tratar uma ampla variedade
              de questões, incluindo problemas de relacionamento, problemas
              familiares, transtornos alimentares, transtornos de ansiedade e
              depressão.
            </p>
          </div>

          <div className={styles.feature}>
            <div className={styles.featureIcon}>
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M16 4c0-1.11.89-2 2-2s2 .89 2 2-.89 2-2 2-2-.89-2-2zm4 18v-6h2.5l-2.54-7.63A1.5 1.5 0 0 0 18.54 7H16c-.8 0-1.54.37-2.01.99L12 11l-1.99-3.01A2.5 2.5 0 0 0 8 7H5.46c-.8 0-1.54.37-2.01.99L1 14.37V22h2v-6h2.5l2.5-7.5h2l2.5 7.5H12v6h2z" />
              </svg>
            </div>
            <h3 className={styles.featureTitle}>Terapia Individual</h3>
            <p className={styles.featureDescription}>
              A Terapia Sistêmica individual pode ajudar o indivíduo a
              reconhecer como seu histórico familiar, relacionamentos e
              experiências moldaram sua identidade e seu modo de agir.
            </p>
          </div>

          <div className={styles.feature}>
            <div className={styles.featureIcon}>
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
              </svg>
            </div>
            <h3 className={styles.featureTitle}>Terapia de Casal</h3>
            <p className={styles.featureDescription}>
              A terapia sistêmica de casal é uma abordagem eficaz para ajudar os
              parceiros a entenderem as complexidades de seu relacionamento e a
              desenvolverem novas habilidades e estratégias para melhorar a
              comunicação e o entendimento.
            </p>
          </div>

          <div className={styles.feature}>
            <div className={styles.featureIcon}>
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.94-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" />
              </svg>
            </div>
            <h3 className={styles.featureTitle}>Terapia de Família</h3>
            <p className={styles.featureDescription}>
              A Terapia Familiar Sistêmica trabalha com a família como um todo,
              visando melhorar a comunicação, a resolução de conflitos e
              promover o bem-estar emocional e psicológico de todos os
              envolvidos.
            </p>
          </div>

          <div className={styles.feature}>
            <div className={styles.featureIcon}>
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.94-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" />
              </svg>
            </div>
            <h3 className={styles.featureTitle}>EMDR</h3>
            <p className={styles.featureDescription}>
              A EMDR é uma técnica terapêutica utilizada para tratar transtornos
              relacionados ao estresse pós-traumático (TEPT) e outras condições
              associadas a memórias dolorosas, que consiste na estimulação
              bilateral alternada dos hemisférios cerebrais por meio de
              movimentos oculares, sons ou toques.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Approach
