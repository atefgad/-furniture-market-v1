import React from "react";

const StepItem = ({ count = 1, name, icon, isActive }) => {
  return (
    <div className={`step-item ${isActive ? "active" : ""}`}>
      <div className="step-progress">
        <div className="step-count">{count}</div>
      </div>
      <div className="step-label">
        <i className={icon}></i> <span>{name}</span>
      </div>
    </div>
  );
};

export default StepItem;
