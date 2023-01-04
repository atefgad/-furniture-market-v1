import React, { useState } from "react";
import { toast } from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { CheckoutButton } from "../../../../components";
import {
  changeCheckoutProcess,
  shippingMethod,
} from "../../../../store/slices/cartSlice";
import ShipItem from "./ShipItem";

const Shipping = () => {
  const { user } = useSelector((state) => state.user);
  const { shipping } = useSelector((state) => state.cart);

  const dispatch = useDispatch();

  const handleNextButton = () => {
    dispatch(changeCheckoutProcess(3));
  };
  const handleBackButton = () => {
    dispatch(changeCheckoutProcess(1));
  };

  const handleChange = (e) => {
    const inputVal = e.target.value;
    dispatch(shippingMethod(inputVal));
  };

  const ReanderShippingMethodItem = ({ lable, value, onChange }) => {
    return (
      <div className="shipping__method__row">
        <div className="__option">
          <label>
            <input
              type="radio"
              name="shippingmethod"
              value={value}
              onChange={onChange}
            />{" "}
            {lable}
          </label>
        </div>
        <div className="me-3 fw-500">
          {value === 0 ? <span>free</span> : <span>${value}</span>}
        </div>
      </div>
    );
  };

  const selected = user.addresses[0];

  return (
    <div>
      <section className="shipping__contact__info">
        <div className="shipping__contact__wrapper">
          <ShipItem
            lable="contact"
            value={`${selected.firstName} ${selected.lastName} - (${selected.email})`}
            onClick={() => dispatch(changeCheckoutProcess(1))}
          />
          <ShipItem
            lable="Ship to"
            value={`${selected.address}, ${selected.governorate}, ${selected.city}, ${selected.country}`}
            onClick={() => dispatch(changeCheckoutProcess(1))}
          />
        </div>
      </section>

      <section className="shipping__method">
        <h5 className="mb-2">Shipping method</h5>

        <div className="shipping__method__wrapper">
          <div className="shipping__method__row">
            <div className="__option">
              <label htmlFor="l11">
                <input
                  type="radio"
                  name="shippingmethod"
                  id="l11"
                  value={0}
                  checked={shipping === 0}
                  onChange={handleChange}
                />{" "}
                basic shipping
              </label>
            </div>
            <div className="me-3 fw-500">
              <span>free</span>
            </div>
          </div>
          <div className="shipping__method__row">
            <div className="__option">
              <label htmlFor="l12">
                <input
                  type="radio"
                  name="shippingmethod"
                  id="l12"
                  value={25}
                  checked={shipping === 25}
                  onChange={handleChange}
                />{" "}
                Premium shipping with tracking
              </label>
            </div>
            <div className="me-3 fw-500">
              <span>$25</span>
            </div>
          </div>
        </div>
      </section>

      <div className="checkout__navigate__bottom">
        <CheckoutButton
          lable="Return to information"
          className="btn"
          icon={<i className="ri-arrow-left-s-line"></i>}
          onClick={handleBackButton}
        />
        <CheckoutButton
          lable="Continue to payment"
          icon={<i className="ri-bank-card-line"></i>}
          onClick={handleNextButton}
        />
      </div>
    </div>
  );
};

export default Shipping;