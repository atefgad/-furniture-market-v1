import { useState, useEffect } from "react";
import productsData from "../assets/data/products";

export const GetAllProducts = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setProducts(productsData);
  }, [products]);

  return [products];
};

export const GetProductsByCat = (cat) => {
  const [products, setProducts] = useState(productsData);

  useEffect(() => {
    const filteredProducts = productsData.filter(
      (item) => item.category === cat
    );

    setProducts(filteredProducts);
  }, [cat]);

  return [products];
};
