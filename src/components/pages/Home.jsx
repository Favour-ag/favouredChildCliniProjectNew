import React from 'react'
import Hero from '../Hero'
import Card from '../Card'
import Footer from '../Footer'
import About from '../About'
import Contact from '../Contact'
import Navbar from '../Navbar'
import Services from '../Services'

const Home = () => {
  return (
    <>
        <Navbar />
        <Hero />
        <Card />
        <About />
        <Services />
        <Contact />
        <Footer />
    </>
  )
}

export default Home