import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import Home from "./pages/Home/Home";
import Courses from "./pages/Courses/Courses";

import Authentication from "./pages/Auth/Authentication";
import Verification from "./pages/Auth/Verification";
import Footer from "./components/Footer/Footer";
import About from "./pages/About/About";
import CourseDescription from "./pages/CourseDescription/CourseDescription";
import PaymementSuccess from "./pages/PaymentSuccess/PaymementSuccess";
import DashBoard from "./pages/Dashboard/DashBoard";
import CourseStudy from "./pages/CourseStudy/CourseStudy";
import Lecture from "./pages/Lecture/Lecture";
import AdminDashBoard from "./Admin/Dashboard/AdminDashBoard";
import AdminCourses from "./Admin/Courses/AdminCourses";
import AdminUsers from "./Admin/Users/AdminUsers";
// import { UserData } from "./context/UserContext.js";
import Loading from "./components/Loading/Loading.js";
import { useContext } from "react";
import { userContext } from "./context/UserContextProvider.js";

function App() {
  // const { isAuth, user, loading } = UserData();
  const { isAuth, user, loading } = useContext(userContext);

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
            path="/account"
            element={
              isAuth ? (
                <DashBoard user={user} />
              ) : (
                <Navigate to={"/authentication"} />
              )
            }
          />

          <Route path="/course/:id" element={<CourseDescription />} />
          <Route
            path="/courses/coursedescription/paymentsuccess"
            element={<PaymementSuccess />}
          />
          {/* check */}

          <Route path="/courses/study" element={<CourseStudy />} />
          <Route path="/courses/lecture" element={<Lecture />} />
          <Route path="/about" element={<About />} />
          <Route path="/authentication" element={<Authentication />} />
          <Route path="/verify" element={<Verification />} />

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
