import React from 'react';

export default function Task() {
  return (
    <div className="container mt-4">
      <h2 className="text-primary mb-4">Day_16 Tasks</h2>

      <div className="mb-4">
        <h5>1. Introduction to React Router</h5>
        <p>
          <strong>Q:</strong> What is React Router and why is it used?<br />
          <strong>A:</strong> React Router is a standard library for routing in React. 
          It enables navigation among views of various components in a React Application, 
          allows changing the browser URL, and keeps the UI in sync with the URL.
        </p>
      </div>

      <div className="mb-4">
        <h5>2. Install React Router</h5>
        <p>
          <strong>Q:</strong> How do you install React Router in your project?<br />
          <strong>A: </strong> 
          <code>npm install react-router-dom</code>
        </p>
      </div>
    </div>
  );
}
