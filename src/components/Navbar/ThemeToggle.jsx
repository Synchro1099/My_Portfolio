import React, { useEffect, useState } from "react";
import { FiSun, FiMoon } from "react-icons/fi";

const getInitialTheme = () =>
  document.documentElement.getAttribute("data-theme") === "dark" ? "dark" : "light";

const ThemeToggle = () => {
  const [theme, setTheme] = useState(getInitialTheme);

  useEffect(() => {
    const root = document.documentElement;
    if (theme === "dark") {
      root.setAttribute("data-theme", "dark");
    } else {
      root.removeAttribute("data-theme");
    }
  }, [theme]);

  const toggle = () => {
    const next = theme === "dark" ? "light" : "dark";
    const root = document.documentElement;

    // Cross-fade colors only during the switch, then remove the helper class.
    root.classList.add("theme-transition");
    window.setTimeout(() => root.classList.remove("theme-transition"), 400);

    try {
      localStorage.setItem("theme", next);
    } catch (e) {
      // Storage can be unavailable (private mode); the toggle still works for this visit.
    }
    setTheme(next);
  };

  const label = theme === "dark" ? "Switch to light mode" : "Switch to dark mode";

  return (
    <button type="button" className="theme-toggle" onClick={toggle} aria-label={label} title={label}>
      <FiSun className="icon-sun" aria-hidden="true" />
      <FiMoon className="icon-moon" aria-hidden="true" />
    </button>
  );
};

export default ThemeToggle;
