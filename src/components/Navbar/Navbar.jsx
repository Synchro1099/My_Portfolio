import React, { useEffect, useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import { Link, useLocation } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";

function NavBar() {
  const [expand, updateExpanded] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    updateExpanded(false);
  }, [location.pathname]);

  return (
    <Navbar
      expanded={expand}
      fixed="top"
      expand="lg"
      className={scrolled ? "modern-navbar is-scrolled" : "modern-navbar"}
    >
      <Container className="navbar-container">
        <Navbar.Brand as={Link} to="/" className="navbar-brand-modern">
          <div className="logo-icon"></div>
          <span className="brand-text">Jan Mark<span className="brand-dot">.</span></span>
        </Navbar.Brand>
        
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          aria-label="Toggle navigation menu"
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
                aria-current={location.pathname === "/" ? "page" : undefined}
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
                aria-current={location.pathname === "/skillset" ? "page" : undefined}
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
                aria-current={location.pathname === "/project" ? "page" : undefined}
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
                aria-current={location.pathname === "/resume" ? "page" : undefined}
                onClick={() => updateExpanded(false)}
              >
                Resume
              </Nav.Link>
            </Nav.Item>
          </Nav>
          
          <div className="navbar-button-container">
            <ThemeToggle />
            <Button 
              as={Link} 
              to="/contact" 
              className="contact-button"
              onClick={() => updateExpanded(false)}
            >
              Hire Me
            </Button>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
