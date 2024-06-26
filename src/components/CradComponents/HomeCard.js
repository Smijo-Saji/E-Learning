import React from "react";
import "./HomeCard.css";

function HomeCrad() {
  return (
    <div className="home-corse-card p-3   rounded" style={{ width: "18rem" }}>
      <img
        src="https://i.postimg.cc/J0TpsSVF/1-Kc-Ejo-k-Tc-NSC6-LHyt9edg.jpg"
        alt=""
        style={{ width: "100%" }}
        className="rounded home-card-img"
      />
      <div className="card-body-sec mt-3 d-flex flex-column align-items-center">
        <h4>React Tutorial</h4>
        <p>
          Wanna dive deep into React and become Frontend Expert? Learn with me
          now!
        </p>
        <button className="btn btn-success">START LEARNING</button>
      </div>
    </div>
  );
}

export default HomeCrad;
