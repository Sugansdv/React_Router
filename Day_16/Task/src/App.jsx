import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Components/Home';
import About from './Components/About';
import Task from './Components/Task';
import NotFound from './Components/NotFound'; 
import Navigation from './Components/Navigation';
import GoToTask from './Components/GoToTask'; 
import Protected from './Components/Protected';
import Team from './Components/Team';        
import Company from './Components/Company';
import './App.css';

export default function App() {
  return (
    <Router>
      <Navigation />

      <Routes>
        <Route path="/" element={<Home />} />
         {/* ✅ Parent Route */}
        <Route path="/about" element={<About />}>
          {/* ✅ Nested Routes */}
          <Route path="team" element={<Team />} />
          <Route path="company" element={<Company />} />
        </Route>
        <Route path="/task" element={<Task />} />
        <Route path="*" element={<NotFound />} /> 
        <Route path="/gototask" element={<GoToTask />} />
        <Route path="/protected" element={<Protected />} />
      </Routes>
    </Router>
  );
}
