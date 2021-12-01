import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

import { useNavigate, Link } from "react-router-dom";
import { Card, Container, Row, Col, Alert } from "react-bootstrap";
import "./logIn.css";
import axios from "axios";
export default function Login() {
  const nav = useNavigate();
  const [nationalID, setNationalID] = useState("");
  const [password, setPassword] = useState("");
  const [display, setDisplay] = useState("none");
  const navigation = useNavigate();

  function validateForm() {
    return nationalID && password;
  }
  function handleSubmit(e) {
    e.preventDefault();
    console.log("======");
    axios
      .post("http://localhost:5000/users/login", {
        nationalID: nationalID,
        password: password,
      })
      .then((res) => {
        console.log(res);
        if (res) {
          navigation("/dashboard", { state: { nationalID: nationalID } });
        } else {
        }
      })
      .catch((err) => {
        const obj = JSON.parse(localStorage.getItem("user"));
        console.log(obj);
        //if (obj) {
          const foundObj = obj.find(
            (elem) => elem.id == nationalID && elem.pass == password
          );
          console.log(foundObj);
          if (foundObj) navigation("/dashboard", { state: { nationalID: nationalID } });
       // }
         else setDisplay("block");
      });
  }
  return (
    <div className="Login">
      <Container>
        <Row>
          <Col>
            <Form
              onSubmit={(e) => {
                handleSubmit(e);
              }}
            >
              <Card.Header id="cardList1">
                Login With A Qiyas Account
              </Card.Header>
              <Alert variant="danger" style={{ display: display }}>
                User not found!
              </Alert>
              <Form.Group size="lg" controlId="text">
                <Form.Label>NationalId*</Form.Label>
                <Form.Control
                  autoFocus
                  type="text"
                  value={nationalID}
                  onChange={(e) => setNationalID(e.target.value)}
                />
              </Form.Group>
              <Form.Group size="lg" controlId="password">
                <Form.Label>Password*</Form.Label>
                <Form.Control
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </Form.Group>
              <Button id="btn" block type="submit" disabled={!validateForm()}>
                Login
              </Button>
              <br />

              <Button variant="link">You Don't Have Qiyas Account ?</Button>
              <Link to="/signUp">
                <Button id="btn2" variant="warning">
                  Rigster
                </Button>{" "}
              </Link>
            </Form>
          </Col>

          <Col>
            <Card>
              <Card.Header id="cardList1">demo Show</Card.Header>
              <Card.Body>
                <Card.Title id="cardList2">
                  Learn more about how to open a new account, sign up for a
                  paper or paper computerized test, and lots of other processes
                  to see by watching the demo.
                </Card.Title>

                <select id="list" name="list">
                  <option value="Register">Qiyas Exams Registration</option>
                  <option value="paperBased">
                    paper Based exams registration
                  </option>
                  <option value="computerBased">
                    computer based exam Registration
                  </option>
                  <option value="Payment">Payment fees</option>
                </select>

                <Link to="test/">
                  <Button id="btn3" variant="primary" active>
                    Play
                  </Button>{" "}
                </Link>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
