import React, { useEffect, useRef, useState } from "react";

// Animates a number from 0 to `end` when it scrolls into view.
const CountUp = ({ end, decimals = 0, suffix = "", duration = 1600 }) => {
  const ref = useRef(null);
  const [value, setValue] = useState(0);

  useEffect(() => {
    const node = ref.current;
    if (!node) return undefined;

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion || !("IntersectionObserver" in window)) {
      setValue(end);
      return undefined;
    }

    let frame = null;
    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return;
      observer.disconnect();
      let start = null;
      const tick = (now) => {
        if (start === null) start = now;
        const t = Math.min(Math.max((now - start) / duration, 0), 1);
        const eased = 1 - Math.pow(1 - t, 3);
        setValue(end * eased);
        if (t < 1) frame = requestAnimationFrame(tick);
      };
      frame = requestAnimationFrame(tick);
    }, { threshold: 0.4 });

    observer.observe(node);
    return () => {
      observer.disconnect();
      if (frame !== null) cancelAnimationFrame(frame);
    };
  }, [end, duration]);

  const formatted = value.toLocaleString("en-US", {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  });

  return (
    <span ref={ref} aria-label={`${end.toLocaleString("en-US")}${suffix}`}>
      {formatted}
      {suffix}
    </span>
  );
};

export default CountUp;
