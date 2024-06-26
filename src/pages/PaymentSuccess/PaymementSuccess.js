import React from "react";
import "./PaymentSuccess.css";
import { Link } from "react-router-dom";

function PaymementSuccess() {
  return (
    <div
      className="d-flex justify-content-center align-items-center"
      style={{ minHeight: "75vh" }}
    >
      <div className="success-card d-flex  flex-column align-items-center justify-content-center py-3 px-4  rounded shadow">
        <img
          src="https://i.postimg.cc/3r9Z3zMy/Check-Mark2sec-Video-ezgif-com-video-to-gif-converter.gif"
          alt=""
        />
        <h5 className=" mt-5">Payment Success 🎉🎉</h5>
        <p className="text-center mt-2">
          Your Course Subscription Has Been Activated
        </p>
        <p>Reference No - 542677176</p>
        <Link to={"/courses/coursedescription/paymentsuccess/dashboard"}>
          Go to Dashboard <i class="fa-solid fa-arrow-right"></i>
        </Link>
      </div>
    </div>
  );
}

export default PaymementSuccess;
