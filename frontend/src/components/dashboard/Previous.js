import React, { useState, useEffect } from "react";

import {
  Tabs,
  Tab,
  DropdownButton,
  Dropdown,
  InputGroup,
  FormControl,
  Row,
  Col,
  Container,
  Button,
  Card,
  SplitButton,
} from "react-bootstrap";

import axios from "axios";
import "./dashboard.css";
const Previous= () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get("/test/prevuss")
      .then((resp) => {
        // resp.data
        console.log(resp.data)
        setData(resp.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return(<div>
  {data.map((elem,i) => {
  return (
<Container>
  <Row>
    <Col>
     

<Card>
  <Card.Body>
    <Card.Title>Name: {elem.Name}</Card.Title>
    <Card.Text>
    CenterOffice:{elem.CenterOffice}
    </Card.Text>
    <Card.Text>
    TestMechanisim:{elem.TestMechanisim}
    </Card.Text>
    <Card.Text>
    AppointmentStatus:{elem.AppointmentStatus}
    </Card.Text>
    <Card.Text>
    AppointmentStatus:{elem.AppointmentStatus}
    </Card.Text>
    <Card.Text>
    TestDate:{elem.TestDate}
    </Card.Text>
    <Card.Text>
    PaymentMethod:{elem.PaymentMethod}
    </Card.Text>
  </Card.Body>
</Card>


    </Col>
  </Row>
</Container>


  )})}</div>
  )
}

export default Previous