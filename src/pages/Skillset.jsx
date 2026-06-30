import React from "react";
import { Container } from "react-bootstrap";

import Particle from '../components/Particle'
import Techstack from "../components/Skillset/Techstack";
import Toolstack from "../components/Skillset/Toolstack";
import SEO from '../components/SEO';



const Skillset = () => {
  return (
    <>
      <SEO
        title="Skillset"
        path="/skillset"
        description="Discover Jan Mark Pereda's professional skillset, technologies, and tools used in modern web development."
      />
      <Container fluid className="about-section">
        <Particle />
        <Container>
          <h1 className="project-heading">
            Professional <strong className="yellow">Skillset </strong>
          </h1>
          <p className="skillset-intro">
            I adapt to project requirements and choose the right tools to build scalable digital solutions across frontend, backend, databases, cloud, and growth-focused delivery.
          </p>

          <Techstack />

          <h1 className="project-heading">
            <strong className="yellow">Tools</strong> & Cloud Workflow
          </h1>
          <Toolstack />

          
          
        </Container>
      </Container>
    </>
  )
}

export default Skillset