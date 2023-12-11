import { CartIconContainer, ItemCount } from "./cart-icon.styles.jsx";
import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";
import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";

const CartIcon = ({ shoppingCartToggleHandler }) => {
  const { cartCount } = useContext(CartContext);
  return (
    <CartIconContainer
      className="cart-icon-container"
      onClick={() => shoppingCartToggleHandler()}
    >
      <ShoppingIcon className="shopping-icon" />
      <ItemCount className="item-count">{cartCount}</ItemCount>
    </CartIconContainer>
  );
};

export default CartIcon;
