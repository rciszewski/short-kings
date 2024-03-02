import { useNavigate } from "react-router-dom";
import Button from "../button/button.component";
import CartItem from "../cart-item/cart-item.component";
import { CartDropdown, CartItems, EmptyMessage } from "./cart-dropdown.styles";
import { selectCartItems } from "../../store/cart/cart.selector";
import { useSelector } from "react-redux";

const CartDropDown = () => {
  const cartItems = useSelector(selectCartItems);
  const navTo = useNavigate();
  return (
    <CartDropdown>
      <CartItems>
        {cartItems.length ? (
          cartItems?.map((cartItem) => (
            <CartItem key={cartItem.id} cartItem={cartItem} />
          ))
        ) : (
          <EmptyMessage>Your cart is empty</EmptyMessage>
        )}
      </CartItems>
      <Button onClick={() => navTo("/checkout")}>Go to Checkout</Button>
    </CartDropdown>
  );
};

export default CartDropDown;
