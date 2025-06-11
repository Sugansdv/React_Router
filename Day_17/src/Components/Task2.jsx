import { useParams } from "react-router-dom";

const Task2 = [
  { id: "1", name: "Dharun", email: "Dharun@example.com", phone: "123-456-7890"},
  { id: "2", name: "Vishwa", email: "vishwa@example.com", phone: "987-654-3210"},
  { id: "3", name: "Sugan", email: "sugan@example.com", phone: "555-666-7777"}
];

function UserProfile() {
  const { id } = useParams();
  const user = users.find((user) => user.id === id);
  if (!user) return <p>User not found!</p>;

  return (
    <div>
      <h2>User ID: {id}</h2>
      <p><strong>Name:</strong> {user.name}</p>
      <p><strong>Email:</strong> {user.email}</p>
      <p><strong>Phone:</strong> {user.phone}</p>
    </div>
  );
}

export default Task2;
