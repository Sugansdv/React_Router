import React from 'react';

function Task1() {
  const question = "1. Introduction to Dynamic Routing: Write a short explanation of dynamic routes and their use cases in React.";
  
  const answer = (
    <div className="mt-3">
      <p><strong>Dynamic routes in React allows to create flexible URLs where parts of the path are variables, rather than fixed strings. </strong></p>
      <p><strong>In React, when using a routing library like React Router, to define dynamic segments in route path using a special syntax, typically a colon followed by the parameter name (e.g., :id, :username, :category).</strong></p>
      <ul className="list-group ms-5">
        <li>It allows to create routes with parameters that can change (e.g., /users/:userId)</li>
        <li>Dynamic routes are useful to display different content based on URL parameters</li>
        <li>Common use cases include: user profiles, product pages, blog posts - to display different data based on an ID</li>
        <li>In React, libraries like React Router enable dynamic routing through route parameters</li>
      </ul>
    </div>
  );

  return (
    <div className="container mt-5">
              <h4 className="card-title text-primary mb-4">{question}</h4>
              <div className="card-text">
                {answer}
              </div>
      </div>
  );
}

export default Task1;