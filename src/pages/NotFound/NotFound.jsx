import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

import "../../styles/NotFound.css";

const NotFound = () => {
  const [translate, i18n] = useTranslation();

  return (
    <div className="page404">
      <div className="text">
        <h2>{translate("notFound.404_title")}</h2>
        <p>{translate("notFound.404_desc")}</p>
      </div>
      <div className="wrapper_404">
        <div class="text_top">404</div>
        <div class="text_bottom" aria-hidden="true">
          404
        </div>
      </div>
      <div className="bottom mt-2">
        <Link to="/" className="btn btn-lg btn-primary rounded-0">
          {translate("notFound.404_button")}
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
