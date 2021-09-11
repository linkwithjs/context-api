import React from "react";
import { MyContext } from "./App";

const CompC = () => {
  return (
    <>
      <MyContext.Consumer>
        {(data) => {
          return (
            <h1>
              Hello, {data.fname} {data.lname}
            </h1>
          );
        }}
      </MyContext.Consumer>
    </>
  );
};

export default CompC;
