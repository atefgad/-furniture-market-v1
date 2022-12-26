import { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { Col, Container, Form, FormGroup, Row } from "reactstrap";
import { Animated, CommonSection, Hemlet, Loading } from "../../components";

// Firebase
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";

// Firestore
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { setDoc, doc } from "firebase/firestore";

// from firebase configuration
import { auth } from "../../firebase.config";
import { storage } from "../../firebase.config";
import { db } from "../../firebase.config";

import toast from "react-hot-toast";

import "../../styles/Signup.css";

const Signup = () => {
  const [file, setFile] = useState(null);
  const [imgPreview, setImgPreview] = useState(null);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleImgChange = (e) => {
    //to get img url when upload and set into useState[file]
    setFile(e.target.files[0]);
    //to get img and display when upload
    setImgPreview(URL.createObjectURL(e.target.files[0]));
  };

  // React-Form-Hook
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleSignup = async (data) => {
    setLoading(true);

    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        data.email,
        data.password
      );

      const user = await userCredential.user;

      const storageRef = ref(storage, `images/${Date.now() + data.userName}`);
      const uploadTask = uploadBytesResumable(storageRef, file);

      uploadTask.on(
        () => {
          toast.error("profile image not uoploaded");
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
            // Update user profile
            await updateProfile(user, {
              displayName: data.userName,
              photoURL: downloadURL,
            });

            // store user data in firestore
            await setDoc(doc(db, "users", user.uid), {
              uid: user.uid,
              displayName: data.userName,
              email: data.email,
              photoURL: downloadURL,
              fname: data.firstName,
              lname: data.lastName,
            });
          });
        }
      );

      setLoading(false);
      toast.success("account created successfully");
      navigate("/login");
    } catch (error) {
      setLoading(false);
      setImgPreview(null);
      toast.error("something went wrong!");
    }
  };

  return (
    <Hemlet title="Signup">
      <CommonSection title="Signup" />
      <Animated>
        <Container>
          <Row className="my-5">
            {loading ? (
              <Loading />
            ) : (
              <Col lg="6" className="m-auto  text-center">
                <Form
                  className="auth__form"
                  onSubmit={handleSubmit(handleSignup)}
                >
                  {/* Upload Profile Image */}
                  <div className="mb-4 text-center">
                    <div
                      className={`upload__options ${
                        imgPreview !== null ? "is_uploaded" : ""
                      }`}
                    >
                      <label>
                        <input
                          type="file"
                          accept="image/png, image/gif, image/jpeg"
                          required
                          onChange={handleImgChange}
                        />
                        {imgPreview !== null ? (
                          <div className="img__preview">
                            <img src={imgPreview} alt="" />
                          </div>
                        ) : null}
                      </label>
                    </div>
                    <span className="fs-5 text-muted">Profile Photo</span>
                  </div>
                  {/* First && Last name */}
                  <FormGroup className="form__group">
                    <div className="form__group_item">
                      <input
                        className={`form-control ${
                          errors.firstName && "border-danger"
                        } `}
                        type="text"
                        placeholder="First name"
                        {...register("firstName", {
                          required: "First Name is required",
                          minLength: { value: 3, message: "Min length is 3" },
                          maxLength: { value: 10, message: "Max length is 10" },
                        })}
                      />
                      <p className="text-danger">
                        {errors.firstName ? errors.firstName.message : null}
                      </p>
                    </div>
                    {/* Last name */}
                    <div className="form__group_item">
                      <input
                        className={`form-control ${
                          errors.lastrName && "border-danger"
                        } `}
                        type="text"
                        placeholder="Last name"
                        {...register("lastName", {
                          required: "last Name is required",
                          minLength: { value: 3, message: "Min length is 3" },
                          maxLength: { value: 10, message: "Max length is 10" },
                        })}
                      />
                      <p className="text-danger">
                        {errors.lastName ? errors.lastName.message : null}
                      </p>
                    </div>
                  </FormGroup>

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
                    {/* Username */}
                    <div className="form__group_item">
                      <input
                        className={`form-control ${
                          errors.userName && "border-danger"
                        } `}
                        type="text"
                        placeholder="Username"
                        {...register("userName", {
                          required: "Username is required",
                          minLength: { value: 3, message: "Min length is 3" },
                          maxLength: { value: 15, message: "Max length is 15" },
                        })}
                      />
                      <p className="text-danger">
                        {errors.userName ? errors.userName.message : null}
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
                      <p className="text-danger fs-6">
                        {errors.password ? errors.password.message : null}
                      </p>
                    </div>
                  </FormGroup>

                  <button
                    type="submit"
                    className="btn btn-primary mt-0 mb-3 w-50 "
                    //disabled={errors ? "true" : "false"}
                  >
                    Signup
                  </button>
                </Form>

                <p>
                  Do you have an account?
                  <Link to="/login" className="">
                    <b> Login now</b>
                  </Link>
                </p>
              </Col>
            )}
          </Row>
        </Container>
      </Animated>
    </Hemlet>
  );
};

export default Signup;
