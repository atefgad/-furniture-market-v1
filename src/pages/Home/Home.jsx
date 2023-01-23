import React from "react";
import { Link } from "react-router-dom";
import { Col, Container, Row } from "reactstrap";
import { useTranslation } from "react-i18next";
import {
  Hemlet,
  ProductsList,
  SectionHeading,
  Services,
  TimerCount,
  Animated,
  ScrollAnimation,
} from "../../components";
import images from "../../constants";

import Hero from "./Hero";
import NewsLetterForm from "./NewsLetterForm";

// css Styles
import "../../styles/Home.css";

const Home = () => {
  const [translate] = useTranslation();
  return (
    <Hemlet title="Home">
      <Animated>
        {/* hero__section */}
        <Hero />
        {/* /End hero__section */}

        {/* Services */}
        <Services />

        {/* Start today's best deals */}
        <section className="mb-5">
          <Container>
            <Row>
              <Col lg="12">
                <ScrollAnimation animate="fade" duration={200} delay={200}>
                  <SectionHeading
                    title={translate("section_head.title1")}
                    buttonCaption={translate("general.view_all")}
                    path="/shop"
                  />
                </ScrollAnimation>
              </Col>
              {/* Products List */}
              <ProductsList category="decor" lg="3" md="6" />
            </Row>
          </Container>
        </section>
        {/* End today's best deals */}

        {/* TimerCount */}
        <TimerCount />

        {/* Start New arravals */}
        <section>
          <Container>
            <Row>
              <Col lg="12">
                <ScrollAnimation animate="fade" duration={200} delay={200}>
                  <SectionHeading
                    title={translate("section_head.title2")}
                    buttonCaption={translate("general.view_all")}
                    path="/shop"
                  />
                </ScrollAnimation>
              </Col>
              {/* Products List */}
              <ProductsList category="chair" lg="3" md="6" />
            </Row>
          </Container>
        </section>
        {/* End new arravals section */}

        {/* Start BEST SELLER */}
        <section className="bg-gray p-0 mt-5 bg-card bg-white">
          <Container>
            <Row>
              <Col lg="4" md="12" className=" mb-sm-5 mb-lg-0">
                <div className="bannar__card mb-sm-5 mb-lg-0">
                  <div className="bannar__wrapper">
                    <div className="bannar__content">
                      <ScrollAnimation
                        animate="fade"
                        duration={300}
                        delay={260}
                      >
                        <span className="bannar__lable">
                          <b>{translate("bannar.lable")} </b>
                        </span>
                      </ScrollAnimation>
                      <ScrollAnimation
                        animate="fade"
                        duration={300}
                        delay={280}
                      >
                        <h3 className="bannar__title">
                          {translate("bannar.title")}
                        </h3>
                      </ScrollAnimation>
                      <ScrollAnimation
                        animate="fade-up"
                        duration={300}
                        delay={280}
                      >
                        <h5 className="bannar__subtitle">
                          {translate("bannar.sub_title")}{" "}
                          <span> {translate("bannar.off")} </span>
                        </h5>
                      </ScrollAnimation>
                      <ScrollAnimation
                        animate="fade-up"
                        duration={300}
                        delay={300}
                      >
                        <div className="text-center">
                          <Link
                            className="bannar__link btn btn-outline-primary"
                            to="/shop"
                          >
                            {translate("general.shop_now")}
                          </Link>
                        </div>
                      </ScrollAnimation>
                    </div>
                    <ScrollAnimation animate="fade" duration={320} delay={350}>
                      <div className="bannar__img">
                        <img src={images.bannarImg2} alt="bannar" />
                      </div>
                    </ScrollAnimation>
                  </div>
                </div>
              </Col>
              <Col lg="8" md="12">
                <div className="mt-5 mt-lg-0">
                  <ScrollAnimation animate="fade" duration={200} delay={200}>
                    <SectionHeading
                      title={translate("section_head.title1")}
                      buttonCaption={translate("general.view_all")}
                      path="/shop"
                    />
                  </ScrollAnimation>
                  <Row>
                    {/* Products List */}
                    <ProductsList category="sofa" lg="6" md="12" />
                  </Row>
                </div>
              </Col>
            </Row>
          </Container>
        </section>
        {/* End BEST SELLER section */}

        <div className="mt-3">
          <NewsLetterForm />
        </div>
      </Animated>
    </Hemlet>
  );
};

export default Home;
