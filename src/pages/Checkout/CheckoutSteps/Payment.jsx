import React, { useState } from "react";
import CurrencyFormat from "react-currency-format";
import { useSelector } from "react-redux";
import { PaymentCard } from "../../../components";

const Payment = () => {
  const [isActive, setActive] = useState("card");
  const { totalAmount } = useSelector((state) => state.cart);

  //Handle payment card
  const handleChange = () => {};

  // Handle payment
  const handlePaymentSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className="payment__container">
      <h4 className="mb-3">Choose payment method</h4>

      <div className="payment__cards__container">
        <div className={`payment__card ${isActive === "card" ? "active" : ""}`}>
          <button className="card__btn" onClick={() => setActive("card")}>
            Pay with card <i className="ri-visa-fill"></i>{" "}
            <i className="ri-mastercard-fill"></i>
            <span>by Stripe</span>
          </button>
        </div>
        <div className={`payment__card ${isActive === "cash" ? "active" : ""}`}>
          <button className="card__btn" onClick={() => setActive("cash")}>
            Pay with cash <i className="ri-currency-fill ms-2"></i>
          </button>
        </div>
      </div>

      <div className="payment__content">
        {/* stripe card payment */}
        {isActive === "card" && (
          <div className="stripe__card">
            <form onSubmit={handlePaymentSubmit}>
              <h6 className="mt-4 mb-2 ">enter your Credit Card details</h6>
              <hr className="border-top border-2" />
              <PaymentCard />
              <div className="payment__price__holder mt-3">
                you will pay:
                <CurrencyFormat
                  renderText={(val) => <h4>Oredr Total: {val}</h4>}
                  decimalScale={2}
                  value={totalAmount}
                  displayType={"text"}
                  thousandSeparator={true}
                  prefix="$"
                />
              </div>
            </form>
          </div>
        )}
        {/* stripe card payment */}
        {isActive === "cash" && (
          <div className="cash__card text-center mt-5">
            <p className="fs-4">
              place order now and pay on <strong>cash</strong> later!
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Payment;
