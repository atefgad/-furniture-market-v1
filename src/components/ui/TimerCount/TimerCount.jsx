import React from "react";
import { Link } from "react-router-dom";
import { Col, Container, Row } from "reactstrap";

// images
import images from "../../../constants";
import ScrollAnimation from "../../utility/ScrollAnimation/ScrollAnimation";

import Counter from "./Counter";

const TimerCount = () => {
  return (
    <section className="timer__count">
      <div className="overlay">
        <Container>
          <Row className="align-content-center align-items-center justify-content-md-center">
            <Col lg="6" md="6" className="Wraper__content">
              <ScrollAnimation animate="zoom-in" duration={200} delay={20}>
                <div className="top__content">
                  <h4 className="text">limited offers</h4>
                  <h3>UP TO 40% DISCOUNT</h3>
                </div>
              </ScrollAnimation>
              <ScrollAnimation animate="zoom-in" duration={200} delay={50}>
                <Counter />
              </ScrollAnimation>
              <ScrollAnimation animate="zoom-in" duration={200} delay={70}>
                <Link to="/shop" className="btn btn-primary">
                  Shop now
                </Link>
              </ScrollAnimation>
            </Col>
            <Col lg="6" md="6" className="timer__count__IMG text-end">
              <ScrollAnimation animate="zoom-in" duration={200} delay={90}>
                <img src={images.timerImg} alt="big sale" />
              </ScrollAnimation>
            </Col>
          </Row>
        </Container>
      </div>
    </section>
  );
};

export default TimerCount;
