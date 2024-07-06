import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <div className="py-3 footer-div d-flex flex-column align-items-center">
      <div className="d-flex align-items-center gap-2">
        <img
          src="https://i.postimg.cc/k4rPNVKg/image-24.png"
          alt=""
          className="nav-icon"
        />
        <img
          src="https://i.postimg.cc/TY6B3MqB/stride-property-group-spg-new-zealand-removebg-preview.png"
          alt=""
          className="nav-img"
        />
      </div>
      <p className="text-white mt-3" style={{ fontSize: "12px" }}>
        © 2024 STRIDE Inc. All rights reserved.
      </p>
    </div>
  );
}

export default Footer;
