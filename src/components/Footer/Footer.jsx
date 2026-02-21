import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom"; // only import once

import { 
  AiFillGithub,
  AiOutlineFacebook,
  AiFillLinkedin
} from "react-icons/ai";

const Footer = () => {
  const location = useLocation(); // for active link highlighting if needed
  let date = new Date();
  let year = date.getFullYear();

  return (
    <footer className="modern-footer">
      <div className="footer-top-bar"></div>
      <Container className="footer-main">
        <Row className="footer-content">
          <Col lg={3} md={6} className="footer-left">
            <div className="footer-logo">
              <div className="footer-logo-icon">
                <img src={`${process.env.PUBLIC_URL}/Logo.png`} alt="Jan Mark logo" className="footer-logo-image" />
              </div>
            </div>
            <div className="footer-copyright-links">
              <span className="footer-copyright">Copyright © {year} Jan Mark Pereda</span>
              <div className="footer-legal-links">
                <a href="#privacy" className="footer-link">Privacy & Policy</a>
                <span className="footer-link-separator">|</span>
                <a href="#terms" className="footer-link">Terms</a>
                <span className="footer-link-separator">|</span>
                <a href="#sitemap" className="footer-link">Sitemap</a>
              </div>
            </div>
          </Col>

          <Col lg={2} md={6} className="footer-column">
            <h5 className="footer-heading">Help</h5>
            <ul className="footer-links-list">
              <li>
                <Link 
                  to="/contact" 
                  className={location.pathname === "/contact" ? "footer-link active" : "footer-link"}
                >
                  Contact Me
                </Link>
              </li>
              <li>
                <Link 
                  to="/resume" 
                  className={location.pathname === "/resume" ? "footer-link active" : "footer-link"}
                >
                  Resume
                </Link>
              </li>
            </ul>
          </Col>

          <Col lg={2} md={6} className="footer-column">
            <h5 className="footer-heading">Portfolio</h5>
            <ul className="footer-links-list">
              <li>
                <Link 
                  to="/" 
                  className={location.pathname === "/" ? "footer-link active" : "footer-link"}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link 
                  to="/project" 
                  className={location.pathname === "/project" ? "footer-link active" : "footer-link"}
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link 
                  to="/skillset" 
                  className={location.pathname === "/skillset" ? "footer-link active" : "footer-link"}
                >
                  Skills
                </Link>
              </li>
            </ul>
          </Col>

          <Col lg={5} md={6} className="footer-right">
            <div className="footer-credentials">
              <div className="footer-credential-item">
                <div className="credential-badge">
                  <span className="badge-text">Portfolio</span>
                </div>
              </div>
              <div className="footer-credential-item">
                <div className="credential-badge">
                  <span className="badge-text">Professional</span>
                </div>
              </div>
            </div>
          </Col>
        </Row>

        <Row className="footer-bottom">
          <Col md={6} className="footer-bottom-left">
            <span className="footer-bottom-text">All rights reserved</span>
          </Col>
          <Col md={6} className="footer-bottom-right">
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
                  href="https://www.facebook.com/pereda.janmark"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="facebook"
                  className="footer-social-icon"
                >
                  <AiOutlineFacebook />
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
      </Container>
    </footer>
  );
}

export default Footer;
