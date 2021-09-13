import React, { useContext } from "react";
import { Table } from "react-bootstrap";

import UserContext from "../context/UserContext";
import { Container } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";

const Card = () => {
  const users = useContext(UserContext);

  return (
    <>
      <Container>
        <Row className="justify-content-md-center">
          <Col>
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
                    <tr key={id}>
                      <td>{id}</td>
                      <td>{title}</td>
                      <td>{body}</td>
                    </tr>
                  );
                })}
              </tbody>
            </Table>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Card;
