import { Container, Row, Col, Form, FormGroup } from "reactstrap";
import { useNavigate, useLocation } from "react-router-dom";
import { Animated, Hemlet } from "../../components";
import { toast } from "react-hot-toast";
import useAuth from "../../hooks/useAuth";
import { logout as LOGOUT } from "../../store/slices/userSlice.js";
import { useDispatch } from "react-redux";

const Profile = () => {
  const { user, logout } = useAuth();

  let location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(LOGOUT());
    logout();
    toast.success("logged out successfully");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <Hemlet title="Profile">
      <Animated>
        <Container>
          <Row className="account__page__container">
            <Col lg="12">
              {/* Profile Card */}
              <div className="profile__card__bg w-100"></div>
              <div className="profile__card">
                <div className="profile__card__wrapper">
                  <div className="profile__img">
                    <img src={user?.photoURL} alt={user?.displayName} />
                  </div>
                  <div className="profile__text">
                    <h4 className="__name">{user?.displayName}</h4>
                    {/* <p className="__caption">{user?.email}</p> */}
                  </div>
                </div>
                <button
                  className="btn btn-primary d-flex"
                  onClick={handleLogout}
                >
                  <i className="ri-logout-circle-line me-1"></i>
                  Logout
                </button>
              </div>
            </Col>
            <Col lg="12" md="12" className="">
              <h5 className="mb-3">Edit your account information</h5>
              <Form onSubmit={handleSubmit}>
                <FormGroup className="form__group">
                  <input
                    className="form-control"
                    type="text"
                    placeholder="first name"
                  />

                  <input
                    className="form-control"
                    type="text"
                    placeholder="last name"
                  />
                  <input
                    className="form-control"
                    type="number"
                    placeholder="Phone number"
                  />
                </FormGroup>
                <FormGroup className="form__group">
                  <input
                    className="form-control"
                    type="email"
                    placeholder="email address"
                  />

                  <input
                    className="form-control"
                    type="text"
                    placeholder="street address"
                  />
                </FormGroup>
                <FormGroup className="form__group">
                  <input
                    className="form-control"
                    type="text"
                    placeholder="City"
                  />

                  <input
                    className="form-control"
                    type="number"
                    placeholder="Postal code"
                  />

                  <input
                    className="form-control"
                    type="text"
                    placeholder="Country"
                  />
                </FormGroup>

                <div className="text-end">
                  <button className="btn btn-primary" type="submit">
                    Save Changes
                  </button>
                </div>
              </Form>
            </Col>
          </Row>
        </Container>
      </Animated>
    </Hemlet>
  );
};

export default Profile;
