import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import CartWidget from '../CartWidget/CartWidget'
import Logo from './Logo';
import './NavBar.css'

function NavBar() {
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="/"> <Logo/> </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">MUNDO PHONE</Nav.Link>
            <Nav.Link href="/samsung">Samsung</Nav.Link>
            <Nav.Link href="/motorola">Motorola</Nav.Link>
            <Nav.Link href="/iphone">Iphone</Nav.Link>
           
          </Nav>
          <Nav.Link href="/cart">   <CartWidget/>   </Nav.Link>
        </Container>
      </Navbar>

      </>
      );
}

export default NavBar;