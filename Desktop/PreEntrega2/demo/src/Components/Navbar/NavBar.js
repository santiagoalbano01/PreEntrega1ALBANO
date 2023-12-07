import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import CartWidget from '../CartWidget/CartWidget'
import Logo from './Logo';
import { Link } from 'react-router-dom';
import './NavBar.css'

function NavBar() {
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand to="/"> <Logo/> </Navbar.Brand>
          <Nav className="me-auto">
            <Link to="/" className='nav-link'>MUNDO PHONE</Link>
            <Link to="/category/Samsung" className='nav-link'>Samsung</Link>
            <Link to="/category/Motorola" className='nav-link'>Motorola</Link>
            <Link to="/category/iPhone" className='nav-link'>Iphone</Link>
           
          </Nav>
          <Link to="/cart">   <CartWidget/>   </Link>
        </Container>
      </Navbar>

      </>
      );
}

export default NavBar;