import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  AccordionBody,
  AccordionHeader,
  AccordionItem,
  Container,
  Row,
  UncontrolledAccordion,
} from "reactstrap";
import { Animated, Hemlet } from "../../../components";
import { db } from "../../../firebase.config";
import useAuth from "../../../hooks/useAuth";
import Order from "./Order";

const Orders = () => {
  const [orders, setOrders] = useState([]);
  const { user } = useAuth();

  useEffect(() => {
    if (user) {
      const collRef = collection(db, "users", user?.uid, "orders");
      const orderedRef = query(collRef, orderBy("created", "desc"));

      onSnapshot(orderedRef, (querySnapshot) => {
        setOrders(
          querySnapshot.docs.map((doc) => ({ id: doc.id, data: doc.data() }))
        );
      });
    } else {
      setOrders([]);
    }
  }, [user]);

  return (
    <Hemlet title="Orders">
      <Animated>
        <Container>
          <h4>Orders:</h4>
          {orders.length > 0 && (
            <p>
              <span className="fw-600">{orders.length} orders</span> placed in
              past months
            </p>
          )}

          <Row className="account__page__container mt-3">
            <UncontrolledAccordion defaultOpen="1">
              {orders.length > 0 ? (
                orders.map((orderItem) => <Order order={orderItem} />)
              ) : (
                <div className="text-center">
                  <p>
                    <i className="ri-dropbox-fill fs-1"></i>
                  </p>
                  <p className="fs-1">No orders yet</p>
                  <Link to="/shop" className="btn btn-primary btn-lg mt-3">
                    make your first order
                  </Link>
                </div>
              )}
            </UncontrolledAccordion>
          </Row>
        </Container>
      </Animated>
    </Hemlet>
  );
};

export default Orders;
