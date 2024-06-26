import React from "react";
import "./Offers.css";

function Offers() {
  return (
    <div className="d-flex justify-content-evenly container gap-3 flex-wrap">
      <div
        className="offering-card border p-3 rounded"
        style={{ width: "18rem" }}
      >
        <i class="fa-solid fa-laptop fa-2x mb-3"></i>
        <h5 className="fw-bold">Learn On Demand</h5>
        <p className="m-0">
          Learn at your own pace, from anywhere in the world.
        </p>
      </div>
      <div
        className="offering-card border p-3 rounded"
        style={{ width: "18rem" }}
      >
        <i class="fa-solid fa-laptop-file fa-2x mb-3"></i>
        <h5 className="fw-bold">Expert Guidance</h5>
        <p className="m-0">
          Learn everything from the best in the industry experts.
        </p>
      </div>
      <div
        className="offering-card border p-3 rounded"
        style={{ width: "18rem" }}
      >
        <i class="fa-regular fa-lightbulb fa-2x mb-3"></i>
        <h5 className="fw-bold">Project Based Learning</h5>
        <p className="m-0">
          Learn everything from scratch by building super-cool projects.
        </p>
      </div>
      <div
        className="offering-card border p-3 rounded"
        style={{ width: "18rem" }}
      >
        <i class="fa-solid fa-bars fa-2x mb-3"></i>
        <h5 className="fw-bold">Comprehensive curriculum</h5>
        <p className="m-0">
          Make your way through with our latest and comprehensive curriculum.
        </p>
      </div>
    </div>
  );
}

export default Offers;
