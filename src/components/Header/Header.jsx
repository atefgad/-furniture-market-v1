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

  const [tranlate, i18n] = useTranslation();

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
    toast.success("logged out successfully");
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
                    <p>Furniture Store</p>
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

                {/* language - dropdwon 
                <div className="lang-container">
                  <UncontrolledDropdown>
                    <DropdownToggle className="lang-icon" tag="a">
                      <motion.img
                        whileTap={{ scale: 1.1 }}
                        src={images.en}
                        alt="language"
                      />

                      <span>En</span>
                    </DropdownToggle>
                    {/* dropdown__menu 
                    <DropdownMenu className="dropdown__menu">
                      <DropdownItem>
                        <img src={images.en} alt="German" />
                        <a href="#!">German</a>
                      </DropdownItem>

                      <DropdownItem>
                        <img src={images.en} alt="French" />
                        <a href="#!">French</a>
                      </DropdownItem>
                    </DropdownMenu>
                  </UncontrolledDropdown>
                </div>
                */}

                {/* user icon - dropdwon */}
                <UncontrolledDropdown className="user__container">
                  <DropdownToggle className="user__icon" caret>
                    <div className="user__info me-2">
                      {user !== null ? (
                        <p className="user__caption">
                          Hello{" "}
                          <strong className="text-primary">
                            {user.displayName}
                          </strong>
                        </p>
                      ) : (
                        <p className="user__caption">login/register</p>
                      )}
                      <b className="user__text">My Account </b>
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
                        <Link to="/account/profile"> My profile</Link>
                      </DropdownItem>
                      <DropdownItem>
                        <Link to="/account"> My Orders</Link>
                      </DropdownItem>
                      <DropdownItem>
                        <Link to="/account/addresses"> My Addresses</Link>
                      </DropdownItem>
                      <DropdownItem divider />
                      <DropdownItem onClick={handleLogout}>
                        <i className="ri-logout-circle-line"></i> Logout
                      </DropdownItem>
                    </DropdownMenu>
                  ) : (
                    <DropdownMenu className="dropdown__menu">
                      <DropdownItem>
                        <i className="ri-login-circle-line"></i>
                        <Link to="/login">Login</Link>
                      </DropdownItem>
                      <DropdownItem divider />
                      <DropdownItem>
                        <i className="ri-user-received-line"></i>

                        <Link to="/signup">Signup</Link>
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
