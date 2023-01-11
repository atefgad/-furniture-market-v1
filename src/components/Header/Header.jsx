import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  Container,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Row,
  UncontrolledDropdown,
} from "reactstrap";

import { logout as LOGOUT } from "../../store/slices/userSlice.js";

// Motion for animation
import { motion } from "framer-motion";
// Navbar
import { Navbar } from "../../components";
// images
import images from "../../constants";
// Css Styles
import "./Header.css";

// Firebase
import useAuth from "../../hooks/useAuth";

import Search from "./Search";
import { toast } from "react-hot-toast";
import { useTranslation } from "react-i18next";

const Header = () => {
  const [searchToggle, setSearchToggle] = useState(false);
  const [isActiveToggle, setIsActiveToggle] = useState(false);

  const [scrolled, setScrolled] = useState(false);

  const [tranlate] = useTranslation();

  const { user, logout } = useAuth();
  const { cartItems } = useSelector((state) => state.cart);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const navigateToCart = () => {
    navigate("/cart");
  };
  const handleLogout = () => {
    dispatch(LOGOUT());
    logout();
    toast.success(tranlate("general.logout_msg"));
    navigate("/home");
  };

  const stickyHeader = () => {
    const offset = window.scrollY;
    if (offset > 350) {
      setScrolled(true);
      //headerRef.current.classList.add("sticky__header");
    } else {
      setScrolled(false);
      //headerRef.current.classList.remove("sticky__header");
    }
  };

  useEffect(() => {
    //stickyHeader();

    window.addEventListener("scroll", stickyHeader);

    //return () => window.removeEventListener("scroll", stickyHeader);
  }, []);

  return (
    <header className={`header ${scrolled ? "sticky__header" : ""}`}>
      <div className="top__header">
        <Container>
          <Row>
            <div className="nav__wrapper">
              {/* logo */}
              <div className="logo">
                <Link to="/">
                  <img src={images.logo} alt="logo" />
                  <div>
                    <h1>
                      M2<span className="main__color">Market</span>
                    </h1>
                    <p>{tranlate("sub_title")}</p>
                  </div>
                </Link>
              </div>

              {/* nav icons */}
              <div className="nav__icons">
                <span
                  className="search__toggle"
                  onClick={() => setSearchToggle(!searchToggle)}
                >
                  <i className="ri-search-2-line"></i>
                </span>

                <span className="fav__icon">
                  <i className="ri-heart-2-line"></i>
                  {/* <span className="badge">2</span> */}
                </span>

                <span className="cart__icon" onClick={navigateToCart}>
                  <i className="ri-shopping-cart-line"></i>
                  {cartItems.length > 0 ? (
                    <span className="badge">{cartItems.length}</span>
                  ) : null}
                </span>

                {/* user icon - dropdwon */}
                <UncontrolledDropdown className="user__container">
                  <DropdownToggle className="user__icon" caret>
                    <div className="user__info mx-1">
                      {user !== null ? (
                        <p className="user__caption">
                          {tranlate("general.hello")}{" "}
                          <strong className="text-primary">
                            {user.displayName}
                          </strong>
                        </p>
                      ) : (
                        <p className="user__caption">
                          {tranlate("general.login_register")}
                        </p>
                      )}
                      <b className="user__text">
                        {tranlate("general.my_account")}{" "}
                      </b>
                    </div>
                    <motion.img
                      whileHover={{ scale: 1.2 }}
                      src={
                        user && user.photoURL !== null
                          ? user.photoURL
                          : images.userIcon
                      }
                      alt="user"
                    />
                  </DropdownToggle>
                  {/* dropdown__menu */}

                  {user ? (
                    <DropdownMenu className="dropdown__menu">
                      <DropdownItem>
                        <Link to="/account/profile">
                          {tranlate("general.my_profile")}
                        </Link>
                      </DropdownItem>
                      <DropdownItem>
                        <Link to="/account/orders">
                          {" "}
                          {tranlate("general.my_orders")}
                        </Link>
                      </DropdownItem>
                      <DropdownItem>
                        <Link to="/account/addresses">
                          {" "}
                          {tranlate("general.my_addresses")}
                        </Link>
                      </DropdownItem>
                      <DropdownItem divider />
                      <DropdownItem onClick={handleLogout}>
                        <i className="ri-logout-circle-line"></i>{" "}
                        {tranlate("general.logout")}
                      </DropdownItem>
                    </DropdownMenu>
                  ) : (
                    <DropdownMenu className="dropdown__menu">
                      <DropdownItem>
                        <i className="ri-login-circle-line"></i>
                        <Link to="/login">{tranlate("general.login")}</Link>
                      </DropdownItem>
                      <DropdownItem divider />
                      <DropdownItem>
                        <i className="ri-user-received-line"></i>

                        <Link to="/signup">
                          {tranlate("general.signup_new")}
                        </Link>
                      </DropdownItem>
                    </DropdownMenu>
                  )}
                </UncontrolledDropdown>

                <span
                  className="mobile__menu"
                  onClick={() => setIsActiveToggle(!isActiveToggle)}
                >
                  <i className="ri-menu-3-fill"></i>
                </span>
              </div>
            </div>
          </Row>
        </Container>
      </div>

      {/* Navbar */}
      <Search toggle={searchToggle} setToggle={setSearchToggle} />
      {/* Navbar */}
      <Navbar
        isActiveToggle={isActiveToggle}
        setIsActiveToggle={setIsActiveToggle}
      />
    </header>
  );
};

export default Header;
