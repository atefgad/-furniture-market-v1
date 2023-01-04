import { NavLink, Outlet } from "react-router-dom";
import { Col, Container, Row } from "reactstrap";
import { Toaster } from "react-hot-toast";
import { Footer, Header, Hemlet, Modal } from "../../components";

import "../../styles/Account.css";

const links = [
  { path: "/account/orders", display: "My orders" },
  { path: "/account/wishlist", display: "My wishlist" },
  { path: "/account/addresses", display: "My addresses" },
  { path: "/account/profile", display: "Profile" },
];

const Account = () => {
  // if (location.pathname === "/account") {
  //   navigate("/account/orders");
  // }
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
