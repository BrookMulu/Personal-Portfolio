
//import Image from 'next/image'
import HeaderSection from './src/components/HeaderSection'
import NavBar from './src/components/NavBar'
import { Container } from 'postcss'
import Skills from './src/components/Skills'
import Expierence from './src/components/Expierence'
import Email from './src/components/Email'
import Footer from './src/components/Footer'
import Projects from './src/components/Projects'

export default function Home() {
  return (
    <>
    <main className="flex min-h-screen flex-col bg-black">
      <div className="m-2">
        <NavBar/>
        <div className = "container mt-24 mx-auto mb-14 px-12 py-4">
          <HeaderSection/>
          <Projects/>
          <Skills/>
          <Expierence/>
          <Email/>
        </div>
        <Footer/>
      </div>
    </main>
    </>
  )
}
