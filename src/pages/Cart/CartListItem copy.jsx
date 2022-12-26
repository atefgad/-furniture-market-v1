import { useDispatch, useSelector } from "react-redux";
import { motion } from "framer-motion";

import { Link } from "react-router-dom";
import { removeFromCart } from "../../store/slices/cartSlice";
import toast from "react-hot-toast";

const CartListItem = ({ cartItem }) => {
  const dispatch = useDispatch();

  const handleRemove = (cartItem) => {
    dispatch(removeFromCart(cartItem));

    toast.success("product removed successfully", {
      duration: 2000,
      position: "top-center",
    });
  };
  return (
    <tr>
      <td>
        <Link to={`/shop/${cartItem.id}`}>
          <img src={cartItem.imgUrl} alt={cartItem.productName} />
        </Link>
      </td>
      <td>
        <Link to={`/shop/${cartItem.id}`}>{cartItem.productName}</Link>
      </td>
      <td>{cartItem.quantity}</td>
      <td>${cartItem.price * cartItem.quantity}</td>
      {/*<td>${cartItem.price * cartItem.quantity}</td>*/}
      {/* del btn */}
      <td>
        <motion.span
          whileHover={{ scale: 1.3 }}
          className="ri-delete-bin-line"
          onClick={() => handleRemove(cartItem)}
        ></motion.span>
      </td>
    </tr>
  );
};

export default CartListItem;
