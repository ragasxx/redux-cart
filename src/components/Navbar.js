import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Navbar = () => {
  const cartItems = useSelector((state) => state.cart.length);

  return (
    <div style={{ display: "flex", alignItems: "space-between" }}>
      <span className="logo">Redux store</span>
      <div>
        <Link className="navLink" to="/">
          Home
        </Link>
        <Link className="navLink" to="/cart">
          Cart
        </Link>
        <span className="cartCount">Cart Items : {cartItems}</span>
      </div>
    </div>
  );
};

export default Navbar;
