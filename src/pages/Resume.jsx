import React, { useState, useEffect } from "react";
import { Container, Row, Col, Modal } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import { AiOutlineDownload, AiOutlineZoomIn, AiOutlineClose } from "react-icons/ai";

import Particle from '../components/Particle';
import pdf from "../assets/resume.pdf";
import SEO from "../components/SEO";

import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";

pdfjs.GlobalWorkerOptions.workerSrc = `https://unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;



// ResumeContent removed to avoid duplicating full HTML inside the modal.

const Resume = () => {
  const [showModal, setShowModal] = useState(false);

  const DEFAULT_ZOOM = 1.25;
  const [width, setWidth] = useState(window.innerWidth);
  const [numPages, setNumPages] = useState(null);
  const [pdfError, setPdfError] = useState(null);
  const [scale, setScale] = useState(1.0);
  const [zoomLevel, setZoomLevel] = useState(DEFAULT_ZOOM);

  useEffect(() => {
    const handleResize = () => {
      const newWidth = window.innerWidth;
      setWidth(newWidth);

      const maxWidth = newWidth - 80;
      const a4Width = 794;
      const calculatedScale = Math.min(maxWidth / a4Width, 1.2);
      setScale(calculatedScale);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const onDocumentLoadSuccess = ({ numPages }) => setNumPages(numPages);

  const onDocumentLoadError = (error) => {
    console.error('PDF load error', error);
    setPdfError(error?.message || String(error));
  };

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = pdf;
    link.download = 'resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleOpenModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);

  return (
    <div>
      <SEO
        title="Resume"
        path="/resume"
        description="View Jan Mark Pereda's Full Stack Developer resume with project outcomes, technical strengths, and professional experience."
      />
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
                  <span className="main-name">Jan Mark Pereda — Full Stack Developer</span>
                </h1>

                <p className="hero-description">I build clean, scalable, and user-friendly web applications. I focus on responsive interfaces and practical digital solutions. Passionate about badminton and teamwork.</p>

                <div className="hero-buttons">
                  <Button 
                    onClick={handleDownload}
                    className="btn-primary-hero"
                  >
                    <AiOutlineDownload style={{ marginRight: "8px" }} />
                    Download Resume
                  </Button>
                  <Button as={Link} to="/contact" className="btn-secondary-hero">
                    Contact Me
                  </Button>
                </div>
                <p className="resume-cta-note">Available for full-time opportunities and project-based collaboration.</p>
              </Col>

              <Col lg={6} className="hero-image-section">
                <div className="hero-image-wrapper">
                  <div className="hero-image-background"></div>
                  <div className="resume-pdf-preview" onClick={handleOpenModal}>
                    <div className="resume-preview-overlay">
                      <AiOutlineZoomIn className="zoom-icon" />
                      <span className="zoom-text">Click to view full resume</span>
                    </div>
                      {pdfError ? (
                        <div style={{padding:20}}>
                          <p style={{color:'#234C6A'}}>Unable to preview PDF. <button onClick={handleDownload}>Download PDF</button></p>
                          <p style={{color:'#b00'}}>Error: {String(pdfError)}</p>
                        </div>
                      ) : (
                        <Document
                          file={pdf}
                          onLoadSuccess={onDocumentLoadSuccess}
                          onLoadError={onDocumentLoadError}
                          onSourceError={onDocumentLoadError}
                          className="resume-document-preview"
                          loading={
                            <div className="pdf-loading">
                              <p>Loading resume...</p>
                            </div>
                          }
                        >
                          {numPages > 0 && Array.from(new Array(numPages), (el, index) => (
                            <div key={`page-wrapper-${index + 1}`} className="a4-page-wrapper-preview" onClick={handleOpenModal}>
                              <Page
                                key={`page_${index + 1}`}
                                pageNumber={index + 1}
                                scale={scale * 0.55}
                                className="a4-page"
                              />
                            </div>
                          ))}
                        </Document>
                      )}
                  </div>
                </div>
              </Col>

            {/* Full View Modal showing resume HTML */}
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
                  <Button variant="outline-secondary" size="sm" onClick={() => setZoomLevel(prev => Math.max(prev - 0.25, 0.5))}>−</Button>
                  <span className="zoom-level" style={{padding:'0 8px'}}>{Math.round(zoomLevel * 100)}%</span>
                  <Button variant="outline-secondary" size="sm" onClick={() => setZoomLevel(prev => Math.min(prev + 0.25, 3.0))}>+</Button>
                  <Button variant="outline-secondary" size="sm" onClick={() => setZoomLevel(DEFAULT_ZOOM)}>Reset</Button>
                  <Button variant="outline-secondary" size="sm" onClick={handleDownload}>Download PDF</Button>
                  <Button variant="outline-secondary" size="sm" onClick={handleCloseModal} className="close-btn"><AiOutlineClose /></Button>
                </div>
              </Modal.Header>
              <Modal.Body className="resume-modal-body">
                <div className="resume-modal-content" style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
                  {pdfError ? (
                    <div style={{padding:20}}>
                      <p style={{color:'#234C6A'}}>Unable to preview PDF in modal.</p>
                      <p style={{color:'#b00'}}>Error: {String(pdfError)}</p>
                      <button onClick={handleDownload}>Download PDF</button>
                    </div>
                  ) : (
                    <Document
                      file={pdf}
                      onLoadSuccess={onDocumentLoadSuccess}
                      onLoadError={onDocumentLoadError}
                      onSourceError={onDocumentLoadError}
                      className="resume-document-full"
                      loading={
                        <div className="pdf-loading">
                          <p>Loading resume...</p>
                        </div>
                      }
                    >
                      {numPages > 0 && Array.from(new Array(numPages), (el, index) => (
                        <div key={`page-full-${index + 1}`} className="a4-page-wrapper-full">
                          <Page
                            key={`page_${index + 1}`}
                            pageNumber={index + 1}
                            scale={(width > 786 ? 1.5 : 1.0) * zoomLevel}
                            className="a4-page"
                          />
                        </div>
                      ))}
                    </Document>
                  )}
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