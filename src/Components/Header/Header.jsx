import React from "react";
import "./header.css";
import logo from "../Images/logo.jpg";

const Header = () => {
  return (
    <>
      <header className="header">
        <img id="logo-img" src={logo} alt="logo"/>
        <h2 id="title">Take Notes</h2>
      </header>
    </>
  );
};

export default Header;
