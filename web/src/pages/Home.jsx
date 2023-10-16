import React, { useContext } from "react";
import CreatePost from "../components/CreatePost";
import Bar from "../components/Bar";
import { GlobalContext } from "../context/context";

const Home = () => {
  const { state, dispatch } = useContext(GlobalContext);
  return (
    <div>
      <Bar />
      <CreatePost />
      <div>{JSON.stringify(state)}</div>
    </div>
  );
};

export default Home;
