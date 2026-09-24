import React, { useRef, useState } from "react";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { AiOutlineDown, AiOutlineUp, AiOutlineUser, AiOutlineDashboard, AiOutlineGithub, AiOutlineSafety, AiOutlineLock } from "react-icons/ai";
import Reveal from "../Reveal";

const FeaturedProject = ({ project }) => {
  const [showDetails, setShowDetails] = useState(false);
  const detailsId = `${project.id}-details`;
  const cardRef = useRef(null);
  const toggleRef = useRef(null);

  // Closes the case study and brings the reader back to the top of the card.
  const closeDetails = () => {
    setShowDetails(false);
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    cardRef.current?.scrollIntoView({ behavior: reduceMotion ? "auto" : "smooth", block: "start" });
    toggleRef.current?.focus({ preventScroll: true });
  };

  return (
    <article className="featured-project" id={project.id} ref={cardRef}>
      <div className="featured-aura" aria-hidden="true"></div>

      <div className="featured-project-top">
        <a
          href={project.demoLink}
          target="_blank"
          rel="noopener noreferrer"
          className="featured-project-media"
          aria-label={`Open ${project.title} live site`}
        >
          <div className="featured-browser-bar" aria-hidden="true">
            <span></span>
            <span></span>
            <span></span>
            <div className="featured-browser-url">{project.demoLink.replace(/^https?:\/\//, "").replace(/\/$/, "")}</div>
          </div>
          <img
            src={project.imgPath}
            alt={`${project.title} homepage`}
            loading="lazy"
            decoding="async"
            width="1200"
            height="750"
          />
          <span className="featured-media-sheen" aria-hidden="true"></span>
        </a>

        <div className="featured-project-info">
          <div className="featured-project-badges">
            <span className="featured-badge">Latest Project</span>
            <span className="featured-live-pill">
              <span className="status-dot" aria-hidden="true"></span>
              Live in production
            </span>
            <span className="featured-category">{project.category}</span>
          </div>
          <h2 className="featured-project-title">{project.title}</h2>
          <p className="featured-project-summary">{project.summary}</p>

          <div className="featured-metrics">
            {project.metrics.map((metric) => (
              <div className="featured-metric" key={metric.label}>
                <div className="featured-metric-value">{metric.value}</div>
                <div className="featured-metric-label">{metric.label}</div>
              </div>
            ))}
          </div>

          <div className="project-tech-list">
            {project.techStack.map((tech) => (
              <span className="project-tech-chip" key={tech}>{tech}</span>
            ))}
          </div>

          <div className="featured-actions">
            <Button
              href={project.demoLink}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary-hero"
            >
              <CgWebsite style={{ marginRight: "8px" }} />
              Visit Live Site
            </Button>
            {project.sourceLink && (
              <Button
                href={project.sourceLink}
                target="_blank"
                rel="noopener noreferrer"
                variant="outline-primary"
                className="btn-secondary-hero"
              >
                <AiOutlineGithub style={{ marginRight: "8px" }} />
                Source Code
              </Button>
            )}
            <Button
              variant="outline-primary"
              className="btn-secondary-hero"
              ref={toggleRef}
              onClick={() => setShowDetails((prev) => !prev)}
              aria-expanded={showDetails}
              aria-controls={detailsId}
            >
              {showDetails ? "Hide Case Study" : "Read Case Study"}
              {showDetails ? <AiOutlineUp style={{ marginLeft: "8px" }} /> : <AiOutlineDown style={{ marginLeft: "8px" }} />}
            </Button>
          </div>
          {!project.sourceLink && project.sourceNote && (
            <p className="featured-source-note">
              <AiOutlineLock aria-hidden="true" />
              {project.sourceNote}
            </p>
          )}
        </div>
      </div>

      {showDetails && (
        <div className="featured-details" id={detailsId}>
          <div className="featured-details-col">
            <h3 className="featured-section-title">
              <AiOutlineUser /> Customer Side
            </h3>
            <ul className="featured-feature-list">
              {project.customerFeatures.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <div className="featured-details-col">
            <h3 className="featured-section-title">
              <AiOutlineDashboard /> Owner Portal
            </h3>
            <ul className="featured-feature-list">
              {project.ownerFeatures.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <div className="featured-details-footer">
            <Button variant="outline-primary" className="btn-secondary-hero" onClick={closeDetails}>
              Hide case study
              <AiOutlineUp style={{ marginLeft: "8px" }} />
            </Button>
          </div>
        </div>
      )}

      <div className="featured-highlights">
        <h3 className="featured-section-title">Technical Highlights</h3>
        <div className="featured-highlights-grid">
          {project.highlights.map((item, index) => (
            <Reveal className="h-100" key={item.title} delay={(index % 3) * 90}>
              <div className="featured-highlight spotlight">
                <span className="featured-highlight-index">{String(index + 1).padStart(2, "0")}</span>
                <h4>{item.title}</h4>
                <p>{item.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      {project.hardening && (
        <Reveal className="featured-hardening">
          <div className="featured-hardening-icon" aria-hidden="true">
            <AiOutlineSafety />
          </div>
          <div>
            <h3 className="featured-section-title">{project.hardening.title}</h3>
            {project.hardening.text && <p className="featured-hardening-text">{project.hardening.text}</p>}
            <ul className="featured-feature-list">
              {project.hardening.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </Reveal>
      )}

    </article>
  );
};

export default FeaturedProject;
