import React, { useContext, useEffect, useState } from "react";
import "./Authentication.css";
import { Link, useNavigate } from "react-router-dom";
import Modal from "react-bootstrap/Modal";
import { userContext } from "../../context/UserContextProvider";
import { courseContext } from "../../context/CourseContextProvider";
import ReCAPTCHA from "react-google-recaptcha";
import toast from "react-hot-toast";

function Authentication() {
  const [passShowLogin, setPassShowLogin] = useState(true);
  const [passShowRegister, setPassShowRegister] = useState(true);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [otp, setOtp] = useState("");

  const [showCaptche, setShowCaptche] = useState(false);

  function onChange(value) {
    setShowCaptche(true);
  }

  const navigate = useNavigate();
  const { fetchMyCourse } = useContext(courseContext);
  const { loginUser, btnLoading, registerUser, verifyOtp } =
    useContext(userContext);

  const [loginDetails, setLoginDetails] = useState({
    email: "",
    password: "",
  });

  const [registerDetails, setRegisterDetails] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleLogin = async () => {
    await loginUser(loginDetails, navigate, fetchMyCourse);
  };

  const handleRegister = async () => {
    if (
      registerDetails.name === "" ||
      registerDetails.email === "" ||
      registerDetails.password === ""
    ) {
      toast.error("Please Fill Datas");
    } else {
      await registerUser(registerDetails, handleShow);
    }
    setRegisterDetails({ name: "", email: "", password: "" });
  };

  const handleVerify = async () => {
    await verifyOtp(Number(otp), navigate, handleClose);
  };

  useEffect(() => {
    const sign_in_btn = document.querySelector("#sign-in-btn");
    const sign_up_btn = document.querySelector("#sign-up-btn");
    const sign_up_btn_1 = document.querySelector("#sign-up-btn-1");
    const sign_in_btn_1 = document.querySelector("#sign-in-btn-1");
    const container = document.querySelector(".container-div");

    const handleSignUp = () => {
      container.classList.add("sign-up-mode");
    };

    const handleSignIn = () => {
      container.classList.remove("sign-up-mode");
    };

    if (
      sign_up_btn &&
      sign_in_btn &&
      container &&
      sign_up_btn_1 &&
      sign_in_btn_1
    ) {
      sign_up_btn.addEventListener("click", handleSignUp);
      sign_in_btn.addEventListener("click", handleSignIn);
      sign_up_btn_1.addEventListener("click", handleSignUp);
      sign_in_btn_1.addEventListener("click", handleSignIn);
    }

    return () => {
      if (
        sign_up_btn &&
        sign_in_btn &&
        container &&
        sign_up_btn_1 &&
        sign_in_btn_1
      ) {
        sign_up_btn.removeEventListener("click", handleSignUp);
        sign_in_btn.removeEventListener("click", handleSignIn);
        sign_up_btn_1.removeEventListener("click", handleSignUp);
        sign_in_btn_1.removeEventListener("click", handleSignIn);
      }
    };
  }, []);

  return (
    <div className="container-div">
      <div className="forms-container">
        <div className="signin-signup">
          <div className="sign-in-form form-div">
            <h2 className="title">Sign in</h2>
            <div className="input-field">
              <i className="fas fa-user"></i>
              <input
                type="text"
                placeholder="Username"
                required
                value={loginDetails.email}
                onChange={(e) =>
                  setLoginDetails({
                    ...loginDetails,
                    ["email"]: e.target.value,
                  })
                }
              />
            </div>
            <div className="input-field">
              <i className="fas fa-lock"></i>
              <input
                type={passShowLogin ? "password" : "text"}
                placeholder="Password"
                required
                value={loginDetails.password}
                onChange={(e) =>
                  setLoginDetails({
                    ...loginDetails,
                    ["password"]: e.target.value,
                  })
                }
              />
              {passShowLogin ? (
                <i
                  class="fa-solid fa-eye"
                  onClick={() => setPassShowLogin(!passShowLogin)}
                ></i>
              ) : (
                <i
                  class="fa-regular fa-eye"
                  onClick={() => setPassShowLogin(!passShowLogin)}
                ></i>
              )}
            </div>
            <button
              className="btn-sec solid"
              onClick={handleLogin}
              disabled={btnLoading}
            >
              {btnLoading ? "Please Wait.." : "Login"}
            </button>
            <p className="mt-2">
              Don't have an account?
              <span id="sign-up-btn-1"> Signup</span>
            </p>
            <p>
              <Link to={"/forget"} className="forget-link">
                Forgot password?
              </Link>
            </p>
          </div>
          <div className="sign-up-form form-div">
            <h2 className="title">Sign up</h2>
            <div className="input-field">
              <i className="fas fa-user"></i>
              <input
                type="text"
                placeholder="Username"
                required
                value={registerDetails.name}
                onChange={(e) =>
                  setRegisterDetails({
                    ...registerDetails,
                    ["name"]: e.target.value,
                  })
                }
              />
            </div>
            <div className="input-field">
              <i className="fas fa-envelope"></i>
              <input
                type="email"
                placeholder="Email"
                required
                value={registerDetails.email}
                onChange={(e) =>
                  setRegisterDetails({
                    ...registerDetails,
                    ["email"]: e.target.value,
                  })
                }
              />
            </div>
            <div className="input-field">
              <i className="fas fa-lock"></i>
              <input
                type={passShowRegister ? "password" : "text"}
                placeholder="Password"
                required
                value={registerDetails.password}
                onChange={(e) =>
                  setRegisterDetails({
                    ...registerDetails,
                    ["password"]: e.target.value,
                  })
                }
              />
              {passShowRegister ? (
                <i
                  class="fa-solid fa-eye"
                  onClick={() => setPassShowRegister(!passShowRegister)}
                ></i>
              ) : (
                <i
                  class="fa-regular fa-eye"
                  onClick={() => setPassShowRegister(!passShowRegister)}
                ></i>
              )}
            </div>
            <button
              className="btn-sec"
              onClick={handleRegister}
              disabled={btnLoading}
            >
              {btnLoading ? "Please Wait.." : "Register"}
            </button>
            <p className="mt-2">
              Already have an account?
              <span id="sign-in-btn-1"> SignIn</span>
            </p>
          </div>
        </div>
      </div>

      <div className="panels-container">
        <div className="panel left-panel">
          <div className="content">
            <h3>New here ?</h3>
            <p>
              Join us today and start your journey with our community. Sign up
              to enjoy exclusive features and stay updated!
            </p>
            <button className="btn-sec transparent" id="sign-up-btn">
              Sign up
            </button>
          </div>
          <img
            src="https://i.postimg.cc/0Q8CssrS/Market-launch-pana.png"
            className="image"
            alt=""
          />
        </div>
        <div className="panel right-panel">
          <div className="content">
            <h3>One of us ?</h3>
            <p>
              Welcome back! If you already have an account, sign in to access
              your dashboard and stay connected.
            </p>
            <button className="btn-sec transparent" id="sign-in-btn">
              Sign in
            </button>
          </div>
          <img
            src="https://i.postimg.cc/wBKrSvM1/Launching-amico.png"
            className="image"
            alt=""
          />
        </div>
      </div>

      <Modal show={show} onHide={handleClose} centered>
        <Modal.Body className="px-5">
          <div className="d-flex flex-column align-items-center py-2">
            <h3>OTP</h3>
            <img
              src="https://i.postimg.cc/fTRH2Ycr/Screenshot-2024-07-01-112137-1.png"
              alt=""
              style={{ width: "200px" }}
            />
            <input
              type="text"
              className="form-control my-3 text-center"
              value={otp}
              onChange={(e) => {
                setOtp(e.target.value);
              }}
              style={{ width: "200px" }}
            />
            <h4>Verification Code</h4>
            <p className="text-center mt-3 mb-5">
              We have sent a verification code to your registered email-id
            </p>
            <ReCAPTCHA
              sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"
              onChange={onChange}
            />
            {showCaptche && (
              <button
                className="btn btn-success mt-3"
                onClick={handleVerify}
                disabled={btnLoading}
              >
                {btnLoading ? "Please Wait.." : "Verify"}
              </button>
            )}
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default Authentication;
