import React from "react";
import CreatePost from "./components/CreatePost";
import Bar from "./components/Bar";
import Signup from "./pages/Signup";
import Login from "./pages/Login";

const App = () => {
  return (
    <div className="min-h-screen">
      {/* <Bar />
      <CreatePost /> */}
      <Signup />
      {/* <Login /> */}
    </div>
  );
};

export default App;
