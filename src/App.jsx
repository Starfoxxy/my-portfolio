import React from 'react';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Skills from './pages/Skills';
import Experience from './pages/Experience';
import Projects from './pages/Projects';
import ProblemsAndJoys from './pages/ProblemsAndJoys';
import Contact from './pages/Contact';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <ProblemsAndJoys />
      <Contact />
    </div>
  );
}

export default App;