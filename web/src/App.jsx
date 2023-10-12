import React from "react";
import CreatePost from "./components/CreatePost";
import Bar from "./components/Bar";
import Signup from "./pages/Signup";
import Login from "./pages/Login";

const App = () => {
  return (
    <div className=" p-2 min-h-screen bg-gradient-to-br from-[#ffb347] to-[#ffcc33]">
      {/* <Bar />
      <CreatePost /> */}
      {/* <Signup /> */}
      <Login />
    </div>
  );
};

export default App;
