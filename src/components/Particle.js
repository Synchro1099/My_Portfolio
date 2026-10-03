import React, { useEffect, useState } from "react";
import Particles from "react-tsparticles";

// Particles are skipped on phone-sized screens to save battery and frames.
const WIDE_QUERY = "(min-width: 768px)";

function Particle() {
  const [wide, setWide] = useState(() => window.matchMedia(WIDE_QUERY).matches);

  useEffect(() => {
    const query = window.matchMedia(WIDE_QUERY);
    const onChange = () => setWide(query.matches);
    query.addEventListener("change", onChange);
    return () => query.removeEventListener("change", onChange);
  }, []);

  if (!wide) return null;

  return (
    <Particles
      id="tsparticles"
      params={{
        particles: {
          number: {
            value: 160,
            density: {
              enable: true,
              value_area: 1500,
            },
          },
          line_linked: {
            enable: false,
            opacity: 0.03,
          },
          move: {
            direction: "right",
            speed: 0.05,
          },
          size: {
            value: 1,
          },
          opacity: {
            anim: {
              enable: true,
              speed: 1,
              opacity_min: 0.05,
            },
          },
        },
        interactivity: {
          events: {
            onclick: {
              enable: true,
              mode: "push",
            },
          },
          modes: {
            push: {
              particles_nb: 1,
            },
          },
        },
        // Caps the canvas at 1x device pixels. This tsparticles version only offers
        // the full device ratio or 1x, and the 1px dots look the same either way.
        retina_detect: false,
      }}
    />
  );
}

export default Particle;
