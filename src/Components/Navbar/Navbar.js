import React from "react";
import "./Navbar.css";

const Navbar = () => {
  const renderComponent = () => {
    return (
      <div className="navbar">
        <div className="container">
          <div className="logo">
            <a href="/">E-Commerce</a>
          </div>
          <div className="right">
            <div className="cart">
              <a href="/cart">Cart</a>
              <div className="guest">Guest</div>
              <div className="logout">
                <a href="/logout">Logout</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
  return renderComponent();
};

export default Navbar;
