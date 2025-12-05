import React from 'react'
import { Container, Row, Col } from "react-bootstrap";
import {
  AiFillGithub,
  AiOutlineFacebook
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

import './Social.css'

const Social = () => {
  return (
    <Container style={{padding: '30px'}}>
    <Row>
              <Col md={12} className="contact-social">
                <div className='contact-text'>
                <h1>FIND ME ON</h1>
                <p>
                Please don't hesitate to reach out to me and <span className="yellow">connect.</span>
                </p>
                </div>
                <ul className="contact-social-links">
                  <li className="contact-icons">
                    <a
                      href="https://github.com/Synchro1099"
                      target="_blank"
                      rel="noreferrer"
                      className="icon-color contact-social-icons"
                      aria-label="github"
                    >
                      <AiFillGithub />
                    </a>
                  </li>
                  <li className="contact-icons">
                    <a
                      href="https://www.facebook.com/pereda.janmark"
                      target="_blank"
                      rel="noreferrer"
                      className="icon-color contact-social-icons"
                      aria-label="facebook"
                    >
                      <AiOutlineFacebook />
                    </a>
                  </li>
                  <li className="contact-icons">
                    <a
                      href="https://www.linkedin.com/in/jan-mark-pereda-209806262/"
                      target="_blank"
                      rel="noreferrer"
                      className="icon-color contact-social-icons"
                      aria-label="linkedin"
                    >
                      <FaLinkedinIn />
                    </a>
                  </li>
                </ul>
              </Col>
            </Row>
          </Container>
  )
}

export default Social