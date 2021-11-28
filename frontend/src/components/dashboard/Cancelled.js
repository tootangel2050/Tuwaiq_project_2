import React, { useState, useEffect } from "react";

import { Row, Col, Container, Card } from "react-bootstrap";

import axios from "axios";
import "./dashboard.css";
const Cancelled = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get("/test/cancelled")
      .then((resp) => {
        console.log(resp.data);
        setData(resp.data);
      })
      .catch((err) => {
        console.log(err);
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
                    <Card.Title>Name: {elem.name}</Card.Title>
                    <Card.Text>
                      CenterOfficeLocation:{elem.CenterOfficeLocation}
                    </Card.Text>
                    <Card.Text>Date:{elem.Date}</Card.Text>
                    <Card.Text>
                      CancellationTime:{elem.CancellationTime}
                    </Card.Text>
                    <Card.Text>
                      TestTypeMechanism:{elem.TestTypeMechanism}
                    </Card.Text>
                    <Card.Text>
                      CancellationReason:{elem.CancellationReason}
                    </Card.Text>
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

export default Cancelled;
