import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "../components/Projects/ProjectCard";
import FeaturedProject from "../components/Projects/FeaturedProject";
import Particle from "../components/Particle";
import SEO from "../components/SEO";
import Reveal from "../components/Reveal";
import { featuredProject, projects } from "../data/projects";

const Projects = () => {
  return (
    <>
      <SEO
        title="Projects"
        path="/project"
        description="Explore real-world applications built by Jan Mark Pereda, including S-Villa, a race-condition-safe booking platform built with Next.js and Supabase."
      />
      <Container fluid className="project-section">
        <Particle />
        <Container>
          <h1 className="project-heading">
            Real-World <strong className="yellow">Applications & Solutions</strong>
          </h1>
          <p className="project-intro-text">
            I create scalable web applications and digital solutions that solve real business problems. I analyze requirements, design effective solutions, and build products that improve user experience, efficiency, and business operations.
          </p>

          <FeaturedProject project={featuredProject} />

          <Reveal>
            <h2 className="project-subheading">
              More <strong className="yellow">Client Work</strong>
            </h2>
          </Reveal>

          <Row className="project-grid">
            {projects.map((project, index) => (
              <Col md={6} className="project-card" key={project.id} id={project.id}>
                <Reveal className="h-100" delay={(index % 2) * 120}>
                  <ProjectCard {...project} />
                </Reveal>
              </Col>
            ))}
          </Row>

          <Reveal className="project-categories-section">
            <h2 className="project-subheading">
              What I <strong className="yellow">Build</strong>
            </h2>
            <div className="project-categories-grid">
              <div className="project-category-card spotlight">
                <h3>Business Solutions</h3>
                <p>Custom systems that help businesses automate workflows, manage information, improve efficiency, and make better decisions.</p>
              </div>
              <div className="project-category-card spotlight">
                <h3>Booking & Reservation Systems</h3>
                <p>Scheduling platforms with real-time availability, payment verification, and owner dashboards that run day-to-day operations.</p>
              </div>
              <div className="project-category-card spotlight">
                <h3>Learning & Digital Platforms</h3>
                <p>Platforms that support online learning, user management, content delivery, and scalable digital experiences.</p>
              </div>
              <div className="project-category-card spotlight">
                <h3>E-commerce & Online Experiences</h3>
                <p>Digital commerce solutions that help businesses manage products, improve customer experience, and grow online.</p>
              </div>
              <div className="project-category-card spotlight">
                <h3>Custom Web Applications</h3>
                <p>Tailored applications based on unique business needs, from internal tools to customer-facing platforms.</p>
              </div>
              <div className="project-category-card spotlight">
                <h3>Marketing & Digital Growth</h3>
                <p>Websites, landing pages, and analytics-driven experiences that help businesses improve their online presence.</p>
              </div>
            </div>
          </Reveal>

          <p className="project-final-message">
            I don't just write code. I understand problems, choose the right technology, and build solutions that create value.
          </p>
        </Container>
      </Container>
    </>
  );
};

export default Projects;
