import React from "react";
import "./About.css";

function About() {
  return (
    <div className="about-div my-5 d-flex flex-column align-items-center container">
      <div className="mb-5">
        <h1 className="text-center mb-5">About Us</h1>
        <p>
          STRIDE is your premier online destination for learning coding skills.
          We offer comprehensive courses in modern web technologies, including
          React JS, HTML, CSS, and more. Our platform provides practical,
          hands-on learning experiences to help you build real-world skills.
          Whether you're a beginner or an experienced developer, our expert-led
          instruction and supportive community are here to guide you. Join us to
          take your coding skills to the next level!
        </p>
      </div>
      <h1 className="mb-5">We're changing the way people learn</h1>
      <div>
        <h3 className="text-center">Our Mission</h3>
        <p>
          At STRIDE, our mission is to help aspiring learners and coders
          innovate using modern technology, transforming them into efficient
          front-end developers. We believe in the "learn by building" principle,
          focusing on practical and hands-on learning experiences for students.
          <br /> Through our courses, we aim to build a community of top-notch
          developers. We are committed to fostering continuous growth and
          innovation in front-end development through expert-led instruction and
          a supportive learning community.
        </p>
      </div>
      <div className="mt-5">
        <h3 className="text-center">Our Value</h3>
        <p>
          At STRIDE, our vision is to empower a generation of developers to
          shape and contribute to the digital future of India. Our e-learning
          platform is dedicated to providing easy access to premium learning
          resources for the tech community, enabling them to upskill and advance
          in their careers. By offering top-tier educational content, we aim to
          nurture talent and foster innovation.
          <br /> We are committed to ensuring that our developers are equipped
          to meet the evolving demands of the tech industry and drive the nation
          forward in the digital age. Join us in building a brighter, tech-savvy
          future for India.
        </p>
      </div>
    </div>
  );
}

export default About;
