import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Container, Row, Col } from "reactstrap";

import CurrencyFormat from "react-currency-format";

import {
  Hemlet,
  Animated,
  ScrollAnimation,
  OrderSummaryCard,
  Information,
  Shipping,
  Payment,
  Modal,
} from "../../components";

import StepItem from "./StepItem";
import images from "../../constants";
// styles
import "../../styles/Checkout.css";
import { Toaster } from "react-hot-toast";

const Checkout = () => {
  const { totalAmount, checkoutProcess } = useSelector((state) => state.cart);

  const [formStep, setFormStep] = useState(0);
  const [hide, setHide] = useState(false);

  const nextFormStep = () => {
    setFormStep((current) => current + 1);
  };
  const prevFormStep = () => {
    setFormStep((current) => current - 1);
  };

  const RenderButton = () => {
    if (formStep > 0) {
      return (
        <button className="btn btn-primary" onClick={prevFormStep}>
          Previous
        </button>
      );
    } else {
      return (
        <button className="btn btn-primary" onClick={nextFormStep}>
          Next step
        </button>
      );
    }
  };

  const RenderStepContent = () => {
    if (checkoutProcess === 2) {
      return <Shipping />;
    } else if (checkoutProcess === 3) {
      return <Payment />;
    } else {
      return <Information />;
    }
  };

  return (
    <Hemlet title="Checkout">
      {/* <CommonSection title="Checkout" /> */}
      <div className={`checkout__page ${hide ? "isActive" : ""}`}>
        <div className="checkout__page__left">
          {/* show order summary  */}
          <section className="checkout__header">
            <Container>
              <ScrollAnimation animate="fade-up" duration={200}>
                <div className="checkout__header__wrapper">
                  <h1>Checkout</h1>
                  <img
                    className="checkout__header__cards__img"
                    src={images.paymentsCards}
                    alt="Checkout payment cards"
                  />
                </div>
              </ScrollAnimation>
            </Container>
          </section>
          {/* show order summary  */}
          <div className="order__summary__toggle" onClick={() => setHide(true)}>
            <span className="order__summary__btn">
              <i className="ri-arrow-left-line"></i> show order summary
            </span>
            <CurrencyFormat
              renderText={(val) => <span className="fw-bold">{val}</span>}
              decimalScale={2}
              value={totalAmount}
              displayType={"text"}
              thousandSeparator={true}
              prefix="$"
            />
          </div>
          {/* Steps/Head */}
          <div className="steps">
            <StepItem
              name="information"
              count={1}
              icon="ri-information-line"
              isActive={checkoutProcess >= 1 ? true : false}
            />
            <StepItem
              name="shipping"
              count={2}
              icon="ri-map-pin-line"
              isActive={checkoutProcess >= 2 ? true : false}
            />
            <StepItem
              name="payment"
              count={3}
              icon="ri-bank-card-line"
              isActive={checkoutProcess >= 3 ? true : false}
            />
          </div>
          <Animated>
            <Container>
              <Row className="">
                <Col lg="12">
                  {/* Checkout/Content */}
                  <div className="checkout__step__content">
                    <RenderStepContent />
                  </div>
                </Col>
              </Row>
            </Container>
          </Animated>
        </div>
        <div className="checkout__page__right">
          <Animated>
            <OrderSummaryCard setHide={setHide} />
          </Animated>
        </div>
      </div>

      <Toaster position="top-left" reverseOrder={false} />
      <Modal />
    </Hemlet>
  );
};

export default Checkout;
