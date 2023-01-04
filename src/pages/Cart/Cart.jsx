import { useSelector } from "react-redux";
import { Col, Container, Row } from "reactstrap";
import { Hemlet, Animated, CommonSection } from "../../components";
import { Link } from "react-router-dom";
import CartListItem from "./CartListItem";

// Cart Styles
import "../../styles/Cart.css";
import CurrencyFormat from "react-currency-format";

const Cart = () => {
  const { cartItems, totalAmount } = useSelector((state) => state.cart);

  return (
    <Hemlet title="Cart">
      <CommonSection title="shopping cart" />
      <Animated>
        <Container>
          {cartItems.length === 0 ? (
            <Row>
              <Col lg="12">
                <div className="text-center py-5">
                  <span className="ri-shopping-cart-line fs-1"></span>
                  <h4 className="text-muted">
                    Your <span className="text-dark">cart</span> is currently
                    empty.
                  </h4>
                  <Link to="/shop" className="btn btn-primary rounded-0 mt-3">
                    Shopping now
                  </Link>
                </div>
              </Col>
            </Row>
          ) : (
            <Row className="py-3">
              {/* Cart Items Content */}
              <Col lg="8">
                <div className="cart__row">
                  {cartItems.map((cartItem, index) => (
                    <CartListItem key={index} cartItem={cartItem} />
                  ))}
                </div>
              </Col>
              <Col lg="4">
                <div className=" cart__card py-3 px-4">
                  <div className="d-flex align-items-center justify-content-between">
                    <h6>Subtotal </h6>

                    <CurrencyFormat
                      renderText={(val) => (
                        <span className="fs-4 fw-bold text-primary">{val}</span>
                      )}
                      decimalScale={2}
                      fixedDecimalScale={true}
                      value={totalAmount}
                      displayType={"text"}
                      thousandSeparator={true}
                      prefix="$"
                    />
                  </div>
                  <hr className="hr" />
                  <p className="fs-6">
                    Tax included. <strong>Shipping</strong> calculated at
                    checkout
                  </p>
                  <div className="d-flex align-items-center flex-column justify-content-between gap-2 w-100 mt-3">
                    <Link to="/shop" className="btn btn-outline-primary w-100">
                      continue shopping
                    </Link>
                    <Link to="/checkout" className="btn btn-primary w-100">
                      checkout
                    </Link>
                  </div>
                </div>
              </Col>
            </Row>
          )}
        </Container>
      </Animated>
    </Hemlet>
  );
};

export default Cart;
