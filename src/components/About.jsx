import React from "react";
export default function About() {
  return (
    <>
      <div className="container border-2 rounded my-5" id="about">
        <div className="display-4 heading">
          Discover the Story Behind the Code
        </div>
        <p className="text">
          "Mastering C, Python, HTML, CSS, JavaScript, ReactJS, and Bootstrap, I
          sculpt digital wonders. With C, I engineer robust solutions; Python
          unleashes versatile creativity. In web realms, HTML, CSS, and
          JavaScript weave immersive experiences, while ReactJS crafts seamless
          interfaces. Bootstrap ensures elegance and responsiveness across
          platforms. Passion-driven and innovation-fueled, I pioneer the digital
          frontier, shaping tomorrow's landscapes with every line of code. Join
          me in the journey of turning ideas into captivating realities."
        </p>
        <div className="display-6 sub">Skills:</div>
        <span class="badge text-bg-danger bad">C</span>
        <span class="badge text-bg-danger bad">PYTHON</span>
        <span class="badge text-bg-danger bad">HTML</span>
        <span class="badge text-bg-danger bad">CSS</span>
        <span class="badge text-bg-danger bad">JAVASCRIPT</span>
        <span class="badge text-bg-danger bad">REACT</span>
        <span class="badge text-bg-danger bad">BOOTSTRAP</span>
        <span class="badge text-bg-danger bad">Android development</span>
        <div>
          <div className="display-6 sub">My coding journey:</div>
          <p className="text" style={{ color: "red" }}>
            From humble beginnings in engineering, I embarked on a journey into
            the world of coding, initially stumbling through unfamiliar syntax
            and daunting challenges. Yet, with each struggle, I found
            resilience, refusing to succumb to the allure of defeat. Instead, I
            embraced the hurdles as stepping stones, fueling my determination to
            conquer the unknown. Through perseverance and unwavering dedication,
            I transformed from a novice to a proficient coder, crafting my own
            narrative of growth and resilience. Join me as I showcase not just
            my work, but the testament of a journey where perseverance triumphs
            over adversity.
          </p>
        </div>
      </div>
    </>
  );
}
