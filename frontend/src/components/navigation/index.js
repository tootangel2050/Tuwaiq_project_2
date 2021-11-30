import React from "react";
import { Outlet } from "react-router-dom";
import { Navbar, Nav, Container } from "react-bootstrap";


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
