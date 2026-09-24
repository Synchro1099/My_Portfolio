import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { CgWebsite } from "react-icons/cg";
import { AiOutlineFileText } from "react-icons/ai";

const ProjectCard = (props) => {
  const [showModal, setShowModal] = useState(false);
  const [imgFailed, setImgFailed] = useState(false);

  const openModal = () => setShowModal(true);
  const closeModal = () => setShowModal(false);

  const summaryText = props.solutionBuilt || props.businessProblem || props.description || "";
  const keyOutcome = props.outcome && props.outcome[0];

  return (
    <>
      <Card className="project-card-view spotlight">
        <div className="project-card-media">
          {imgFailed ? (
            <div className="project-card-fallback" aria-hidden="true">
              {props.title}
            </div>
          ) : (
            <Card.Img
              variant="top"
              src={props.imgPath}
              alt={`${props.title} project preview`}
              loading="lazy"
              decoding="async"
              onError={() => setImgFailed(true)}
            />
          )}
        </div>
        <Card.Body className="project-card-body">
          {props.category && <span className="project-category-tag">{props.category}</span>}
          <Card.Title as="h3" className="project-card-title">{props.title}</Card.Title>

          <Card.Text className="project-summary-text">{summaryText}</Card.Text>

          {keyOutcome && (
            <p className="project-key-outcome">
              <span className="project-meta-label">Impact:</span> {keyOutcome}
            </p>
          )}

          {props.techStack && props.techStack.length > 0 && (
            <div className="project-tech-list">
              {props.techStack.map((tech) => (
                <span className="project-tech-chip" key={tech}>{tech}</span>
              ))}
            </div>
          )}

          <div className="project-actions-row">
            <Button
              variant="outline-primary"
              className="project-case-btn"
              onClick={openModal}
              aria-label={`Read case study for ${props.title}`}
            >
              <AiOutlineFileText /> &nbsp;Case Study
            </Button>
            {props.demoLink && (
              <Button
                variant="primary"
                href={props.demoLink}
                target="_blank"
                rel="noopener noreferrer"
                className="project-demo-btn"
                aria-label={`Open live site for ${props.title}`}
              >
                <CgWebsite /> &nbsp;Live Site
              </Button>
            )}
          </div>
        </Card.Body>
      </Card>

      <Modal show={showModal} onHide={closeModal} size="lg" centered className="project-modal">
        <Modal.Header closeButton>
          <Modal.Title>{props.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {props.category && <span className="project-category-tag">{props.category}</span>}

          {props.businessProblem && (
            <section className="project-modal-section">
              <h4>The Problem</h4>
              <p>{props.businessProblem}</p>
            </section>
          )}

          {props.solutionBuilt && (
            <section className="project-modal-section">
              <h4>The Solution</h4>
              <p>{props.solutionBuilt}</p>
            </section>
          )}

          {props.contribution && (
            <section className="project-modal-section">
              <h4>My Contribution</h4>
              <p>{props.contribution}</p>
            </section>
          )}

          {props.outcome && props.outcome.length > 0 && (
            <section className="project-modal-section">
              <h4>Outcome</h4>
              <ul className="project-impact-list">
                {props.outcome.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </section>
          )}

          {props.techStack && props.techStack.length > 0 && (
            <section className="project-modal-section">
              <h4>Technology</h4>
              <div className="project-tech-list">
                {props.techStack.map((tech) => (
                  <span className="project-tech-chip" key={tech}>{tech}</span>
                ))}
              </div>
            </section>
          )}
        </Modal.Body>
        <Modal.Footer>
          {props.demoLink && (
            <Button
              variant="primary"
              href={props.demoLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              <CgWebsite /> &nbsp;Visit Live Site
            </Button>
          )}
          <Button variant="secondary" onClick={closeModal}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ProjectCard;
