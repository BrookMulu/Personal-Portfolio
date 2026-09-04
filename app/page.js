
//import Image from 'next/image'
import HeaderSection from './src/components/HeaderSection'
import NavBar from './src/components/NavBar'
import Skills from './src/components/Skills'
import Expierence from './src/components/Expierence'
import Email from './src/components/Email'
import Footer from './src/components/Footer'
import Projects from './src/components/Projects'
import ScrollReveal from './src/components/ScrollReveal'

export default function Home() {
  return (
    <>
    <main id="home">
      <a className="skip-link" href="#main-content">Skip to content</a>
        <NavBar/>
        <div className="site-container" id="main-content">
          <HeaderSection/>
          <ScrollReveal><Projects/></ScrollReveal>
          <ScrollReveal><Skills/></ScrollReveal>
          <ScrollReveal><Expierence/></ScrollReveal>
          <ScrollReveal><Email/></ScrollReveal>
        </div>
        <Footer/>
    </main>
    </>
  )
}
