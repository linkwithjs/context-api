import logo from "./logo.svg";
import "./App.css";
import CompA from "./CompA";
import { createContext } from "react";

const MyContext = createContext();

function App() {
  const data = { fname: "Ac", lname: "Rajan" };
  return (
    <>
      <MyContext.Provider value={data}>
        <CompA />
      </MyContext.Provider>
    </>
  );
}

export default App;
export { MyContext };
