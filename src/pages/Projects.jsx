import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "../components/Projects/ProjectCard";
import Particle from "../components/Particle";

const Projects = () => {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Projects <strong className="yellow">Works </strong>
        </h1>
        <p style={{ color: "#234C6A" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
         <Col md={4} className="project-card">
              <ProjectCard
                imgPath="https://i.ibb.co/XxnSxPN4/lily-co.png"
                title="Lily & Co."
                description="A jewelry e-commerce website for Lily & Co. PH, featuring elegant handcrafted rings and fine jewelry with a clean, modern, and user-friendly design"
                demoLink="https://lilyandco.com.ph/"
              />
           </Col>


          <Col md={4} className="project-card">
            <ProjectCard
              imgPath="https://i.ibb.co/tMtsbJLr/Screenshot-2025-12-05-162113.png"
              title="MST CONNECT PH"
              description="MSTCONNECT PH is an online training and consultancy platform offering affordable workshops and courses across various fields, including engineering, IT, business, and personal development. It empowers individuals to enhance their skills, build their personal brand, and advance their careers. The platform connects learners, instructors, and professionals, fostering a supportive community for growth and learning. With practical, industry-relevant content, MSTCONNECT PH ensures participants gain real-world knowledge they can apply immediately. Its mission is to make quality education accessible, convenient, and engaging for everyone."
             demoLink="https://www.mstconnectph.com/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default Projects;
