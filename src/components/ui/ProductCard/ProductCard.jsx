import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
// Motion
import { motion } from "framer-motion";
//Css Style
import "../../../styles/ProductCard.css";
import { addToCart } from "../../../store/slices/cartSlice";
import toast from "react-hot-toast";
import { useTranslation } from "react-i18next";

const ProductCard = ({ item }) => {
  // generate random colors form the array
  let colors = ["#fdefe6", "#d6e5fb", "#ceebe9", "#e2f2b2"];
  const getBgColor = colors[Math.floor(Math.random() * colors.length)];

  // useDispatch
  const dispatch = useDispatch();

  const [translate] = useTranslation();

  // create a new item
  const handleAddToCart = (item) => {
    dispatch(
      // create a new item
      addToCart(item)
    );

    // alert("product added to the cart! :)");

    toast.success(translate("product.added_to_cart_msg"), { duration: 3000 });
  };

  return (
    <div className="product__card__item">
      <div className="product__card__img">
        <Link to={`/shop/${item.id}`}>
          <img src={item.imgUrl} alt={item.productName} />
        </Link>
        <div
          className="shape__card__bg"
          style={{ backgroundColor: getBgColor }}
        ></div>
        <span className="addFavBtn" title="add to cart">
          <i className="ri-heart-line"></i>
        </span>
      </div>
      <div className="product__card__info p-2">
        <h4 className="p__name">
          <Link to={`/shop/${item.id}`}>
            {
              /*item.productName.length > 20
              ? item.productName.substr(0, 20) + "..."
              : item.productName*/
              item.productName
            }
          </Link>
        </h4>
        <span className="d-block">{item.category}</span>
      </div>
      <div className="product__card__bottom d-flex align-items-center justify-content-between p-2">
        <span className="price">${item.price}</span>
        <motion.span
          whileTap={{ scale: 2 }}
          className="addCartBtn"
          title="add to cart"
          onClick={() =>
            handleAddToCart({
              id: item.id,
              productName: item.productName,
              category: item.category,
              imgUrl: item.imgUrl,
              price: item.price,
              quantity: 1,
            })
          }
        >
          <i className="ri-add-line"></i>
        </motion.span>
      </div>
    </div>
  );
};

export default ProductCard;
