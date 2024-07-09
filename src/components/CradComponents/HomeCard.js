import React, { useEffect, useState } from "react";
import "./HomeCard.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { base_url } from "../..";

function HomeCrad() {
  const navigate = useNavigate();
  const [threeCourse, setThreeCourse] = useState([]);

  const getThreeCourse = async () => {
    try {
      const { data } = await axios.get(`${base_url}/api/course/three`);
      setThreeCourse(data.courses);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getThreeCourse();
  }, []);
  return (
    <div className="d-flex justify-content-evenly flex-wrap gap-3">
      {threeCourse.length > 0 ? (
        threeCourse.map((i) => (
          <div
            className="home-corse-card p-3   rounded"
            style={{ width: "18rem" }}
          >
            <img
              src={`${base_url}/${i.image}`}
              alt=""
              style={{ width: "100%", height: "160px" }}
              className="rounded home-card-img"
            />
            <div className="card-body-sec mt-3 d-flex flex-column align-items-center">
              <h4>{i.title}</h4>
              <p>{i.description.slice(0, 130)}</p>
              <button
                className="btn btn-success"
                onClick={() => navigate("/courses")}
              >
                START LEARNING
              </button>
            </div>
          </div>
        ))
      ) : (
        <div
          className="home-corse-card p-3   rounded"
          style={{ width: "18rem" }}
        >
          <img
            src="https://i.postimg.cc/J0TpsSVF/1-Kc-Ejo-k-Tc-NSC6-LHyt9edg.jpg"
            alt=""
            style={{ width: "100%", height: "160px" }}
            className="rounded home-card-img"
          />
          <div className="card-body-sec mt-3 d-flex flex-column align-items-center">
            <h4>React Tutorial</h4>
            <p>
              Wanna dive deep into React and become Frontend Expert? Learn with
              me now!
            </p>
            <button
              className="btn btn-success"
              onClick={() => navigate("/courses")}
            >
              START LEARNING
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default HomeCrad;
