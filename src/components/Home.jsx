import React, { useContext } from "react";
import { AutContext } from "../providers/AuthProvider";
const Home = () => {
  const { user } = useContext(AutContext);
  console.log(user);
  return (
    <div>
      <h2>This is Home {user && <span>{user.displayName}</span>}</h2>
    </div>
  );
};

export default Home;
