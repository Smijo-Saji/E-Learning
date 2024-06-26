import React from "react";
import "./Feedback.css";

function Feedback() {
  const feedback = [
    {
      image: "https://i.postimg.cc/jqMK4Qsy/v3-0313419.jpg",
      name: "Anand Gadagin",
      position: "Jr Software Engineer",
      feedback:
        "I have been working with React for 2 years but the way Akshay teaches in the classes is totally from ground up. It helped me knowabout every line that I write in the react app now.",
    },
    {
      image: "https://i.postimg.cc/vBdZgWWC/download.jpg",
      name: "Shivam Pandey",
      position: "Software Developer",
      feedback:
        " The way of creating curiosity motivates me a lot. I’ve never attended this level of in-depth reactjs teaching. I appreciate a lot for teams behavior and teaching methods.",
    },
    {
      image: "https://i.postimg.cc/KYQmzd83/download.jpg",
      name: "Meenakshi",
      position: "Sr Software Developer",
      feedback:
        " React sessions not only helped me to upskill myReact knowledge, but gave me the leg up that I needed the most in my career. From the first day of the class all the sessions are very interactive.",
    },
    {
      image: "https://i.postimg.cc/jj9tPyyR/images.jpg",
      name: "Pujarini Jena",
      position: "Frontend Developer",
      feedback:
        " There were 2 technical interviews in the hiring process, I answered almost every question because of the javascript and react course, Purchasing React in June was one of my best investment.",
    },
  ];
  return (
    <>
      {feedback.map((i) => (
        <div
          className="feedback-card-div border rounded p-3"
          style={{ width: "18rem" }}
        >
          <div className="feeback-header d-flex align-items-center gap-3">
            <img src={i.image} alt="" />
            <div className="feedback-user">
              <p>{i.name}</p>
              <p>{i.position}</p>
            </div>
          </div>
          <div className="feedback-body">
            <p>{i.feedback}</p>
          </div>
        </div>
      ))}
    </>
  );
}

export default Feedback;
