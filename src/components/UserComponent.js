import React, { useState, useEffect } from "react";
import UserContext from "../context/UserContext";
import Card from "./CardComponent";
import axios from "axios";
const baseURL = "https://jsonplaceholder.typicode.com/posts";
const Users = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get(baseURL).then((response) => {
      setUsers(response.data);
    });
  }, []);

  return (
    <UserContext.Provider value={users}>
      <Card />
    </UserContext.Provider>
  );
};

export default Users;
