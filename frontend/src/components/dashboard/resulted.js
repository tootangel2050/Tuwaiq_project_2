import axios from "axios";
import React, { useState, useEffect } from "react";
import { Row, Col, Container, Card } from "react-bootstrap";
import { useLocation } from "react-router";

const Resulted = () => {
  const [data, setData] = useState([]);
  const [nationalID, setNationalID] = useState();
  const { state } = useLocation();
  const nationID = state.nationalID;

  useEffect(() => {
    axios
      .get(`http://localhost:5000/test/resulted/${nationID}`)
      .then((res) => {
        console.log(res.data);
        setData(res.data);
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
              <Col ms={4}>
                <Card>
                  <Card.Body>
                    <Card.Title>TestDate: {elem.TestDate}</Card.Title>
                    <Card.Text>TestScore:{elem.TestScore}</Card.Text>
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

export default Resulted;
