import {React}from "react";
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
import { Link } from "react-router-dom";

const Main = () => {
  return (
    <div>
      <Container>
        <Row>
          <Col>
            <Card id="bgColor">
              <Card.Body>
                <div id="div">
                  <h3 class="hthree">advertisement </h3>
                  <p class="hthree">
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
            <Card id="card1">
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
                <Button variant="primary" size="lg" active>
    Play
  </Button>{' '}
  </Link>
              </Card.Body>
              
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
export default Main;
