import { Container, Row, Col, Form, FormGroup } from "reactstrap";
import { Animated, Hemlet } from "../../components";
import { toast } from "react-hot-toast";
import useAuth from "../../hooks/useAuth";
import { logout as LOGOUT } from "../../store/slices/userSlice.js";
import { useDispatch } from "react-redux";
import { useTranslation } from "react-i18next";

const Profile = () => {
  const [translate, i18n] = useTranslation();
  const { user, logout } = useAuth();

  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(LOGOUT());
    logout();
    toast.success(translate("general.logout_msg"));
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
              <h5 className="mb-3">
                {translate("account.edit_your_account_information")}
              </h5>
              <Form onSubmit={handleSubmit}>
                <FormGroup className="form__group">
                  <input
                    className="form-control"
                    type="text"
                    placeholder={translate("placeholder.first_name")}
                  />

                  <input
                    className="form-control"
                    type="text"
                    placeholder={translate("placeholder.last_name")}
                  />
                  <input
                    className="form-control"
                    type="number"
                    placeholder={translate("placeholder.phone_number")}
                  />
                </FormGroup>
                <FormGroup className="form__group">
                  <input
                    className="form-control"
                    type="email"
                    value={user?.email}
                    placeholder={translate("placeholder.email")}
                    disabled="true"
                  />

                  <input
                    className="form-control"
                    type="text"
                    placeholder={translate("placeholder.address")}
                  />
                </FormGroup>
                <FormGroup className="form__group">
                  <input
                    className="form-control"
                    type="text"
                    placeholder={translate("placeholder.city")}
                  />

                  <input
                    className="form-control"
                    type="number"
                    placeholder={translate("placeholder.postal_code")}
                  />

                  <input
                    className="form-control"
                    type="text"
                    placeholder={translate("placeholder.country")}
                  />
                </FormGroup>

                <div className="text-end">
                  <button className="btn btn-primary" type="submit">
                    {translate("general.save_changes")}
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
