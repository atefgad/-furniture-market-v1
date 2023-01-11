import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { FormGroup } from "reactstrap";
import { countryList } from "../../../assets/data/countries";
import { CheckoutButton } from "../..";
import useAuth from "../../../hooks/useAuth";
import { changeCheckoutProcess } from "../../../store/slices/cartSlice";
import { useForm } from "react-hook-form";
import { addShippingAddress } from "../../../store/slices/userSlice";
import { useTranslation } from "react-i18next";

const Information = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [tranlate] = useTranslation();

  const { user } = useAuth();

  const handleBackToCart = () => {
    navigate("/cart");
  };

  const {
    register,
    handleSubmit,
    formState: { errors, isDirty, isValid },
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
      isDefaultAddress,
    } = data;

    dispatch(
      addShippingAddress({
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
        isDefaultAddress,
      })
    );
    dispatch(changeCheckoutProcess(2));

    //toast.success("Shipping address added successfully!");
  };

  return (
    <div className="mt-3">
      <form onSubmit={handleSubmit(handleFormSubmit)}>
        <h5 className="mb-2">{tranlate("checkout.contact_information")}</h5>
        <FormGroup className="form__group align-items-center justify-content-start border rounded-2 p-2">
          <span>{tranlate("checkout.email")}: </span>
          <span className="fw-600">{user?.email}</span>
        </FormGroup>
        <h5 className="mb-2">{tranlate("checkout.shipping_addres")}</h5>
        <FormGroup className="form__group">
          <input
            className={`form-control ${errors.firstName && "input-danger"} `}
            type="text"
            placeholder={
              errors.firstName
                ? errors.firstName.message
                : tranlate("placeholder.first_name")
            }
            {...register("firstName", {
              required: tranlate("required.first_name"),
              minLength: { value: 3, message: tranlate("required.min_3") },
            })}
          />

          <input
            className={`form-control ${errors.lastName && "input-danger"} `}
            type="text"
            placeholder={
              errors.lastName
                ? errors.lastName.message
                : tranlate("placeholder.last_name")
            }
            {...register("lastName", {
              required: tranlate("required.last_name"),
              minLength: { value: 3, message: tranlate("required.min_3") },
            })}
          />
        </FormGroup>

        <FormGroup className="form__group">
          <select
            className={`form-select ${
              errors.lastName && "border-danger text-danger"
            } `}
            defaultValue={"Egypt"}
            {...register("country", { required: "country is required" })}
          >
            {/*
          <option disabled>
              {errors.address ? "country is required" : "country"}
            </option>
          */}
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
            placeholder={
              errors.address
                ? errors.address.message
                : tranlate("placeholder.address")
            }
            {...register("address", {
              required: tranlate("required.address"),
            })}
          />
          <input
            className="form-control"
            type="text"
            placeholder={tranlate("placeholder.address2")}
            {...register("address2", { required: false })}
          />
        </FormGroup>

        <FormGroup className="form__group">
          <input
            className={`form-control ${errors.city && "input-danger"} `}
            type="text"
            placeholder={
              errors.city ? errors.city.message : tranlate("placeholder.city")
            }
            {...register("city", {
              required: tranlate("required.city"),
            })}
          />

          <input
            className={`form-control ${errors.governorate && "input-danger"} `}
            type="text"
            placeholder={
              errors.governorate
                ? errors.governorate.message
                : tranlate("placeholder.governorate")
            }
            {...register("governorate", {
              required: tranlate("required.governorate"),
            })}
          />
        </FormGroup>

        <FormGroup className="form__group">
          <input
            className="form-control"
            type="number"
            placeholder={tranlate("placeholder.postal_code")}
            {...register("postal", { required: false })}
          />
          <input
            className={`form-control ${errors.phone && "input-danger"} `}
            type="tel"
            placeholder={
              errors.phone
                ? errors.phone.message
                : tranlate("placeholder.phone_number")
            }
            {...register("phone", {
              required: tranlate("required.phone_number"),
              // minLength: { value: 10, message: "min length number is 10" },
              maxLength: {
                value: 15,
                message: tranlate("required.max_15"),
              },
            })}
          />
        </FormGroup>
        <p>
          <label htmlFor="l1" className="__Checkbox__label">
            <input
              type="checkbox"
              id="l1"
              {...register("isDefaultAddress", { required: false })}
            />
            <span>{tranlate("checkout.primary_address")}</span>
          </label>
        </p>

        <div className="checkout__navigate__bottom">
          <CheckoutButton
            lable={tranlate("checkout.return_to_cart")}
            className="btn"
            icon={<i className="ri-arrow-left-s-line"></i>}
            onClick={handleBackToCart}
          />
          <CheckoutButton
            lable={tranlate("checkout.continue_to_shipping")}
            icon={<i className="ri-truck-line"></i>}
            type="submit"
            disabled={!isDirty && !isValid}
          />
        </div>
      </form>
    </div>
  );
};

export default Information;
