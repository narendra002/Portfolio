import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Nav from './Component/Nav';
import HeroSection from './Component/HeroSection';
import Skills from './Component/Skills';
import Education from './Component/Education';
import Projects from './Component/Projects';
import ContactMe from './Component/ContactMe';

function App() {
  return (
    <Router>
      <Nav />
     
      <Routes>
  <Route path="/" element={<Home />} />
  <Route path="/education" element={<Education />} />
  <Route path="/projects" element={<Projects />} />
  <Route path="/contact_me" element={<ContactMe />} />


      </Routes>
    </Router>
  );
}

function Home() {
  return (
    <>
      <HeroSection />
      <Skills />
    </>
  );
}

export default App;
