import React, { useEffect, useState } from "react";
import axios from "axios";
import ProductForm from "./ProductForm";
import ProductList from "./ProductList";

const Project2 = () => {
  const [products, setProducts] = useState([]);
  const [editProduct, setEditProduct] = useState(null);

  const fetchProducts = async () => {
    const res = await axios.get("https://fakestoreapi.com/products");
    setProducts(res.data);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const addProduct = async (product) => {
    const res = await axios.post("https://fakestoreapi.com/products", product);
    setProducts([...products, res.data]);
  };

  const updateProduct = async (updatedProduct) => {
    const res = await axios.put(
      `https://fakestoreapi.com/products/${updatedProduct.id}`,
      updatedProduct
    );
    setProducts(
      products.map((p) => (p.id === updatedProduct.id ? res.data : p))
    );
    setEditProduct(null);
  };

  const deleteProduct = async (id) => {
    await axios.delete(`https://fakestoreapi.com/products/${id}`);
    setProducts(products.filter((p) => p.id !== id));
  };

  return (
    <div className="container mt-4">
      <h2 className="text-center">Product CRUD App</h2>
      <ProductForm
        addProduct={addProduct}
        editProduct={editProduct}
        updateProduct={updateProduct}
      />
      <ProductList
        products={products}
        onEdit={setEditProduct}
        onDelete={deleteProduct}
      />
    </div>
  );
};

export default Project2;
