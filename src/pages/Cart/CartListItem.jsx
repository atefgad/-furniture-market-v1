import { useDispatch, useSelector } from "react-redux";
import { motion } from "framer-motion";

import { Link } from "react-router-dom";
import {
  decreaseQty,
  increaseQty,
  removeFromCart,
} from "../../store/slices/cartSlice";
import toast from "react-hot-toast";
import { useTranslation } from "react-i18next";

const CartListItem = ({ cartItem }) => {
  const [translate] = useTranslation();

  const dispatch = useDispatch();

  const handleRemove = (cartItem) => {
    dispatch(removeFromCart(cartItem));
    toast.success(translate("general.remove_cart_item_msg"));
  };
  return (
    <div className="cart__item">
      <div className="cart__item__img">
        <Link to={`/shop/${cartItem.id}`}>
          <img src={cartItem.imgUrl} alt={cartItem.productName} />
        </Link>
      </div>
      <div className="cart__item__desc__wrapper">
        <div className="cart__item__desc">
          <div className="cart__item__title">
            <Link to={`/shop/${cartItem.id}`}>{cartItem.productName}</Link>
            <p>{cartItem.category}</p>
          </div>
        </div>
        <div className="cart__item__controls">
          <div className="qty">
            <motion.button
              whileHover={{ scale: 1.1 }}
              className="btn btn-primary"
              onClick={() => dispatch(decreaseQty(cartItem))}
            >
              <i className="ri-subtract-line"></i>
            </motion.button>
            <span>{cartItem.quantity}</span>
            <motion.button
              whileHover={{ scale: 1.1 }}
              className="btn btn-primary"
              onClick={() => dispatch(increaseQty(cartItem))}
            >
              <i className="ri-add-line"></i>
            </motion.button>
          </div>
          <div className="item__price">
            ${cartItem.price * cartItem.quantity}
          </div>
        </div>
        <motion.span
          whileHover={{ scale: 1.1 }}
          className="delete__BTN"
          onClick={() => handleRemove(cartItem)}
        >
          <i className="ri-delete-bin-line"></i>
        </motion.span>
      </div>
    </div>
  );
};

export default CartListItem;
