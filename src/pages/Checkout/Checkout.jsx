import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Container, Row, Col } from "reactstrap";

import CurrencyFormat from "react-currency-format";

import { Hemlet, Animated, CommonSection } from "../../components";

// Checkout steps
import Confirmation from "./CheckoutSteps/Confirmation";
import Payment from "./CheckoutSteps/Payment";
import Shipping from "./CheckoutSteps/Shipping";
import StepItem from "./StepItem";

import OrderSummaryCard from "./OrderSummaryCard";

import "../../styles/Checkout.css";

const Checkout = () => {
  const { totalQuantity, totalAmount } = useSelector((state) => state.cart);

  const [formStep, setFormStep] = useState(0);
  const [hide, setHide] = useState(false);

  const completeFormStep = () => {
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
        <button className="btn btn-primary" onClick={completeFormStep}>
          Next step
        </button>
      );
    }
  };

  const RenderStepContent = () => {
    if (formStep === 1) {
      return <Payment />;
    } else if (formStep === 2) {
      return <Confirmation />;
    } else {
      return <Shipping />;
    }
  };

  return (
    <Hemlet title="Checkout">
      {/* <CommonSection title="Checkout" /> */}
      <div className={`checkout__page ${hide ? "isActive" : ""}`}>
        <div className="checkout__page__left">
          <CommonSection title="Checkout" />
          {/* show order summary  */}
          <div className="order__summary__toggle" onClick={() => setHide(true)}>
            <span className="order__summary__btn">
              <i className="ri-arrow-left-line"></i> show order summary
            </span>
            <span>$659</span>
          </div>
          {/* Steps/Head */}
          <div className="steps">
            <StepItem
              name="shipping"
              count={1}
              icon="ri-map-pin-line"
              isActive={formStep >= 0 ? true : false}
            />
            <StepItem
              name="payment"
              count={2}
              icon="ri-bank-card-line"
              isActive={formStep >= 1 ? true : false}
            />
            <StepItem
              name="confirmation"
              count={3}
              icon="ri-shopping-bag-line"
              isActive={formStep >= 2 ? true : false}
            />
          </div>
          <Animated>
            <Container>
              <Row className="">
                <Col lg="12">
                  {/* Checkout/Content */}
                  <RenderStepContent />

                  {/* Checkout/Buttons */}
                  <div className="d-flex gap-3">
                    {formStep > 0 && (
                      <button
                        className="btn btn-primary"
                        onClick={prevFormStep}
                      >
                        Previous
                      </button>
                    )}

                    {formStep < 2 && (
                      <button
                        className="btn btn-primary"
                        onClick={completeFormStep}
                      >
                        Next step
                      </button>
                    )}
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
    </Hemlet>
  );
};

export default Checkout;
