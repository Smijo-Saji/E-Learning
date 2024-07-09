import React, { useContext, useState } from "react";
import "./CourseCard.css";
import { Link, useNavigate } from "react-router-dom";
import { base_url } from "../..";
import { userContext } from "../../context/UserContextProvider";
import toast from "react-hot-toast";
import axios from "axios";
import { courseContext } from "../../context/CourseContextProvider";
import Modal from "react-bootstrap/Modal";
// import { UserData } from "../../context/UserContext";

function CourseCard({ course }) {
  const navigate = useNavigate();
  // const { user, isAuth } = UserData();
  const { user, isAuth } = useContext(userContext);
  const { fetchCourses } = useContext(courseContext);

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const deleteHandler = async (id) => {
    try {
      const { data } = await axios.delete(`${base_url}/api/course/${id}`, {
        headers: {
          token: localStorage.getItem("token"),
        },
      });
      handleClose();
      toast.success(data.message);

      fetchCourses();
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  return (
    <div
      className="border px-2 py-3 rounded shadow course-card"
      style={{ width: "18rem", height: "21rem" }}
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
          <p className="couse-price">{course.price} $</p>
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
                    onClick={() => navigate(`/course/${course._id}`)}
                    className="course-btn"
                  >
                    Study
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
                onClick={() => navigate(`/courses/lecture/${course._id}`)}
                className="course-btn"
              >
                Study
              </button>
            )}
          </>
        ) : (
          <button
            onClick={() => navigate("/authentication")}
            className="course-btn"
          >
            Get Started
          </button>
        )}

        {user && user.role === "admin" && (
          <button
            className="course-btn ms-3 border-0"
            style={{ backgroundColor: "red" }}
            onClick={() => handleShow()}
          >
            Delete
          </button>
        )}
      </div>
      <Modal show={show} onHide={handleClose} centered>
        <Modal.Body>
          <div className="d-flex flex-column align-items-center">
            <img
              src="https://i.postimg.cc/x10jsp5n/stock-vector-attention-sign-icon-warning-icon-1939873015-removebg-preview.png"
              alt=""
              className="warnig-model-img"
            />
            <p className="text-center fw-bold">Are You Sure?</p>
            <p className="text-center">
              This action cannot be undone, All values associated with this
              field will be lost{" "}
            </p>
            <div className="mx-3 d-flex flex-column gap-3">
              <button
                className="btn btn-danger"
                onClick={() => deleteHandler(course._id)}
              >
                Delete Course
              </button>
              <button className="btn border" onClick={handleClose}>
                Cancel
              </button>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default CourseCard;
