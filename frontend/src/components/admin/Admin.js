import React, { useState } from "react";
import {
  Form,
  Container,
  Row,
  Col,
  Button,
  FloatingLabel,
} from "react-bootstrap";

export default function Admin() {
  const [displayTest, setDisplayTest] = useState("none");
  const [displayResult, setDisplayResult] = useState("none");

  return (
    <div>
      <Container>
        <Row>
          <Col>
            <FloatingLabel
              controlId="floatingSelect"
              label="Works with selects"
            >
              <Form.Select
                aria-label="Floating label select example"
                onChange={(e) => {
                  if (e.target.value === "test") {
                    setDisplayTest("block");
                    setDisplayResult("none");
                  } else if (e.target.value === "result") {
                    setDisplayTest("none");
                    setDisplayResult("block");
                  }
                }}
              >
                <option>Open this select menu</option>
                <option value="test">New Test</option>
                <option value="result">Result</option>
              </Form.Select>
            </FloatingLabel>

            <Form style={{ display: displayTest }}>
              <Form.Group className="mb-3" controlId="formBasicName">
                <Form.Label> Test Name </Form.Label>
                <Form.Control type="Test" placeholder="Enter Test Name" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicDetails">
                <Form.Label> Details </Form.Label>
                <Form.Control type="Test" placeholder="Enter Details" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicDate">
                <Form.Label>Date</Form.Label>
                <Form.Control type="date" placeholder="Date" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Check me out" />
              </Form.Group>
              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>

            <Form style={{ display: displayResult }}>
              <Form.Group className="mb-3" controlId="formBasicName">
                <Form.Label> Result </Form.Label>
                <Form.Control type="Test" placeholder="Enter Test Name" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicMarks">
                <Form.Label> Marks </Form.Label>
                <Form.Control type="Test" placeholder="Enter Marks" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicDate">
                <Form.Label>Date</Form.Label>
                <Form.Control type="date" placeholder="Date" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Check me out" />
              </Form.Group>
              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
