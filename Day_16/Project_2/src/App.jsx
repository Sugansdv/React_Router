import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Header from './Components/Header';
import Home from './Components/Home';
import Services from './Components/Services';
import Contact from './Components/Contact';
import About from './Components/About';

function App() {
  return (
    <>
    <BrowserRouter>
      <Header />
      <div className="container py-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
      </BrowserRouter>
    </>
  );
}

export default App;
