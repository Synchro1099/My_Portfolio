import React from 'react'
import { Container, Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import homeLogo from '../assets/about1.png'
import Particle from '../components/Particle';
import About from '../components/Home/About';
import Type from '../components/Home/Type';
import { AiOutlineDownload, AiOutlineArrowRight } from "react-icons/ai";

const Home = () => {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row className="align-items-center">
            <Col lg={6} className="hero-text-section">
              <div className="hero-greeting">
                <span className="greeting-text">Welcome to My Portfolio</span>
              </div>
              
              <h1 className="hero-name">
                <span className="hero-name-line">I'm <span className="main-name">Jan Mark Pereda</span></span>
                <span className="hero-name-subtitle">UX/UI Designer & Full-Stack Developer</span>
              </h1>

              <div className="hero-typewriter">
                <Type />
              </div>

              <div className="hero-description-wrapper">
                <p className="hero-description">
                  With <strong>3 years of experience</strong> in creating exceptional digital experiences, 
                  I bridge the gap between <strong>beautiful design</strong> and <strong>robust functionality</strong>. 
                  I transform complex ideas into intuitive, user-centered solutions that not only look stunning 
                  but perform flawlessly.
                </p>
                <p className="hero-description-secondary">
                  Specializing in <strong>React.js</strong>, <strong>Node.js</strong>, and <strong>MongoDB</strong>, 
                  I craft full-stack applications with a focus on user experience, performance, and scalability. 
                  From concept to deployment, I bring your vision to life.
                </p>
              </div>

              <div className="hero-stats">
                <div className="hero-stat-item">
                  <div className="hero-stat-number">3+</div>
                  <div className="hero-stat-label">Years Experience</div>
                </div>
                <div className="hero-stat-item">
                  <div className="hero-stat-number">2</div>
                  <div className="hero-stat-label">Projects Delivered</div>
                </div>
                <div className="hero-stat-item">
                  <div className="hero-stat-number">100%</div>
                  <div className="hero-stat-label">Client Satisfaction</div>
                </div>
              </div>

              <div className="hero-buttons">
                <Button 
                  as={Link} 
                  to="/contact" 
                  className="btn-primary-hero"
                >
                  Let's Work Together
                  <AiOutlineArrowRight style={{ marginLeft: "8px" }} />
                </Button>
                <Button 
                  as={Link} 
                  to="/resume" 
                  className="btn-secondary-hero"
                >
                  <AiOutlineDownload style={{ marginRight: "8px" }} />
                  View Resume
                </Button>
              </div>
            </Col>

            <Col lg={6} className="hero-image-section">
              <div className="hero-image-wrapper">
                <div className="hero-image-background"></div>
                <img
                  src={homeLogo}
                  alt="Jan Mark Pereda"
                  className="hero-image"
                />
              </div>
            </Col>
          </Row>
        </Container>
      </Container>
      <About />
    </section>
  );
}

export default Home