import React from "react";
import "./Footer.css";
import { Col, Container, Row } from "reactstrap";
import images from "../../constants";
import ScrollAnimation from "../utility/ScrollAnimation/ScrollAnimation";

//import Icons
const subMenu = (title, items = []) => {
  return (
    <React.Fragment>
      <h2 className="footer-heading text-capitalize">{title}</h2>
      <ul className="list-unstyled">
        {items.map((item) => (
          <li key={item}>
            <a href="#!" className="d-block mb-1">
              {item}
            </a>
          </li>
        ))}
      </ul>
    </React.Fragment>
  );
};

function Footer() {
  return (
    <footer className="footer pt-3">
      <Container>
        {/* Footer Icons */}
        <Row className="p-md-2 mb-md-2">
          <Col lg="3" md="6" className="mb-4">
            <ScrollAnimation animate="fade" duration={200} delay={200}>
              <div className="d-flex align-items-center">
                <span className="text-primary" style={{ fontSize: "2.125rem" }}>
                  <i className="ri-truck-line"></i>
                </span>
                <div className="ps-3">
                  <h6 className="text-light mb-1">Fast and free delivery</h6>
                </div>
              </div>
            </ScrollAnimation>
          </Col>

          <Col lg="3" md="6" className="mb-4">
            <ScrollAnimation animate="fade" duration={200} delay={250}>
              <div className="d-flex align-items-center">
                <span className="text-primary" style={{ fontSize: "2.125rem" }}>
                  <i className="ri-repeat-2-line"></i>
                </span>
                <div className="ps-3">
                  <h6 className="text-light mb-1">Money back guarantee</h6>
                </div>
              </div>
            </ScrollAnimation>
          </Col>

          <Col lg="3" md="6" className="mb-4">
            <ScrollAnimation animate="fade" duration={200} delay={300}>
              <div className="d-flex align-items-center">
                <span className="text-primary" style={{ fontSize: "2.125rem" }}>
                  <i className="ri-customer-service-line"></i>
                </span>
                <div className="ps-3">
                  <h6 className="text-light mb-1">24/7 customer support</h6>
                </div>
              </div>
            </ScrollAnimation>
          </Col>
          <Col lg="3" md="6" className="mb-4">
            <ScrollAnimation animate="fade" duration={200} delay={350}>
              <div className="d-flex align-items-center">
                <span className="text-primary" style={{ fontSize: "2.125rem" }}>
                  <i className="ri-bank-card-line"></i>
                </span>
                <div className="ps-3">
                  <h6 className="text-light mb-1">Secure online payment</h6>
                </div>
              </div>
            </ScrollAnimation>
          </Col>
        </Row>
      </Container>

      <hr className="hr-light text-light my-0 mb-5" />

      <Container>
        <Row>
          <Col md="8">
            <Row className="">
              <Col md="5" className="mb-md-0 mb-4">
                {subMenu("Customer zone", [
                  "your account",
                  "shipping & policies",
                  "refunds & replacements",
                  "taxes & fees",
                ])}
              </Col>

              <Col md="3" className="mb-md-0 mb-4">
                {subMenu("about", [
                  "out story",
                  "awards",
                  "our team",
                  "career",
                ])}
              </Col>

              <Col md="4" className="mb-md-0 mb-4">
                {subMenu("Resources", ["Blog", "Newsletter", "Privacy Policy"])}
              </Col>
            </Row>
          </Col>

          {/* Credit Cards */}
          <Col md="4">
            <div className="mb-md-0 mb-4 text-center">
              <h2 className="footer-heading">We Accept Credit Cards</h2>
              <img
                src={images.paymentsCards}
                alt="Payment methods"
                style={{ width: "180px" }}
              />
            </div>
          </Col>
        </Row>
      </Container>

      <hr className="hr-light text-light my-0 mt-3 mb-3" />

      <div className="py-3 text-center">
        <p className="text-light  mb-0">
          <span className="text-light ">
            All copyright reserved &copy; <b>{new Date().getFullYear()}</b>
          </span>{" "}
          | made by{" "}
          <a
            className="text-primary "
            href="https://atef-gad.com"
            target="_blank"
            rel="noreferrer"
          >
            <b>atef gad</b>
          </a>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
