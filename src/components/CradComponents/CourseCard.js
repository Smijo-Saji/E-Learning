import React, { useContext } from "react";
import "./CourseCard.css";
import { Link, useNavigate } from "react-router-dom";
import { base_url } from "../..";
import { userContext } from "../../context/UserContextProvider";
// import { UserData } from "../../context/UserContext";

function CourseCard({ course }) {
  const navigate = useNavigate();
  // const { user, isAuth } = UserData();
  const { user, isAuth } = useContext(userContext);

  return (
    <div
      className="border px-2 py-3 rounded shadow course-card"
      style={{ width: "18rem" }}
    >
      <img
        src={`${base_url}/${course.image}`}
        alt=""
        style={{ width: "100%", height: "150px" }}
        className="rounded course-card-img"
      />
      <div className="px-2">
        <p className="course-title">{course.title}</p>
        <p className="course-instructor">
          Instructor - <span>{course.createdBy}</span>
        </p>
        <div className="d-flex justify-content-between">
          <p className="couse-price">₹ {course.price}</p>
          <div className="course-hours">
            <i class="fa-regular fa-clock me-2"></i>
            {course.duration}hrs
          </div>
        </div>
        {isAuth ? (
          <>
            {user && user.role !== "admin" ? (
              <>
                {user.subscription.includes(course._id) ? (
                  <button
                    onClick={() => navigate(`/course/study/${course._id}`)}
                    className="course-btn"
                  >
                    Start Learning
                  </button>
                ) : (
                  <button
                    onClick={() => navigate(`/course/${course._id}`)}
                    className="course-btn"
                  >
                    Get Started
                  </button>
                )}
              </>
            ) : (
              <button
                onClick={() => navigate(`/course/study/${course._id}`)}
                className="course-btn"
              >
                Start Learning
              </button>
            )}
          </>
        ) : (
          <button onClick={() => navigate("/login")} className="course-btn">
            Get Started
          </button>
        )}
      </div>
    </div>
  );
}

export default CourseCard;
