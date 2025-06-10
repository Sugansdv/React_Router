import React from 'react';
import profileImage from '/vite.svg'; 

const Home = () => {
  return (
    <div className="home-container d-flex align-items-center justify-content-center text-center">
      <div>
        <img src={profileImage} alt="Profile" className="profile-image mb-4" />
        <h1 className="fw-bold">Hi, I'm Suganya</h1>
        <p className="lead">A passionate Web Developer creating interactive websites and applications.</p>
      </div>
    </div>
  );
};

export default Home;
