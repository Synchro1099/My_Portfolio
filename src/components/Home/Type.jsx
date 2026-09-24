import React, { useEffect, useState } from "react";

const STRINGS = [
  "Scalable Web Application Developer",
  "Business Problem Solver",
  "Cross-Industry Solution Builder",
  "Adaptable Full Stack Developer",
  "Digital Solution Architect",
];

const TYPE_SPEED = 55;
const DELETE_SPEED = 30;
const HOLD_TIME = 2200;

// Starts with the first phrase already shown (no empty gap on load), then
// deletes and types the next phrases in a loop.
const Type = () => {
  const [index, setIndex] = useState(0);
  const [text, setText] = useState(STRINGS[0]);
  const [deleting, setDeleting] = useState(false);
  const [reducedMotion] = useState(
    () => window.matchMedia("(prefers-reduced-motion: reduce)").matches
  );

  useEffect(() => {
    const target = STRINGS[index];
    let delay;
    let next;

    if (!deleting && text === target) {
      delay = reducedMotion ? HOLD_TIME * 1.5 : HOLD_TIME;
      next = () => {
        if (reducedMotion) {
          const nextIndex = (index + 1) % STRINGS.length;
          setIndex(nextIndex);
          setText(STRINGS[nextIndex]);
        } else {
          setDeleting(true);
        }
      };
    } else if (deleting && text === "") {
      delay = 250;
      next = () => {
        setDeleting(false);
        setIndex((index + 1) % STRINGS.length);
      };
    } else if (deleting) {
      delay = DELETE_SPEED;
      next = () => setText(text.slice(0, -1));
    } else {
      delay = TYPE_SPEED;
      next = () => setText(target.slice(0, text.length + 1));
    }

    const id = window.setTimeout(next, delay);
    return () => window.clearTimeout(id);
  }, [text, index, deleting, reducedMotion]);

  return (
    <div className="Typewriter" aria-label={STRINGS.join(", ")}>
      <span className="Typewriter__wrapper" aria-hidden="true">{text}</span>
      <span className="Typewriter__cursor" aria-hidden="true">|</span>
    </div>
  );
};

export default Type;
