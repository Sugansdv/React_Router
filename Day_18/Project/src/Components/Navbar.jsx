import { NavLink } from 'react-router-dom';
import '../App.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <NavLink to="/" className="logo-text">Suganya S</NavLink>
      </div>
      <ul className="nav-links">
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/Project1">Project 1</NavLink></li>
        <li><NavLink to="/Project2">Project 2</NavLink></li>
        <li><NavLink to="/Project3">Project 3</NavLink></li>
        <li><NavLink to="/Project4">Project 4</NavLink></li>
      </ul>
    </nav>
  );
};

export default Navbar;
