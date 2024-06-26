import React from "react";
import "./HeroSec.css";
import { Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import ParticlesComponent from "../ParticlesComponent";

function HeroSec() {
  return (
    <div className="container-fluid hero-sec-div">
      <div className="particles-wrapper">
        <ParticlesComponent id="particles" />
      </div>
      <Row className="my-4">
        <Col lg={6} mg={6} className="d-flex justify-content-center">
          <div class="hero_animation">
            <img
              src="https://edmy-react.hibootstrap.com/images/banner/banner-img-1.png"
              alt=""
              class="w-100"
            />
          </div>
        </Col>
        <Col lg={6} mg={6}>
          <div className="hero-text-div">
            <div className="hero-text-h1">
              <h1>Imporve Your Online</h1>
              <h1>Learning Experience</h1>
              <h1>Better Instantly</h1>
            </div>
            <div>
              <p className="mt-3 hero-text-p">
                We have 40k+ Online courses & 500k+ Online registeres student.
                Find your desired Course from them
              </p>
            </div>
            <div className="hero-button my-3">
              <button className="me-4">Explore Here</button>
              <img
                src="https://i.postimg.cc/Mpz8kQ77/image-23-removebg-preview.png"
                alt=""
              />
            </div>
            <div className="hero-users-div d-flex align-items-center flex-wrap">
              <div className="hero-images-3">
                <img src="https://i.postimg.cc/jj9tPyyR/images.jpg" alt="" />
                <img src="https://i.postimg.cc/vBdZgWWC/download.jpg" alt="" />
                <img
                  src="https://i.postimg.cc/jqMK4Qsy/v3-0313419.jpg"
                  alt=""
                />
              </div>
              <p className="m-0 ms-2 ">
                500K+ Peoples already trusted us.{" "}
                <Link to={"/courses"} className="text-success ">
                  View Courses
                </Link>
              </p>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default HeroSec;
