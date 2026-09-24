import React, { useState } from "react";
import { Container } from "react-bootstrap";

import Particle from '../components/Particle'
import Reveal from "../components/Reveal";
import SEO from '../components/SEO';
import { skillSections } from "../data/skills";
import { techIcons } from "../data/techIcons";

const ALL = "All";

const Skillset = () => {
  const [active, setActive] = useState(ALL);
  const tabs = [ALL, ...skillSections.map((section) => section.short)];
  const visibleSections = active === ALL
    ? skillSections
    : skillSections.filter((section) => section.short === active);
  const totalSkills = new Set(skillSections.flatMap((section) => section.items)).size;

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
          <Reveal>
            <h1 className="project-heading">
              Professional <strong className="yellow">Skillset </strong>
            </h1>
            <p className="skillset-intro">
              I adapt to project requirements and choose the right tools to build scalable digital solutions across frontend, backend, databases, cloud, and growth-focused delivery.
            </p>
            <p className="skillset-count">
              <strong>{totalSkills}</strong> skills across <strong>{skillSections.length}</strong> areas
            </p>
          </Reveal>

          <div className="skill-filter" role="tablist" aria-label="Filter skills by area">
            {tabs.map((tab) => (
              <button
                key={tab}
                type="button"
                role="tab"
                aria-selected={active === tab}
                className={active === tab ? "skill-filter-btn active" : "skill-filter-btn"}
                onClick={() => setActive(tab)}
              >
                {tab}
              </button>
            ))}
          </div>

          <div className="skill-categories-grid" key={active}>
            {visibleSections.map((section, index) => (
              <div
                key={section.title}
                className="skill-category-card spotlight skill-card-enter"
                style={{ animationDelay: `${index * 60}ms` }}
              >
                <div className="skill-category-head">
                  <h2 className="skill-category-title">{section.title}</h2>
                  <span className="skill-category-count">{section.items.length}</span>
                </div>
                <div className="skill-pill-list">
                  {section.items.map((item) => {
                    const Icon = techIcons[item];
                    return (
                      <span className="skill-pill" key={item}>
                        {Icon && <Icon className="skill-pill-icon" aria-hidden="true" />}
                        {item}
                      </span>
                    );
                  })}
                </div>
                {section.note && (
                  <p className="skill-category-note">{section.note}</p>
                )}
              </div>
            ))}
          </div>
        </Container>
      </Container>
    </>
  )
}

export default Skillset
