import React from 'react'
import { Container, Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import Tilt from "react-parallax-tilt";
import Particle from '../components/Particle';
import About from '../components/Home/About';
import Type from '../components/Home/Type';
import CodeWindow from '../components/Home/CodeWindow';
import CountUp from '../components/Home/CountUp';
import TechMarquee from '../components/Home/TechMarquee';
import Process from '../components/Home/Process';
import Reveal from '../components/Reveal';
import SEO from '../components/SEO';
import { featuredProject } from '../data/projects';
import { AiOutlineDownload, AiOutlineArrowRight } from "react-icons/ai";
import { SiReact, SiNextdotjs, SiSupabase } from "react-icons/si";

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
          <div className="hero-glow hero-glow-one" aria-hidden="true"></div>
          <div className="hero-glow hero-glow-two" aria-hidden="true"></div>
          <Container className="home-content">
            <Row className="align-items-center">
            <Col lg={6} className="hero-text-section">
              <div className="hero-greeting">
                <span className="status-pill">
                  <span className="status-dot" aria-hidden="true"></span>
                  Available for new projects
                </span>
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
                  <div className="hero-stat-number"><CountUp end={10000} suffix="+" /></div>
                  <div className="hero-stat-label">Learners Supported</div>
                </div>
                <div className="hero-stat-item">
                  <div className="hero-stat-number"><CountUp end={70} suffix="%" /></div>
                  <div className="hero-stat-label">Stock Error Reduction</div>
                </div>
                <div className="hero-stat-item">
                  <div className="hero-stat-number"><CountUp end={99.9} decimals={1} suffix="%" /></div>
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
                  <AiOutlineArrowRight className="btn-arrow" style={{ marginLeft: "8px" }} />
                </Button>
                <Button
                  as={Link}
                  to="/resume"
                  variant="outline-primary"
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
                <Tilt
                  tiltMaxAngleX={4}
                  tiltMaxAngleY={4}
                  glareEnable
                  glareMaxOpacity={0.08}
                  glareBorderRadius="16px"
                  className="hero-tilt"
                >
                  <CodeWindow />
                </Tilt>
                <span className="hero-float-badge hero-float-one" aria-hidden="true"><SiReact /> React</span>
                <span className="hero-float-badge hero-float-two" aria-hidden="true"><SiNextdotjs /> Next.js</span>
                <span className="hero-float-badge hero-float-three" aria-hidden="true"><SiSupabase /> Supabase</span>
              </div>
            </Col>
            </Row>
          </Container>
        </Container>

        <TechMarquee />

        <Container fluid className="home-latest-project">
          <Container>
            <Reveal className="home-latest-card spotlight">
              <Link
                to={`/project#${featuredProject.id}`}
                className="home-latest-media"
                aria-label={`View ${featuredProject.title} case study`}
              >
                <img
                  src={featuredProject.imgPath}
                  alt={`${featuredProject.title} homepage`}
                  loading="lazy"
                  decoding="async"
                  width="1200"
                  height="750"
                />
              </Link>
              <div>
                <div className="featured-project-badges">
                  <span className="featured-badge">Latest Project</span>
                  <span className="featured-category">{featuredProject.category}</span>
                </div>
                <h2>{featuredProject.title}</h2>
                <p>
                  A booking platform with a customer site and an Owner Portal. Double-bookings are blocked at the database level, and prices are calculated only on the server.
                </p>
                <div className="project-tech-list">
                  {featuredProject.techStack.slice(0, 5).map((tech) => (
                    <span className="project-tech-chip" key={tech}>{tech}</span>
                  ))}
                </div>
                <div className="featured-actions">
                  <Button as={Link} to={`/project#${featuredProject.id}`} className="btn-primary-hero">
                    View Case Study
                    <AiOutlineArrowRight className="btn-arrow" style={{ marginLeft: "8px" }} />
                  </Button>
                  <Button
                    href={featuredProject.demoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    variant="outline-primary"
                    className="btn-secondary-hero"
                  >
                    Live Site
                  </Button>
                </div>
              </div>
            </Reveal>
          </Container>
        </Container>

        <Process />

        <About />
      </section>
    </>
  );
}

export default Home
