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

const Login = () => {
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

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

      console.log("user", user);
      setLoading(false);
      toast.success("successfully logged in :)");
      //navigate(-1);
    } catch (error) {
      setLoading(false);
      toast.error(error.message);
    }
  };

  return (
    <Hemlet title="Login">
      <CommonSection title="Login" />
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
                        placeholder="Email"
                        {...register("email", {
                          required: "Email is required",
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
                        placeholder="password"
                        {...register("password", {
                          required: "Password is required",
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
                        Lost your password?
                      </Link>
                    </p>
                    <Link to="/signup" className="">
                      Create new account
                    </Link>
                  </div>

                  <motion.div whileTap={{ scale: 1.1 }}>
                    <button
                      type="submit"
                      className="btn btn-primary mt-2 w-25 "
                    >
                      Login
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
