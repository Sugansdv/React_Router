import React from "react";

const ProductList = ({ products, onEdit, onDelete }) => {
  return (
    <table className="table table-striped table-bordered">
      <thead className="table-dark">
        <tr>
          <th>ID</th>
          <th>Title</th>
          <th>Price ($)</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {products.map((p) => (
          <tr key={p.id}>
            <td>{p.id}</td>
            <td>{p.title}</td>
            <td>{p.price}</td>
            <td>
              <button
                className="btn btn-sm btn-warning me-2"
                onClick={() => onEdit(p)}
              >
                Edit
              </button>
              <button
                className="btn btn-sm btn-danger"
                onClick={() => onDelete(p.id)}
              >
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ProductList;
