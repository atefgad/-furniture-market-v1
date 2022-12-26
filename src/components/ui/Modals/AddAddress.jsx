import React from "react";
import { useDispatch } from "react-redux";
import { Form, FormGroup } from "reactstrap";
import { closeModal } from "../../../store/slices/modalSlice";
import "./Styles.css";

function AddAddress() {
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className="add__new__address">
      <h5 className="mb-3">Add new shipping address</h5>
      <hr className="hr" />
      <Form>
        <FormGroup className="form__group">
          <input
            className="form-control"
            type="text"
            placeholder="first name"
          />

          <input className="form-control" type="text" placeholder="last name" />
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
          <input className="form-control" type="text" placeholder="Country" />
          <input className="form-control" type="text" placeholder="City" />
          <input
            className="form-control"
            type="number"
            placeholder="Postal code"
          />
        </FormGroup>

        <div className="d-flex justify-content-end mt-4">
          <button
            className="btn btn-primary w-100 fw-bold"
            type="submit"
            onClick={handleSubmit}
          >
            Save Changes
          </button>
          <button
            type="button"
            className="btn btn-link text-dark w-75 fw-bold"
            onClick={() => dispatch(closeModal())}
          >
            Close
          </button>
        </div>
      </Form>
    </div>
  );
}

export default AddAddress;
