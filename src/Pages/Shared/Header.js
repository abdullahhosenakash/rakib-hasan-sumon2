import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logo from '../../Assets/logo2.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';


const Header = () => {
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="#home"><img src={logo} alt="" srcset="" /></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <NavDropdown title="Portfolio" id="collasible-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Street Photography</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">
                                Documentary Photography
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Travel Photography</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.4">
                                Fine Art Photography
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.4">
                                Travel Photography                            </NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link href="#features">About</Nav.Link>
                        <Nav.Link href="#features">Contact</Nav.Link>
                    </Nav>
                    <Nav className="d-flex flex-row gap-3">
                        <Nav.Link href="#deets">
                            <FontAwesomeIcon icon={faFacebookF} />
                        </Nav.Link>
                        <Nav.Link href="#memes">
                            <FontAwesomeIcon icon={faInstagram} />
                        </Nav.Link>
                        <Nav.Link href="#memes">
                            <FontAwesomeIcon icon={faTwitter} />
                        </Nav.Link>
                        <Nav.Link href="#memes">
                            <span>E</span>
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;