import axiox from "axios"
import React , {useState , useEffect} from "react"
import {Row,
  Col,
  Container,
  Card, 
} from "react-bootstrap"; 

const RegisteredTest = () => {
    const [data , setData] = useState([]);
    useEffect (() => {
        axios 
        .get("test")
        .then((res) => {
            console.log(err);
        })
    }, []);
    return (
        <div>
      {data.map((elem, i) => {
        return (
          <Container>
            <Row>
              <Col>
                <Card>
                  <Card.Body>
                    <Card.Title>Name: {elem.Name}</Card.Title>
                    <Card.Text>AppointmentStatus:{elem.AppointmentStatus}</Card.Text>
                    <Card.Text>TestLanguage: {elem.TestLanguage}</Card.Text>
                    <Card.Text>TestTypeMechanism: {elem.TestTypeMechanism}</Card.Text>
                    <Card.Text>TestDate: {elem.TestDate}</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Container>
        );
      })}
    </div>

    );
};

export default RegisteredTest