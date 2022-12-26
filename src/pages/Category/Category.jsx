import { Col, Container, Row } from "reactstrap";
import { Hemlet, CommonSection, Animated, ProductCard } from "../../components";

import productsData from "../../assets/data/products";

import "../../styles/Category.css";
import { useParams } from "react-router-dom";
import { GetProductsByCat } from "../../hooks/getProducts";

const Category = () => {
  const { category } = useParams();
  //products
  const [items] = GetProductsByCat(category);
  const products = items.filter((item) => item.category === category);

  console.log("products", items);
  return (
    <Hemlet title="Category">
      <CommonSection title={`category: ${category}`} />
      <Animated>
        <Container>
          <Row className="my-3">
            {/* page content */}
            <Col lg="9" md="12" className="shop__page_conent m-auto">
              <Row className="justify-content-sm-center">
                {/* Products */}
                {products.map((item) => (
                  <Col lg="4" md="6" key={item.id}>
                    <ProductCard item={item} />
                  </Col>
                ))}
              </Row>
            </Col>
          </Row>
        </Container>
      </Animated>
    </Hemlet>
  );
};

export default Category;
