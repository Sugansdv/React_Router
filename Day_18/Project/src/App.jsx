import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Project1 from './Components/Project1';
import Project2 from './Components/Project2';
import Project3 from './Components/Project3';
import Project4 from './Components/Project4';
import './App.css';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<h1 style={{ textAlign: "center" }}>Day_18_Projects</h1>} />
        <Route path="/project1" element={<Project1 />} />
        <Route path="/project2" element={<Project2 />} />
        <Route path="/project3" element={<Project3 />} />
        <Route path="/project4" element={<Project4 />} />
      </Routes>
    </Router>
  );
}

export default App;
