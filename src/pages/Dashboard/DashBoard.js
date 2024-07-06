import React, { useContext, useState } from "react";
import "./DashBoard.css";
import { Col, Row } from "react-bootstrap";
import CourseCard from "../../components/CradComponents/CourseCard";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { userContext } from "../../context/UserContextProvider";
import { courseContext } from "../../context/CourseContextProvider";
import AdminCourses from "../../Admin/Courses/AdminCourses";
import AdminDashBoard from "../../Admin/Dashboard/AdminDashBoard";
import AdminUsers from "../../Admin/Users/AdminUsers";

function DashBoard({ user }) {
  const navigate = useNavigate();
  const { setIsAuth, setUser } = useContext(userContext);
  const { myCourse } = useContext(courseContext);
  const [activeComponent, setActiveComponent] = useState("dashboard");

  const logoutHandler = () => {
    localStorage.clear();
    setUser([]);
    setIsAuth(false);
    toast.success("Logged Out");
    navigate("/authentication");
  };

  return (
    <div className="container-fluid" style={{ minHeight: "75vh" }}>
      <Row>
        <Col lg={3} md={4} className="p-2">
          <div className="border user-sec-dash d-flex flex-column align-items-center rounded shadow py-4 ">
            <img src="https://i.postimg.cc/j5TkF1ms/download.png" alt="" />
            <h5>{user.name}</h5>
            <p>{user.email}</p>
            {user.role === "admin" && <p>{user.role}</p>}
            <button className="btn btn-danger mb-3" onClick={logoutHandler}>
              Logout
            </button>
            {user.role === "admin" && (
              <div>
                <button
                  className={`admin-btn w-100 mb-3 shadow ${
                    activeComponent === "dashboard" ? "active-button" : ""
                  }`}
                  onClick={() => setActiveComponent("dashboard")}
                >
                  <img
                    src="https://i.postimg.cc/hvt21xpN/image-26.png"
                    alt=""
                    className="me-2"
                    style={{ width: "20px" }}
                  />{" "}
                  Dashboard
                </button>
                <button
                  className={`admin-btn w-100 mb-3 shadow ${
                    activeComponent === "courses" ? "active-button" : ""
                  }`}
                  onClick={() => setActiveComponent("courses")}
                >
                  <img
                    src="https://i.postimg.cc/dVrjd4JL/image-27.png"
                    alt=""
                    className="me-2"
                    style={{ width: "30px" }}
                  />{" "}
                  Courses
                </button>
                {user && user.mainrole === "superadmin" && (
                  <button
                    className={`admin-btn w-100 shadow ${
                      activeComponent === "users" ? "active-button" : ""
                    }`}
                    onClick={() => setActiveComponent("users")}
                  >
                    <img
                      src="https://i.postimg.cc/6qxv9NGc/image-28.png"
                      alt=""
                      className="me-2"
                      style={{ width: "30px" }}
                    />{" "}
                    Users
                  </button>
                )}
              </div>
            )}
          </div>
        </Col>
        <Col lg={9} md={8} className="p-2">
          <div className="border shadow rounded course-sec-dash py-4 px-3 ">
            {user.role === "admin" ? (
              <>
                {activeComponent === "dashboard" && <AdminDashBoard />}
                {activeComponent === "courses" && <AdminCourses />}
                {activeComponent === "users" && <AdminUsers />}
              </>
            ) : (
              <>
                <h3>All Enrolled Courses </h3>
                <div className="d-flex justify-content-evenly mt-4 flex-wrap">
                  {myCourse && myCourse.length > 0 ? (
                    myCourse.map((i) => <CourseCard key={i._id} course={i} />)
                  ) : (
                    <img
                      src="https://i.postimg.cc/c6yxnvyh/no-data-empty-concept-vector-41830411-removebg-preview.png"
                      alt=""
                      style={{ width: "200px" }}
                    />
                  )}
                </div>
              </>
            )}
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default DashBoard;
