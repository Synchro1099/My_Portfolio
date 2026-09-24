import React from "react";
import { techIcons } from "../../data/techIcons";

const TECH = [
  "React", "Next.js", "TypeScript", "Node.js", "Laravel", "PHP", "PostgreSQL",
  "Supabase", "MySQL", "Tailwind CSS", "Firebase", "AWS", "Vercel", "Shopify", "WordPress",
];

// Infinite horizontal strip of technologies. The list is rendered twice so the
// CSS animation can loop seamlessly; the copy is hidden from screen readers.
const TechMarquee = () => (
  <section className="tech-marquee" aria-label="Technologies I work with">
    <div className="tech-marquee-track">
      {[0, 1].map((copy) => (
        <ul className="tech-marquee-list" key={copy} aria-hidden={copy === 1}>
          {TECH.map((name) => {
            const Icon = techIcons[name];
            return (
              <li className="tech-marquee-item" key={name}>
                {Icon && <Icon aria-hidden="true" />}
                <span>{name}</span>
              </li>
            );
          })}
        </ul>
      ))}
    </div>
  </section>
);

export default TechMarquee;
