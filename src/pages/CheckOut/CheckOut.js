import React, { useContext, useEffect, useState } from "react";
import "./CheckOut.css";
import { Col, Container, Row } from "react-bootstrap";
import PayPalButton from "../../components/PaypalButton";
import { userContext } from "../../context/UserContextProvider";
import { courseContext } from "../../context/CourseContextProvider";
import { useParams } from "react-router-dom";

function CheckOut() {
  const { user } = useContext(userContext);
  const { fetchCourse, course } = useContext(courseContext);
  const [body, setBody] = useState({
    first_name: "",
    last_name: "",
    email: user.email,
    state: "",
    mobile_no: "",
  });
  const [verify, setVerify] = useState("Verify");
  const [error, setError] = useState("");

  const params = useParams();
  const handleVerify = () => {
    const { first_name, last_name, email, state, mobile_no } = body;
    if (
      first_name === "" ||
      last_name === "" ||
      email === "" ||
      state === "" ||
      mobile_no === ""
    ) {
      setError("Please Fill Above Details");
    } else {
      setVerify("Verified");
      setError("");
    }
  };
  useEffect(() => {
    fetchCourse(params.id);
  }, []);
  useEffect(() => {
    setError("");
  }, [body]);

  return (
    <div className="checkout-div">
      <Container>
        <Row>
          <Col lg={8} md={8} className="p-3 d-flex align-items-center">
            <div className="">
              <h2 className="check-h3">Check Out</h2>
              <h4 className="check-h4 mb-4">{course.title}</h4>
              <h5 className="mt-3 fw-bold">Billing Information</h5>
              <p className="disclaimer">
                All fields are mandatory <sup className="text-danger">*</sup>
              </p>
              <div className="d-flex gap-2 flex-wrap mt-3">
                <div>
                  <label htmlFor="first-name">
                    First Name<sup className="text-danger">*</sup>
                  </label>
                  <input
                    type="text"
                    className=" form-control"
                    name="first_name"
                    required
                    onChange={(e) =>
                      setBody({ ...body, ["first_name"]: e.target.value })
                    }
                  />
                </div>
                <div>
                  <label htmlFor="last-name">
                    Last Name<sup className="text-danger">*</sup>
                  </label>
                  <input
                    type="text"
                    className=" form-control"
                    required
                    name="last_name"
                    onChange={(e) =>
                      setBody({ ...body, ["last_name"]: e.target.value })
                    }
                  />
                </div>
              </div>
              <div className="mt-3">
                <label htmlFor="email">
                  Email<sup className="text-danger">*</sup>
                </label>
                <input
                  type="text"
                  className="form-control"
                  required
                  value={user.email}
                  readOnly
                />
              </div>
              <div className="mt-3 d-flex flex-wrap gap-2">
                <div>
                  <form>
                    <label for="state">
                      Choose a state<sup className="text-danger">*</sup>
                    </label>
                    <select
                      id="state"
                      name="state"
                      class="form-control"
                      onChange={(e) =>
                        setBody({ ...body, ["state"]: e.target.value })
                      }
                    >
                      <option value="">Choose Option</option>
                      <option value="AP">Andhra Pradesh</option>
                      <option value="AR">Arunachal Pradesh</option>
                      <option value="AS">Assam</option>
                      <option value="BR">Bihar</option>
                      <option value="CT">Chhattisgarh</option>
                      <option value="GA">Goa</option>
                      <option value="GJ">Gujarat</option>
                      <option value="HR">Haryana</option>
                      <option value="HP">Himachal Pradesh</option>
                      <option value="JK">Jammu and Kashmir</option>
                      <option value="JH">Jharkhand</option>
                      <option value="KA">Karnataka</option>
                      <option value="KL">Kerala</option>
                      <option value="MP">Madhya Pradesh</option>
                      <option value="MH">Maharashtra</option>
                      <option value="MN">Manipur</option>
                      <option value="ML">Meghalaya</option>
                      <option value="MZ">Mizoram</option>
                      <option value="NL">Nagaland</option>
                      <option value="OR">Odisha</option>
                      <option value="PB">Punjab</option>
                      <option value="RJ">Rajasthan</option>
                      <option value="SK">Sikkim</option>
                      <option value="TN">Tamil Nadu</option>
                      <option value="TG">Telangana</option>
                      <option value="TR">Tripura</option>
                      <option value="UP">Uttar Pradesh</option>
                      <option value="UT">Uttarakhand</option>
                      <option value="WB">West Bengal</option>
                    </select>
                  </form>
                </div>
                <div>
                  <label htmlFor="number">
                    Contact No<sup className="text-danger">*</sup>
                  </label>
                  <input
                    type="number"
                    className="form-control"
                    name="mobile_no"
                    onChange={(e) =>
                      setBody({ ...body, ["mobile_no"]: e.target.value })
                    }
                  />
                </div>
              </div>
              {error && <p className="mt-3 text-danger">*{error}</p>}
            </div>
          </Col>
          <Col lg={4} md={4} className="p-3">
            <div className=" py-4 px-4 payment-div rounded">
              <h4 className=" text-center mb-5">Payment Details</h4>
              <div className="d-flex justify-content-between">
                <p>Course Amount</p>
                <p>{course.price} USD</p>
              </div>
              <div className="d-flex justify-content-between">
                <p>Tax Amount</p>
                <p>0.02 USD</p>
              </div>
              <div className="d-flex justify-content-between mt-3">
                <p>Special Discount</p>
                <p>0 USD</p>
              </div>
              <div className="d-flex justify-content-between mt-5">
                <p className="fw-bold">Total Amount</p>
                <p className="fw-bold">
                  {(course.price + 0.02).toFixed(2)} USD
                </p>
              </div>
              {verify === "Verify" && (
                <button
                  className="btn btn-success w-100 mt-4 mb-3"
                  onClick={handleVerify}
                >
                  {verify}
                </button>
              )}
              {verify === "Verified" && (
                <PayPalButton price={course?.price + 0.02} />
              )}
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default CheckOut;
