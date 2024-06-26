import React from "react";
import "./CourseDescription.css";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

function CourseDescription() {
  const checkoutHandler = () => {};
  return (
    <div style={{ minHeight: "75vh" }} className="d-flex align-items-center">
      <Container>
        <Row className="my-3">
          <Col lg={6} md={6} className="d-flex align-items-center">
            <img
              src="https://i.postimg.cc/J0TpsSVF/1-Kc-Ejo-k-Tc-NSC6-LHyt9edg.jpg"
              alt=""
              style={{ width: "100%" }}
              className="rounded shadow"
            />
          </Col>
          <Col lg={6} md={6} className="d-flex align-items-center">
            <div className="description-sec-div">
              <h2>React Full Stack</h2>
              <p>
                A React Full Stack Developer designs and develops end-to-end web
                applications, utilizing React for the front-end and Node.js,
                Express, and databases like MongoDB or SQL for the back-end.
              </p>
              <div className="d-flex align-items-center gap-3 my-4 flex-wrap">
                <p className="lecture-div m-0">
                  <i class="fa-solid fa-user-tie me-3"></i>Instructor :
                  Prashanth
                </p>
                <p className="lecture-div m-0">
                  <i class="fa-regular fa-clock me-3"></i>Doration : 5hrs
                </p>
              </div>
              <p>
                Lets Get Strated Course At ₹{" "}
                <span className="fw-bold">1299 /-</span>
              </p>
              <Link to={"/courses/coursedescription/paymentsuccess"}>
                <button className="btn btn-success" onClick={checkoutHandler}>
                  Buy Now
                </button>
              </Link>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default CourseDescription;
