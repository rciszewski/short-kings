import "./cart-icon.styles.scss";
import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";
import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";

const CartIcon = ({ shoppingCartToggleHandler }) => {
  const { cartItems } = useContext(CartContext);
  return (
    <div
      className="cart-icon-container"
      onClick={() => shoppingCartToggleHandler()}
    >
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">{cartItems.length}</span>
    </div>
  );
};

export default CartIcon;
