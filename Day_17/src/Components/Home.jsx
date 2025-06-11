import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../App.css';
const Home = () => {
  const navigate = useNavigate();

  const goToUser = () => {
    navigate('/user/5/John');  // Task 8: Programmatic Navigation with Parameters
  };

  return (
    <div>
      <h2 className="my-5">DaY_17_Tasks</h2>
      <div>
      <Link to="task1">Task 1</Link><br />
      <Link to="/user/1">Go to User with ID 1</Link><br />
      <Link to="/user/2/Jane">Go to User with ID 2 and Name Jane</Link><br />
      <button  className="btn btn-primary m-2" onClick={goToUser}>Programmatic Navigation to /user/5/John</button><br /><br />
      <Link to="/project1/1" className="btn btn-primary m-2">Project 1 (User ID 1)</Link><br />
      <Link to="/products" className="btn btn-primary m-2">Project 2 (Product List)</Link><br />
      <Link to="/posts" className="btn btn-primary m-2">Project 3 (Blog App)</Link><br />
      <Link to="/movies" className="btn btn-primary m-2">Project 4 (Movie App)</Link><br />

    </div>
    </div>
  );
};

export default Home;
