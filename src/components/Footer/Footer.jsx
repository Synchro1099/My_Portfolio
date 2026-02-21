import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";

import { 
  AiFillGithub,
  AiFillLinkedin
} from "react-icons/ai";

const Footer = () => {
  const location = useLocation();
  let date = new Date();
  let year = date.getFullYear();

  return (
    <footer className="modern-footer">
      <div className="footer-top-bar"></div>
      <Container className="footer-main">
        <Row className="footer-content align-items-center">
          <Col lg={4} md={12} className="footer-left">
            <Link to="/" className="footer-brand">
              <div className="footer-logo-icon">
                <img src={`${process.env.PUBLIC_URL}/Logo.png`} alt="Jan Mark logo" className="footer-logo-image" />
              </div>
              <div className="footer-brand-text">
                <span className="footer-name">Jan Mark Pereda</span>
                <span className="footer-role">Full-Stack Developer</span>
              </div>
            </Link>
            <p className="footer-summary">
              Building reliable, modern web solutions that help businesses grow and deliver better user experiences.
            </p>
          </Col>

          <Col lg={4} md={12} className="footer-column">
            <ul className="footer-links-list footer-links-inline">
              <li>
                <Link to="/" className={location.pathname === "/" ? "footer-link active" : "footer-link"}>Home</Link>
              </li>
              <li>
                <Link to="/project" className={location.pathname === "/project" ? "footer-link active" : "footer-link"}>Projects</Link>
              </li>
              <li>
                <Link to="/skillset" className={location.pathname === "/skillset" ? "footer-link active" : "footer-link"}>Skillset</Link>
              </li>
              <li>
                <Link to="/resume" className={location.pathname === "/resume" ? "footer-link active" : "footer-link"}>Resume</Link>
              </li>
              <li>
                <Link to="/contact" className={location.pathname === "/contact" ? "footer-link active" : "footer-link"}>Contact</Link>
              </li>
            </ul>
          </Col>

          <Col lg={4} md={12} className="footer-right">
            <div className="footer-cta-wrap">
              <Link to="/contact" className="footer-cta-btn">Let's Work Together</Link>
            </div>
            <ul className="footer-social-icons">
              <li>
                <a
                  href="https://github.com/Synchro1099"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="github"
                  className="footer-social-icon"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/jan-mark-pereda-209806262/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="linkedin"
                  className="footer-social-icon"
                >
                  <AiFillLinkedin />
                </a>
              </li>
            </ul>
          </Col>
        </Row>

        <Row className="footer-bottom">
          <Col md={12} className="footer-bottom-left">
            <span className="footer-bottom-text">© {year} Jan Mark Pereda. All rights reserved.</span>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
