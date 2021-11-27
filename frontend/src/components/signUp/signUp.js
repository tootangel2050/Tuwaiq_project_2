
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
      <Container id="form">
        <Row>
          <Col>
            <Form
              // onSubmit={(e) => {
              //   handleSubmit(e);
              // }}
            >
              <Card.Header id="cardList1">Sign Up With A Qiyas Account</Card.Header>
              <Form.Group size="lg" controlId="text">
                <Form.Label >NationalID </Form.Label>
                <Form.Control
                  autoFocus
                  type="text"
                //   value={nationalID}
                //   onChange={(e) => setNationalID(e.target.value)}
                />
                </Form.Group>

              <Form.Group size="lg" controlId="text">
                <Form.Label >Password</Form.Label>
                <Form.Control
                  autoFocus
                  type="password"
                //   value={password}
                //    onChange={(e) => setPassword(e.target.value)}
                />
              </Form.Group>
              <Form.Group size="lg" controlId="password">
                <Form.Label >Date Of Birthday</Form.Label>
                <Form.Control
                  type="dateOfBirthday"
                //    value={confirmPassword}
                //   onChange={(e) => setDateOfBirthday(e.target.value)}
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
