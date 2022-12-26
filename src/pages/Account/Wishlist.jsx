import { Container, Row } from "reactstrap";
import { Animated, Hemlet } from "../../components";

const Wishlist = () => {
  return (
    <Hemlet title="Wishlist">
      <Animated>
        <Container>
          <Row className="account__page__container">
            <h4>Wishlist </h4>
          </Row>
        </Container>
      </Animated>
    </Hemlet>
  );
};

export default Wishlist;
