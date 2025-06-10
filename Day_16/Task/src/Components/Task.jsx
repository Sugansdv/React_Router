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
      <h5>Task 3. BrowserRouter Setup: in App.jsx</h5>
      <h5>Task 6. Exact Path Usage: Use the exact attribute to ensure the correct route is matched  : included in App.jsx</h5>
      <h5> Task 7. Default Route (Redirect to Home): Set up a default route that redirects to
the Home page.
</h5>
<h5>Task 9. Active Link Styling: Apply active styling to the currently selected link using
NavLink.</h5>
<h5>Task 12.Navigation Bar Component: Create a reusable Navbar component with
links to different pages: imported in App.jsx</h5>
    </div>
    
  );
}
