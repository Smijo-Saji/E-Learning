import React from "react";
import Marquee from "react-fast-marquee";
import "./MarqueeBox.css";

function MarqueeBox({ direction }) {
  return (
    <div>
      <Marquee
        className="marquee-tag"
        pauseOnHover
        speed={30}
        direction={direction}
        gradient
      >
        <p>Best Coding Practice</p>
        <p>Props & State</p>
        <p>Dynamic UI</p>
        <p>State Management</p>
        <p>JSX</p>
        <p>React</p>
        <p>Class Components</p>
        <p>Functional Components</p>
        <p>Hooks</p>
        <p>Redux</p>
        <p>Building Live Projects</p>
        <p>Optimizing React Appp</p>
        <p>Python Coding</p>
        <p>Expert in CSS</p>
      </Marquee>
    </div>
  );
}

export default MarqueeBox;
