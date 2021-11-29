import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Card, Form, Container, Row, Col, Button } from "react-bootstrap";
import "./SignUp.css";
import axios from "axios";
import { Link } from "react-router-dom";





export default function SignUp() {
  const [nationalId, setNationalId] = useState("");
  const [password, setPassword] = useState("");
  const navigation = useNavigate();
  function handleSubmit(event) {
        event.preventDefault();
        axios
          .post("/users/signUp", {
            
            nationalId:nationalId,
            password:password})
           .then(response=>{
             console.log(response);
             const obj =[{id: nationalId, pass: password }];
            localStorage.setItem("user",JSON.stringify(obj));
            
            // localStorage.setItem("passoword",nationalId)
            navigation('/signUp')
           })
           .catch(err =>{
             console.log(err.response.data)
           });
       }
  return (
    <div className="SignUp">
      <Container id="form">
        <Row>
          <Col>

            <Form
              onSubmit={(e) => {
                 handleSubmit(e);
               }}
            >
              <Card.Header id="cardList1">Sign Up With A Qiyas Account</Card.Header>
              <Form.Group size="lg" controlId="text">
                <Form.Label >NationalID </Form.Label>
                <Form.Control
                  autoFocus
                  type="text"
                   //value={nationalID}
                   
                  onChange={(e) => setNationalId(e.target.value)}
                />
                </Form.Group>

              <Form.Group size="lg" controlId="text">

                <Form.Label >Password</Form.Label>
                <Form.Control
                  autoFocus
                  type="password"
                   //value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
              </Form.Group>
              

              <Button id="btn" type="submit" variant="warning"  >
              Register
              </Button>
              <Link to="/">
          <Button id="btn2" type="submit" variant="secondary"  active>
             Main Page
          </Button>
          </Link>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

