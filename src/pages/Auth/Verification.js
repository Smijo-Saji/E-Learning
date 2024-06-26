import React from "react";
import "./Verification.css";
import { Link } from "react-router-dom";

function Verification() {
  return (
    <div className="d-flex justify-content-center align-items-center verification-div flex-column">
      <div className="card p-4">
        <h2>Verify Account</h2>
        <div className="d-flex flex-column mt-4 align-items-center">
          <label htmlFor="otp"> OTP </label>
          <input type="number" required className="form-control mt-3 mb-3" />
          <button className="verify-btn">Verify</button>
        </div>
      </div>
      <p className="mt-5">
        Go to <Link to={"/authentication"}>Login Page</Link>
      </p>
    </div>
  );
}

export default Verification;
