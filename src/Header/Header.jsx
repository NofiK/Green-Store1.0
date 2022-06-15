import React from "react";
import Logo from "./Logo.png";

const Header = () => {
  return (
    <div className="header">
      <h1>Green</h1>
      <img className="logo" src={Logo} />
      <h1>Store</h1>
    </div>
  );
};

export default Header;
