import React from "react";
import { NavLink } from "react-router-dom";
import "./common.css";

function SideBar() {
  return (
    <div className="sidebar">
      <ul>
        <li>
          <NavLink to="/admin/dashboard" activeClassName="active">
            <div className="icon">
              <i className="fa-solid fa-house"></i>
            </div>
            <span>Home</span>
          </NavLink>
        </li>

        <li>
          <NavLink to="/admin/course" activeClassName="active">
            <div className="icon">
              <i className="fa-solid fa-book-open"></i>
            </div>
            <span>Courses</span>
          </NavLink>
        </li>

        <li>
          <NavLink to="/admin/users" activeClassName="active">
            <div className="icon">
              <i className="fa-solid fa-user"></i>
            </div>
            <span>Users</span>
          </NavLink>
        </li>

        <li>
          <NavLink to="/account" activeClassName="active">
            <div className="icon">
              <i className="fa-solid fa-arrow-right-from-bracket"></i>
            </div>
            <span>Logout</span>
          </NavLink>
        </li>
      </ul>
    </div>
  );
}

export default SideBar;
