import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProfilePic from "../../assets/picture.jpg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineFacebook,
 
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
                  I'm <span className="yellow">Jan Mark Pereda</span> from <span className="yellow">Angeles City, Pampanga, Philippines</span>.
                  <br />
                  <br />
                  I specialize in <b className="yellow">designing intuitive, engaging, and user-centered digital experiences</b> that not only look great but feel natural for users.
                  <br />
                  <br />
                  As a <b className="yellow">UX/UI Designer & Full-Stack Developer</b>, I focus on crafting clean interfaces, meaningful interactions, and seamless user journeys. I also work with 
                  <b className="yellow">JavaScript, C++, and Python</b> to bring designs to life.
                  <br />
                  <br />
                  I love designing and building products using <b className="yellow">Node.js, MongoDB</b>, and modern frameworks like 
                  <i><b className="yellow">React.js</b></i>. I’m also exploring <i><b className="yellow">Cloud Computing</b></i> to create scalable and efficient digital solutions.
                  <br />
                  <br />
                  My goal is to deliver <b className="yellow">visually compelling, user-focused, and high-performing designs</b> that transform ideas into meaningful digital products.
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
                  className="icon-colour  home-social-icons"
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
                  className="icon-colour  home-social-icons"
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
                  className="icon-colour  home-social-icons"
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
