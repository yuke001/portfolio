import React from 'react'
import Hero from './sections/Hero/Hero';
import './App.css'
import Projects from './sections/Projects/Projects';
import Skills from './sections/Skills/Skills';
import Contact from './sections/Contact/Contact';
import Footer from './sections/Footer/Footer';

const App = () => {
  console.log('test');

  return (

    <div>
      <Hero></Hero>
      <Projects></Projects>
      <Skills></Skills>
      <Contact></Contact>
      <Footer></Footer>
    </div>
  )
}

export default App