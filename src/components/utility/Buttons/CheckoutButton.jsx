import React from "react";

const CheckoutButton = ({
  onClick,
  className = "btn btn-primary",
  lable = "Next",
  icon,
  type = "button",
  disabled = false,
}) => {
  return (
    <button
      className={className}
      type={type}
      onClick={onClick}
      disabled={disabled}
    >
      {icon && icon} <span>{lable}</span>
    </button>
  );
};

export default CheckoutButton;
