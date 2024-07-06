import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import Home from "./pages/Home/Home";
import Courses from "./pages/Courses/Courses";

import Authentication from "./pages/Auth/Authentication";
import Footer from "./components/Footer/Footer";
import About from "./pages/About/About";
import CourseDescription from "./pages/CourseDescription/CourseDescription";
import PaymementSuccess from "./pages/PaymentSuccess/PaymementSuccess";
import DashBoard from "./pages/Dashboard/DashBoard";

import Lecture from "./pages/Lecture/Lecture";
import AdminDashBoard from "./Admin/Dashboard/AdminDashBoard";
import AdminCourses from "./Admin/Courses/AdminCourses";
import AdminUsers from "./Admin/Users/AdminUsers";

import Loading from "./components/Loading/Loading.js";
import { useContext, useEffect } from "react";
import { userContext } from "./context/UserContextProvider.js";
import ForgetPassword from "./pages/Auth/ForgetPassword.js";
import ResetPassword from "./pages/Auth/ResetPassword.js";
import Aos from "aos";
import CheckOut from "./pages/CheckOut/CheckOut.js";

function App() {
  const { isAuth, user, loading } = useContext(userContext);

  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <div className="App ">
      <Header isAuth={isAuth} />

      {loading ? (
        <Loading />
      ) : (
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/courses" element={<Courses />} />

          <Route
            path="/:id/dashboard"
            element={
              isAuth ? (
                <DashBoard user={user} />
              ) : (
                <Navigate to={"/authentication"} />
              )
            }
          />

          <Route
            path="/course/:id"
            element={
              isAuth ? (
                <CourseDescription user={user} />
              ) : (
                <Navigate to={"/authentication"} />
              )
            }
          />
          <Route
            path="/checkout/:id"
            element={
              isAuth ? (
                <CheckOut user={user} />
              ) : (
                <Navigate to={"/authentication"} />
              )
            }
          />
          <Route
            path="/payment-success/:id"
            element={
              isAuth ? (
                <PaymementSuccess />
              ) : (
                <Navigate to={"/authentication"} />
              )
            }
          />
          {/* /courses */}
          <Route
            path="/courses/lecture/:id"
            element={
              isAuth ? (
                <Lecture user={user} />
              ) : (
                <Navigate to={"/authentication"} />
              )
            }
          />
          <Route path="/about" element={<About />} />
          <Route path="/authentication" element={<Authentication />} />

          <Route path="/forget" element={<ForgetPassword />} />
          <Route path="/reset-password/:token" element={<ResetPassword />} />

          {/* admin */}
          <Route path="/admin/dashboard" element={<AdminDashBoard />} />
          <Route path="/admin/course" element={<AdminCourses />} />
          <Route path="/admin/users" element={<AdminUsers />} />
        </Routes>
      )}
      <Footer />
    </div>
  );
}

export default App;
