import React, { Component, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import {
  Container,
  Row,
  Col,
  Card,
  Form,
  Button,
  ListGroup,
} from "react-bootstrap";

export default function LogIn() {
  const nav = useNavigate();
  const [NationalID, setNationalID] = useState("");
  const [Password, setPassword] = useState("");

  function validatFrom() {
    return NationalID.length > 0 && Password.length > 0;
  }

  function handleSubmit(event) {
    event.preventDefault();
    axios
      .post("user/", {
        NationalID: NationalID,
        Password: Password,
      })
      .then((res) => {
        console.log(res);
        if (res.status == 200)
          if (res.data.role === "Admin") {
            nav("/admin");
          } else if (res.data.role === "user") {
            nav("/user");
          }
      })
      .catch((err) => {
        console.log(err);
        //error password ("not correct");
      });
  }


  return(
      <div>

<Container>
        <Row>
          <Col>
            <Form>
              <Form.Group className="mb-3" controlId="formBasic">
                <Form.Label>National ID *</Form.Label>
                <Form.Control type="number" placeholder="Enter number" />
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
         
        </Row>
      </Container>

      <div>
      {NationalID}
      </div>
      



      </div>
  )

}
