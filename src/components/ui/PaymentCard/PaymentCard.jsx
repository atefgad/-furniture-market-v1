// Css Style
import "./PaymentCard.css";

function PaymentCard() {
  return (
    <div className="payment__card">
      <div className="payment-card-body">
        <div className="card__item">
          <span className="card-text">Name on card</span>
          <div className="card__input__wrapper">
            <span className="input__icon">
              <i className="ri-bank-card-line"></i>
            </span>
            <input
              type="text"
              className="form-control"
              placeholder="your name"
            />
          </div>
        </div>
        <div className="card__item">
          <span className="card-text">Credit Card Number</span>
          <div className="card__input__wrapper">
            <span className="input__icon">
              <i className="ri-bank-card-line"></i>
            </span>
            <input
              type="number"
              className="form-control"
              placeholder="0000 0000 0000 0000"
            />
          </div>
        </div>
        <div className="row card__item">
          <div className="col-md-8">
            <span className="card-text">Expiry Date</span>
            <div className="card__input__wrapper">
              <span className="input__icon">
                <i className="ri-calendar-2-line"></i>
              </span>
              <input
                type="number"
                className="form-control"
                placeholder="MM/YY"
              />
            </div>
          </div>
          <div className="col-md-4">
            <span className="card-text">CVC</span>
            <div className="card__input__wrapper">
              <span className="input__icon">
                <i className="ri-lock-line"></i>
              </span>
              <input type="number" className="form-control" placeholder="000" />
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
