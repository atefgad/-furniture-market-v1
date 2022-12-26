import React from "react";

const Steps = () => {
  const stepsItems = [
    { name: "step1", count: 1, icon: "ri-map-pin-line" },
    { name: "step2", count: 2, icon: "ri-bank-card-line" },
    { name: "step3", count: 3, icon: "ri-shopping-bag-line" },
  ];
  return (
    <div className="steps">
      <div className="step-item active">
        <div className="step-progress">
          <div className="step-count">1</div>
        </div>
        <div className="step-label">
          <i className="ri-map-pin-line"></i> <span>shipping</span>
        </div>
      </div>
      <div className="step-item">
        <div className="step-progress">
          <div className="step-count">2</div>
        </div>
        <div className="step-label">
          <i className="ri-bank-card-line"></i> <span>payment</span>
        </div>
      </div>
      <div className="step-item">
        <div className="step-progress">
          <div className="step-count">3</div>
        </div>
        <div className="step-label">
          <i className="ri-shopping-bag-line"></i> <span>confirmation</span>
        </div>
      </div>
    </div>
  );
};

export default Steps;
