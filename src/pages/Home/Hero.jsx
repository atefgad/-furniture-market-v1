import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { Col, Container, Row } from "reactstrap";
import { AnimatedButton } from "../../components";
import images from "../../constants";

const Hero = () => {
  const [tranlate] = useTranslation();
  const year = new Date().getFullYear();

  return (
    <section className="hero__section">
      <Container>
        <Row className="align-items-center justify-center">
          <Col lg="6" md="6">
            <div className="hero__content">
              <p className="hero__subtitle">{tranlate("hero.hero_subtitle")}</p>
              <h2 className="hero__heading">
                {tranlate("hero.New_arrivals")}
                <br />{" "}
                <span className="main__color">
                  {tranlate("hero.collection")}
                </span>{" "}
                <br />
                {year}
              </h2>

              {/* Hero Button */}
              <AnimatedButton caption={tranlate("general.shop_now")}>
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
