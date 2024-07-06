import React, { useState } from "react";
import "./ForgetPassword.css";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import axios from "axios";
import { base_url } from "../..";

function ForgetPassword() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [btnLoading, setBtnLoading] = useState(false);

  const handleReset = async () => {
    setBtnLoading(true);
    try {
      const { data } = await axios.post(`${base_url}/api/user/forgot`, {
        email,
      });
      toast.success(data.message);
      navigate("/authentication");
    } catch (error) {
      toast.error(error.response.data.message);
      setBtnLoading(false);
    }
  };

  return (
    <div className="forgot-main-div d-flex justify-content-center align-items-center">
      <div
        className="forget-div p-3 border shadow rounded d-flex flex-column align-items-center"
        style={{ width: "25rem" }}
      >
        <img
          src="https://i.postimg.cc/MGLn4tWd/Screenshot-2024-07-01-135350-1-1-removebg-preview.png"
          alt=""
          className="forgot-img"
        />
        <h5>Forgot Password</h5>
        <p className="text-center forgot-p">
          Enter your email and we'll send you link to reset your password
        </p>
        <div className="w-100">
          <label htmlFor="email-tag" className="text-start mb-1">
            Email
          </label>
          <input
            id="email-tag"
            type="text"
            className="form-control"
            placeholder="Your email address"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <button
          className="btn btn-success my-4 w-75"
          disabled={btnLoading}
          onClick={handleReset}
        >
          {btnLoading ? "Please wait.." : "Submit"}
        </button>
        <div
          className="d-flex align-items-center mt-3 back-btn"
          onClick={() => navigate("/authentication")}
        >
          <i class="fa-solid fa-chevron-left"></i>
          <p className="m-0 ms-2">Back to Login</p>
        </div>
      </div>
    </div>
  );
}

export default ForgetPassword;
