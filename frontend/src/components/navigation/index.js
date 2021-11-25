import React from "react";
import { Link, Outlet } from "react-router-dom";
import { Navbar, Nav, Container } from "react-bootstrap";
import Available from "../dashboard/Available";
import Cancelled from "../dashboard/Cancelled";
import Previous from "../dashboard/Previous";

const Navigation = () => {
  return (
    <>
      <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand href="#home">Qyias</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="Registered_Tests">Registered Tests</Nav.Link>
            <Nav.Link href="Available">Avilable Tests</Nav.Link>
            <Nav.Link href="Cancelled_Tests">Cancelled tests</Nav.Link>
            <Nav.Link href="Cancelled_Tests">Cancelled tests</Nav.Link>
            <Nav.Link href="Cancelled_Tests">Cancelled tests</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
	  <Outlet />
    </>
  );
};

export default Navigation;
