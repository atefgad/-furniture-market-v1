import React from "react";
import { useSelector } from "react-redux";
import CurrencyFormat from "react-currency-format";
import { Col, Container, Row } from "reactstrap";
import OrderSummaryCartItem from "./OrderSummaryCartItem";

import "./OrderSummaryCard.css";
const OrderSummaryCard = ({ setHide }) => {
  const { cartItems, totalAmount, shipping } = useSelector(
    (state) => state.cart
  );

  // divElement.offsetHeight;

  return (
    <div className="order__summary">
      <div className="order__summary__card">
        <Container>
          <button className="btn hide__BTN" onClick={() => setHide(false)}>
            <i className="ri-arrow-left-line"></i> hide order summary
          </button>
          <Row>
            {/* Total Price Card */}
            <Col lg="12">
              {cartItems.length > 0 && (
                <div className="order__summary__container">
                  {cartItems.map((item, idx) => (
                    <OrderSummaryCartItem key={idx} item={item} />
                  ))}
                </div>
              )}
              <hr className="hr" />

              <CurrencyFormat
                renderText={(val) => (
                  <div className="__card_item">
                    Subtotal: <span>{val}</span>
                  </div>
                )}
                decimalScale={2}
                fixedDecimalScale={true}
                value={totalAmount}
                displayType={"text"}
                thousandSeparator={true}
                prefix="$"
              />
              <div className="__card_item">
                Shipping:
                <span>${shipping}</span>
              </div>
              <hr className="hr" />
              <CurrencyFormat
                renderText={(val) => (
                  <div className="__card_item price">
                    Total: <span>{val}</span>
                  </div>
                )}
                decimalScale={2}
                fixedDecimalScale={true}
                value={totalAmount + shipping}
                displayType={"text"}
                thousandSeparator={true}
                prefix="$"
              />
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default OrderSummaryCard;
