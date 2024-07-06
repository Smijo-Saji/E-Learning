import React, { useEffect, useState } from "react";
import "./ForgetPassword.css";
import { useNavigate, useParams } from "react-router-dom";
import toast from "react-hot-toast";
import axios from "axios";
import { base_url } from "../..";

function ResetPassword() {
  const navigate = useNavigate();
  const [password, setPassword] = useState("");
  const [cpassword, setCPassword] = useState("");
  const [errormsg, setErrorMsg] = useState("");
  const [btnLoading, setBtnLoading] = useState(false);
  const params = useParams();

  const [showPass, setShowPass] = useState(false);

  const handleReset = async () => {
    setBtnLoading(true);

    if (password !== cpassword) {
      setErrorMsg("Password Doesn't Match");
      setBtnLoading(false);
    } else {
      setErrorMsg("");
      try {
        const { data } = await axios.post(
          `${base_url}/api/user/reset?token=${params.token}`,
          {
            password,
          }
        );
        toast.success(data.message);
        navigate("/authentication");
      } catch (error) {
        toast.error(error.response.data.message);
        setBtnLoading(false);
      }
    }
  };
  useEffect(() => {
    setErrorMsg("");
  }, [password, cpassword]);

  return (
    <div className="forgot-main-div d-flex justify-content-center align-items-center">
      <div
        className="forget-div p-3 border shadow rounded d-flex flex-column align-items-center"
        style={{ width: "25rem" }}
      >
        <img
          src="https://i.postimg.cc/zGPhfkrh/Screenshot-2024-07-01-151358-1-1-removebg-preview.png"
          alt=""
          className="reset-img"
        />
        <h5>Reset Password</h5>

        <div className="w-100">
          <label htmlFor="pswd-tag" className="text-start psw-text">
            Password
          </label>
          <input
            id="pswd-tag"
            type={showPass ? "text" : "password"}
            className="form-control"
            placeholder="Please enter your new password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="w-100 mt-4">
          <label htmlFor="cpswd-tag" className="text-start psw-text">
            Confirm Password
          </label>
          <input
            id="cpswd-tag"
            type={showPass ? "text" : "password"}
            className="form-control"
            placeholder="Confim your new password"
            required
            value={cpassword}
            onChange={(e) => setCPassword(e.target.value)}
          />
        </div>
        <div className="mt-2 d-flex gap-1">
          <input
            type="checkbox"
            checked={showPass}
            onClick={() => setShowPass(!showPass)}
          />
          <p className="m-0">Show Password</p>
        </div>
        <p className="text-danger m-0 mt-2 error-msg-field">{errormsg}</p>
        <button
          className="btn btn-success mb-4 w-75"
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

export default ResetPassword;
