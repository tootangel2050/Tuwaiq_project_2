import { React } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
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
    </div>
  );
};
export default Main;
