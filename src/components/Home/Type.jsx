import React from "react";
import Typewriter from "typewriter-effect";

const Type = () => {
    return (
        <Typewriter
          options={{
            strings: [
              "Full-Stack Developer",
              "UI/UX Designer",
              "Product Designer",
              "SEO Specialist",
              "Creative Technologist"
            ],
            autoStart: true,
            loop: true,
            deleteSpeed: 100,
          }}
        />
      )
}

export default Type
