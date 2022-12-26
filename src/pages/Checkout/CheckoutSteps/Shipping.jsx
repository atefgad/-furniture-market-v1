import React from "react";
import { FormGroup } from "reactstrap";

const Shipping = () => {
  return (
    <div className="mt-3">
      <h5 className="mb-2">Billing Information</h5>
      <FormGroup className="form__group">
        <input
          className="form-control"
          type="text"
          placeholder="Enter your name"
        />

        <input
          className="form-control"
          type="email"
          placeholder="Enter your email"
        />
      </FormGroup>
      <FormGroup className="form__group">
        <input
          className="form-control"
          type="number"
          placeholder="Phone number"
        />

        <input
          className="form-control"
          type="text"
          placeholder="street address"
        />
      </FormGroup>
      <FormGroup className="form__group">
        <input className="form-control" type="text" placeholder="City" />

        <input
          className="form-control"
          type="number"
          placeholder="Postal code"
        />

        <input className="form-control" type="text" placeholder="Country" />
      </FormGroup>
    </div>
  );
};

export default Shipping;
