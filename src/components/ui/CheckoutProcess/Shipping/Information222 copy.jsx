import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Form, FormGroup } from "reactstrap";
import { countryList } from "../../../assets/data/countries";
import { CheckoutButton } from "../..";
import useAuth from "../../../hooks/useAuth";
import { changeCheckoutProcess } from "../../../store/slices/cartSlice";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";

const Information = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { user } = useAuth();

  const handleBackToCart = () => {
    navigate("/cart", {
      replace: true,
    });
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleFormSubmit = (data) => {
    const {
      email,
      firstName,
      lastName,
      address,
      address2,
      country,
      city,
      governorate,
      postal,
      phone,
    } = data;

    dispatch(changeCheckoutProcess(2));

    // if (Object.keys(errors).length <= 0) {
    //   dispatch(changeCheckoutProcess(2));
    // } else {
    //   toast.error("Please fill out all required fields!");
    // }
  };

  return (
    <div className="mt-3">
      <form onSubmit={handleSubmit(handleFormSubmit)}>
        <h5 className="mb-2">Contact information</h5>
        <FormGroup className="form__group align-items-center">
          <span>Email: </span>
          <input
            className={`form-control ${errors.email && "input-danger"} `}
            type="email"
            defaultValue={user?.email}
            placeholder="enter your email"
            {...register("email", {
              required: "email is required",
            })}
          />
        </FormGroup>
        <h5 className="mb-2">Shipping address</h5>
        <FormGroup className="form__group">
          <input
            className={`form-control ${errors.firstName && "input-danger"} `}
            type="text"
            placeholder={
              errors.firstName ? errors.firstName.message : "first name"
            }
            {...register("firstName", {
              required: "first name is required",
              minLength: { value: 3, message: "min length is 3" },
            })}
          />

          <input
            className={`form-control ${errors.lastName && "input-danger"} `}
            type="text"
            placeholder={
              errors.lastName ? errors.lastName.message : "last name"
            }
            {...register("lastName", {
              required: "last name is required",
              minLength: { value: 3, message: "min length is 3" },
            })}
          />
        </FormGroup>

        <FormGroup className="form__group">
          <select
            className="form-select"
            {...register("country", { required: "country is required" })}
          >
            <option>Country</option>
            {countryList.map((country, idx) => (
              <option key={idx} value={country}>
                {country}
              </option>
            ))}
          </select>
        </FormGroup>
        <FormGroup className="form__group">
          <input
            className={`form-control ${errors.address && "input-danger"} `}
            type="text"
            placeholder={errors.address ? errors.address.message : "address"}
            {...register("address", {
              required: "address is required",
            })}
          />
          <input
            className="form-control"
            type="text"
            placeholder="address  2 (optional)"
            {...register("address2", { required: false })}
          />
        </FormGroup>

        <FormGroup className="form__group">
          <input
            className={`form-control ${errors.city && "input-danger"} `}
            type="text"
            placeholder={errors.city ? errors.city.message : "city"}
            {...register("city", {
              required: "city is required",
            })}
          />

          <input
            className={`form-control ${errors.governorate && "input-danger"} `}
            type="text"
            placeholder={
              errors.governorate ? errors.governorate.message : "governorate"
            }
            {...register("governorate", {
              required: "governorate is required",
            })}
          />
        </FormGroup>

        <FormGroup className="form__group">
          <input
            className="form-control"
            type="number"
            placeholder="Postal code (optional)"
            {...register("postal", { required: false })}
          />
          <input
            className={`form-control ${errors.phone && "input-danger"} `}
            type="tel"
            placeholder={errors.phone ? errors.phone.message : "Phone number"}
            {...register("phone", {
              required: "Phone number is required",
              minLength: { value: 10, message: "min length number is 10" },
              maxLength: { value: 15, message: "max length number is 15" },
            })}
          />
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
            onClick={handleFormSubmit}
            type="submit"
          />
        </div>
      </form>
    </div>
  );
};

export default Information;