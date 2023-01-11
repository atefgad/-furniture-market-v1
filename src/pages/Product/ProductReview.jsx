import React from "react";
import { Link } from "react-router-dom";
import { Col, Container, Row } from "reactstrap";
import useAuth from "../../hooks/useAuth";
import images from "../../constants";
import ReviewForm from "./ReviewForm";
import { useTranslation } from "react-i18next";

const ProductReview = ({ reviews, productName, lang }) => {
  const { user } = useAuth();
  const [translate] = useTranslation();
  return (
    <div className="review__wrapper">
      <Container>
        <Row>
          {/* Comments */}
          <Col lg="6" md="12">
            {reviews?.length > 0 ? (
              <div className="comments">
                <h4>
                  {reviews.length} {translate("product.review_for")}{" "}
                  <span className="text-primary">
                    {productName.length > 15
                      ? productName.substr(0, 20) + "..."
                      : productName}
                  </span>
                </h4>
                {reviews?.map((item, index) => (
                  <div className="review__item" key={index}>
                    <div className="review__user_icon">
                      <img
                        src={images.userIcon}
                        alt={lang ? item.text_ar : item.text}
                      />
                    </div>
                    <div>
                      <h6>atef gad</h6>
                      <span className="rating__star">
                        <i className="ri-star-fill"></i>
                        {/* <i className="ri-star-line"></i> */}
                      </span>
                      <span>{item.rating}</span>
                      <p>{lang ? item.text_ar : item.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="comments">
                <h4>{translate("product.reviews")}</h4>
                <p className="fs-4">
                  {translate("product.there_are_no_reviews_yet")}
                </p>
              </div>
            )}
          </Col>
          <Col lg="6" md="12">
            <div className="review__form">
              <h3 className="mb-3">{translate("product.add_a_review")}</h3>
              {!user ? (
                <p className="fs-6">
                  <Link to="/login">
                    <b>{translate("product.login")}</b>
                  </Link>
                  {translate("product.to_write_your_review")}
                </p>
              ) : (
                <ReviewForm />
              )}
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ProductReview;
