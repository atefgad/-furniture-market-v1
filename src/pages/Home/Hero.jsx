import React from "react";
import { Link } from "react-router-dom";
import { Col, Container, Row } from "reactstrap";
import { AnimatedButton } from "../../components";
import images from "../../constants";

const Hero = () => {
  const year = new Date().getFullYear();
  return (
    <section className="hero__section">
      <Container>
        <Row className="align-items-center justify-center">
          <Col lg="6" md="6">
            <div className="hero__content">
              <p className="hero__subtitle">Free shipping offer order $120</p>
              <h2 className="hero__heading">
                New arrivals <br />{" "}
                <span className="main__color">collection</span> <br />
                {year}
              </h2>

              {/* Hero Button */}
              <AnimatedButton caption="Shop now">
                <Link to="/shop">
                  <i className="ri-arrow-right-line"></i>
                </Link>
              </AnimatedButton>
            </div>
          </Col>
          {/* hero__img */}
          <Col lg="6" md="6">
            <div className="hero__img">
              <img src={images.heroImg} alt="hero wood furnitur" />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Hero;
