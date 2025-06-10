
import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function GoToTask() {
  const navigate = useNavigate(); 

  const handleClick = () => {
    navigate('/task'); 
  };

  return (
    <div className="text-center mt-5">
      <h2>Task11</h2>
      <button className="btn btn-success mt-3" onClick={handleClick}>
        Go to Task Page
      </button>
    </div>
  );
}
