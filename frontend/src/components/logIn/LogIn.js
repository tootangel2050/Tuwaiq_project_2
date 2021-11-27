import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useNavigate , Link } from "react-router-dom";
 import { Card , Container ,Row ,Col  } from "react-bootstrap";
//  import { Link } from "react-router-dom";
import './logIn.css'
import axios from "axios";


export default function Login() {
  const nav = useNavigate();
  const [nationalId, setNationalId] = useState("");
  const [password, setPassword] = useState("");
  const navigation = useNavigate();
  function validateForm() {
    return nationalId.length > 0 && password.length > 0;
  }
  
  function handleSubmit(e) {
    e.preventDefault();
    console.log("===================================");
    axios
      .post("http://localhost:5000/users/users", {
        nationalId: nationalId,
        password: password,
      })
      .then((response) => {
        console.log(response);
        if (response.status == 200) {
          if (response.data. NationalID === " NationalID") {
            nav("/dashboard");
          // } else if (response.data.isAdmin === "Admin") {
          //   nav("/admin");
          } else {
            nav("/");
          }
          sessionStorage.setItem("NationalID", response.data.NationalID);
        }
        navigation("/dashboard")
      })
      .catch((err) => {
        console.log(err);
      
      });
  }
  return (
    <div className="Login">
     <Container>
        <Row>
          <Col>
      <Form onSubmit={(e)=>{handleSubmit(e)}}>
      <Card.Header id="cardList1">Login With A Qiyas Account</Card.Header>
        <Form.Group size="lg" controlId="text">
          <Form.Label id="h">NationalId*</Form.Label>
          <Form.Control
            autoFocus
            type="text"
            value={nationalId}
            onChange={(e) => setNationalId(e.target.value)}
          />
        </Form.Group>
        <Form.Group size="lg" controlId="password">
          <Form.Label id="h">Password*</Form.Label>
          <Form.Control
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>
        <Button id="btn" block type="submit" disabled={!validateForm()}
        >
          Login
        </Button>
        <br/>

  <Button variant="link">You Don't Have Qiyas Account ?</Button>
<Link to="/signUp">
  <Button id="btn2" variant="warning">Rigster</Button>{' '}
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
