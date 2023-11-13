import "./cart-dropdown.styles.scss";
import Button from "../button/button.component";
import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";

const CartDropDown = () => {
  const { cartItems } = useContext(CartContext);
  return (
    <div className="cart-dropdown-container">
      <div className="cart-items">
        {cartItems.map((item, idx) => {
          return <img key={idx} src={item.imageUrl} alt={item.name} />;
        })}
      </div>
      <Button>Go to Cart</Button>
    </div>
  );
};

export default CartDropDown;
