import React from 'react'
import Layout from '../components/layout'
import Seo from '../components/seo'
import Header from '../components/Header'
import Hero from '../components/Hero'
import About from '../components/About'
import Approach from '../components/Approach'
import Testimonials from '../components/Testimonials'
import Contact from '../components/Contact'
import Footer from '../components/Footer'

const IndexPage = () => {
  return (
    <Layout>
      <Seo title="Maristela Godoy - Psicóloga" />
      <Header />
      <main>
        <Hero />
        <About />
        <Approach />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </Layout>
  )
}

export default IndexPage
