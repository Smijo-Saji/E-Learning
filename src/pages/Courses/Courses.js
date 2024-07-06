import React, { useContext, useEffect } from "react";
import "./Courses.css";
import CourseCard from "../../components/CradComponents/CourseCard";
import { courseContext } from "../../context/CourseContextProvider.js";

function Courses() {
  const { courses, fetchCourses } = useContext(courseContext);
  useEffect(() => {
    fetchCourses();
  }, []);
  return (
    <div className="my-3 course-div ">
      <h1 className="course-heading text-center mb-3">Available Courses</h1>
      <div className="course-cards-div container d-flex gap-3 flex-wrap justify-content-evenly">
        {courses && courses.length > 0 ? (
          courses.map((i) => <CourseCard course={i} />)
        ) : (
          <div
            className="d-flex flex-column justify-content-center"
            style={{ height: "60vh" }}
          >
            <div style={{ width: "300px" }}>
              {" "}
              <img
                src="https://i.postimg.cc/vTkgNwMx/No-data-cuate.png"
                alt=""
                className="w-100"
              />
              <p className="text-center">No Courses</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Courses;
