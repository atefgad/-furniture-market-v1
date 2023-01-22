import { doc, setDoc, Timestamp } from "firebase/firestore";
import React, { useState } from "react";
import CurrencyFormat from "react-currency-format";
import { toast } from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { CheckoutButton, PaymentCard } from "../../../components";
import { db } from "../../../firebase.config";
import useAuth from "../../../hooks/useAuth";
import {
  changeCheckoutProcess,
  clearCart,
} from "../../../store/slices/cartSlice";
import { closeModal, openModal } from "../../../store/slices/modalSlice";

import { useTranslation } from "react-i18next";

// genrate order Number
const generateSerial = () => {
  let serial = Math.floor(Math.random() * (50000 - 200 + 1) + 200);
  return serial.toString();
};

// get full today date
const date = new Date();
const month = date.toLocaleString("en-US", { month: "long" });
const todayDate = date.getDate() + " " + month + " " + date.getFullYear();

const Payment = () => {
  const [isActive, setActive] = useState("card");
  const { totalAmount, cartItems, shipping } = useSelector(
    (state) => state.cart
  );
  const addresses = useSelector((state) => state.user.user.addresses);

  const [tranlate] = useTranslation();

  const { user } = useAuth();

  const dispatch = useDispatch();
  const navigate = useNavigate();

  // const time = firebase.firestore.FieldValue.serverTimestamp();
  const time = Timestamp.now();

  // Handle payment
  const handlePaymentSubmit = () => {
    //const ref = doc(db, "orders", generateNumber());
    //const ref = doc(db, "usersOrders", user?.uid, "orders", generateNumber());

    const ref = doc(db, "users", user?.uid, "orders", generateSerial());
    setDoc(ref, {
      basket: cartItems,
      amount: totalAmount + shipping,
      shipping,
      adressDetails: addresses[0],
      createdBy: user?.uid,
      orderStatus: "pendding",
      created: time.seconds,
    });

    dispatch(openModal("OrderConfirmation"));

    setTimeout(() => {
      dispatch(closeModal());
      dispatch(changeCheckoutProcess(3));
      navigate("/account/orders", {
        replace: true,
      });
      dispatch(clearCart());
    }, 3000);
  };

  const handleBackButton = () => {
    dispatch(changeCheckoutProcess(2));
  };

  // pay with card component
  const RenderCard = () => {
    return (
      <div className="Credit__card">
        <p className="mt-3 mb-2">
          {tranlate("checkout.enter_your_Credit_Card_details")}
        </p>
        <hr className="border-top border-2 mt-0" />

        {/* Credit Card */}
        <PaymentCard />
        <div className="payment__price__holder mt-3">
          <small>{tranlate("checkout.you_will_pay")}:</small>
          <CurrencyFormat
            renderText={(val) => (
              <h5>
                {tranlate("checkout.oredr_total")}: {val}
              </h5>
            )}
            fixedDecimalScale={true}
            decimalScale={2}
            value={totalAmount + shipping}
            displayType={"text"}
            thousandSeparator={true}
            prefix="$"
          />
        </div>
      </div>
    );
  };
  // pay with cash component
  const RenderCash = () => {
    return (
      <div className="cash__card text-center">
        <p className="fs-4">{tranlate("checkout.pay_with_cash_content")}</p>
      </div>
    );
  };
  return (
    <div className="payment__container">
      <h5 className="mb-3">{tranlate("checkout.choose_payment_method")}</h5>

      <div className="__card__taps__container">
        <div className={`__card__tap ${isActive === "card" ? "active" : ""}`}>
          <button className="card__btn" onClick={() => setActive("card")}>
            {tranlate("checkout.pay_with")}{" "}
            <i className="ri-visa-fill mx-1"></i>
            {tranlate("checkout.or")}
            <i className="ri-mastercard-fill"></i>
          </button>
        </div>
        <div className={`__card__tap ${isActive === "cash" ? "active" : ""}`}>
          <button className="card__btn" onClick={() => setActive("cash")}>
            {tranlate("checkout.pay_with_cash")}{" "}
            <i className="ri-currency-fill ms-2"></i>
          </button>
        </div>
      </div>

      <div className="payment__content">
        {/* stripe card payment */}
        {isActive === "card" && <RenderCard />}
        {/* cash */}
        {isActive === "cash" && <RenderCash />}
      </div>

      <div className="checkout__navigate__bottom">
        <CheckoutButton
          lable={tranlate("checkout.return_to_shipping")}
          className="btn"
          icon={<i className="ri-arrow-left-s-line"></i>}
          onClick={handleBackButton}
        />
        <CheckoutButton
          lable={tranlate("checkout.complete_order")}
          icon={<i className="ri-shield-check-line"></i>}
          onClick={handlePaymentSubmit}
        />
      </div>
    </div>
  );
};

export default Payment;
