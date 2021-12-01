import React, { useState, useEffect } from "react";
import { Row, Col, Container, Card } from "react-bootstrap";
import { useLocation } from "react-router";
import "./dashboard.css";
import axios from "axios";

const RegisteredTest = () => {
  const [data, setData] = useState([]);
  const [nationalID, setNationalID] = useState();
  const { state } = useLocation();
  const nationID = state.nationalID;
  useEffect(() => {
    console.log("inside registered ");
    axios
      .get(`http://localhost:5000/test/registeredTests/${nationID}`)

      .then((resp) => {
        setData(resp.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [nationID]);
  return (
    <div id="card1">
      <Container>
        <Row>
          {data.map((elem, i) => {
            return (
              <Col>
                <Card XS={4}>
                  <Card.Body>
                    <Card.Title>Name: {elem.Name}</Card.Title>
                    <Card.Text>
                      AppointmentStatus:{elem.AppointmentStatus}
                    </Card.Text>
                    <Card.Text>TestLanguage: {elem.TestLanguage}</Card.Text>
                    <Card.Text>
                      TestTypeMechanism: {elem.TestTypeMechanism}
                    </Card.Text>
                    <Card.Text>TestDate: {elem.TestDate}</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            );
          })}
        </Row>
      </Container>
    </div>
  );
};

export default RegisteredTest;
