import React from "react";

const Navbar = () => {
  return (
    <div className="navbar-container">
      <h2 className="nav-name">Your Product</h2>
      <div className="nav-relative">
        <div className="nav-bg"></div>
        <div className="nav-list">
          <a href="#">Backyard</a>
          <a href="#">How it works</a>
          <a href="#">Tech specs</a>
          <a href="#">FAQ</a>
        </div>
      </div>
      <button className="nav-button">Configure Now</button>
    </div>
  );
};

export default Navbar;
