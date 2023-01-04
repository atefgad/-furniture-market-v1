import { Link } from "react-router-dom";
import { Container, Row } from "reactstrap";
import { Animated, Hemlet } from "../../components";

const Wishlist = () => {
  return (
    <Hemlet title="Wishlist">
      <Animated>
        <Container>
          <Row className="account__page__container">
            <h4>Wishlist </h4>
            <div className="text-center">
              <p>
                <i className="ri-heart-add-line fs-1"></i>
              </p>
              <p className="fs-3">No orders added to Wishlist </p>
              <Link to="/shop" className="btn btn-primary mt-3">
                add now
              </Link>
            </div>
          </Row>
        </Container>
      </Animated>
    </Hemlet>
  );
};

export default Wishlist;
