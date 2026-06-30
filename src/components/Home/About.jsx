import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProfilePic from "../../assets/picture.jpg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineFacebook
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";


const About = () => {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h2 style={{ fontSize: "2.6em" }}>
               <span className="yellow"> About ME </span> 
            </h2>
               <p className="home-about-body">
                    I am a Full Stack Web Developer focused on building practical, scalable, and user-friendly web applications.
                    <br />
                    <br />
                    My experience includes developing business systems, digital platforms, e-commerce solutions, dashboards, and custom applications.
                    <br />
                    <br />
                    I enjoy understanding problems, designing effective solutions, and using the right technologies to create reliable products.
                  </p>

              <div className="experience-summary-card">
                <h2 className="experience-title">Professional Experience</h2>
                <p className="experience-summary-text">
                  Experienced in building web applications and digital solutions for different industries. I have worked on production systems involving business operations, online platforms, integrations, automation, and performance optimization.
                </p>
                <ul className="experience-summary-list">
                  <li>Built scalable web applications and internal business systems.</li>
                  <li>Developed platforms with frontend, backend, database, and API integrations.</li>
                  <li>Improved workflows through automation and optimized solutions.</li>
                  <li>Worked with different technologies and adapted to project requirements.</li>
                </ul>
              </div>


          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={ProfilePic} className="img-fluid" alt="Portrait of Jan Mark Pereda" loading="lazy" decoding="async" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h3>FIND ME ON</h3>
            <p>
              Feel free to <span className="yellow">connect</span> with me.
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/Synchro1099"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                  aria-label="github"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.facebook.com/pereda.janmark"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                  aria-label="facebook"
                >
                  <AiOutlineFacebook />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/jan-mark-pereda-209806262/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                  aria-label="linkedin"
                >
                  <FaLinkedinIn />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default About;
