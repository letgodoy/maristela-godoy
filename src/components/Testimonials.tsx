import React from 'react'
import * as styles from './Testimonials.module.css'

const Testimonials: React.FC = () => {
  return (
    <section id="depoimentos" className={styles.testimonials}>
      <div className={styles.container}>
        <div className={styles.content}>
          <h1 className={styles.title}>Depoimentos</h1>
          <p className={styles.subtitle}>
            Depoimentos de clientes satisfeitos com a terapia e acolhimento
          </p>
        </div>

        <div className={styles.testimonialsGrid}>
          <div className={styles.testimonial}>
            <div className={styles.testimonialContent}>
              <p className={styles.testimonialText}>
                &ldquo;Quando procurei terapia eu estava em um momento de muita
                dúvida e insegurança não me sentia capaz, a Psicóloga Maristela
                me acolheu com muito carinho e delicadeza, me auxiliou a
                entender minhas angústias e a superar meus traumas, sinto que
                foi a melhor escolha fazer terapia com uma profissional como ela
                que tem conhecimento, mas também tem empatia quanto a dor de
                quem a procura, sou grata por me auxiliar no processo de
                autoconhecimento, percebo minha evolução a cada momento que
                consigo superar minhas dificuldades.&ldquo;
              </p>
              <div className={styles.testimonialAuthor}>
                <h4 className={styles.authorName}>E. A. W. S.</h4>
                <p className={styles.authorLocation}>Paraná</p>
              </div>
            </div>
          </div>

          <div className={styles.testimonial}>
            <div className={styles.testimonialContent}>
              <p className={styles.testimonialText}>
                &ldquo;Me chamo Selma Weiber, sou psicóloga clínica, conheci a
                Maristela na minha graduação onde ela foi minha professora e por
                sinal uma excelente professora, e após se tornou minha
                psicóloga, que foi onde consegui alavancar minha vida
                profissional, por meio do seu trabalho e técnicas.&ldquo;
              </p>
              <div className={styles.testimonialAuthor}>
                <h4 className={styles.authorName}>Selma Weiber</h4>
                <p className={styles.authorLocation}>Paraná</p>
              </div>
            </div>
          </div>

          <div className={styles.testimonial}>
            <div className={styles.testimonialContent}>
              <p className={styles.testimonialText}>
                &ldquo;Durante muitos anos convivi com um medo absurdo de
                aranhas. De qualquer tamanho, cor,… até as de brinquedos ou que
                apareciam em vídeos me causavam pânico. Era uma espécie de
                paralisia e eu não conseguia reagir diante delas. O trabalho da
                Mari foi essencial! Com muita atenção, cuidado e carinho ela me
                ajudou absurdamente nesse processo. Hoje não posso dizer que
                passei a gostar de aranhas 😀 mas esses bichinhos não me causam
                mais pânico! Consigo tranquilamente assistir vídeos e até lidar
                com elas, se necessário. É como se um grande peso tivesse sido
                tirado dos meus ombros. A ajuda da Mari, de fato, mudou minha
                vida! ❤&ldquo;
              </p>
              <div className={styles.testimonialAuthor}>
                <h4 className={styles.authorName}>C.</h4>
                <p className={styles.authorLocation}>Rio Grande do Sul</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials
