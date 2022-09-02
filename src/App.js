import React from 'react';
import { Routes, Route } from "react-router-dom";
import Nav from './components/Nav';
import Home from './components/Home';
import Services from './components/Services';
import Contact from './components/Contact';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div>
      <Nav></Nav>
      <main>
        <Routes>
          <Route path='/' element={ <Home />} />
          <Route path='/services' element={ <Services />} />
          <Route path='/contact' element={ <Contact />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
