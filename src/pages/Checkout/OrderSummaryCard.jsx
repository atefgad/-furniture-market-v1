import React from "react";
import { useSelector } from "react-redux";
import CurrencyFormat from "react-currency-format";
import { Col, Container, Row } from "reactstrap";

const OrderSummaryCard = ({ setHide }) => {
  const { totalQuantity, totalAmount } = useSelector((state) => state.cart);

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
              <div className="__card_item">
                Total Qty: <span>{totalQuantity} items</span>
              </div>
              <div className="__card_item">
                subtotal: <span>${totalAmount}</span>
              </div>
              <div>shipping</div>
              <div className="__card_item">
                free shipping:
                <br /> <span>$0</span>
              </div>
              <hr className="hr" />
              <CurrencyFormat
                renderText={(val) => (
                  <div className="__card_item price">
                    Total price: <span>{val}</span>
                  </div>
                )}
                decimalScale={2}
                value={totalAmount}
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
