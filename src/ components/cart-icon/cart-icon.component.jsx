import {
  CartIconContainer,
  ItemCount,
  ShoppingIcon,
} from "./cart-icon.styles.jsx";
import { selectCartCount } from "../../store/cart/cart.selector.js";
import { useSelector } from "react-redux";

const CartIcon = ({ shoppingCartToggleHandler }) => {
  const cartCount = useSelector(selectCartCount);

  return (
    <CartIconContainer onClick={() => shoppingCartToggleHandler()}>
      <ShoppingIcon />
      <ItemCount>{cartCount}</ItemCount>
    </CartIconContainer>
  );
};

export default CartIcon;
