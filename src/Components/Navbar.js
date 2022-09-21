import React, { useState } from "react";
import logo from "../Assets/logo.png";
import { Link } from "react-router-dom";
import { Container, Button, Navbar, Nav} from "react-bootstrap";


function NavBar() {
    const [expand, updateExpanded] = useState(false);
    const [navColour, updateNavbar] = useState(false);

    function scrollHandler() {
        if (window.scrollY >= 20) {
            updateNavbar(true);
        } else {
            updateNavbar(false);
        }
    }

    window.addEventListener("scroll", scrollHandler);

    return (
        <Navbar fixed="top"
                expand="md">
            <Container>
                <Navbar.Brand href="/">
                    <img src={logo} className="img-fluid logo" alt="brand" /> 
                </Navbar.Brand>
                <Navbar.Toggle
                    aria-controls="responsive-navbar-nav"
                    onClick={() => {
                        updateExpanded(expand ? false : "expanded");
                    }}
                    >
                    <span></span>
                    <span></span>
                    <span></span>
                </Navbar.Toggle>
                <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto" defaultActiveKey="#home">         
                    <Nav.Item href="/">
                        <Nav.Link as={Link} to="/" onClick={() => updateExpanded(false)}> Home </Nav.Link>
                    </Nav.Item>
                    <Nav.Item >
                        <Nav.Link as={Link} to="/about" onClick={() => updateExpanded(false)}> About </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link as={Link} to="/services" onClick={() => updateExpanded(false)}> Services </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link as={Link} to="/reviews" onClick={() => updateExpanded(false)}> Reviews </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link as={Link} to="/contact-us" onClick={() => updateExpanded(false)}> Contact us </Nav.Link>
                    </Nav.Item>
                </Nav>
                <div id="contactButton">
                    <Button
                        variant="outline-light"
                        href="/contact-us"
                        style={{ width: "215px" }}
                        >
                        Schedule Inspection
                    </Button>
                </div>
            </Navbar.Collapse>
        </Container>
            
        </Navbar>
    );
}

export default NavBar;
