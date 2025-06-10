import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Navigation() {
  return (
    <nav className="bg-light py-3">
      <ul className="nav d-flex justify-content-center gap-3">
        <li className="nav-item">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "nav-link text-white bg-primary px-3 rounded" : "nav-link text-primary"
            }
          >
            Home
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive ? "nav-link text-white bg-primary px-3 rounded" : "nav-link text-primary"
            }
          >
            About
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            to="/task"
            className={({ isActive }) =>
              isActive ? "nav-link text-white bg-primary px-3 rounded" : "nav-link text-primary"
            }
          >
            Task
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            to="/task8"
            className={({ isActive }) =>
              isActive ? "nav-link text-white bg-primary px-3 rounded" : "nav-link text-primary"
            }
          >
            Task8
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            to="/gototask"
            className={({ isActive }) =>
              isActive ? "nav-link text-white bg-primary px-3 rounded" : "nav-link text-primary"
            }
          >
            Task11
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            to="/Protected"
            className={({ isActive }) =>
              isActive ? "nav-link text-white bg-primary px-3 rounded" : "nav-link text-primary"
            }
          >
            Protected Page
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
