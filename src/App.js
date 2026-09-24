import React, { useState, useEffect, lazy, Suspense } from "react";
import { BrowserRouter as Router, Route, Routes, Navigate, useLocation } from "react-router-dom";

import Home from './pages/Home';

import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import PreLoader from "./components/PreLoader";
import ScrollToTop from "./components/ScrollToTop";
import ScrollProgress from "./components/ScrollProgress";
import useSpotlight from "./hooks/useSpotlight";

import "./App.css";
import "./style.css";
import "bootstrap/dist/css/bootstrap.min.css";

// Other pages load on demand, so the home page doesn't ship the PDF viewer etc.
const Skill = lazy(() => import('./pages/Skillset'));
const Project = lazy(() => import('./pages/Projects'));
const Resume = lazy(() => import('./pages/Resume'));
const Contact = lazy(() => import('./pages/Contact'));

// Re-mounts on every route change so each page fades in.
function AnimatedRoutes() {
  const location = useLocation();

  return (
    <div className="page-transition" key={location.pathname}>
      <Suspense fallback={<div className="page-loading" aria-busy="true" />}>
        <Routes location={location}>
          <Route path="/" element={<Home />} />
          <Route path="/skillset" element={<Skill />} />
          <Route path="/project" element={<Project />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Suspense>
    </div>
  );
}

function App() {
  const [load, updateLoad] = useState(true);
  useSpotlight();

  useEffect(() => {
    const timer = setTimeout(() => {
      updateLoad(false);
    }, 600);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      {/* Show Preloader only while loading */}
      {load ? (
        <PreLoader load={load} />
      ) : (
        <div className="App" id="scroll">
          <ScrollProgress />
          <Navbar />
          <ScrollToTop />
          <AnimatedRoutes />
          <Footer />
        </div>
      )}
    </Router>
  );
}

export default App;
