import { NavLink } from "react-router-dom";
import {
  Container,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  UncontrolledDropdown,
} from "reactstrap";
import { useTranslation } from "react-i18next";

// Motion for animation
import { motion } from "framer-motion";

// images
import images from "../../constants";

// css Style
import "./Navbar.css";

const navLinksEn = [
  { path: "home", display: "Home" },
  { path: "shop", display: "Shop" },
  { path: "cart", display: "Cart" },
];
const navLinksAr = [
  { path: "home", display: "الصفحة الرئيسية" },
  { path: "shop", display: "المتجر" },
  { path: "cart", display: "عربة التسوق" },
];

const Navbar = ({ isActiveToggle, setIsActiveToggle }) => {
  const [tranlate, i18n] = useTranslation();

  let navLinks = i18n.language === "en" ? navLinksEn : navLinksAr;

  const handleTranslations = (lang) => {
    if (lang === "ar") {
      i18n.changeLanguage("ar");
      document.documentElement.setAttribute("lang", "ar");
      document.documentElement.setAttribute("dir", "rtl");
    } else {
      i18n.changeLanguage("en");
      document.documentElement.setAttribute("lang", "en");
      document.documentElement.setAttribute("dir", "ltr");
    }
  };

  return (
    <nav className={`main__navbar  ${isActiveToggle ? "mobile__navbar" : ""}`}>
      <Container>
        {/* navigation */}
        <div className="navigation">
          {/* close btn [mobile] */}
          <span className="btn__close" onClick={() => setIsActiveToggle(false)}>
            <i className="ri-close-fill"></i> {tranlate("general.close")}
          </span>
          <ul className="menu">
            {navLinks.map((item, index) => (
              <li className="nav__item" key={index}>
                <NavLink
                  to={item.path}
                  className={(navClass) =>
                    navClass.isActive ? "navlink__active" : ""
                  }
                  onClick={() => setIsActiveToggle(false)}
                >
                  {item.display}
                </NavLink>
              </li>
            ))}
          </ul>

          {/* language - dropdwon */}
          <div className="lang-container">
            <UncontrolledDropdown>
              {i18n.language === "en" ? (
                <DropdownToggle className="lang-icon" tag="span">
                  <motion.img
                    whileTap={{ scale: 1.1 }}
                    src={images.en}
                    alt="English"
                  />

                  <span>English</span>
                </DropdownToggle>
              ) : (
                <DropdownToggle className="lang-icon" tag="span">
                  <motion.img
                    whileTap={{ scale: 1.1 }}
                    src={images.ar}
                    alt="Arabic"
                  />

                  <span>العربية</span>
                </DropdownToggle>
              )}

              {/* dropdown__menu */}
              <DropdownMenu className="dropdown__menu">
                <DropdownItem onClick={() => handleTranslations("ar")}>
                  <img src={images.ar} alt="العربية" />
                  <a href="#!">العربية</a>
                </DropdownItem>

                <DropdownItem onClick={() => handleTranslations("en")}>
                  <img src={images.en} alt="English" />
                  <a href="#!">English</a>
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </div>

          <div className="lang__btn__mobile">
            {i18n.language === "en" ? (
              <button
                className="btn btn-outline-primary"
                onClick={() => handleTranslations("ar")}
              >
                <motion.img
                  whileTap={{ scale: 1.1 }}
                  src={images.ar}
                  alt="Arabic"
                />

                <span>عربي</span>
              </button>
            ) : (
              <button
                className="btn btn-outline-primary"
                onClick={() => handleTranslations("en")}
              >
                <motion.img
                  whileTap={{ scale: 1.1 }}
                  src={images.en}
                  alt="English"
                />

                <span>English</span>
              </button>
            )}
          </div>
        </div>
      </Container>
    </nav>
  );
};

export default Navbar;
