import React from "react";
import { Col } from "reactstrap";
import { GetProductsByCat } from "../../../hooks/getProducts";
import ScrollAnimation from "../../utility/ScrollAnimation/ScrollAnimation";

import ProductCard from "../ProductCard/ProductCard";

const ProductsList = (props) => {
  const [items] = GetProductsByCat(props.category);
  const products = items.slice(0, 4);

  return (
    <>
      {products.length > 0 ? (
        products?.map((item, index) => (
          <Col key={index} {...props}>
            <ScrollAnimation
              animate="fade-up"
              duration="200"
              delay={200 + index * 100}
            >
              <ProductCard item={item} />
            </ScrollAnimation>
          </Col>
        ))
      ) : (
        <div className="text-center fs-3">
          Thre are on <b>Products</b> to show!
        </div>
      )}
    </>
  );
};

export default ProductsList;
