import React from "react";
import "./Header.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link, NavLink } from "react-router-dom"; // Import NavLink

function Header() {
  return (
    <div>
      <Navbar expand="lg" className="navbar-sec shadow">
        <Container>
          <Navbar.Brand href="#home">
            <Link to={"/"}>
              <img
                src="https://i.postimg.cc/4NKN3kSG/LOGO-EDUZEN-removebg-preview.png"
                alt=""
                className="nav-img"
              />
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle
            aria-controls="basic-navbar-nav"
            className="shadow-none bg-transparent border-0"
          />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              {/* Use NavLink instead of Link */}
              <NavLink
                exact
                to={"/"}
                className="c1 me-5"
                activeClassName="active"
              >
                Home
              </NavLink>

              <NavLink
                to={"/courses"}
                className="c1 me-5"
                activeClassName="active"
              >
                Courses
              </NavLink>

              <NavLink
                to={"/about"}
                className="c1 me-5"
                activeClassName="active"
              >
                About
              </NavLink>
              <NavLink
                to={"/authentication"}
                className="c1"
                activeClassName="active"
              >
                Login
              </NavLink>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default Header;
