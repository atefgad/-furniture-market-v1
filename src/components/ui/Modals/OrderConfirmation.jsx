import React from "react";
import { useTranslation } from "react-i18next";
import "./Styles.css";

const OrderConfirmation = () => {
  const [tranlate] = useTranslation();
  return (
    <div className="OrderConfirmation text-center">
      <span className="icon__container border-success">
        <i className="ri-check-line text-success"></i>
      </span>
      <h3 className="text-success mb-1">
        {tranlate("checkout.order_confirmed")}
      </h3>
      <p className="text-muted mt-0 mb-3 fs-5">
        {tranlate("checkout.thank_you")}
      </p>
      {/* <button className="btn btn-primary mb-4">Check Order Status</button> */}
    </div>
  );
};

export default OrderConfirmation;
