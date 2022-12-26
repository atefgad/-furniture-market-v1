import "./AddToCartBtn.css";

// Add To Cart
function AddToCartBtn({
  title = "add to cart",
  className,
  clicked = false,
  onClick,
  qty,
}) {
  return (
    <button
      onClick={onClick}
      className={`cart-button ${className} ${clicked ? "clicked" : ""}`}
    >
      <span className="add-to-cart">
        <i className="ri-shopping-cart-line d-inline-block me-2"></i>
        {title}
      </span>
      <span className="added">
        <i className="badge rounded-pill bg-light text-primary me-1">{qty}</i>
        Added to cart
      </span>
      <i className="cart ri-shopping-cart-line"></i>
      <i className="box ri-shopping-basket-fill"></i>
    </button>
  );
}

export default AddToCartBtn;
