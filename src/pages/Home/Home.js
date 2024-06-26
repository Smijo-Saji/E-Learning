import React from "react";
import "./Home.css";

import MarqueeBox from "../../components/Marquee/MarqueeBox";
import HomeCrad from "../../components/CradComponents/HomeCard";
import Offers from "../../components/CradComponents/Offers";
import Feedback from "../../components/CradComponents/Feedback";
import HeroSec from "../../components/HeroSec/HeroSec";

function Home() {
  return (
    <div className="home-div ">
      <HeroSec />
      <div className="best-courses-div my-5 ">
        <h2 className="text-center taught-heading mb-4">Our Best Courses</h2>
        <div className="d-flex justify-content-evenly flex-wrap gap-3">
          <HomeCrad />
          <HomeCrad />
          <HomeCrad />
        </div>
      </div>
      <div className="marquee-div  container my-5">
        <h2 className="text-center taught-heading ">200+ topics taught...</h2>
        <p className="text-center fw-bold mb-4">
          Begin your learning journey with us today!
        </p>
        <MarqueeBox direction={"right"} />
        <MarqueeBox direction={"left"} />
        <MarqueeBox direction={"right"} />
        <MarqueeBox direction={"left"} />
      </div>
      <div className="community-div my-5">
        <h2 className="text-center taught-heading mb-4">Our Community</h2>

        <div className="d-flex gap-5 flex-wrap justify-content-center  py-4 social-media-community-main">
          <div className="social-media-community d-flex gap-3 align-items-center">
            <div>
              <p>LinkedIn</p>
              <h3 className="m-0">400K+</h3>
              <p>Connections</p>
            </div>
            <div>
              <img
                src="https://i.postimg.cc/3xszQL5T/download-removebg-preview-11.png"
                alt=""
                style={{ width: "60px", height: "60px" }}
              />
            </div>
          </div>
          <div className="social-media-community d-flex gap-3 align-items-center">
            <div>
              <p>Youtube</p>
              <h3 className="m-0">1.4M+</h3>
              <p>Subscribers</p>
            </div>
            <div>
              <img
                src="https://i.postimg.cc/7YPBFF57/download-removebg-preview-10.png"
                alt=""
                style={{ width: "80px" }}
              />
            </div>
          </div>
          <div className="social-media-community d-flex gap-3 align-items-center">
            <div>
              <p>Discord</p>
              <h3 className="m-0">55K+</h3>
              <p>Community</p>
            </div>
            <div>
              <img
                src="https://i.postimg.cc/1zhKM26L/black-discord-logo-black-discord-icon-black-discord-symbol-free-free-vector-removebg-preview.png"
                alt=""
                style={{ width: "60px" }}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="outcome-div">
        <h2 className="text-center taught-heading mb-4">Core Offferings</h2>
        <Offers />
      </div>
      <div className="feeback-div my-5">
        <h2 className="text-center taught-heading mb-4">
          Our Student Testimonials
        </h2>

        <div className="d-flex container justify-content-evenly flex-wrap gap-3">
          <Feedback />
        </div>
      </div>
    </div>
  );
}

export default Home;
