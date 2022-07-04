import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Profile from './components/Profile';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Skill from './components/Skill';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <About />
      <Skill />
      <Profile />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
