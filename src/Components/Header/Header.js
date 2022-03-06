import React from 'react';
import './Header.css';
import logo from '../../images/logo.png';
import { Container, Nav, Navbar } from 'react-bootstrap';

const Header = () => {
    return (
        <section className="container">
            <div className="d-flex justify-content-center mt-2">
                <img className="w-25 " src={logo} alt="logo" />
            </div>

            <Navbar className="mt-2" bg="dark" variant="dark">
                <Container>
                    <Nav className="me-auto">
                        <Nav.Link href="#">Shop</Nav.Link>
                        <Nav.Link href="#">Order</Nav.Link>
                        <Nav.Link href="#">Manage inventory </Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </section>
    );
};

export default Header;