import React, { useContext, useEffect, useState } from "react";

import "./AdminDashBoard.css";
import { userContext } from "../../context/UserContextProvider";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { base_url } from "../..";

function AdminDashBoard() {
  const navigate = useNavigate();
  const { user } = useContext(userContext);

  const [stats, setStats] = useState({});

  const fetchStats = async () => {
    try {
      const { data } = await axios.get(`${base_url}/api/stats`, {
        headers: {
          token: localStorage.getItem("token"),
        },
      });
      setStats(data.stats);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (user.role !== "admin") return navigate("/");
    fetchStats();
  }, []);

  return (
    <div>
      <h3>Admin Dashboard</h3>
      <div className="main-content mt-3">
        <div className="box p-3 d-flex flex-column  align-items-center shadow">
          <p className="m-0">Total Courses</p>
          <p>Enrolled</p>
          <div className="inner-box">
            <p className="m-0 inner-box-p">{stats.totalCourses}</p>
          </div>
        </div>
        <div className="box p-3 d-flex flex-column  align-items-center shadow">
          <p className="m-0">Total Lectures</p>
          <p>Uploaded</p>
          <div className="inner-box">
            <p className="m-0 inner-box-p">{stats.totalLectures}</p>
          </div>
        </div>
        <div className="box p-3 d-flex flex-column  align-items-center shadow">
          <p className="m-0">Total Users </p>
          <p>Registered</p>
          <div className="inner-box">
            <p className="m-0 inner-box-p">{stats.totalUsers}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminDashBoard;
