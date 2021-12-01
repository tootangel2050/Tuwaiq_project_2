import React, { useState, useEffect } from "react";
import { Row, Col, Container, Card } from "react-bootstrap";
import { useLocation } from "react-router";
import axios from "axios";
import "./dashboard.css";

const Cancelled = () => {
  const [data, setData] = useState([]);
  const [nationalID, setNationalID] = useState();
  const { state } = useLocation();
  const nationID = state.nationalID;

  useEffect(() => {
    axios
      .get(`http://localhost:5000/test/Cancelled/${nationID}`)
      .then((resp) => {
        console.log(resp.data);
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
              <Col xs={4}>
                <Card>
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
            );
          })}
        </Row>
      </Container>
    </div>
  );
};

export default Cancelled;
