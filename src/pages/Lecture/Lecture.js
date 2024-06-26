import React from "react";
import "./Lecture.css";
import { Col, Container, Row } from "react-bootstrap";

function Lecture() {
  return (
    <div className="my-4" style={{ minHeight: "75vh" }}>
      <Container>
        <Row>
          <Col lg={8} md={8} className="p-2">
            <div className="left-vedio-sec">
              <img
                src="https://i.postimg.cc/J0TpsSVF/1-Kc-Ejo-k-Tc-NSC6-LHyt9edg.jpg"
                alt=""
                className="rounded w-100"
              />
              <p className="m-0 mt-3">Lecture - 1</p>
              <h3 className="m-0 mb-3">
                React Frontend Development Introduction
              </h3>
            </div>
          </Col>
          <Col lg={4} md={4} className="p-2">
            <div className="right-lecture-sec border rounded">
              <div className="right-header-sec  p-2">
                <h3 className="m-0">React Full Stack</h3>
                <p className="m-0">Eduzen - Prasanth 1/4</p>
              </div>
              <div className="p-3">
                <div className="d-flex gap-3 align-items-center lecture-card">
                  <i class="fa-solid fa-video"></i>
                  <div>
                    <h6 className="m-0">React Introduction</h6>
                    <p className="m-0">Eduzen</p>
                  </div>
                </div>
                <hr />
                <div className="d-flex gap-3 align-items-center lecture-card">
                  <i class="fa-solid fa-video"></i>
                  <div>
                    <h6 className="m-0">React Introduction</h6>
                    <p className="m-0">Eduzen</p>
                  </div>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Lecture;
