import React from "react";
import { useTranslation } from "react-i18next";
import { Col, Container, Row } from "reactstrap";

// css Style
import "../../../styles/Services.css";

import ScrollAnimation from "../../utility/ScrollAnimation/ScrollAnimation";

//services data
const servicesEn = [
  {
    icon: "ri-truck-line",
    title: "Free Shipping",
    subtitle: "Capped at $120 per order",
    bg: "#d6e5fb",
  },
  {
    icon: "ri-refresh-line",
    title: "Easy Returns",
    subtitle: "14-Day Returns",
    bg: "#ceebe9",
  },
  {
    icon: "ri-secure-payment-line",
    title: "Secure Payment",
    subtitle: "Up to 12 months installments",
    bg: "#e2f2b2",
  },
];
const servicesAr = [
  {
    icon: "ri-truck-line",
    title: "الشحن المجاني",
    subtitle: "شحن سريع وأمن",
    bg: "#d6e5fb",
  },
  {
    icon: "ri-refresh-line",
    title: "إعادة المشتريات",
    subtitle: "14 يوم لإعادة المشتريات",
    bg: "#ceebe9",
  },
  {
    icon: "ri-secure-payment-line",
    title: "تسوق أمن",
    subtitle: "بياناتك محمية دائماً",
    bg: "#e2f2b2",
  },
];

const Services = () => {
  const [tranlate, i18n] = useTranslation();
  const servicesData = i18n.language === "ar" ? servicesAr : servicesEn;
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
