import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Certified Inspector You Can Count on",
          "Detailed and Thorough Inspections and Reports",
          "Reliable Reports You Can Understand",
          "Family Owned and Operated Assisting SWFL",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 75,
      }}
    />
  );
}

export default Type;