import React, { useContext } from "react";
import "./Courses.css";
import CourseCard from "../../components/CradComponents/CourseCard";
import { courseContext } from "../../context/CourseContextProvider.js";
// import { CourseData } from "../../context/CourseContext";

function Courses() {
  // const { courses } = CourseData();
  const { courses } = useContext(courseContext);
  console.log(courses);
  return (
    <div className="my-5 course-div ">
      <h1 className="course-heading text-center mb-4">Available Courses</h1>
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
              <p className="text-center">No Courses Uploaded</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Courses;
