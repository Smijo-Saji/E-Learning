import React, { useEffect } from "react";
import "./Authentication.css";

function Authentication() {
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
              <input type="text" placeholder="Username" required />
            </div>
            <div className="input-field">
              <i className="fas fa-lock"></i>
              <input type="password" placeholder="Password" required />
            </div>
            <button className="btn-sec solid">Login</button>
            <p className="mt-2">
              Don't have an account?
              <span id="sign-up-btn-1"> Signup</span>
            </p>
          </div>
          <div className="sign-up-form form-div">
            <h2 className="title">Sign up</h2>
            <div className="input-field">
              <i className="fas fa-user"></i>
              <input type="text" placeholder="Username" required />
            </div>
            <div className="input-field">
              <i className="fas fa-envelope"></i>
              <input type="email" placeholder="Email" required />
            </div>
            <div className="input-field">
              <i className="fas fa-lock"></i>
              <input type="password" placeholder="Password" required />
            </div>
            <button className="btn-sec">Sign Up</button>
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
    </div>
  );
}

export default Authentication;
