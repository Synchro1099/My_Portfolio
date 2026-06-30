import React from "react";
import Typewriter from "typewriter-effect";

const Type = () => {
    return (
        <Typewriter
          options={{
            strings: [
              "Scalable Web Application Developer",
              "Business Problem Solver",
              "Cross-Industry Solution Builder",
              "Adaptable Full Stack Developer",
              "Digital Solution Architect"
            ],
            autoStart: true,
            loop: true,
            deleteSpeed: 100,
          }}
        />
      )
}

export default Type
