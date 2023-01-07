import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

import productsDatd from "../../assets/data/products";

const Search = ({ toggle, setToggle }) => {
  const [tranlate, i18n] = useTranslation();
  const [searchData, setSearchData] = useState([]);
  const searchRef = useRef(null);

  const handleSearch = () => {
    const term = searchRef.current.value;
    if (term !== "") {
      const searchFiltered = productsDatd.filter((product) =>
        product.productName.toLowerCase().includes(term.toLowerCase())
      );
      setSearchData(searchFiltered.slice(0, 8));
    } else {
      setSearchData([]);
    }
  };

  return (
    <div className={`search ${toggle ? "active" : ""}`}>
      {/* search bar */}
      <button
        className="btn search__toggle__close"
        onClick={() => setToggle(!toggle)}
      >
        <i className="ri-close-line me-1"></i> {tranlate("general.close")}
      </button>
      <div className="search__warpper">
        <div className="wrrapper__content">
          <input
            type="text"
            className="search__input form-control"
            ref={searchRef}
            autoFocus
            placeholder={tranlate("placeholder.search")}
            onChange={handleSearch}
          />
          <span className="search__icon">
            <i className="ri-search-2-line"></i>
          </span>
        </div>

        {/** *search resulte* **/}
        {searchData.length > 0 ? (
          <div className="search__resulte__content  p-3 shadow">
            <div className="search__resultes">
              {searchData.map((el, idx) => (
                <div className="search__resulte__item" key={idx}>
                  <div className="search__resulte__item__container">
                    <div className="img__container">
                      <img src={el.imgUrl} alt={el.productName} />
                    </div>
                    <div className="item__desc">
                      <Link
                        to={`/shop/${el.id}`}
                        onClick={() => setToggle(!toggle)}
                      >
                        {el.productName}
                      </Link>
                      <p>{el.shortDesc.substr(0, 25)}</p>
                    </div>
                  </div>
                  <Link
                    to={`/shop/${el.id}`}
                    className="btn btn-primary"
                    onClick={() => setToggle(!toggle)}
                  >
                    view details
                  </Link>
                </div>
              ))}
            </div>
          </div>
        ) : null}
        {/* 
        
        
        <div className="search__resulte__content text-center p-5 shadow">
            <h6>
              There are no <b>search resultes!</b>
            </h6>
          </div>
        */}
      </div>
    </div>
  );
};

export default Search;
