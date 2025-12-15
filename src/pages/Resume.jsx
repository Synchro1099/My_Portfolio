import React, { useState, useEffect } from "react";
import { Container, Row, Col, Modal } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { AiOutlineDownload, AiOutlineZoomIn, AiOutlineClose } from "react-icons/ai";

import Particle from '../components/Particle';
import pdf from "../assets/Jan Mark Pereda updated.pdf";

import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";

pdfjs.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const Resume = () => {
  const [width, setWidth] = useState(window.innerWidth);
  const [numPages, setNumPages] = useState(null);
  const [scale, setScale] = useState(1.0);
  const [showModal, setShowModal] = useState(false);
  const [zoomLevel, setZoomLevel] = useState(1.0);

  useEffect(() => {
    const handleResize = () => {
      const newWidth = window.innerWidth;
      setWidth(newWidth);
      
      // Calculate A4 scale based on viewport width
      // A4 width: 210mm = 794px at 96 DPI
      // Leave some padding (40px on each side)
      const maxWidth = newWidth - 80;
      const a4Width = 794; // A4 width in pixels at 96 DPI
      const calculatedScale = Math.min(maxWidth / a4Width, 1.2);
      setScale(calculatedScale);
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
  };

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = pdf;
    link.download = 'Jan Mark Pereda updated.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleOpenModal = () => {
    setShowModal(true);
    setZoomLevel(1.0);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setZoomLevel(1.0);
  };

  const handleZoomIn = () => {
    setZoomLevel(prev => Math.min(prev + 0.25, 3.0));
  };

  const handleZoomOut = () => {
    setZoomLevel(prev => Math.max(prev - 0.25, 0.5));
  };

  const handleResetZoom = () => {
    setZoomLevel(1.0);
  };

  return (
    <div>
      <Container fluid className="resume-section">
        <Particle />
        
        {/* Resume Hero Section with Side-by-Side Layout */}
        <div className="resume-hero">
          <Container>
            <Row className="align-items-center">
              <Col lg={6} className="hero-text-section">
                <div className="hero-greeting">
                  <span className="greeting-text">My Resume</span>
                </div>
                
                <h1 className="hero-name">
                  <span className="main-name">Professional Experience</span>
                </h1>

                <p className="hero-description">
                  A comprehensive overview of my professional journey, skills, and achievements. 
                  Download the complete document to learn more about my background and expertise.
                </p>

                <div className="hero-buttons">
                  <Button 
                    onClick={handleDownload}
                    className="btn-primary-hero"
                  >
                    <AiOutlineDownload style={{ marginRight: "8px" }} />
                    Download Resume
                  </Button>
                </div>
              </Col>

              <Col lg={6} className="hero-image-section">
                <div className="hero-image-wrapper">
                  <div className="hero-image-background"></div>
                  <div className="resume-pdf-preview" onClick={handleOpenModal}>
                    <div className="resume-preview-overlay">
                      <AiOutlineZoomIn className="zoom-icon" />
                      <span className="zoom-text">Click to view full size</span>
                    </div>
                    <Document
                      file={pdf}
                      onLoadSuccess={onDocumentLoadSuccess}
                      className="resume-document-preview"
                      loading={
                        <div className="pdf-loading">
                          <p>Loading resume...</p>
                        </div>
                      }
                    >
                      {Array.from(new Array(numPages), (el, index) => (
                        <div key={`page-wrapper-${index + 1}`} className="a4-page-wrapper-preview">
                          <Page
                            key={`page_${index + 1}`}
                            pageNumber={index + 1}
                            scale={scale * 0.55}
                            className="a4-page"
                          />
                        </div>
                      ))}
                    </Document>
                  </div>
                </div>
              </Col>

            {/* Full View Modal */}
            <Modal 
              show={showModal} 
              onHide={handleCloseModal}
              size="xl"
              fullscreen
              className="resume-modal"
            >
              <Modal.Header className="resume-modal-header">
                <div className="resume-modal-title">Resume - Full View</div>
                <div className="resume-modal-controls">
                  <Button 
                    variant="outline-secondary" 
                    size="sm"
                    onClick={handleZoomOut}
                    className="zoom-btn"
                    disabled={zoomLevel <= 0.5}
                  >
                    −
                  </Button>
                  <span className="zoom-level">{Math.round(zoomLevel * 100)}%</span>
                  <Button 
                    variant="outline-secondary" 
                    size="sm"
                    onClick={handleZoomIn}
                    className="zoom-btn"
                    disabled={zoomLevel >= 3.0}
                  >
                    +
                  </Button>
                  <Button 
                    variant="outline-secondary" 
                    size="sm"
                    onClick={handleResetZoom}
                    className="zoom-btn"
                  >
                    Reset
                  </Button>
                  <Button 
                    variant="outline-secondary" 
                    size="sm"
                    onClick={handleCloseModal}
                    className="close-btn"
                  >
                    <AiOutlineClose />
                  </Button>
                </div>
              </Modal.Header>
              <Modal.Body className="resume-modal-body">
                <div className="resume-modal-content" style={{ transform: `scale(${zoomLevel})`, transformOrigin: 'top center' }}>
                  <Document
                    file={pdf}
                    onLoadSuccess={onDocumentLoadSuccess}
                    className="resume-document-full"
                    loading={
                      <div className="pdf-loading">
                        <p>Loading resume...</p>
                      </div>
                    }
                  >
                    {Array.from(new Array(numPages), (el, index) => (
                      <div key={`page-full-${index + 1}`} className="a4-page-wrapper-full">
                        <Page
                          key={`page_${index + 1}`}
                          pageNumber={index + 1}
                          scale={width > 786 ? 1.5 : 1.0}
                          className="a4-page"
                        />
                      </div>
                    ))}
                  </Document>
                </div>
              </Modal.Body>
            </Modal>
            </Row>
          </Container>
        </div>

      </Container>
    </div>
  );
}

export default Resume;
