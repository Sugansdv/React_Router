import React from 'react';

export default function Protected() {
  const isLoggedIn = false; 

  return (
    <div className="text-center mt-5">
         <h7>Task 13. Protected Page Example (Static Check): Display a message like "Access
Denied" if the user is not logged in (without authentication).</h7>
      
      {isLoggedIn ? (
        <h2>Welcome to the Protected Page!</h2>
      ) : (
        <h2 className="text-danger">Access Denied</h2>
      )}
    </div>
  );
}
