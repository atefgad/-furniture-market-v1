import React from "react";
import { Col, Container, Row } from "reactstrap";
import { useTranslation } from "react-i18next";
import { ScrollAnimation } from "../../components";

const NewsLetterForm = () => {
  const [tranlate] = useTranslation();
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
                  <h3>{tranlate("newsletter.title")}</h3>
                </div>

                <div className="widget__des">
                  <p>{tranlate("newsletter.desc")}</p>
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
                      placeholder={tranlate("newsletter.email")}
                    />
                  </div>
                  <div className="">
                    <button type="submit" className="btn btn-secondary">
                      {tranlate("newsletter.submit")}
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
