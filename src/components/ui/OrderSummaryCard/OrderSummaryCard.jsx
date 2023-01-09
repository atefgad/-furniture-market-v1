import React from "react";
import { useSelector } from "react-redux";
import CurrencyFormat from "react-currency-format";
import { Col, Container, Row } from "reactstrap";
import OrderSummaryCartItem from "./OrderSummaryCartItem";

import "./OrderSummaryCard.css";
import { useTranslation } from "react-i18next";
const OrderSummaryCard = ({ setHide }) => {
  const { cartItems, totalAmount, shipping } = useSelector(
    (state) => state.cart
  );

  const [tranlate] = useTranslation();

  // divElement.offsetHeight;

  return (
    <div className="order__summary">
      <div className="order__summary__card">
        <Container>
          <button className="btn hide__BTN" onClick={() => setHide(false)}>
            <i className="ri-arrow-left-line"></i>{" "}
            {tranlate("checkout.hide_order_summary")}
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
                    {tranlate("checkout.subtotal")}: <span>{val}</span>
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
                {tranlate("checkout.shipping")}:<span>${shipping}</span>
              </div>
              <hr className="hr" />
              <CurrencyFormat
                renderText={(val) => (
                  <div className="__card_item price">
                    {tranlate("checkout.total")}: <span>{val}</span>
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
