import React from 'react';
import { Link, Outlet } from 'react-router-dom';

export default function About() {
  return (
    <div className="text-center mt-4">
      <h2>About Page</h2>
      <p>Select a section:</p>
      <nav>
        <Link to="team" className="btn btn-outline-primary mx-2">Team</Link>
        <Link to="company" className="btn btn-outline-primary mx-2">Company</Link>
      </nav>
      <hr />
      <Outlet />
    </div>
  );
}
