const ShipItem = ({ lable, value, onClick }) => {
  return (
    <div className="shipping__contact__row">
      <div className="__item__desc">
        <div className="__lable">
          <span>{lable}</span>
        </div>
        <div className="__text">
          <bdo dir="ltr">{value}</bdo>
        </div>
      </div>
      <div className="__item__action">
        <button className="btn btn-outline-primary" onClick={onClick}>
          <span>Change</span>
        </button>
      </div>
    </div>
  );
};

export default ShipItem;
