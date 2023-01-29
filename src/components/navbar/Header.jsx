import React from "react";
import logo from "../../assets/jdlogosvg.svg";
import "./header.css";

const Header = () => {
  return (
    <header>
      <div className="logo">
        <img src={logo} alt="logo" />
      </div>
      <div className="menu__links">
        <a href="#">Hindi</a>
        <a href="#">We are Hiring</a>
        <a href="#">Free Listing</a>
        <a href="#">Login</a>
      </div>
    </header>
  );
};

export default Header;
