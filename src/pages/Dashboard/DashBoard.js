import React, { useContext } from "react";
import "./DashBoard.css";
import { Col, Row } from "react-bootstrap";
import CourseCard from "../../components/CradComponents/CourseCard";
// import { UserData } from "../../context/UserContext.js";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { userContext } from "../../context/UserContextProvider";

function DashBoard({ user }) {
  const navigate = useNavigate();
  // const { setIsAuth, setUser } = UserData();
  const { setIsAuth, setUser } = useContext(userContext);
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
        <Col lg={4} md={4} className="p-2">
          <div className="border user-sec-dash d-flex flex-column align-items-center rounded shadow py-4 h-100">
            <img src="https://i.postimg.cc/j5TkF1ms/download.png" alt="" />
            <h5>{user.name}</h5>
            <p>{user.email}</p>
            {user.role === "admin" && <p>{user.role}</p>}
            <button className="btn btn-danger" onClick={logoutHandler}>
              Logout
            </button>
          </div>
        </Col>
        <Col lg={8} md={8} className="p-2">
          <div className="border shadow rounded course-sec-dash py-4 px-3 ">
            <h3>All Enrolled Courses </h3>
            <div className="d-flex justify-content-evenly mt-4 flex-wrap">
              {/* <CourseCard />
              <CourseCard />
              <CourseCard /> */}
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default DashBoard;
