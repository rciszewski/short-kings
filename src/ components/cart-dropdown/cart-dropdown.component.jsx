import { useNavigate } from "react-router-dom";
import Button from "../button/button.component";
import CartItem from "../cart-item/cart-item.component";
import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";

import { CartDropdown, CartItemDropDown, EmptyMessage} from "./cart-dropdown.styles.jsx";


const CartDropDown = () => {
  const { cartItems } = useContext(CartContext);
  const navTo = useNavigate();
  return (
    <CartDropdown>
      {cartItems.length ? (
        <CartItemDropDown>
          {cartItems?.map((cartItem) => (
            <CartItem key={cartItem.id} cartItem={cartItem} />
          ))}
        </CartItemDropDown>
      ) : (
        <EmptyMessage>Your cart is empty</EmptyMessage>
      )}
      <Button onClick={() => navTo("/checkout")}>Go to Cart</Button>
    </CartDropdown>
  );
};

export default CartDropDown;
