import axios from "axios";
import { createContext, useEffect, useState } from "react";
import { base_url } from "..";

export const courseContext = createContext();

function CourseContextProvider({ children }) {
  const [courses, setCourses] = useState([]);
  const [course, setCourse] = useState([]);
  const [myCourse, setMyCourse] = useState([]);

  async function fetchCourses() {
    try {
      const { data } = await axios.get(`${base_url}/api/course/all`);
      setCourses(data.courses);
    } catch (error) {
      console.log(error);
    }
  }

  async function fetchCourse(id) {
    try {
      const { data } = await axios.get(`${base_url}/api/course/${id}`);
      setCourse(data.course);
    } catch (error) {
      console.log(error);
    }
  }

  async function fetchMyCourse() {
    try {
      const { data } = await axios.get(`${base_url}/api/mycourse`, {
        headers: {
          token: localStorage.getItem("token"),
        },
      });
      setMyCourse(data.courses);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchCourses();
    fetchMyCourse();
  }, []);

  return (
    <div>
      <courseContext.Provider
        value={{
          courses,
          fetchCourses,
          course,
          fetchCourse,
          myCourse,
          fetchMyCourse,
        }}
      >
        {children}
      </courseContext.Provider>
    </div>
  );
}

export default CourseContextProvider;
