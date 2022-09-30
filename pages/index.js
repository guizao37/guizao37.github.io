import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/header'
import Hero from '../components/Hero'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Portfolio</title>
      </Head>

      <Header/>

      {/* Hero */}

      <section id="hero">
        <Hero/>
      </section>

      {/* Sobre */}

      {/* Experiencia */}

      {/* Habilidades */}

      {/* Projetos */}

      {/* Contato */}
    </div>
  )
}
