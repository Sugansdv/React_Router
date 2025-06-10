import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Header from './Components/Header';
import Home from './Components/Home';
import Post from './Components/Post';
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
          <Route path="/post" element={<Post />} />
        </Routes>
      </div>
      </BrowserRouter>
    </>
  );
}

export default App;
