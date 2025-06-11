import React from 'react';
import { Link, Outlet, useNavigate } from 'react-router-dom'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';

const Sidebar = () => {
  const navigate = useNavigate();  
   const goToUser = () => {
    navigate('/user/5/John'); // Task 8: Programmatic Navigation with Parameters
  };
  return (
    <div className="container-fluid">
      <div className="row vh-100">
        <div className="col-md-3 bg-light p-3 border-end bg-dark">
          <nav className="nav flex-column">
            <Link to="/" className="nav-link text-white">Home</Link>
            <Link to="/task1" className="nav-link text-white">Task 1</Link>
            <Link to="/user/1" className="nav-link text-white">User ID 1</Link>
            <Link to="/user/2/Jane" className="nav-link text-white">User 2 (Jane)</Link>
            <button className="btn btn-primary mt-3" onClick={goToUser}>
              Go to /user/5/John
            </button>
            <Link to="/project1/1" className="nav-link text-white">Project 1</Link>
            <Link to="/products" className="nav-link text-white">Project 2</Link>
            <Link to="/posts" className="nav-link text-white">Project 3</Link>
            <Link to="/movies" className="nav-link text-white">Project 4</Link>
          </nav>
        </div>
        <div className="col-md-9 p-4">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
