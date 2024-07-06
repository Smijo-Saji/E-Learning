import React, { useContext, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

import { base_url } from "..";
import toast from "react-hot-toast";
import { userContext } from "../context/UserContextProvider";
import { courseContext } from "../context/CourseContextProvider";

const PayPalButton = ({ price }) => {
  const { fetchUser } = useContext(userContext);
  const { fetchCourses, fetchMyCourse } = useContext(courseContext);
  const navigate = useNavigate();
  const params = useParams();

  const checkoutHandler = async () => {
    const token = localStorage.getItem("token");

    try {
      const { data } = await axios.post(
        `${base_url}/api/course/checkout/${params.id}`,
        {},
        {
          headers: {
            token,
          },
        }
      );
      navigate(`/payment-success/${data._id}`);

      await fetchUser();
      await fetchCourses();
      await fetchMyCourse();
      toast.success("Course Subscribed Successfully");
    } catch (error) {
      console.log(error);
      toast.error("Error");
    }
  };

  useEffect(() => {
    const paypalButtonContainer = document.getElementById(
      "paypal-button-container"
    );

    if (paypalButtonContainer && paypalButtonContainer.children.length === 0) {
      window.paypal
        .Buttons({
          createOrder: function (data, actions) {
            return actions.order.create({
              purchase_units: [
                {
                  amount: {
                    value: price, // The amount to charge
                  },
                },
              ],
            });
          },
          onApprove: function (data, actions) {
            return actions.order.capture().then(function (details) {
              // Call the checkoutHandler function
              checkoutHandler();
            });
          },
        })
        .render("#paypal-button-container");
    }
  }, []);

  return (
    <div>
      <div id="paypal-button-container"></div>
    </div>
  );
};

export default PayPalButton;
