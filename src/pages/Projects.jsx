import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "../components/Projects/ProjectCard";
import Particle from "../components/Particle";
import SEO from "../components/SEO";

const Projects = () => {
  return (
    <>
      <SEO
        title="Projects"
        path="/project"
        description="Explore real-world applications and scalable digital solutions built by Jan Mark Pereda to solve business problems across industries."
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

          <div className="project-categories-grid">
            <div className="project-category-card">
              <h2>Business Solutions</h2>
              <p>I build custom systems that help businesses automate workflows, manage information, improve efficiency, and make better decisions.</p>
            </div>
            <div className="project-category-card">
              <h2>Learning & Digital Platforms</h2>
              <p>I develop platforms that support online learning, user management, content delivery, and scalable digital experiences.</p>
            </div>
            <div className="project-category-card">
              <h2>E-commerce & Online Experiences</h2>
              <p>I create digital commerce solutions that help businesses manage products, improve customer experience, and grow online.</p>
            </div>
            <div className="project-category-card">
              <h2>Custom Web Applications</h2>
              <p>I develop tailored applications based on unique business needs, from internal tools to customer-facing platforms.</p>
            </div>
            <div className="project-category-card project-category-full-width">
              <h2>Marketing & Digital Growth Solutions</h2>
              <p>I create websites, landing pages, analytics-driven experiences, and digital solutions that help businesses improve their online presence.</p>
            </div>
          </div>

          <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
         <Col md={4} className="project-card">
              <ProjectCard
                imgPath="https://i.ibb.co/XxnSxPN4/lily-co.png"
                title="Lily & Co."
                businessProblem="The brand needed a more reliable way to manage inventory and daily e-commerce operations while maintaining a smooth customer buying experience."
                solutionBuilt="A full-stack business management and commerce workflow that connected stock monitoring, product updates, and storefront operations."
                contribution="Led full-stack implementation across frontend experience, backend logic, inventory automation, and deployment optimization."
                techStack={["React", "Shopify", "PostgreSQL", "AWS", "JavaScript"]}
                outcome={[
                  "Reduced out-of-stock errors by 70% via custom stocking and inventory automation.",
                  "Improved operational speed by reducing repetitive manual inventory tasks.",
                  "Strengthened platform reliability through modular architecture improvements."
                ]}
                demoLink="https://lilyandco.com.ph/"
              />
           </Col>


          <Col md={4} className="project-card">
            <ProjectCard
              imgPath="https://i.ibb.co/tMtsbJLr/Screenshot-2025-12-05-162113.png"
              title="MST CONNECT PH"
              businessProblem="The organization needed to deliver learning services to a growing user base while keeping assessments, certifications, and progress tracking centralized."
              solutionBuilt="An end-to-end learning and user management platform with training workflows, assessments, certification modules, and account controls."
              contribution="Developed core platform modules, integrated payment and user flows, and optimized backend performance for scale."
              techStack={["React", "PHP", "MySQL", "REST APIs", "Payment Gateway Integration"]}
              outcome={[
                "Supported an LMS ecosystem used by 10,000+ students and professionals.",
                "Enabled structured learning operations with automated tracking and certification flows.",
                "Improved reliability and load performance through API and query optimization."
              ]}
             demoLink="https://www.mstconnectph.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath="https://www.charliesbarber.shop/images/optimized/store-960.webp"
              title="Charlie's Barber & Salon"
              businessProblem="The business needed a stronger digital presence to help potential customers discover services, build trust, and convert interest into bookings."
              solutionBuilt="A service-focused web experience with clear service journeys, portfolio visibility, and direct contact and booking pathways."
              contribution="Built and optimized the website structure, frontend UX, local visibility setup, and conversion-focused content flows."
              techStack={["WordPress", "JavaScript", "Elementor", "Google Maps", "SEO"]}
              outcome={[
                "Improved customer journey clarity from service discovery to inquiry.",
                "Increased trust with portfolio-first presentation and stronger brand positioning.",
                "Improved local discoverability through SEO and location-based integrations."
              ]}
              demoLink="https://www.charliesbarber.shop/#"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath="https://society22.club/Logo.png"
              title="Society22"
              businessProblem="The platform had split frontend and backend deployments that added complexity, maintenance overhead, and release friction."
              solutionBuilt="A consolidated full-stack architecture that unified frontend assets and backend delivery under a single Laravel-served setup."
              contribution="Handled architecture planning, deployment restructuring, Nginx routing fixes, and build pipeline stabilization."
              techStack={["React", "Laravel", "Filament PHP", "Nginx", "Linux"]}
              outcome={[
                "Simplified release and deployment workflows by removing split pipeline complexity.",
                "Resolved production bottlenecks related to routing, assets, and permissions.",
                "Improved long-term maintainability with centralized architecture."
              ]}
              demoLink="https://society22.club/"
            />
          </Col>
          </Row>

          <p className="project-final-message">
            I don't just write code. I understand problems, choose the right technology, and build solutions that create value.
          </p>
        </Container>
      </Container>
    </>

    
  );
};

export default Projects;
