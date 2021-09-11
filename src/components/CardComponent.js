import React, { useContext } from "react";
import { Table } from "react-bootstrap";

import UserContext from "../context/UserContext";

const Card = () => {
  const users = useContext(UserContext);

  return (
    <>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>ID</th>
            <th>NAME</th>
            <th>DESCRIPTION</th>
          </tr>
        </thead>
        <tbody>
          {users.map((curElem) => {
            const { id, title, body } = curElem;
            return (
              <tr>
                <td>{id}</td>
                <td>{title}</td>
                <td>{body}</td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </>
  );
};

export default Card;
