import React from 'react'
import Hero from './sections/Hero/Hero';
import './App.css'
import Projects from './sections/Projects/Projects';
import Skills from './sections/Skills/Skills';

const App = () => {
  console.log('test');

  return (

    <div>
      <Hero></Hero>
      <Projects></Projects>
      <br /> <br /> <br />
      <Skills></Skills>
    </div>
  )
}

export default App