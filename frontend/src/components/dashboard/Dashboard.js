import React, { useState, useEffect } from "react";
import "./dashboard.css";
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
import Available from "./Available";
import Cancelled from"./Cancelled";
import Previous from"./Previous";
import { Link } from 'react-router-dom';
import RegisteredTest from "./RegisteredTest";
import Resulted from "./resulted";


const Dashboard = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get("/users")
      .then((resp) => {
        // resp.data
        setData(resp.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
   

    <Tabs
      defaultActiveKey="profile"
      id="uncontrolled-tab-example"
      className="mb-3"
    >
      <Tab eventKey="Registered" title="Registered Tests">
        <RegisteredTest />
        </Tab>
        {/* {data.map((elem) => {
          return (
            <Container>
              <Row>
                <Col sm>
                  <Card>
                    <Card.Header>name: {elem.name}</Card.Header>
                    <Card.Body>
                      <Card.Title>Special title treatment</Card.Title>
                      <Card.Text>
                        With supporting text below as a natural lead-in to
                        additional content.
                      </Card.Text>
                      <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
            </Container>
          );
        })}
      </Tab> */}
      <Tab eventKey="available" title="Avilable tests">
        <Available />
      </Tab>
      <Tab eventKey="cancelled" title="Cancelled tests">
        <Cancelled />
      </Tab>
      <Tab eventKey="previous" title="Previous tests">
        <Previous/>
      </Tab>
      <Tab eventKey="resulted" title="Resulted">
      <Resulted/>
      </Tab>

      

      <Tab eventKey="profile" title="Personal Identity Verification">
        <p id="drop">Identity Verification Policy</p>
        <hr />
        <p id="drop">*Choose the test</p>

        <DropdownButton align="end" title="Select..." id="dropdown">
          <Dropdown.Item eventKey="1">Select...</Dropdown.Item>
          

          <Dropdown.Divider />
        </DropdownButton>

        <h5>
          The privacy policy and conditions are part of the terms of use of the
          registration system for the Education and Training Evaluation
          Authority and its provisions, including the collection of information
          necessary to perform the test remotely.
        </h5>

        <h5>1- The purpose of identity verification</h5>

        <p>
          The purpose of taking a recent photo of the applicant and uploading
          the identity to the system is to verify the identity of the
          laboratory, reduce fraud and manipulation, and achieve fairness and
          integrity of the test. - The identity verification of the laboratory
          is done automatically, and the identity verification will be confirmed
          by employees (for applicants) and female employees (for applicants)
          who are only authorized to access personally identifiable information.
          These employees have pledged to secure the confidentiality of this
          information in accordance with the regulations in force in the Kingdom
          of Saudi Arabia.
          <h5>Identity means:</h5>
          <ul>
            <li> National identity card.</li>
            <li> Residence card or resident ID.</li>
            <li> passport.</li>
            <li> Verification form (special for talent test).</li>{" "}
          </ul>
          <h5>2- Warnings about identity, photos and data</h5>- You must verify
          that you have entered all the data correctly and that the captured ID
          photo and the photo taken are correct in order not to be subject to
          cancellation of the test or legal liability. Here are a number of
          caveats that you should pay attention to:
          <ol>
            <li>
              {" "}
              Make sure that you are solely responsible for the correctness and
              truthfulness of the data you send and that it belongs to you and
              that any attempt to raise a false identity or impersonate another
              person or manipulate it will expose you to legal accountability
              and legal penalties, including denial of the test result.
            </li>
            <li>
              {" "}
              Ensure the quality of the image captured for you in front of the
              camera, as well as the quality of the image captured for your
              identity by reviewing them before saving.
            </li>
          </ol>
          <h5>3- Maintaining privacy, data and photos.</h5>
          Dear tester, the data you have provided us with is safe and is used
          only for the purposes of verifying the identity of the test taker, and
          we pledge to you to maintain the privacy of your data. We are also
          committed to clarifying our policy regarding the privacy of your data,
          which is as follows: - The authority ensures that the contents of
          personal information are kept confidential, and is not responsible for
          any legal damage that you or any other party may suffer as a result of
          violating confidentiality or cybercrime laws regarding information
          that it has transmitted, provided or tampered with.
          <ul>
            <li>
              {" "}
              We assure you that your privacy is a top priority for us, and we
              will not use that data other than what has been mentioned and
              explained.
            </li>
            <li>
              We assure you that our site does not conduct any commercial
              activities.
            </li>

            <li>
              {" "}
              This system does not collect personal information about you when
              you visit the site unless you specifically and knowingly choose to
              provide this information. In the event that the collection of
              personal information (identity and photo) is required for the
              purpose of verifying the identity of the laboratory.
            </li>

            <li>
              We do not share this data with third parties except within the
              limits of the results related to universities and various state
              institutions, unless this is in the context of collective data
              used for statistical purposes and research, without including any
              data that may be used to identify you.
            </li>

            <li>
              The Site applies appropriate and high quality technical and
              organizational measures to protect Personal Data against
              accidental or unlawful destruction, accidental loss, alteration,
              unauthorized disclosure, use or access.
            </li>
            <li>
              {" "}
              You can always contact us to answer your inquiries regarding this
              policy by calling 920033555.
            </li>
          </ul>
        </p>

        <Container>
          <InputGroup
            style={{
              backgroundColor: "#ddd",
              padding: "15px 5px",
              borderRadius: "5px",
            }}
          >
            <Row>
              <Col md={1}>
                <input type="checkbox"></input>
              </Col>
              <Col>I agree to the above policies and terms</Col>
            </Row>
          </InputGroup>
          <br />
          
          <Button variant="primary" size="lg" active>
            Follow up
          </Button>{" "}
           
          <Link to="/">
          <Button variant="secondary" size="lg" active>
            Back To Main Page
          </Button>
          </Link>
        </Container>
      </Tab>
    </Tabs>
    
    </>
  );
};

export default Dashboard;
