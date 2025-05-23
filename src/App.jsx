import React from 'react'
import './App.css';
import Header from './components/header/Header';
import Home from './components/home/Home';
import About from './components/about/About';
import Skills from './components/skilles/Skills';
import Services from './components/Services/Services';
import Qualification from './components/qualification/Qualification';
import Work from './components/work/Work';
import Testimonials from './components/testimonials/Testimonials';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';
import ScrollUp from './components/scrollup/ScrollUp';
export default function App() {

  return (
    <div>
      <>
        <Header />
        <main className="main">
            <Home />
            <About />
            <Skills />
            <Services /> 
            <Qualification />
            <Work />
            <Testimonials />
            <Contact />
            
        </main>
            <Footer />
            <ScrollUp/>

      </>
    </div>
  )
}
