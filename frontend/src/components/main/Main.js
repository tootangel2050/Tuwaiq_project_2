import React from "react";
import {
  Container,
  Row,
  Col,
  Card,
  Form,
  Button,
  ListGroup,
} from "react-bootstrap";
import "./main.css";

const Main = () => {
  return (
    <div>
      <Container>
        <Row>
          <Col>
            <Card id="bgColor">
              <Card.Body>
                <div id="div">
                  <h3 class="h3">advertisement </h3>
                  <p class="h3">
                    In accordance with the approved health precautions, you must
                    wear a mask and download the “Tawakkalna” application when
                    you come to the test
                  </p>
                  <p id="par">
                    headquarters. The health situation in the Tawakkalna
                    application must also be immune to the fullest doses of the
                    Corona (Covid-19) vaccine.
                  </p>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>

      <Container>
        <Row>
          <Col>
            <Form>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>National ID *</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
                <Form.Text className="text-muted"></Form.Text>
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password *</Form.Label>
                <Form.Control type="password" placeholder="Password" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label=" i'm not a robot" />
              </Form.Group>
              <Button variant="primary" type="submit">
                Login
              </Button>
            </Form>
          </Col>
          <Col>
            <Card>
              <Card.Header as="h5">demo Show</Card.Header>
              <Card.Body>
                <Card.Title>
                  Learn more about how to open a new account, sign up for a
                  paper or paper computerized test, and lots of other processes
                  to see by watching the demo.
                </Card.Title>
                <select id="list" name="list">
                  <option value="Register">Qiyas Exams Registration</option>
                  <option value="paperBased">paper Based exams registration</option>
                  <option value="computerBased">computer based exam Registration</option>
                  <option value="Payment">Payment fees</option>
                </select>
                {/* <input type="submit" value="play" /> */}

                <Button variant="primary">Play</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
export default Main;
