import {
  CartIconContainer,
  ItemCount,
  ShoppingIconStyled,
} from "./cart-icon.styles.jsx";
import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";

const CartIcon = ({ shoppingCartToggleHandler }) => {
  const { cartCount } = useContext(CartContext);
  return (
    <CartIconContainer onClick={() => shoppingCartToggleHandler()}>
      <ShoppingIconStyled />
      <ItemCount>{cartCount}</ItemCount>
    </CartIconContainer>
  );
};

export default CartIcon;
