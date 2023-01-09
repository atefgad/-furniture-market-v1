import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { Container, Row } from "reactstrap";
import { Animated, Hemlet } from "../../components";

const Wishlist = () => {
  const [tranlate, i18n] = useTranslation();
  return (
    <Hemlet title="Wishlist">
      <Animated>
        <Container>
          <Row className="account__page__container">
            <h4>{tranlate("account.wishlist")} </h4>
            <div className="text-center">
              <p>
                <i className="ri-heart-add-line fs-1"></i>
              </p>
              <p className="fs-3">
                {tranlate("account.no_orders_added_to_wishlist")}
              </p>
              <Link to="/shop" className="btn btn-primary mt-3">
                {tranlate("general.add_now")}
              </Link>
            </div>
          </Row>
        </Container>
      </Animated>
    </Hemlet>
  );
};

export default Wishlist;
