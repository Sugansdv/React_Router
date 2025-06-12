import React, { useState, useEffect } from "react";

const ProductForm = ({ addProduct, editProduct, updateProduct }) => {
  const [product, setProduct] = useState({ title: "", price: "" });

  useEffect(() => {
    if (editProduct) {
      setProduct(editProduct);
    } else {
      setProduct({ title: "", price: "" });
    }
  }, [editProduct]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!product.title || !product.price) return;

    if (editProduct) {
      updateProduct(product);
    } else {
      addProduct(product);
    }

    setProduct({ title: "", price: "" });
  };

  return (
    <form className="mb-4" onSubmit={handleSubmit}>
      <div className="row g-2">
        <div className="col-md-5">
          <input
            type="text"
            className="form-control"
            placeholder="Product Title"
            value={product.title}
            onChange={(e) => setProduct({ ...product, title: e.target.value })}
          />
        </div>
        <div className="col-md-3">
          <input
            type="number"
            className="form-control"
            placeholder="Price"
            value={product.price}
            onChange={(e) => setProduct({ ...product, price: e.target.value })}
          />
        </div>
        <div className="col-md-4">
          <button type="submit" className="btn btn-primary w-100">
            {editProduct ? "Update Product" : "Add Product"}
          </button>
        </div>
      </div>
    </form>
  );
};

export default ProductForm;
