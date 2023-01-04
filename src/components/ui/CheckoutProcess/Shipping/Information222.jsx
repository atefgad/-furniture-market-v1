import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Form, FormGroup, Input } from "reactstrap";
import { countryList } from "../../../../assets/data/countries";
import { CheckoutButton } from "../../..";
import useAuth from "../../../../hooks/useAuth";
import { changeCheckoutProcess } from "../../../../store/slices/cartSlice";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";

const Information = () => {
  const [data, setData] = useState({
    fiestName: "",
    lastName: "",
    email: "user?.email",
    address: "",
    address2: "",
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { user } = useAuth();

  const handleBackToCart = () => {
    navigate("/cart", {
      replace: true,
    });
  };

  const handleFormSubmit = (data) => {
    console.log("successful", data);

    if (data.length !== 0) {
      dispatch(changeCheckoutProcess(2));
    }

    // if (Object.keys(errors).length <= 0) {
    //   dispatch(changeCheckoutProcess(2));
    // } else {
    //   toast.error("Please fill out all required fields!");
    // }
  };
  <div className="mt-3">
    <Form onSubmit={handleFormSubmit}>
      <h5 className="mb-2">Contact information</h5>
      <FormGroup className="form__group align-items-center">
        <span>Email: </span>
        <input
          className="form-control"
          type="email"
          defaultValue={user?.email}
          placeholder="enter your email"
        />
      </FormGroup>
      <h5 className="mb-2">Shipping address</h5>
      <FormGroup className="form__group">
        <input className="form-control" type="text" placeholder="first name" />

        <input className="form-control" type="text" placeholder="last name" />
      </FormGroup>

      <FormGroup className="form__group">
        <select className="form-select">
          <option>Country</option>
          {countryList.map((country, idx) => (
            <option key={idx} value={country}>
              {country}
            </option>
          ))}
        </select>
      </FormGroup>
      <FormGroup className="form__group">
        <input className="form-control" type="text" placeholder="address" />
        <input
          className="form-control"
          type="text"
          placeholder="address  2 (optional)"
        />
      </FormGroup>

      <FormGroup className="form__group">
        <input className="form-control" type="text" placeholder="city" />

        <input className="form-control" type="text" placeholder="governorate" />
      </FormGroup>

      <FormGroup className="form__group">
        <input
          className="form-control"
          type="number"
          placeholder="Postal code (optional)"
        />
        <input className="form-control" type="tel" placeholder="Phone number" />
      </FormGroup>

      <div className="checkout__navigate__bottom">
        <CheckoutButton
          lable="Return to cart"
          className="btn"
          icon={<i className="ri-arrow-left-s-line"></i>}
          onClick={handleBackToCart}
        />
        <CheckoutButton
          lable="Continue to shipping"
          icon={<i className="ri-truck-line"></i>}
          type="submit"
        />
      </div>
    </Form>
  </div>;
};

export default Information;
