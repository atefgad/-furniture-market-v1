import { Link } from "react-router-dom";
import { Container, Row } from "reactstrap";
import { Animated, Hemlet } from "../../components";

const Orders = () => {
  return (
    <Hemlet title="Orders">
      <Animated>
        <Container>
          <Row className="account__page__container">
            <div className="text-center">
              <p>
                <i className="ri-dropbox-fill fs-1"></i>
              </p>
              <p className="fs-1">No orders yet</p>
              <Link to="/shop" className="btn btn-primary btn-lg mt-3">
                make your first order
              </Link>
            </div>
          </Row>
        </Container>
      </Animated>
    </Hemlet>
  );
};

export default Orders;
