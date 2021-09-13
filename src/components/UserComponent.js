import React from "react";
import UserContext, { UserData } from "../context/UserContext";
import Card from "./CardComponent";

const Users = () => {
  return (
    <UserContext.Provider value={UserData()}>
      <Card />
    </UserContext.Provider>
  );
};

export default Users;
