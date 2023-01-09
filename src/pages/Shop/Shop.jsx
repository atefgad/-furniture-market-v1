import React from "react";
import { useState } from "react";
import { Col, Container, Row, UncontrolledCollapse } from "reactstrap";
import { useTranslation } from "react-i18next";

import { Hemlet, CommonSection, Animated } from "../../components";

import productsData from "../../assets/data/products";

import Pagination from "./Pagination";
import { GetProducts } from "../../hooks/getProducts";

import "../../styles/Shop.css";

const Shop = () => {
  //products
  const [products, setProducts] = useState(productsData);
  // Collaps
  const [isActive, setActive] = useState(0);
  // Sidebar
  const [isVisibleSidebar, setIsVisibleSidebar] = useState(false);

  const [tranlate] = useTranslation();

  // handle filter for products by category
  const handleFilterChange = (e) => {
    const filterValue = e.target.value;

    if (filterValue === "sofa") {
      const data = productsData.filter((item) => item.category === "sofa");
      setProducts(data);
    }
    if (filterValue === "chair") {
      const data = productsData.filter((item) => item.category === "chair");
      setProducts(data);
    }
    if (filterValue === "decor") {
      const data = productsData.filter((item) => item.category === "decor");
      setProducts(data);
    }
    if (filterValue === "table") {
      const data = productsData.filter((item) => item.category === "table");
      setProducts(data);
    }
    if (filterValue === "default") {
      setProducts(productsData);
    }
  };

  // handle sort products
  const handleSort = (e) => {
    const sortValue = e.target.value;

    // if (sortValue === "popularity") {
    // }

    switch (sortValue) {
      case "popularity":
        setProducts(products);
        break;
      case "rating":
        const data2 = products.sort((a, b) => a.avgRating > b.avgRating);
        setProducts(data2);
        console.log("products", data2);
        break;
      default:
        break;
    }
  };

  // console.log("products", products);

  const WidgetAccordion = ({ name, togglerId, active, isOpen, children }) => (
    <div className="mb-4">
      <div className="widget__head" id={togglerId}>
        <span className="widget__head_text">{name}</span>
        <span className="widget__head_icon">
          <i className={`ri-arrow-${active ? "up" : "down"}-s-line`}></i>
        </span>
      </div>
      <div className="widget__content">
        <UncontrolledCollapse
          toggler={togglerId}
          defaultOpen={isOpen ? true : false}
        >
          {children}
        </UncontrolledCollapse>
      </div>
    </div>
  );

  const handleToggle = (id) => {
    if (isActive === id) {
      setActive(id);
    } else {
      setActive(0);
    }
  };

  const handleFormPrice = (e) => {
    e.preventDefault();
  };

  const getProducts = GetProducts(products);

  return (
    <Hemlet title={tranlate("general.shop_page_title")}>
      <CommonSection title={tranlate("general.shop_page_title")} />
      <Animated>
        <Container>
          <Row className="my-3">
            {/* sidebar */}
            <Col
              lg="3"
              md="12"
              className={`sidebar ${
                isVisibleSidebar ? "is_visible_sidebar" : ""
              }`}
              //onClick={() => setIsVisibleSidebar(!isVisibleSidebar)}
            >
              <div className="sidebar__content">
                <h4>{tranlate("general.filters")}</h4>
                <span
                  className="sidebar__hide_btn"
                  onClick={() => setIsVisibleSidebar(!isVisibleSidebar)}
                >
                  <i className="ri-close-line fs-2"></i>{" "}
                  {tranlate("general.close")}
                </span>
                <div className="sidebar__widget">
                  {/* WidgetAccordion Category*/}
                  <WidgetAccordion
                    name={tranlate("general.filter_category")}
                    togglerId="category"
                    isOpen
                    // active={isActive === 1 ? true : false}
                    // onClick={() => handleToggle(1)}
                  >
                    <ul className="widget__menu">
                      {["sofa", "chair", "table", "decor"].map((el, idx) => (
                        <label htmlFor={el} key={idx}>
                          <input type="checkbox" id={el} />
                          {el}
                        </label>
                      ))}
                    </ul>
                  </WidgetAccordion>

                  {/* WidgetAccordion Price*/}
                  <WidgetAccordion
                    name={tranlate("general.filter_price")}
                    togglerId="price"
                    isOpen
                  >
                    <form
                      className="widget__form__price"
                      onSubmit={handleFormPrice}
                    >
                      <input type="number" min="20" defaultValue={20} />
                      <span>{tranlate("general.filters_to")}</span>
                      <input
                        type="number"
                        min="20"
                        max="11990"
                        defaultValue={11990}
                      />
                      <button type="submit" className="btn btn-primary">
                        {tranlate("general.filters_btn")}
                      </button>
                    </form>
                  </WidgetAccordion>

                  {/* WidgetAccordion Colors*/}
                  <WidgetAccordion
                    name={tranlate("general.filter_color")}
                    togglerId="colors"
                    isOpen
                    // active={isActive === 2 ? true : false}
                    // onClick={() => handleToggle(2)}
                  >
                    <ul className="widget__menu_colors">
                      {["green", "blue", "yellow", "gray", "black", "gold"].map(
                        (el, idx) => (
                          <label htmlFor={el} key={idx}>
                            <input type="checkbox" id={el} />
                            <span style={{ backgroundColor: el }}></span>
                            <small>{el}</small>

                            <i className="ri-check-line"></i>
                          </label>
                        )
                      )}
                    </ul>
                  </WidgetAccordion>
                </div>
              </div>
            </Col>

            {/* page content */}
            <Col lg="9" md="12" className="shop__page_conent">
              <Row className="justify-content-center">
                {/* page control__bar */}
                <Col md="12">
                  <div className="shop__control__bar">
                    {/* filter__toggle */}
                    <div className="filter__toggle">
                      <button
                        className="btn sidebar__toggler__btn"
                        onClick={() => setIsVisibleSidebar(!isVisibleSidebar)}
                      >
                        <i className="ri-menu-3-fill"></i>{" "}
                        {tranlate("general.filters")}
                      </button>
                    </div>

                    {/* filter__widget */}
                    <div className="filter__widget sort__cat">
                      <select onChange={handleFilterChange}>
                        <option value="default">filter By category </option>
                        <option value="sofa">sofa</option>
                        <option value="chair">chair</option>
                        <option value="decor">decor</option>
                        <option value="table">table</option>
                      </select>
                    </div>

                    {/* filter__widget */}
                    <div className="filter__widget">
                      <select onChange={handleSort}>
                        <option defaultValue="default_sorting">
                          Default sorting{" "}
                        </option>
                        <option value="popularity">Sort by popularity</option>
                        <option value="rating">Sort by average rating</option>
                        <option value="date">Sort by latest</option>
                        <option value="price">
                          Sort by price: low to high
                        </option>
                        <option value="price_desc">
                          Sort by price: high to low
                        </option>
                      </select>
                    </div>

                    {/* pagination */}
                    <nav className="advanced__pagination">
                      <a href="#!" className="prev page__numbers">
                        <i className="ri-arrow-left-s-line"></i>
                      </a>
                      <span>
                        <input
                          size="2"
                          min="1"
                          max="20"
                          step="1"
                          type="text"
                          className="form-control"
                          defaultValue="1"
                        />
                      </span>
                      of <b> 3 </b>
                      <a href="#!" className="next  page__numbers">
                        <i className="ri-arrow-right-s-line"></i>
                      </a>
                    </nav>
                  </div>
                </Col>
                {/* Products */}
                {getProducts.length > 0 ? (
                  <Pagination data={getProducts} />
                ) : (
                  <div className="mt-5">
                    <h2>No Products are found</h2>
                  </div>
                )}
              </Row>
            </Col>
          </Row>
        </Container>
      </Animated>
    </Hemlet>
  );
};

export default Shop;
