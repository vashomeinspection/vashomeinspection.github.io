import React, { useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import logo from "../Assets/logo.png";
import { Link } from "react-router-dom";


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
        <Navbar
          fixed="top"
          className="justify-content-center"
          >
                <Navbar.Brand href="/">
                    <img src={logo} className="img-fluid logo" alt="brand" /> 
                </Navbar.Brand>
 
                <Nav className="ml-auto" defaultActiveKey="#home">         
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
        </Navbar>
    );
}

export default NavBar;
