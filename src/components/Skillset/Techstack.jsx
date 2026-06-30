import React from "react";
import { Row, Col } from "react-bootstrap";

const Techstack = () => {
  const sections = [
    {
      title: "Programming Languages",
      items: ["JavaScript", "TypeScript", "PHP", "Python", "SQL", "Java", "C#"],
      note: "Strong understanding of programming fundamentals, allowing me to adapt quickly to new languages, frameworks, and technologies."
    },
    {
      title: "Frontend Development",
      items: [
        "React.js",
        "Next.js",
        "Angular",
        "Vue.js",
        "JavaScript (ES6+)",
        "TypeScript",
        "HTML5",
        "CSS3",
        "Tailwind CSS",
        "Bootstrap",
        "Responsive Web Design",
        "Component-Based Architecture",
        "UI Development"
      ]
    },
    {
      title: "Backend Development",
      items: [
        "Node.js",
        "Express.js",
        "PHP",
        "Laravel",
        "Python",
        "REST APIs",
        "API Integration",
        "Authentication Systems",
        "Backend Development",
        "Server-Side Applications"
      ]
    },
    {
      title: "Database & Backend Services",
      items: [
        "PostgreSQL",
        "MySQL",
        "MongoDB",
        "Firebase",
        "Supabase",
        "Database Design",
        "Data Modeling",
        "Query Optimization"
      ]
    }
  ];

  return (
    <div className="skill-categories-grid">
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
          {section.note && (
            <p className="skill-category-note">{section.note}</p>
          )}
        </div>
      ))}
    </div>
  );
};

export default Techstack;
