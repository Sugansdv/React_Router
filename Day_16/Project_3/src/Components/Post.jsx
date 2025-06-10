import React from 'react';

const Posts = () => {
  const posts = [
    {
      title: "React Router Basics",
      summary: "Learn how to add page navigation in a React app using React Router.",
    },
    {
      title: "CSS Tips for Clean UI",
      summary: "Useful tricks like flexbox, spacing, and box shadows to enhance your frontend.",
    },
    {
      title: "Building a Grocery App",
      summary: "Step-by-step project using React, Bootstrap, and local storage.",
    },
  ];

  return (
    <div className="page-container">
      <h2>📝 Latest Posts</h2>
      <ul className="post-list">
        {posts.map((post, index) => (
          <li key={index} className="post-card">
            <h5>{post.title}</h5>
            <p>{post.summary}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Posts;
