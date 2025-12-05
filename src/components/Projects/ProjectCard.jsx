import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";

const ProjectCard = (props) => {
  const maxLength = 150; // Adjust as needed
  const [showModal, setShowModal] = useState(false);

  // Function to toggle modal
  const toggleModal = () => {
    setShowModal(!showModal);
  };

  // Function to truncate description
  const truncateText = (text) => {
    if (text.length <= maxLength) {
      return text;
    }
    return `${text.substring(0, maxLength)}...`;
  };

  return (
    <>
      <Card className="project-card-view">
        <Card.Img
          variant="top"
          src={props.imgPath}
          alt="project-img"
          style={{
            height: "200px",
            objectFit: "cover",
            borderRadius: "10px 10px 0 0",
          }}
        />
        <Card.Body>
          <Card.Title>{props.title}</Card.Title>
          <Card.Text style={{ textAlign: "justify", fontSize: "15px" }}>
            <strong>Description:</strong>{" "}
            {truncateText(props.description)}
            {props.description.length > maxLength && (
              <Button
                variant="link"
                size="sm"
                style={{ padding: "0", marginLeft: "5px" }}
                onClick={toggleModal}
              >
                Learn More
              </Button>
            )}
          </Card.Text>
          
          <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '10px' }}>
            <Button
              variant="primary"
              href={props.ghLink}
              target="_blank"
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                textAlign: "center",
                flex: 1,
                marginRight: props.demoLink ? '10px' : '0',
              }}
            >
              <BsGithub /> &nbsp; GitHub
            </Button>
            {props.demoLink && (
              <Button
                variant="primary"
                href={props.demoLink}
                target="_blank"
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  textAlign: "center",
                  flex: 1,
                }}
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
          <strong>Description:</strong> {props.description}
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
