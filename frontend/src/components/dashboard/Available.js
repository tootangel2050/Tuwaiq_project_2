import React, { useState, useEffect } from "react";

import { Row, Col, Container, Card } from "react-bootstrap";

import axios from "axios";
import "./dashboard.css";

const Available = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get("test/available")
      .then((resp) => {
        console.log(resp.data);
        setData(resp.data);
      })
      .catch((err) => {
        console.log(err.response);
      });
  }, []);

  return (
    <div>
      {data.map((elem, i) => {
        return (
          <Container>
            <Row>
              <Col>
                <Card id="t">
                  <Card.Body>
                    <Card.Title>Name: {elem.Name}</Card.Title>
                    <Card.Text>
                      AppointmentStatus:{elem.AppointmentStatus}
                    </Card.Text>
                    <Card.Text>TestLanguage:{elem.TestLanguage}</Card.Text>
                    <Card.Text>
                      TestTypeMechanism:{elem.TestTypeMechanism}
                    </Card.Text>
                    <Card.Text>TestDate:{elem.TestDate}</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Container>
        );
      })}
    </div>
  );
};

export default Available;
