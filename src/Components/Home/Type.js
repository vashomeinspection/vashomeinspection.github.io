import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Certified Inspector You Can Count on",
          "Thorough, Detailed Inspections and Reports",
          "Reliable Reports You Can Understand",
          "Family Owned and Operated",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 75,
      }}
    />
  );
}

export default Type;