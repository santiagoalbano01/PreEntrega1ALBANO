import React, { useState } from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import CartWidget from '../CartWidget/CartWidget';
import Logo from './Logo';
import { Link } from 'react-router-dom';
import './NavBar.css';

function NavBar() {
  const [expanded, setExpanded] = useState(false);

  const handleToggle = () => {
    setExpanded(!expanded);
  };

  return (
    <>
      <Navbar bg="white" expand="lg" variant="black">
        <Container>
          <Navbar.Brand as={Link} to="/">
            <Logo />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" onClick={handleToggle} />
          <Navbar.Collapse id="responsive-navbar-nav" className={`${expanded ? 'show' : ''}`}>
            <Nav className="me-auto">
              <Link to="/" className="nav-link">
                MUNDO PHONE
              </Link>
              <NavDropdown title="CATEGORÍAS" id="basic-nav-dropdown">
                <NavDropdown.Item as={Link} to="/category/Samsung">
                  Samsung
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/category/Motorola">
                  Motorola
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/category/iPhone">
                  iPhone
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/category/Xiaomi">
                  Xiaomi
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/category/Nokia">
                  Nokia
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
        <div className="floating-cart-button">
          <Link to="/cart">
            <CartWidget />
          </Link>
        </div>
      </Navbar>
    </>
  );
}

export default NavBar;
