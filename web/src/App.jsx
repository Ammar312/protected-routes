import React, { useEffect, useState } from "react";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import axios from "axios";

const App = () => {
  const [isLogin, setIsLogin] = useState(false);
  const baseURL = "http://localhost:3000/";
  useEffect(() => {
    const checkLoginStatus = async () => {
      try {
        const response = await axios.get(`${baseURL}api/v1/ping`, {
          withCredentials: true,
        });
        setIsLogin(true);
      } catch (error) {
        console.log(error);
        setIsLogin(false);
      }
    };
  });
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="signup" element={<Signup />} />
        <Route path="login" element={<Login />} />
        <Route path="*" element={<Navigate to="/" replace={true} />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
