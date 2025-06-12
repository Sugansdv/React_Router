import React, { useEffect, useState } from "react";
import axios from "./axiosConfig";
function Task1() {
  return (
    <div className="container mt-5">

        <h5 className="text-secondary">Task 1</h5>
        <p className="fw-medium">Write a short explanation of what Axios is and its
advantages over fetch().        </p>

        <p>
          <strong>Axios</strong> is a popular JavaScript library used to make
          HTTP requests from the browser. It is promise-based and
          supports features like request/response interception, automatic JSON
          transformation, and error handling.
        </p>

        <p>
          <strong>Advantages of Axios over fetch():</strong>
        </p>
        <ul>
          <li>
            Automatically transforms JSON data (no need for{" "}
            <code>res.json()</code>).
          </li>
          <li>
            Supports request and response interceptors.
          </li>
          <li>
            Better error handling – HTTP errors (like 404, 500) are
            automatically caught.
          </li>
          <li>
            Supports older browsers where <code>fetch</code> might not work
            properly.
          </li>
          <li>
            Supports request cancellation via Cancel Tokens.
          </li>
        </ul>
      </div>
  );
}

function Task2() {
  return (
    <div className="container mt-4">

        <h5 className="text-secondary">Task 2</h5>
        <p className="fw-medium">Installed Axios</p>

        <h5 className="text-secondary mt-4"></h5>
        <p>
          -- using: <code> npm install axios</code>
        </p>
    </div>
  );
}

function Task3() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        setUsers(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <div className="container mt-4">
        <h5 className="text-secondary">Task 3. Basic GET Request: Fetch dummy user data from an API e.g.,JSONPlaceholder and display it.</h5>
        {users.length > 0 ? (
          <ul className="list-group">
            {users.map((user) => (
              <li key={user.id} className="list-group-item">
                <strong>{user.name}</strong> - {user.email}
              </li>
            ))}
          </ul>
        ) : (
          <p>Loading user data...</p>
        )}
      </div>
  );
}


function Task4() {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/invalid-url") 
      .then((response) => {
        setUsers(response.data);
        setError("");
      })
      .catch((err) => {
        setError("Failed to fetch data. Please try again later.");
        console.error("API Error:", err);
      });
  }, []);

  return (
    <div className="container mt-4">
        <h5 className="text-secondary mt-4">Task 4. Handle API Errors: Show an error message if the API request fails.</h5>
        {error ? (
          <div className="alert alert-danger">{error}</div>
        ) : (
          <ul className="list-group">
            {users.map((user) => (
              <li key={user.id} className="list-group-item">
                {user.name}
              </li>
            ))}
          </ul>
        )}
    </div>
  );
}

function Task5() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true); 

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        setUsers(res.data);
        setLoading(false);
      })
      .catch(() => {
        setLoading(false);
      });
  }, []);

  return (
    <div className="container mt-4">
        <h5 className="text-secondary mt-4">Task 5. Loading State: Display a loading message while fetching data.
</h5>
        {loading ? (
          <p className="text-info">Loading data...</p>
        ) : (
          <ul className="list-group">
            {users.map((user) => (
              <li key={user.id} className="list-group-item">
                {user.name}
              </li>
            ))}
          </ul>
        )}
      </div>
  );
}

function Task6() {
  const [formData, setFormData] = useState({ name: "", email: "" });
  const [message, setMessage] = useState("");
  const [userId, setUserId] = useState(null); 

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post("https://jsonplaceholder.typicode.com/users", formData);
      console.log("API Response:", res.data); // Check what's returned

      setUserId(res.data.id); // Save ID from response
      setMessage("User data submitted successfully!");
      setFormData({ name: "", email: "" });
    } catch (err) {
      console.error("API Error:", err);
      setMessage("Failed to submit data.");
    }
  };

  return (
    <div className="container mt-4">
      <h5 className="text-secondary mt-4">
        Task 6. POST Request: Create a form and send user data to an API using Axios
      </h5>

      <form onSubmit={handleSubmit} className="mb-3">
        <div className="mb-3">
          <label className="form-label">Name:</label>
          <input
            type="text"
            name="name"
            className="form-control w-50"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Email:</label>
          <input
            type="email"
            name="email"
            className="form-control w-50"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <button type="submit" className="btn btn-primary w-25">
          Submit
        </button>
      </form>

      {message && <div className="alert alert-info">{message}</div>}

      {userId && (
        <div className="alert alert-success">
        User created with ID: <strong>{userId}</strong>
        </div>
      )}
    </div>
  );
}


function Task7() {
  const [formData, setFormData] = useState({ name: "", email: "" });
  const [message, setMessage] = useState("");
  const [updatedId, setUpdatedId] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleUpdate = (e) => {
    e.preventDefault();

    axios
      .put("https://jsonplaceholder.typicode.com/users/1", formData)
      .then((res) => {
        setMessage("User updated successfully!");
        setUpdatedId(res.data.id);
        setFormData({ name: "", email: "" });
      })
      .catch(() => {
        setMessage("Failed to update user.");
      });
  };

  return (
    <div className="container mt-4">
      <h5 className="text-secondary mt-4">
        Task 7. PUT Request: Update user data by making a PUT request
      </h5>

      <form onSubmit={handleUpdate} className="mb-3">
        <div className="mb-3">
          <label className="form-label">Name:</label>
          <input
            type="text"
            name="name"
            className="form-control w-50"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Email:</label>
          <input
            type="email"
            name="email"
            className="form-control w-50"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <button type="submit" className="btn btn-warning w-25">
          Update User
        </button>
      </form>

      {message && <div className="alert alert-info">{message}</div>}
      {updatedId && (
        <div className="alert alert-success">
           Updated user ID: <strong>{updatedId}</strong>
        </div>
      )}
    </div>
  );
}




