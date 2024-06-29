import React, { useContext } from "react";
import "./Header.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link, NavLink, useNavigate } from "react-router-dom"; // Import NavLink
import NavDropdown from "react-bootstrap/NavDropdown";
// import { UserData } from "../../context/UserContext.js";
import toast from "react-hot-toast";
import { userContext } from "../../context/UserContextProvider";

function Header({ isAuth }) {
  const navigate = useNavigate();
  // const { setIsAuth, setUser } = UserData();
  const { setIsAuth, setUser } = useContext(userContext);

  const logoutHandler = () => {
    localStorage.clear();
    setUser([]);
    setIsAuth(false);
    toast.success("Logged Out");
    navigate("/authentication");
  };
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
                className="c1 me-4"
                activeClassName="active"
              >
                About
              </NavLink>

              <NavDropdown
                className=" custom-nav-dropdown"
                title={
                  <span>
                    <img
                      src="https://i.postimg.cc/J4p3GDyt/download-removebg-preview-12.png"
                      alt="Profile"
                      style={{
                        width: "30px",
                        height: "30px",
                        borderRadius: "50%",
                      }}
                    />
                  </span>
                }
                id="basic-nav-dropdown"
              >
                {isAuth && (
                  <NavDropdown.Item href="#action/3.1">
                    <Link className="text-black" to={"/account"}>
                      <img
                        src="https://i.postimg.cc/brQskh8q/user-profile-icon-free-vector-removebg-preview.png"
                        alt=""
                        style={{ width: "20px" }}
                        className="me-1"
                      />
                      Profile
                    </Link>
                  </NavDropdown.Item>
                )}
                {!isAuth && (
                  <NavDropdown.Item>
                    <Link to={"/authentication"} className="text-black">
                      <img
                        src="https://i.postimg.cc/pVDSy68C/download-removebg-preview-13.png"
                        alt=""
                        style={{ width: "20px" }}
                        className="me-1"
                      />
                      Login/SignUp
                    </Link>
                  </NavDropdown.Item>
                )}
                {isAuth && (
                  <NavDropdown.Item onClick={logoutHandler}>
                    <img
                      src="https://i.postimg.cc/nLVNBY45/sign-out-logout-icon-in-circle-line-vector-removebg-preview.png"
                      alt=""
                      style={{ width: "20px" }}
                      className="me-1"
                    />
                    LogOut
                  </NavDropdown.Item>
                )}
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default Header;
