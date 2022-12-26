import { NavLink } from "react-router-dom";
import { Container, Row } from "reactstrap";

// css Style
import "./Navbar.css";

const Navbar = ({ isActiveToggle, setIsActiveToggle }) => {
  const navLinks = [
    { path: "home", display: "Home" },
    { path: "shop", display: "Shop" },
    { path: "cart", display: "Cart" },
  ];

  return (
    <nav
      className={`main__navbar  ${isActiveToggle ? "mobile__navbar" : ""}`}
      onClick={() => setIsActiveToggle(!isActiveToggle)}
    >
      <Container>
        <Row>
          {/* navigation */}
          <div className="navigation">
            <ul className="menu">
              {/* <span className="btn__close">
                <i className="ri-close-fill"></i>
              </span> */}
              {navLinks.map((item, index) => (
                <li className="nav__item" key={index}>
                  <NavLink
                    to={item.path}
                    className={(navClass) =>
                      navClass.isActive ? "navlink__active" : ""
                    }
                  >
                    {item.display}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
        </Row>
      </Container>
    </nav>
  );
};

export default Navbar;
