import React from "react";
import { Nav } from "react-bootstrap";
import "./header.css";

const Header = () => {
  return (
    <div>
      <Nav
        id="navbar"
        activeKey="/home"
        onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
      ></Nav>
    </div>
  );
};

export default Header;
