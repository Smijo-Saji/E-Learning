// import axios from "axios";
// import { createContext, useContext, useEffect, useState } from "react";
// import { base_url } from "..";

// const CourseContext = createContext();

// export const CourseContextProvider = ({ children }) => {
//   const [courses, setCourses] = useState([]);

//   async function fetchCourses() {
//     try {
//       const { data } = await axios.get(`${base_url}/api/course/all`);
//       setCourses(data.courses);
//     } catch (error) {
//       console.log(error);
//     }
//   }
//   useEffect(() => {
//     fetchCourses();
//   }, []);
//   return (
//     <CourseContext.Provider value={{ courses, fetchCourses }}>
//       {children}
//     </CourseContext.Provider>
//   );
// };

// export const CourseData = () => useContext(CourseContext);
