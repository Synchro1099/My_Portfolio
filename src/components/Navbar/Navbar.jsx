import React, { useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import { Link, useLocation } from "react-router-dom";

function NavBar() {
  const [expand, updateExpanded] = useState(false);
  const location = useLocation();

  return (
    <Navbar
      expanded={expand}
      fixed="top"
      expand="lg"
      className="modern-navbar"
    >
      <Container className="navbar-container">
        <Navbar.Brand as={Link} to="/" className="navbar-brand-modern">
          <div className="logo-icon"></div>
          <span className="brand-text">Portfolio</span>
        </Navbar.Brand>
        
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          className="navbar-toggler-modern"
          onClick={() => {
            updateExpanded(expand ? false : "expanded");
          }}
        >
          <span></span>
          <span></span>
          <span></span>
        </Navbar.Toggle>
        
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="navbar-nav-center">
            <Nav.Item>
              <Nav.Link 
                as={Link} 
                to="/" 
                className={location.pathname === "/" ? "nav-link active" : "nav-link"}
                onClick={() => updateExpanded(false)}
              >
                Home
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/skillset"
                className={location.pathname === "/skillset" ? "nav-link active" : "nav-link"}
                onClick={() => updateExpanded(false)}
              >
                Skillset
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/project"
                className={location.pathname === "/project" ? "nav-link active" : "nav-link"}
                onClick={() => updateExpanded(false)}
              >
                Projects
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/resume"
                className={location.pathname === "/resume" ? "nav-link active" : "nav-link"}
                onClick={() => updateExpanded(false)}
              >
                Resume
              </Nav.Link>
            </Nav.Item>
          </Nav>
          
          <div className="navbar-button-container">
            <Button 
              as={Link} 
              to="/contact" 
              className="contact-button"
              onClick={() => updateExpanded(false)}
            >
              Contact
            </Button>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
