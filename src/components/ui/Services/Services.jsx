import React from "react";
import { Col, Container, Row } from "reactstrap";

// css Style
import "../../../styles/Services.css";

//services data
import servicesData from "../../../assets/data/serviceData";
import ScrollAnimation from "../../utility/ScrollAnimation/ScrollAnimation";

const Services = () => {
  return (
    <div className="services">
      <Container>
        <Row className="justify-content-md-center">
          {servicesData.map((el, idx) => (
            <Col lg="4" md="6" key={idx}>
              <ScrollAnimation
                animate="fade-up"
                delay={200 + idx * 100}
              ></ScrollAnimation>
              <div
                className="service__item"
                // style={{ backgroundColor: el.bg }}
              >
                <span>
                  <i className={el.icon}></i>
                </span>
                <div>
                  <h3>{el.title}</h3>
                  <p>{el.subtitle}</p>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Services;
