import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { add } from "../store/cartSlice";
import { fetchProducts } from "../store/productSlice";

const Products = () => {
  const dispatch = useDispatch();

  const { status, data } = useSelector((state) => state.product);
  const cart = useSelector((state) => state.cart);

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  const handleAddToCart = (product) => {
    dispatch(add(product));
  };

  const isProductInCart = (productId) => {
    return cart.some((item) => item.id === productId);
  };

  if (status === "loading") {
    return <h2>Loaidnng</h2>;
  }

  return (
    <div className="productsWrapper">
      {data.map((product) => (
        <div className="card" key={product.id}>
          <img src={product.image} />
          <h4>{product.title}</h4>
          <h5>{product.price}</h5>
          <button
            disabled={isProductInCart(product.id)}
            onClick={() => handleAddToCart(product)}
            className="btn"
          >
            {isProductInCart(product.id) ? "Added" : "Add to Cart"}
          </button>
        </div>
      ))}
    </div>
  );
};

export default Products;
