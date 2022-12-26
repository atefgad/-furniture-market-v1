import { NavLink, Outlet, useNavigate, useLocation } from "react-router-dom";
import { Col, Container, Row } from "reactstrap";
import { Toaster } from "react-hot-toast";
import { Footer, Header, Hemlet, Modal } from "../../components";
import useAuth from "../../hooks/useAuth";

import "../../styles/Account.css";

const links = [
  { path: "/account/orders", display: "My orders" },
  { path: "/account/wishlist", display: "My wishlist" },
  { path: "/account/addresses", display: "My addresses" },
  { path: "/account/profile", display: "Profile" },
];

const Account = () => {
  const { user, logout } = useAuth();

  let location = useLocation();
  const navigate = useNavigate();

  if (location.pathname === "/account") {
    navigate("/account/orders");
  }
  return (
    <Hemlet title="Account">
      <Header />
      <section className="account__content">
        <Container>
          <Row>
            {/* NavTabMenu */}
            <Col lg="3">
              <div className="wrapper__tab_content card">
                <h3 className="tab__title">Account Dashboard</h3>
                <div className="nav_tab_menu">
                  {links.map((el, idx) => (
                    <NavLink
                      end
                      key={idx}
                      to={el.path}
                      className={(navClass) =>
                        navClass.isActive ? "link_active" : ""
                      }
                    >
                      {el.display}
                    </NavLink>
                  ))}
                </div>
              </div>
            </Col>

            <Col lg="9">
              <Row>
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
                    <button className="btn btn-primary d-flex" onClick={logout}>
                      <i className="ri-logout-circle-line me-1"></i>
                      Logout
                    </button>
                  </div>
                </Col>
                {/* Content (Outlet) */}
                <Col lg="12">
                  <Outlet />
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </section>

      <Toaster position="top-left" reverseOrder={false} />
      <Modal />
      <Footer />
    </Hemlet>
  );
};

export default Account;
