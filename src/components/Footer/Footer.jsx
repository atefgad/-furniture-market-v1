import React from "react";
import "./Footer.css";
import { Col, Container, Row } from "reactstrap";
import { useTranslation } from "react-i18next";
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
  const [tranlate, i18n] = useTranslation();
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
                  <h6 className="text-light mb-1">
                    {tranlate("fetures.feture1")}
                  </h6>
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
                  <h6 className="text-light mb-1">
                    {tranlate("fetures.feture2")}
                  </h6>
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
                  <h6 className="text-light mb-1">
                    {tranlate("fetures.feture3")}
                  </h6>
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
                  <h6 className="text-light mb-1">
                    {tranlate("fetures.feture4")}
                  </h6>
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
                {subMenu(tranlate("footer.m1_title"), [
                  tranlate("footer.m1_item1"),
                  tranlate("footer.m1_item2"),
                  tranlate("footer.m1_item3"),
                  tranlate("footer.m1_item4"),
                ])}
              </Col>

              <Col md="3" className="mb-md-0 mb-4">
                {subMenu(tranlate("footer.m2_title"), [
                  tranlate("footer.m2_item1"),
                  tranlate("footer.m2_item2"),
                  tranlate("footer.m2_item3"),
                  tranlate("footer.m2_item4"),
                ])}
              </Col>

              <Col md="4" className="mb-md-0 mb-4">
                {subMenu(tranlate("footer.m3_title"), [
                  tranlate("footer.m3_item1"),
                  tranlate("footer.m3_item2"),
                  tranlate("footer.m3_item3"),
                ])}
              </Col>
            </Row>
          </Col>

          {/* Credit Cards */}
          <Col md="4">
            <div className="mb-md-0 mb-4 text-center">
              <h2 className="footer-heading">
                {tranlate("footer.payments_lable")}
              </h2>
              <img
                src={images.paymentsCards}
                alt={tranlate("footer.payments_lable")}
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
            {tranlate("footer.copy_right")} &copy;{" "}
            <b>{new Date().getFullYear()}</b>
          </span>{" "}
          | {tranlate("footer.made_by")}
          {" - "}
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
