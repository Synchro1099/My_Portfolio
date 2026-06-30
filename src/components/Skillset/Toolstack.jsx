import React from "react";
import { Col, Row } from "react-bootstrap";

const Toolstack = () => {
  const sections = [
    {
      title: "Cloud & Deployment",
      items: ["AWS", "Vercel", "GitHub Actions", "CI/CD Concepts", "Cloud Deployment", "Environment Configuration", "Performance Optimization"]
    },
    {
      title: "Development Tools",
      items: ["Git", "GitHub", "GitLab", "VS Code", "Postman", "Figma", "Chrome DevTools"]
    },
    {
      title: "Engineering & Business Skills",
      items: [
        "Full Stack Development",
        "System Design",
        "Software Architecture",
        "Debugging",
        "Testing",
        "Code Optimization",
        "E-commerce Development",
        "CMS Development",
        "Dashboard Development",
        "Automation Workflows",
        "Third-Party Integrations"
      ]
    },
    {
      title: "Digital Growth",
      items: ["SEO Optimization", "Google Analytics", "UI/UX Design", "Digital Marketing", "Content Optimization"]
    }
  ];

  return (
    <div className="skill-categories-grid skill-categories-tools">
      {sections.map((section) => (
        <div key={section.title} className="skill-category-card">
          <h2 className="skill-category-title">{section.title}</h2>
          <Row className="g-2">
            {section.items.map((item) => (
              <Col xs={6} md={4} key={item}>
                <span className="skill-pill">{item}</span>
              </Col>
            ))}
          </Row>
        </div>
      ))}
    </div>
  );
}

export default Toolstack;
