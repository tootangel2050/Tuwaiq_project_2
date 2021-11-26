
import React , { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { Card, Form, Container, Row, Col , Button} from "react-bootstrap";
import './SignUp.css'
import axios from "axios";
import { Link } from 'react-router-dom';



export default function signUp() {
// const[nationalID , setNationalID] = useState ("")
// const[password , setPassword] = useState ("")
// const[dateOfBirthday , setDateOfBirthday] = useState ("")
  
  
  return (
    <div className="SignUp">
      <Container>
        <Row>
          <Col>
            <Form
              // onSubmit={(e) => {
              //   handleSubmit(e);
              // }}
            >
              <Card.Header id="cardList1"></Card.Header>
              <Form.Group size="lg" controlId="text">
              <Card.Header id="cardList1">Sign Up With A Qiyas Account</Card.Header>

                <Form.Label id="h">NationalID </Form.Label>
                <Form.Control
                  autoFocus
                  type="text"
                //   value={nationalID}
                //   onChange={(e) => setNationalID(e.target.value)}
                />
                </Form.Group>

              <Card.Header id="cardList1"></Card.Header>
              <Form.Group size="lg" controlId="text">
                <Form.Label id="h">Password</Form.Label>
                <Form.Control
                  autoFocus
                  type="password"
                //   value={password}
                //    onChange={(e) => setPassword(e.target.value)}
                />
              </Form.Group>
              <Form.Group size="lg" controlId="password">
                <Form.Label id="h">Date Of Birthday</Form.Label>
                <Form.Control
                  type="dateOfBirthday"
                //    value={confirmPassword}
                //   onChange={(e) => setDateOfBirthday(e.target.value)}
                />
              </Form.Group>


              <Button id="btn" type="submit"  >
              Register
              </Button>
              <Link to="/">
          <Button variant="secondary" size="ms" active>
            Back To Main Page
          </Button>
          </Link>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
