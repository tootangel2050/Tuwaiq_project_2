import axios from "axios";
import React, {useState , useEffect} from "react";
import {Row,
    Col,
    Container,
    Card, 
  } from "react-bootstrap";

const Resulted = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get("/test")
      .then((res) => {
        console.log(res.data);
        setData(res.data);
        
      })
      .catch((err) => {
        console.log(err);
      });
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
                    <Card.Title>TestDate: {elem.TestDate}</Card.Title>
                    <Card.Text>
                    TestScore:{elem.TestScore}
                    </Card.Text>
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

export default Resulted