import React from 'react';
import Nav from './components/Nav';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import './App.css';

function App() {
  return (
    <div>
      <Nav></Nav>
      <main>
        <Home></Home>
        <About></About>
        <Contact></Contact>
      </main>
    </div>
  );
}

export default App;
