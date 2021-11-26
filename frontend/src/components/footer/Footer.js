import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
import "./footer.css";

const FooterPage = () => {
  return (
    <MDBFooter id="mdb">
      <MDBContainer fluid className="text-center text-md-left">
        <MDBRow>
          <MDBCol md="12">
            <h5 className="title">Technical support</h5>
            <hr />
            <p>
              If you have a technical problem, you can contact us through:
              Customer support portal Support Portal Customer support mobile
              apps
            </p>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <hr />
      <div className="footer-copyright">
        <MDBContainer fluid>
          &copy; {new Date().getFullYear()} Copyright: 2021 Education & Training
          Evaluation Commission
        </MDBContainer>
      </div>
    </MDBFooter>
  );
};

export default FooterPage;