function Task8() {
  const [message, setMessage] = useState("");
  const [deletedUserId, setDeletedUserId] = useState(null);

  const handleDelete = () => {
    axios
      .delete("https://jsonplaceholder.typicode.com/users/1")
      .then(() => {
        setMessage("User deleted successfully.");
        setDeletedUserId(1);
      })
      .catch(() => {
        setMessage("Failed to delete user.");
        setDeletedUserId(null);
      });
  };

  return (
    <div className="container mt-4">
      <h5 className="text-secondary">
        Task 8. DELETE Request: Delete user data by making a DELETE request
      </h5>

      <button className="btn btn-danger" onClick={handleDelete}>
        Delete User
      </button>

      {message && (
        <div className="alert alert-info mt-3">
          {message}
          {deletedUserId && (
            <div>
               Deleted User ID: <strong>{deletedUserId}</strong>
            </div>
          )}
        </div>
      )}
    </div>
  );
}


function Task9() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get("/users")
      .then((res) => setUsers(res.data))
      .catch((err) => console.error("Error fetching users", err));
  }, []);

  return (
    <div className="container mt-4">
        <h5 className="text-secondary mt-4">Task 9. Global Axios Configuration: Set up a base URL and common headers
globally using Axios defaults.</h5>

        <ul className="list-group">
          {users.map((user) => (
            <li key={user.id} className="list-group-item">
              {user.name}
            </li>
          ))}
        </ul>
      </div>
  );
}

function Task10() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get("/users")
      .then((res) => setUsers(res.data))
      .catch((err) => console.error("Error fetching users", err));
  }, []);

  return (
    <div className="container mt-4">
        <h5 className="text-secondary mt-4">Task 10.Axios Interceptors: Use interceptors to log requests and responses.</h5>

        <ul className="list-group">
          {users.map((user) => (
            <li key={user.id} className="list-group-item">
              {user.name}
            </li>
          ))}
        </ul>
      </div>
  );
}

function Task11() {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const controller = new AbortController(); // Create a controller

    axios
      .get("/users", {
        signal: controller.signal, // Pass the signal to Axios
      })
      .then((res) => setUsers(res.data))
      .catch((err) => {
        if (axios.isCancel(err)) {
          console.warn("🔁 Request cancelled:", err.message);
        } else {
          setError("Failed to fetch users.");
          console.error("❌ API Error:", err);
        }
      });

    return () => {
      controller.abort(); // Cancel request on component unmount
    };
  }, []);

  return (
    <div className="container mt-4">
      <h5 className="text-secondary mt-4">
        Task 11. Cancel API Requests: Cancel ongoing API requests using Axios AbortController.
      </h5>

      {error && <div className="alert alert-danger">{error}</div>}

      <ul className="list-group">
        {users.map((user) => (
          <li key={user.id} className="list-group-item">
            {user.name}
          </li>
        ))}
      </ul>
    </div>
  );
}

function Task12() {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get("/users")
      .then((res) => setUsers(res.data))
      .catch((err) => {
        setError("❌ Failed after retries.");
        console.error("Final Error:", err);
      });
  }, []);

  return (
    <div className="container mt-4">
      <h5 className="text-secondary mt-4">
        Task 12. Retry Failed Requests: Automatically retry failed requests using Axios interceptors.
      </h5>

      {error && <div className="alert alert-danger">{error}</div>}

      <ul className="list-group">
        {users.map((user) => (
          <li key={user.id} className="list-group-item">
            {user.name}
          </li>
        ))}
      </ul>
    </div>
  );
}

function Task13() {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Define an async function inside useEffect
    const fetchUsers = async () => {
      try {
        const response = await axios.get("/users");
        setUsers(response.data);
      } catch (err) {
        setError("❌ Failed to fetch users.");
        console.error("API Error:", err);
      }
    };

    fetchUsers(); // Call the async function
  }, []);

  return (
    <div className="container mt-4">
      <h5 className="text-secondary mt-4">
        Task 13. Async/Await with Axios: Use async/await to make API requests cleaner.
      </h5>

      {error && <div className="alert alert-danger">{error}</div>}

      <ul className="list-group">
        {users.map((user) => (
          <li key={user.id} className="list-group-item">
            {user.name}
          </li>
        ))}
      </ul>
    </div>
  );
}



function Task() {
  return (
    <>
      <Task1 />
      <hr />
      <br />
      <Task2 />
      <hr />
      <br />
      <Task3 />
      <hr />
      <br />
      {/* <Task4 /> */}
      <hr />
      <br />
      <Task5 />
      <hr />
      <br />
      <Task6 />
      <hr />
      <br />
      <Task7 />
      <hr />
      <br />
      <Task8 />
      <hr />
      <br />
      <Task9 />
      <hr />
      <br />
      <Task10 />
       <hr />
      <br />
      <Task11 />
      <hr />
      <br />
      <Task12 />
      <hr />
      <br />
      <Task13 />
    </>
  );
}

export default Task;
