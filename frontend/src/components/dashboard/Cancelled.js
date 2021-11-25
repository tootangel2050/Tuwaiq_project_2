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
const Cancelled= () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get("/test/cancelled")
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
     {/* <Card key={i}>
      <Card.Header>Name: {elem.Name}</Card.Header>
      <br/>

      <Card.Body>
        AppointmentStatus:{elem.AppointmentStatus}
        TestLanguage:{elem.TestLanguage}
        TestTypeMechanism:{elem.TestTypeMechanism}
        TestDate:{elem.TestDate}
        <Card.Text></Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card> */}

<Card>
  <Card.Body>
    <Card.Title>Name: {elem.name}</Card.Title>
    <Card.Text>
    CenterOfficeLocation:{elem.CenterOfficeLocation}
    </Card.Text>
    <Card.Text>
    Date:{elem.Date}
    </Card.Text>
    <Card.Text>
    CancellationTime:{elem.CancellationTime}
    </Card.Text>
    <Card.Text>
    TestTypeMechanism:{elem.TestTypeMechanism}
    </Card.Text>
    <Card.Text>
    CancellationReason:{elem.CancellationReason}
    </Card.Text>
  </Card.Body>
</Card>


    </Col>
  </Row>
</Container>


   
    
//     <Card>
//   <Card.Body>
//     <Card.Title>Name: {elem.Name}</Card.Title>
//     <Card.Text>
//     AppointmentStatus:{elem.AppointmentStatus}
//     </Card.Text>
//     <Card.Text>
//     TestLanguage:{elem.TestLanguage}
//     </Card.Text>
//     <Card.Text>
//     TestTypeMechanism:{elem.TestTypeMechanism}
//     </Card.Text>
//     <Card.Text>
//     TestDate:{elem.TestDate}
//     </Card.Text>
//   </Card.Body>
// </Card>
  )})}</div>
  )
}

export default Cancelled