import { NavLink, Outlet } from "react-router-dom";
import { Col, Container, Row } from "reactstrap";
import { Toaster } from "react-hot-toast";
import { useTranslation } from "react-i18next";
import { Footer, Header, Hemlet, Modal } from "../../components";

import "../../styles/Account.css";

const linksEn = [
  { path: "/account/orders", display: "My orders" },
  { path: "/account/wishlist", display: "My wishlist" },
  { path: "/account/addresses", display: "My addresses" },
  { path: "/account/profile", display: "Profile" },
];

const LinksAr = [
  { path: "/account/orders", display: "مشترياتى" },
  { path: "/account/wishlist", display: "المفضلة" },
  { path: "/account/addresses", display: "عناويني" },
  { path: "/account/profile", display: "حسابى" },
];

const Account = () => {
  const [tranlate, i18n] = useTranslation();

  let links = i18n.language === "en" ? linksEn : LinksAr;
  return (
    <Hemlet title={tranlate("account.title")}>
      <Header />
      <section className="account__content">
        <Container>
          <Row>
            {/* NavTabMenu */}
            <Col lg="3">
              <div className="wrapper__tab_content card">
                <h3 className="tab__title">{tranlate("account.nav_title")}</h3>
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
