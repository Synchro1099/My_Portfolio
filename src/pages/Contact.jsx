import React from 'react'
import { Container } from "react-bootstrap";
import Particle from '../components/Particle';
import ContactForm from '../components/Contact/Contact';
import Social from '../components/Contact/Social';
import SEO from '../components/SEO';

const Contact = () => {
  return (
    <div className="contact-page">
      <SEO
        title="Contact"
        path="/contact"
        description="Get in touch with Jan Mark Pereda for project inquiries, freelance work, and collaboration opportunities."
      />
      <Particle />
      <div className="contact-hero-section">
        <Container>
          <div className="contact-hero-content">
            <div className="contact-hero-badge">CONTACT</div>
            <h1 className="contact-hero-title">
              Let's <span className="contact-hero-accent">Work Together</span>
            </h1>
            <p className="contact-hero-description">
              Have a project in mind or want to discuss opportunities? 
              I'd love to hear from you. Send me a message and I'll respond as soon as possible.
            </p>
          </div>
        </Container>
      </div>
      
      <Container className="contact-form-section">
        <ContactForm />
      </Container>

      <Container className="contact-social-section">
        <Social />
      </Container>
    </div>
  )
}

export default Contact