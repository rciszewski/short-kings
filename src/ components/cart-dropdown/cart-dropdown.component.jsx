import "./cart-dropdown.styles.scss";
import { useNavigate } from "react-router-dom";
import Button from "../button/button.component";
import CartItem from "../cart-item/cart-item.component";
import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";

const CartDropDown = () => {
  const { cartItems } = useContext(CartContext);
  const navTo = useNavigate();
  return (
    <div className="cart-dropdown-container">
      {cartItems.length ? (
        <div className="cart-items">
          {cartItems?.map((cartItem) => (
            <CartItem key={cartItem.id} cartItem={cartItem} />
          ))}
        </div>
      ) : (
        <span className="empty-message">Your cart is empty</span>
      )}
      <Button onClick={() => navTo("/checkout")}>Go to Cart</Button>
    </div>
  );
};

export default CartDropDown;
