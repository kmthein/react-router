import React from "react";
import { useNavigate } from "react-router-dom";

const Products = () => {
  const products = [
    {
      id: 1,
      name: "Apple",
      price: 2000
    },
    {
      id: 2,
      name: "Orange",
      price: 800
    },
    {
      id: 3,
      name: "Mango",
      price: 700
    },
  ]

  const navigate = useNavigate();

  return (
    <div>
      <h1>Products Page</h1>
      <div className="product">
      {
        products.map((product) => (
          <div className="product-box" key={product.id} onClick={() => navigate(`/product/${product.id}`)}>
            <h4>{product.name}</h4>
            <p>{product.price} kyats</p>
          </div>
        ))
      }
      </div>
    </div>
  );
};

export default Products;
