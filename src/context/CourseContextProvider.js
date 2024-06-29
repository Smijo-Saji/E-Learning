import axios from "axios";
import { createContext, useEffect, useState } from "react";
import { base_url } from "..";

export const courseContext = createContext();

function CourseContextProvider({ children }) {
  const [courses, setCourses] = useState([]);

  async function fetchCourses() {
    try {
      const { data } = await axios.get(`${base_url}/api/course/all`);
      setCourses(data.courses);
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    fetchCourses();
  }, []);

  return (
    <div>
      <courseContext.Provider value={{ courses, fetchCourses }}>
        {children}
      </courseContext.Provider>
    </div>
  );
}

export default CourseContextProvider;
