import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";

import Home from './pages/Home';
import Skill from './pages/Skillset';
import Project from './pages/Projects';
import Resume from './pages/Resume';
import Contact from './pages/Contact';

import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import PreLoader from "./components/PreLoader";
import ScrollToTop from "./components/ScrollToTop";

import "./App.css";
import "./style.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [load, updateLoad] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      updateLoad(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      {/* Show Preloader only while loading */}
      {load ? (
        <PreLoader load={load} />
      ) : (
        <div className="App" id="scroll">
          <Navbar />
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/skillset" element={<Skill />} />
            <Route path="/project" element={<Project />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
          <Footer />
        </div>
      )}
    </Router>
  );
}

export default App;
