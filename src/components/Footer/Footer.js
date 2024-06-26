import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <div className="py-3 footer-div d-flex flex-column align-items-center">
      <img
        src="https://i.postimg.cc/4NKN3kSG/LOGO-EDUZEN-removebg-preview.png"
        alt=""
        style={{ width: "80px" }}
      />
      <p className="text-white mt-3" style={{ fontSize: "12px" }}>
        © 2024 EduZen Inc. All rights reserved.
      </p>
    </div>
  );
}

export default Footer;
