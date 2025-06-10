import React from 'react';
import { NavLink } from 'react-router-dom';
import '../App.css';

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark fixed-top">
      <div className="container">
        <NavLink className="navbar-brand" to="/">MyApp</NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item me-5">
              <NavLink
                to="/"
                end
                className={({ isActive }) =>
                  `nav-link custom-nav ${isActive ? 'active-link' : ''}`
                }
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item me-5">
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  `nav-link custom-nav ${isActive ? 'active-link' : ''}`
                }
              >
                About
              </NavLink>
            </li>
            <li className="nav-item me-5">
              <NavLink
                to="/services"
                className={({ isActive }) =>
                  `nav-link custom-nav ${isActive ? 'active-link' : ''}`
                }
              >
                Services
              </NavLink>
            </li>
            <li className="nav-item me-5">
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  `nav-link custom-nav ${isActive ? 'active-link' : ''}`
                }
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
