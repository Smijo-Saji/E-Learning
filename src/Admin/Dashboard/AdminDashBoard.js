import React from "react";
import Layout from "../Utils/Layout";
import "./AdminDashBoard.css";

function AdminDashBoard() {
  return (
    <div className="d-flex">
      <Layout />
      <div className="main-content">
        <div className="box">
          <p>Total Courses</p>
          <p>50</p>
        </div>
        <div className="box">
          <p>Total Lectures</p>
          <p>14</p>
        </div>
        <div className="box">
          <p>Total Users</p>
          <p>120</p>
        </div>
      </div>
    </div>
  );
}

export default AdminDashBoard;
