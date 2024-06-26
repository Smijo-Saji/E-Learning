import React from "react";
import "./Courses.css";
import CourseCard from "../../components/CradComponents/CourseCard";

function Courses() {
  return (
    <div className="my-5 course-div ">
      <h1 className="course-heading text-center mb-4">Available Courses</h1>
      <div className="course-cards-div container d-flex gap-3 flex-wrap justify-content-evenly">
        <CourseCard />
        <CourseCard />
        <CourseCard />
        <CourseCard />
      </div>
    </div>
  );
}

export default Courses;
