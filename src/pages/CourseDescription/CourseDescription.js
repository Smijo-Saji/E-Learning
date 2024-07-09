import React, { useContext, useEffect } from "react";
import "./CourseDescription.css";
import { Col, Container, Row } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import { courseContext } from "../../context/CourseContextProvider";
import { base_url } from "../..";

function CourseDescription({ user }) {
  const params = useParams();
  const navigate = useNavigate();
  const { fetchCourse, course } = useContext(courseContext);

  useEffect(() => {
    fetchCourse(params.id);
  }, []);

  return (
    <>
      <div style={{ minHeight: "80vh" }} className="d-flex align-items-center">
        {course && (
          <Container>
            <Row className="my-3">
              <Col lg={8} md={6} className="d-flex align-items-center">
                <img
                  src={`${base_url}/${course.image}`}
                  alt=""
                  style={{ width: "100%" }}
                  className="rounded shadow"
                />
              </Col>
              <Col lg={4} md={6} className="d-flex align-items-center">
                <div className="description-sec-div">
                  <h2>{course.title}</h2>
                  <p>{course.description}</p>
                  <div className="d-flex align-items-center gap-3 mt-4 mb-2 flex-wrap">
                    <p className="lecture-div m-0">
                      <i class="fa-solid fa-user-tie me-3"></i>Instructor :{" "}
                      {course.createdBy}
                    </p>
                    <p className="lecture-div m-0">
                      <i class="fa-regular fa-clock me-3"></i>Doration :{" "}
                      {course.duration}hrs
                    </p>
                  </div>
                  <p
                    className="lecture-div m-0 mb-2"
                    style={{ width: "300px" }}
                  >
                    <i class="fa-solid fa-layer-group me-3"></i>Category :{" "}
                    {course.category}
                  </p>
                  <p
                    className="lecture-div m-0 mb-2"
                    style={{ width: "250px" }}
                  >
                    <i class="fa-solid fa-trophy me-3"></i>Certificate of
                    completion
                  </p>
                  <p
                    className="lecture-div m-0 mb-4"
                    style={{ width: "200px" }}
                  >
                    <i class="fa-solid fa-infinity me-3"></i>Full lifetime
                    access
                  </p>
                  <p>
                    Lets Get Strated Course At ${" "}
                    <span className="fw-bold">{course.price} /-</span>
                  </p>

                  {user && user.subscription.includes(course._id) ? (
                    <button
                      className="btn btn-success"
                      style={{ width: "250px" }}
                      onClick={() => navigate(`/courses/lecture/${course._id}`)}
                    >
                      Study
                    </button>
                  ) : (
                    <>
                      <button
                        className="btn btn-success mb-2"
                        style={{ width: "250px" }}
                        onClick={() => navigate(`/checkout/${params.id}`)}
                      >
                        Enroll Now
                      </button>
                    </>
                  )}
                </div>
              </Col>
            </Row>
          </Container>
        )}
      </div>
    </>
  );
}

export default CourseDescription;
