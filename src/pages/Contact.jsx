import React from 'react'
import { Container } from "react-bootstrap";
import Particle from '../components/Particle';
import ContactForm from '../components/Contact/Contact';
import Social from '../components/Contact/Social';
import Reveal from "../components/Reveal";
import SEO from '../components/SEO';

const Contact = () => {
  return (
    <div className="contact-page">
      <SEO
        title="Contact"
        path="/contact"
        description="Contact Jan Mark Pereda for Full Stack Developer roles, freelance web projects, and technical collaboration opportunities."
      />
      <Particle />
      <div className="contact-hero-section">
        <Container>
          <Reveal className="contact-hero-content">
            <div className="contact-hero-badge">CONTACT</div>
            <h1 className="contact-hero-title">
              Let's <span className="contact-hero-accent">Build Something Valuable</span>
            </h1>
            <p className="contact-hero-description">
              Open to Full Stack Developer opportunities, consulting engagements, and product-focused collaborations.
              Share your goals, timeline, and scope, and I will get back to you as soon as possible.
            </p>
          </Reveal>
        </Container>
      </div>
      
      <Container className="contact-form-section">
        <Reveal delay={120}>
          <ContactForm />
        </Reveal>
      </Container>

      <Container className="contact-social-section">
        <Social />
      </Container>
    </div>
  )
}

export default Contact