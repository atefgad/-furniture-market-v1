// Css Style
import { useState } from "react";
import "./PaymentCard.css";

function cc_format(value) {
  const v = value
    .replace(/\s+/g, "")
    .replace(/[^0-9]/gi, "")
    .substr(0, 16);
  const parts = [];

  for (let i = 0; i < v.length; i += 4) {
    parts.push(v.substr(i, 4));
  }

  return parts.length > 1 ? parts.join("  ") : value;
}

function PaymentCard() {
  const [cardVal, setCardVal] = useState("");

  const onChange = (e) => {
    setCardVal(e.target.value);
  };
  return (
    <div className="payment__card">
      <div className="payment-card-body">
        <div className="card__item">
          <div className="card__input__wrapper">
            <span className="input__icon">
              <i className="ri-bank-card-2-line"></i>
            </span>
            <input
              type="text"
              className="form-control"
              autoFocus
              placeholder="Cardholder name"
            />
          </div>
        </div>
        <div className="card__item">
          <div className="card__input__wrapper">
            <span className="input__icon">
              <i className="ri-bank-card-line"></i>
            </span>
            <input
              type="text"
              className="form-control"
              placeholder="card number"
              value={cc_format(cardVal)}
              onChange={onChange}
            />
          </div>
        </div>
        <div className="row card__item">
          <div className="col">
            <div className="card__input__wrapper">
              <span className="input__icon">
                <i className="ri-calendar-2-line"></i>
              </span>
              <input
                type="number"
                className="form-control"
                placeholder="Expiration date (MM / YY)"
              />
            </div>
          </div>
          <div className="col">
            <div className="card__input__wrapper">
              <span className="input__icon">
                <i className="ri-lock-line"></i>
              </span>
              <input
                type="number"
                className="form-control"
                placeholder="Security code(CVV)"
              />
            </div>
          </div>
        </div>
        <span className="text-muted certificate-text">
          <i className="ri-lock-line me-1"></i>
          Your transaction is secured with ssl certificate
        </span>
      </div>
      {/* <button className="btn btn-primary fw-bold">Pay now</button> */}
    </div>
  );
}

export default PaymentCard;
