import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Row,
  Col,
  Card,
  Button,
  NavItem,
  Navbar,
  Container,
  Nav,
  NavDropdown,
} from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { selectedProducts } from "./reducer/action";

const NavHead = () => {
  const products = useSelector((state) => state.allProducts.products);
  const dispatch = useDispatch();
  return (
    <Navbar bg="primary" expand="lg">
      <Container>
        <Navbar.Brand href="/">Amazon</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">home</Nav.Link>
            <Nav.Link href="/WomensWear">Women</Nav.Link>
            <Nav.Link href="/MensWear">Men</Nav.Link>
            <Nav.Link href="/Jewellery">Jewelery</Nav.Link>
            <Nav.Link href="/Electronics">Electronics</Nav.Link>
            {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown> */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavHead;
