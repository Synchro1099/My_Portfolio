import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiGit,
} from "react-icons/di";
import {
  SiMongodb,
  SiHtml5,
  SiPython,
  SiGithub,
  SiExpress,
  SiCss3,
  SiDart,
  SiFlutter,
  SiTailwindcss,
  SiPhp,
  SiMysql,
  SiNpm,
  SiBootstrap,
  SiJava,
  SiReact
} from "react-icons/si";

const Techstack = () => {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiHtml5 />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiCss3 />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiNodejs />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiReact />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiExpress />
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <SiMongodb />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiFlutter />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiDart />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPython />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiGithub />
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <DiGit />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
              <SiTailwindcss />
            </Col>
      <Col xs={4} md={2} className="tech-icons">
              <SiPhp />
       </Col>   
       <Col xs={4} md={2} className="tech-icons">
               <SiMysql />
        </Col>   
        <Col xs={4} md={2} className="tech-icons">
               <SiNpm />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
               <SiBootstrap />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
               <SiJava />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
               <SiReact />
        </Col>
    </Row>
  );
}

export default Techstack;
