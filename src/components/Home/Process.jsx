import React from "react";
import { Container } from "react-bootstrap";
import { AiOutlineSearch, AiOutlineApartment, AiOutlineCode, AiOutlineRocket } from "react-icons/ai";
import Reveal from "../Reveal";

const STEPS = [
  {
    icon: AiOutlineSearch,
    title: "Understand",
    text: "I start with the business problem: who uses it, what slows them down, and what success looks like.",
  },
  {
    icon: AiOutlineApartment,
    title: "Design",
    text: "I plan the data model, architecture, and user flows, and choose the stack that fits the problem.",
  },
  {
    icon: AiOutlineCode,
    title: "Build",
    text: "I ship in small, working increments with secure, server-validated logic and clean, maintainable code.",
  },
  {
    icon: AiOutlineRocket,
    title: "Launch & Improve",
    text: "I deploy, monitor, and refine based on real usage, so the product keeps getting better after launch.",
  },
];

const Process = () => (
  <Container fluid className="process-section">
    <Container>
      <Reveal>
        <span className="section-eyebrow">How I Work</span>
        <h2 className="section-title">
          From problem to <span className="yellow">production</span>
        </h2>
      </Reveal>
      <div className="process-grid">
        {STEPS.map((step, index) => {
          const Icon = step.icon;
          return (
            <Reveal className="process-card spotlight" delay={index * 90} key={step.title}>
              <div className="process-card-head">
                <span className="process-icon"><Icon aria-hidden="true" /></span>
                <span className="process-step">{String(index + 1).padStart(2, "0")}</span>
              </div>
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </Reveal>
          );
        })}
      </div>
    </Container>
  </Container>
);

export default Process;
