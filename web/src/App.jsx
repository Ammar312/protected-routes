import React from "react";
import CreatePost from "./components/CreatePost";
import Bar from "./components/Bar";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    // <div className="min-h-screen">
    //   {/* <Bar />
    //   <CreatePost /> */}
    //   {/* <Signup /> */}
    //   {/* <Login /> */}
    // </div>
    <BrowserRouter>
      <Routes>
        <Route path="register" element={<Signup />} />
        <Route path="login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
