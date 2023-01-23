import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { Col } from "reactstrap";
import ScrollAnimation from "../../utility/ScrollAnimation/ScrollAnimation";

import ProductCard from "../ProductCard/ProductCard";

const ProductsList = (props) => {
  const { products } = useSelector((state) => state.products);
  const [translate, i18n] = useTranslation();

  const filteredProductsByCategory = products.filter(
    (item) => item.category === props.category
  );

  let newProducts = filteredProductsByCategory.slice(0, 4).map((product) => {
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
        <div className="text-center fs-3 p-5 text-danger">
          {translate("general.no_products_to_show")}
        </div>
      )}
    </>
  );
};

export default ProductsList;
