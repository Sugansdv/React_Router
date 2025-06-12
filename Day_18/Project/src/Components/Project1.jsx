import { useEffect, useState } from "react";
import axios from "axios";

function Project1() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        setUsers(res.data);
        setLoading(false);
      })
      .catch((err) => {
        setError("Failed to fetch users.");
        setLoading(false);
      });
  }, []);

  return (
    <div className="container mt-4 w-50">
      <h5 className="text-secondary text-center my-5">Mini Project 1: User List</h5>

      {loading && <div className="alert alert-info">Loading users...</div>}
      {error && <div className="alert alert-danger">{error}</div>}

      {!loading && !error && (
        <ul className="list-group">
          {users.map((user) => (
            <li key={user.id} className="list-group-item">
              Name: {user.name} <br />
              Email id: {user.email}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Project1;
