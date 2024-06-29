import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import UserContextProvider from "./context/UserContextProvider.js";
import CourseContextProvider from "./context/CourseContextProvider.js";
// import { UserContextProvider } from "./context/UserContext.js";
// import { CourseContextProvider } from "./context/CourseContext.js";

export const base_url = "http://localhost:5000";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      {/* <UserContextProvider>
        <CourseContextProvider>
          <App />
        </CourseContextProvider>
      </UserContextProvider> */}
      <UserContextProvider>
        <CourseContextProvider>
          <App />
        </CourseContextProvider>
      </UserContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);
