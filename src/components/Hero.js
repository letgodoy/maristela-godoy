import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import * as styles from './Hero.module.css'

const Hero = () => {
  return (
    <section id="home" className={styles.hero}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.textContent}>
            <h6 className={styles.subtitle}>
              <em>Como posso te ajudar?</em>
            </h6>
            <h1 className={styles.title}>Maristela Godoy</h1>
            <div className={styles.greetingBlock}>
              <h4 className={styles.greeting}>Ei, tudo bem?</h4>
              <p className={styles.description}>
                Se você está passando por um momento difícil e precisa de ajuda
                para lidar com problemas emocionais ou psicológicos, eu estou
                aqui para ajudar! Vamos bater um papo, tomar um café virtual e
                construir juntos um caminho de autoconhecimento e bem-estar.
                Então, vem comigo nessa jornada rumo a uma vida mais leve e
                feliz!
              </p>
            </div>
          </div>
          <div className={styles.imageContent}>
            <figure className={styles.imageWrapper}>
              <StaticImage
                src="../images/maristela-photo.jpg"
                alt="Foto de Maristela Godoy"
                className={styles.image}
                width={400}
                height={600}
                placeholder="blurred"
                formats={['auto', 'webp', 'avif']}
              />
            </figure>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
