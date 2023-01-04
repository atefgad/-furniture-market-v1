import React from "react";
import "./Styles.css";

const OrderConfirmation = () => {
  return (
    <div className="OrderConfirmation text-center">
      <span className="icon__container border-success">
        <i className="ri-check-line text-success"></i>
      </span>
      <h3 className="text-success mb-1">your order is confirmed!</h3>
      <p className="text-muted mt-0 mb-3 fs-5">Thank you!</p>
      {/* <button className="btn btn-primary mb-4">Check Order Status</button> */}
    </div>
  );
};

export default OrderConfirmation;
