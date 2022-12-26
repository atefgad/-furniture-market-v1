import { useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import {
  Container,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Row,
  UncontrolledDropdown,
} from "reactstrap";

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

const Header = () => {
  const [isActiveToggle, setIsActiveToggle] = useState(false);
  const [searchToggle, setSearchToggle] = useState(false);
  const headerRef = useRef(null);
  //const searchRef = useRef(null);

  const navigate = useNavigate();

  const navigateToCart = () => {
    navigate("/cart");
  };
  // const toggleSearch = () => { searchRef.current.classList.toggle('search')}

  const { user, logout } = useAuth();

  const { cartItems } = useSelector((state) => state.cart);

  /*
  const stickyHeader = () => {
    window.addEventListener("scroll", () => {
      if (
        document.body.scrollTop > 350 ||
        document.documentElement.scrollTop > 350
      ) {
        headerRef.current.classList.add("sticky__header");
      } else {
        headerRef.current.classList.remove("sticky__header");
      }
    });
  };

  useEffect(() => {
    stickyHeader();

    return () => window.removeEventListener("scroll", stickyHeader);
  });
*/

  return (
    <header className="header" ref={headerRef}>
      <div className="top__header">
        <Container>
          <Row>
            <div className="nav__wrapper">
              {/* logo */}
              <div className="logo">
                <img src={images.logo} alt="logo" />
                <div>
                  <h1>
                    Multi <span className="main__color">Mart</span>
                  </h1>
                  <p>Furniture Store</p>
                </div>
              </div>
              {/* search bar */}
              <div
                className={`search-bar__warpper ${
                  searchToggle ? "is_visible" : ""
                }`}
              >
                <div className="wrrapper__content">
                  <input
                    type="text"
                    className="search-bar__input form-control"
                  />
                  <button
                    type="button"
                    className="search-bar__button btn btn-primary"
                  >
                    <i className="ri-search-2-line"></i>
                  </button>
                </div>
              </div>

              {/* nav icons */}
              <div className="nav__icons">
                <span
                  className="mobile__menu"
                  onClick={() => setSearchToggle(!searchToggle)}
                >
                  <i className="ri-search-2-line"></i>
                </span>

                <span className="fav__icon">
                  <i className="ri-heart-2-line"></i>
                  <span className="badge">2</span>
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
                      <DropdownItem onClick={logout}>
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
      <Navbar
        isActiveToggle={isActiveToggle}
        setIsActiveToggle={setIsActiveToggle}
      />
    </header>
  );
};

export default Header;
