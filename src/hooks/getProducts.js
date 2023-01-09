import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import productsData from "../assets/data/products";

export const GetAllProducts = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setProducts(productsData);
  }, [products]);

  return [products];
};

export const GetProducts = (products) => {
  // const [products, setProducts] = useState([]);
  const [tranlate, i18n] = useTranslation();

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

  // useEffect(() => {
  //   setProducts(newProducts);
  // }, [newProducts]);

  return newProducts;
};

export const GetProductsByCat = (cat) => {
  const [products, setProducts] = useState(productsData);
  const [tranlate, i18n] = useTranslation();

  useEffect(() => {
    const filteredProducts = productsData.filter(
      (item) => item.category === cat
    );

    setProducts(filteredProducts);
  }, [cat]);

  return [products];
};
