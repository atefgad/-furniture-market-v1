import { useTranslation } from "react-i18next";
import { Col } from "reactstrap";
import { GetProductsByCat } from "../../../hooks/getProducts";
import ScrollAnimation from "../../utility/ScrollAnimation/ScrollAnimation";

import ProductCard from "../ProductCard/ProductCard";

const ProductsList = (props) => {
  const [items] = GetProductsByCat(props.category);
  const [translate, i18n] = useTranslation();

  const products = items.slice(0, 4);

  // const products = GetProducts(items);

  let newProducts = products.map((product) => {
    if (i18n.language === "ar") {
      return {
        ...product,
        productName: product.productName_ar,
        category: product.category_ar,
        shortDesc: product.shortDesc_ar,
        description: product.description_ar,
      };
    } else {
      return product;
    }
  });

  return (
    <>
      {newProducts.length > 0 ? (
        newProducts?.map((item, index) => (
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
