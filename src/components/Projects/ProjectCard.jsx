import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { CgWebsite } from "react-icons/cg";

const ProjectCard = (props) => {
  const maxLength = 155;
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  const truncateText = (text) => {
    if (!text) {
      return "";
    }
    if (text.length <= maxLength) {
      return text;
    }
    return `${text.substring(0, maxLength)}...`;
  };

  const summaryText = props.businessProblem || props.overview || props.description || "";

  return (
    <>
      <Card className="project-card-view">
        <Card.Img
          variant="top"
          src={props.imgPath}
          alt={`${props.title} project preview`}
          loading="lazy"
          decoding="async"
          style={{
            height: "200px",
            objectFit: "cover",
            borderRadius: "10px 10px 0 0",
          }}
        />
        <Card.Body>
          <Card.Title className="project-card-title">{props.title}</Card.Title>

          <Card.Text className="project-summary-text">
            {truncateText(summaryText)}
            {summaryText.length > maxLength && (
              <Button
                variant="link"
                size="sm"
                className="project-learn-more"
                aria-label={`Read more about ${props.title}`}
                onClick={toggleModal}
              >
                Learn More
              </Button>
            )}
          </Card.Text>

          {props.businessProblem && (
            <p className="project-meta-line">
              <span className="project-meta-label">Problem:</span> {props.businessProblem}
            </p>
          )}

          {props.solutionBuilt && (
            <p className="project-meta-line">
              <span className="project-meta-label">Solution:</span> {props.solutionBuilt}
            </p>
          )}

          {props.contribution && (
            <p className="project-meta-line">
              <span className="project-meta-label">My Contribution:</span> {props.contribution}
            </p>
          )}

          {props.techStack && props.techStack.length > 0 && (
            <div className="project-tech-wrap">
              <span className="project-meta-label">Technology:</span>
              <div className="project-tech-list">
                {props.techStack.map((tech) => (
                  <span className="project-tech-chip" key={tech}>{tech}</span>
                ))}
              </div>
            </div>
          )}

          {props.outcome && props.outcome.length > 0 && (
            <div className="project-impact-wrap">
              <span className="project-meta-label">Outcome:</span>
              <ul className="project-impact-list">
                {props.outcome.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          )}
          
          <div className="project-actions-row">
            {props.demoLink && (
              <Button
                variant="primary"
                href={props.demoLink}
                target="_blank"
                rel="noopener noreferrer"
                className="project-demo-btn"
                aria-label={`Open live demo for ${props.title}`}
              >
                <CgWebsite /> &nbsp; Demo
              </Button>
            )}
          </div>
        </Card.Body>
      </Card>

      {/* Modal for Full Description */}
      <Modal show={showModal} onHide={toggleModal}>
        <Modal.Header closeButton>
          <Modal.Title>{props.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {props.businessProblem && (
            <>
              <strong>Problem:</strong> {props.businessProblem}
            </>
          )}

          {props.solutionBuilt && (
            <>
              <br />
              <br />
              <strong>Solution:</strong> {props.solutionBuilt}
            </>
          )}

          {props.contribution && (
            <>
              <br />
              <br />
              <strong>My Contribution:</strong> {props.contribution}
            </>
          )}

          {props.techStack && props.techStack.length > 0 && (
            <>
              <br />
              <br />
              <strong>Technology:</strong> {props.techStack.join(", ")}
            </>
          )}

          {props.outcome && props.outcome.length > 0 && (
            <>
              <br />
              <br />
              <strong>Outcome:</strong>
              <ul>
                {props.outcome.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </>
          )}
          <br />
          <br />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={toggleModal}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ProjectCard;
