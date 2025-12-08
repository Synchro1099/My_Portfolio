import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProfilePic from "../../assets/picture.jpg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineFacebook
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";


const About = () => {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
               <span className="yellow"> About ME </span> 
            </h1>
               <p className="home-about-body">
                    Full Stack Web Developer from <span className="yellow">Angeles City, Pampanga</span>, with a strong foundation built at <span className="yellow">Holy Angel University</span>. 
                    <br />
                    <br />
                    I specialize in creating high-performance, user-focused digital solutions, combining clean design with robust functionality. I <b className="yellow">engineer solutions, innovate, and deliver impactful experiences</b> that drive results. 
                    <br />
                    <br />
                    <b className="yellow">Let’s build something amazing together.</b>
                  </p>




          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={ProfilePic} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="yellow">connect</span> with me.
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/Synchro1099"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                  aria-label="github"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.facebook.com/pereda.janmark"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                  aria-label="facebook"
                >
                  <AiOutlineFacebook />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/jan-mark-pereda-209806262/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                  aria-label="linkedin"
                >
                  <FaLinkedinIn />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default About;
