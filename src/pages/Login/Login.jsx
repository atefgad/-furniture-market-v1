import { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { Col, Container, Form, FormGroup, Row } from "reactstrap";

import { motion } from "framer-motion";
import { Animated, CommonSection, Hemlet, Loading } from "../../components";

// Firebase
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase.config";

import "../../styles/Login.css";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { login } from "../../store/slices/userSlice";
import { useTranslation } from "react-i18next";

const Login = () => {
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [translate] = useTranslation();

  // React-Form-Hook
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleSignup = async (data) => {
    setLoading(true);

    const { email, password } = data;

    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );

      const user = userCredential.user;

      dispatch(
        login({
          uid: user.uid,
          displayName: user.displayName,
          email,
          addresses: [],
        })
      );

      setLoading(false);
      toast.success(translate("general.login_msg"));
      //navigate(-1);
      navigate("/cart");
    } catch (error) {
      setLoading(false);
      toast.error(error.message);
    }
  };

  return (
    <Hemlet title={translate("general.login_page_title")}>
      <CommonSection title={translate("general.login_page_title")} />
      <Animated>
        <Container>
          <Row className="my-5">
            <Col lg="6" className="m-auto text-center text-start">
              {loading ? (
                <Loading />
              ) : (
                <Form
                  className="auth__form"
                  onSubmit={handleSubmit(handleSignup)}
                >
                  {/* Email && Username */}
                  <FormGroup className="form__group">
                    <div className="form__group_item">
                      <input
                        className={`form-control ${
                          errors.email && "border-danger"
                        } `}
                        type="text"
                        placeholder={translate("placeholder.email")}
                        {...register("email", {
                          required: translate("required.email"),
                        })}
                      />
                      <p className="text-danger">
                        {errors.email ? errors.email.message : null}
                      </p>
                    </div>
                  </FormGroup>

                  {/* Password */}
                  <FormGroup className="form__group">
                    <div className="form__group_item w-100">
                      <input
                        className={`form-control ${
                          errors.password && "border-danger"
                        } `}
                        type="password"
                        placeholder={translate("placeholder.password")}
                        {...register("password", {
                          required: translate("required.email"),
                        })}
                      />
                      <p className="text-danger">
                        {errors.password ? errors.password.message : null}
                      </p>
                    </div>
                  </FormGroup>

                  <div className="d-flex justify-content-between ">
                    <p>
                      <Link to="#!" className="text-decoration-underline">
                        {translate("general.lost_your_password")}
                      </Link>
                    </p>
                    <Link to="/signup" className="">
                      {translate("general.create_new_account")}
                    </Link>
                  </div>

                  <motion.div whileTap={{ scale: 1.1 }}>
                    <button
                      type="submit"
                      className="btn btn-primary mt-2 w-25 "
                    >
                      {translate("general.login")}
                    </button>
                  </motion.div>
                </Form>
              )}
            </Col>
          </Row>
        </Container>
      </Animated>
    </Hemlet>
  );
};

export default Login;
