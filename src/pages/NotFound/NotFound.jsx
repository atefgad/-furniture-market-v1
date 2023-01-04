import React from "react";
import { Link } from "react-router-dom";

import "../../styles/NotFound.css";

const NotFound = () => {
  return (
    <div className="page404">
      <div className="text">
        <h2>Sorry, page not found!</h2>
        <p>
          Sorry, we couldn’t find the page you’re looking for. Perhaps you’ve
          mistyped the URL? Be sure to check your spelling.
        </p>
      </div>
      <div className="wrapper_404">
        <div class="text_top">404</div>
        <div class="text_bottom" aria-hidden="true">
          404
        </div>
      </div>
      <div className="bottom mt-2">
        <Link to="/" className="btn btn-lg btn-primary rounded-0">
          Back to Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
