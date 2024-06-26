import React from "react";
import "./CourseCard.css";
import { Link } from "react-router-dom";

function CourseCard() {
  return (
    <div
      className="border px-2 py-3 rounded shadow course-card"
      style={{ width: "18rem" }}
    >
      <img
        src="https://i.postimg.cc/J0TpsSVF/1-Kc-Ejo-k-Tc-NSC6-LHyt9edg.jpg"
        alt=""
        style={{ width: "100%" }}
        className="rounded course-card-img"
      />
      <div className="px-2">
        <p className="course-title">
          MEARN Stack Learning E-learning Management System
        </p>
        <p className="course-instructor">
          Instructor - <span>Prashanth</span>
        </p>
        <div className="d-flex justify-content-between">
          <p className="couse-price">₹ 1299</p>
          <div className="course-hours">
            <i class="fa-regular fa-clock me-2"></i>5hrs
          </div>
        </div>
        <Link to={"/courses/coursedescription"}>
          <button className="course-btn">Get Strated</button>
        </Link>
      </div>
    </div>
  );
}

export default CourseCard;
