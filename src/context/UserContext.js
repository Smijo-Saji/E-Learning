// import axios from "axios";
// import { createContext, useContext, useEffect, useState } from "react";
// import { base_url } from "..";
// import toast, { Toaster } from "react-hot-toast";

// const UserContext = createContext();

// export const UserContextProvider = ({ children }) => {
//   const [user, setUser] = useState([]);
//   const [isAuth, setIsAuth] = useState(false);
//   const [btnLoading, setBtnLoading] = useState(false);
//   const [loading, setLoading] = useState(true);

//   async function loginUser(body, navigate) {
//     setBtnLoading(true);
//     try {
//       const { data } = await axios.post(`${base_url}/api/user/login`, body);

//       toast.success(data.message);
//       localStorage.setItem("token", data.token);
//       setUser(data.user);
//       setIsAuth(true);
//       setBtnLoading(false);
//       navigate("/");
//     } catch (error) {
//       setBtnLoading(false);
//       setIsAuth(false);
//       toast.error(error.response.data.message);
//     }
//   }

//   async function registerUser(body, handleShow) {
//     setBtnLoading(true);
//     try {
//       const { data } = await axios.post(`${base_url}/api/user/register`, body);

//       toast.success(data.message);
//       localStorage.setItem("activationToken", data.activationToken);

//       setBtnLoading(false);
//       handleShow();
//     } catch (error) {
//       setBtnLoading(false);

//       toast.error(error.response.data.message);
//     }
//   }

//   async function verifyOtp(otp, navigate, handleClose) {
//     setBtnLoading(true);
//     const activationToken = localStorage.getItem("activationToken");
//     try {
//       const { data } = await axios.post(`${base_url}/api/user/verify`, {
//         otp,
//         activationToken,
//       });

//       toast.success(data.message);
//       handleClose();
//       navigate("/authentication");
//       localStorage.clear();
//       setBtnLoading(false);
//     } catch (error) {
//       toast.error(error.response.data.message);
//       setBtnLoading(false);
//     }
//   }

//   async function fetchUser() {
//     try {
//       const { data } = await axios.get(`${base_url}/api/user/me`, {
//         headers: {
//           token: localStorage.getItem("token"),
//         },
//       });

//       setIsAuth(true);
//       setUser(data.user);
//       setLoading(false);
//     } catch (error) {
//       console.log(error);
//       setLoading(false);
//     }
//   }

//   useEffect(() => {
//     fetchUser();
//   }, []);
//   return (
//     <UserContext.Provider
//       value={{
//         user,
//         setUser,
//         isAuth,
//         setIsAuth,
//         btnLoading,
//         setBtnLoading,
//         loginUser,
//         loading,
//         registerUser,
//         verifyOtp,
//       }}
//     >
//       {children}
//       <Toaster />
//     </UserContext.Provider>
//   );
// };

// export const UserData = () => useContext(UserContext);
