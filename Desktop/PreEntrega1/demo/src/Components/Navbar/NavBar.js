import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FaShoppingCart } from 'react-icons/fa';
import './NavBar.css';

function NavBar() {
    const notificationCount = 0;
    return (
        <div>
            <Navbar bg="dark" data-bs-theme="dark">
                <Container>
                    <Navbar.Brand href="#index">MUNDO PHONE</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#celulares">Celulares</Nav.Link>
                        <Nav.Link href="#ventas">Ventas</Nav.Link>
                    </Nav>
                    <div className="cart-icon">
                        <FaShoppingCart className='cart'/>
                        <span className="notification-badge">{notificationCount}</span>
                    </div>
                </Container>
            </Navbar>
        </div>

    );
}

export default NavBar;