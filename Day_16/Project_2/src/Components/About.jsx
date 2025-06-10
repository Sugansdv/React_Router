import React from 'react';

const About = () => {
  return (
    <div className="about-container container py-5">
      <h2 className="text-center mb-4">About Me</h2>
      <div className="row w-75 m-auto">
        <div className="col-md-12 mb-4">
          <p className="about-text">
            I'm a passionate and dedicated web developer with a love for clean, responsive design.
            My journey started with HTML & CSS and grew into dynamic front-end experiences using React.
            I enjoy creating intuitive user interfaces and am always looking to learn and grow.
          </p>
        </div>
        <div className="col-md-3">
          <ul className="skills-list">
            <li>✅ HTML, CSS, JavaScript</li>
            <li>✅ React, Bootstrap</li>
            <li>✅ Git & GitHub</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
