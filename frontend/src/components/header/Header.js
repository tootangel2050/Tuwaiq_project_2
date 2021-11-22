import React from 'react';
import {Nav } from "react-bootstrap";
import "./header.css";

const Header = () => {
	return <div>
    
<Nav id="navbar"
  activeKey="/home"
  onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
>
  <Nav.Item>
    <Nav.Link href="/home">English</Nav.Link>
  </Nav.Item>
 
</Nav>
 </div>;
};

export default Header;
