import { useState, useEffect, createContext } from "react";
import axios from "axios";
const UserContext = createContext();

const baseURL = "https://jsonplaceholder.typicode.com/posts";

const UserData = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get(baseURL).then((response) => {
      setUsers(response.data);
    });
  }, []);
  return users;
};

export default UserContext;
export { UserData };
