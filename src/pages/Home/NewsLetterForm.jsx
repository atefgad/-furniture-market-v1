import React from "react";
import { Col, Container, Row } from "reactstrap";
import { ScrollAnimation } from "../../components";

const NewsLetterForm = () => {
  return (
    <div className="newsletter mt-5">
      <Container>
        <Row className="align-items-center">
          <Col lg="8">
            <ScrollAnimation animate="fade-up" duration={250} delay={200}>
              <div className="widget__container">
                <div className="widget__icon">
                  <i className="ri-mail-send-fill"></i>
                </div>

                <div className="widget__title">
                  <h3>sign up for newsletter</h3>
                </div>

                <div className="widget__des">
                  <p>
                    Subscribe to the weekly newsletter for all the latest
                    updates
                  </p>
                </div>
              </div>
            </ScrollAnimation>
          </Col>

          <Col lg="4">
            <ScrollAnimation animate="fade" duration={250} delay={270}>
              <div className="newsletter__form">
                <div className="newsletter__form__content">
                  <div className="w-100">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Your email address.."
                    />
                  </div>
                  <div className="">
                    <button type="submit" className="btn btn-secondary">
                      submit
                    </button>
                  </div>
                </div>
              </div>
            </ScrollAnimation>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default NewsLetterForm;
