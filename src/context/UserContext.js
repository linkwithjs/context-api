import { useState, useEffect, createContext } from "react";
import axios from "axios";
const UserContext = createContext();

const baseURL = "https://jsonplaceholder.typicode.com/posts";
const udata = "https://jsonplaceholder.typicode.com/posts/1";

const UserData = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get(baseURL).then((response) => {
      setUsers(response.data);
    });
  }, []);
  return users;
};

const Data = () => {
  const [usersData, setUsersData] = useState([]);

  useEffect(() => {
    axios.get(udata).then((response) => {
      setUsersData(response.data);
    });
  }, []);
  return usersData;
};

export default UserContext;
export { UserData, Data };
