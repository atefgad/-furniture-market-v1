import React from "react";
import { Link } from "react-router-dom";
import { Col, Container, Row } from "reactstrap";
import useAuth from "../../hooks/useAuth";
import images from "../../constants";
import ReviewForm from "./ReviewForm";

const ProductReview = ({ reviews, productName }) => {
  const { user } = useAuth();
  return (
    <div className="review__wrapper">
      <Container>
        <Row>
          {/* Comments */}
          <Col lg="6" md="12">
            {reviews?.length > 0 ? (
              <div className="comments">
                <h4>
                  {reviews.length} Review For{" "}
                  <span className="text-primary">
                    {productName.substr(0, 15)}...
                  </span>
                </h4>
                {reviews?.map((item, index) => (
                  <div className="review__item" key={index}>
                    <div className="review__user_icon">
                      <img src={images.userIcon} alt={item.text} />
                    </div>
                    <div>
                      <h6>atef gad</h6>
                      <span className="rating__star">
                        <i className="ri-star-fill"></i>
                        {/* <i className="ri-star-line"></i> */}
                      </span>
                      <span>{item.rating}</span>
                      <p>{item.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="comments">
                <h4>Reviews</h4>
                <p className="fs-4">there are no Reviews yet!</p>
              </div>
            )}
          </Col>
          <Col lg="6" md="12">
            <div className="review__form">
              <h3 className="mb-3">add a review</h3>
              {!user ? (
                <p className="fs-6">
                  <Link to="/login">
                    <b>Login </b>
                  </Link>
                  to write your review
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
