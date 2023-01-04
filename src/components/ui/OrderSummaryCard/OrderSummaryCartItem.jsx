import React from "react";

const OrderSummaryCartItem = ({ item }) => {
  return (
    <div className="order__summary__item">
      <div className="item">
        <div className="img__item">
          <img src={item.imgUrl} alt={item.productName} />
          <span className="badge">{item.quantity}</span>
        </div>
        <div className="desc__item">
          <span>{item.productName}</span>
          <p>{item.category}</p>
        </div>
        <div className="price__item">
          <span className="fw-500">${item.totalPrice}</span>
        </div>
      </div>
    </div>
  );
};

export default OrderSummaryCartItem;
