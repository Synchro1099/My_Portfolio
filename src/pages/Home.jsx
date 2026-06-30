import React from 'react'
import { Container, Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import homeLogo from '../assets/about1.png'
import Particle from '../components/Particle';
import About from '../components/Home/About';
import Type from '../components/Home/Type';
import SEO from '../components/SEO';
import { AiOutlineDownload, AiOutlineArrowRight } from "react-icons/ai";

const Home = () => {
  return (
    <>
      <SEO
        title="Home"
        path="/"
        description="Jan Mark Pereda is a Full Stack Web Developer building scalable web applications, business systems, and performance-focused digital products."
      />
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
                <span className="hero-name-subtitle">Full Stack Web Developer</span>
              </h1>

              <div className="hero-typewriter">
                <Type />
              </div>

              <div className="hero-description-wrapper">
                <p className="hero-description">
                    Full Stack Web Developer building scalable web applications and digital solutions that solve real business problems.
                  </p>

                  <p className="hero-description-secondary">
                    I develop modern applications across frontend, backend, databases, APIs, and cloud environments. I focus on creating reliable, user-focused solutions that improve workflows, automate processes, and help businesses grow.
                  </p>

              </div>

              <div className="hero-stats">
                <div className="hero-stat-item">
                  <div className="hero-stat-number">10,000+</div>
                  <div className="hero-stat-label">Learners Supported</div>
                </div>
                <div className="hero-stat-item">
                  <div className="hero-stat-number">70%</div>
                  <div className="hero-stat-label">Stock Error Reduction</div>
                </div>
                <div className="hero-stat-item">
                  <div className="hero-stat-number">99.9%</div>
                  <div className="hero-stat-label">Platform Uptime</div>
                </div>
              </div>

              <div className="hero-buttons">
                <Button 
                  as={Link} 
                  to="/contact" 
                  className="btn-primary-hero"
                >
                  Let's Build Your Next System
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
              <p className="hero-final-message">
                I don't just write code. I understand problems, choose the right technology, and build solutions that create value.
              </p>
            </Col>

            <Col lg={6} className="hero-image-section">
              <div className="hero-image-wrapper">
                <div className="hero-image-background"></div>
                <img
                  src={homeLogo}
                  alt="Jan Mark Pereda"
                  className="hero-image"
                  loading="eager"
                  decoding="async"
                />
              </div>
            </Col>
            </Row>
          </Container>
        </Container>
        <About />
      </section>
    </>
  );
}

export default Home