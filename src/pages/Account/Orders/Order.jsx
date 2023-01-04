import React from "react";
import {
  AccordionBody,
  AccordionHeader,
  AccordionItem,
  PopoverBody,
  UncontrolledPopover,
} from "reactstrap";
import { Link } from "react-router-dom";

const Order = ({ order }) => {
  
  return (
    <AccordionItem className="order" key={order.id}>
      <AccordionHeader targetId={order.id} className="order__head" tag="div">
        <div className="head__left">
          <div className="head__left_item">
            <span>ORDER PLACED</span>
            <small>{order.data.created}</small>
          </div>
          <div className="head__left_item">
            <span>TOTAL</span>
            <small>${order.data.amount}</small>
          </div>
          <div className="head__left_item">
            <span>SHIP TO</span>
            <a href="#!" id="e3">
              {order.data.adressDetails.firstName +
                " " +
                order.data.adressDetails.lastName}
              <i className="ri-arrow-down-s-line"></i>
            </a>

            <UncontrolledPopover
              placement="bottom"
              trigger="click"
              //target={`#${order.id.slice(0, 2)}-e`}
              target="e3"
            >
              <PopoverBody className="d-flex flex-column">
                <b>
                  {order.data.adressDetails.firstName +
                    " " +
                    order.data.adressDetails.lastName}
                </b>
                <small>{order.data.adressDetails.adress}</small>
                <small>{order.data.adressDetails.adress2}</small>
                <small>{order.data.adressDetails.city}</small>
                <small>{order.data.adressDetails.country}</small>
                <small>
                  Phone: <tel>{order.data.adressDetails.phone}</tel>
                </small>
              </PopoverBody>
            </UncontrolledPopover>
          </div>
        </div>
        <div className="head__right">
          <div className="head__right_item text-center">
            <span>ORDER #{order.id}</span>
            <a href="#!">View details</a>
          </div>
        </div>
      </AccordionHeader>
      <AccordionBody accordionId={order.id} className="order__body">
        <div className="w-100">
          <div className="d-flex justify-content-between align-items-center mb-2">
            <h5>order items:</h5>
            <button className="btn btn-primary">track order</button>
          </div>
          <div>
            {order.data.basket.map((el, idx) => (
              <div className="oreder__busket__item" key={idx}>
                <div className="oreder__busket__item__img">
                  <img src={el.imgUrl} alt="" />
                </div>
                <div className="d-block">
                  <Link to={`/shop/${el.id}`}>{el.productName}</Link>
                  <p className="d-flex">
                    <span className="me-2"> qty: </span>
                    <span className="fw-600"> {el.quantity}</span>
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </AccordionBody>
    </AccordionItem>
  );
};

export default Order;
