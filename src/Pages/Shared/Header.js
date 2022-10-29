import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logo from '../../Assets/logo2.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';
import './Shared.css';


const Header = () => {
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" className='fixed-top'>
            <Container>
                <Navbar.Brand as={Link} to='/'><img src={logo} alt="" srcSet="" /></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <NavDropdown title="Portfolio" id="collasible-nav-dropdown">
                            <NavDropdown.Item as={Link} to='/streetPhotography'>Street Photography</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to='/documentaryPhotography'>
                                Documentary Photography
                            </NavDropdown.Item>
                            <NavDropdown.Item as={Link} to='/travelPhotography'>Travel Photography</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to='/fineArtPhotography'>
                                Fine Art Photography
                            </NavDropdown.Item>
                            <NavDropdown.Item as={Link} to='/naturePhotography'>
                                Nature Photography                            </NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link as={Link} to='/about'>About</Nav.Link>
                        <Nav.Link as={Link} to='/contact'>Contact</Nav.Link>
                    </Nav>
                    <Nav className="d-flex flex-row gap-3">
                        <Nav.Link href="https://www.facebook.com/rhsumonphoto" target="_blank">
                            <FontAwesomeIcon icon={faFacebookF} />
                        </Nav.Link>
                        <Nav.Link href="https://www.instagram.com/rhsumon90/" target="_blank">
                            <FontAwesomeIcon icon={faInstagram} />
                        </Nav.Link>
                        <Nav.Link href="https://twitter.com/rhsumonphoto" target="_blank">
                            <FontAwesomeIcon icon={faTwitter} />
                        </Nav.Link>
                        <Nav.Link href="https://www.eyeem.com/rhsumon" target="_blank">
                            <span>E</span>
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;