import { useContext, useEffect } from "react";
import { CartContext } from "../../contexts/cart.context";
import "./checkout.styles.scss";

const Checkout = () => {
  const { cartItems, setIsCartOpen } = useContext(CartContext);

  useEffect(() => {
    setIsCartOpen(false);
  }, []);

  return (
    <div className="checkout-container">
      <h1>Checkout</h1>
      <div className="checkout-header">
        <span>Product</span>
        <span>Description</span>
        <span>Quantity</span>
        <span>Price</span>
        <span>Remove</span>
      </div>
      {cartItems.map((cartItem) => {
        const { id, imageUrl, name, quantity, price } = cartItem;
        return (
          <div key={id} className="checkout-item">
            <img src={imageUrl} alt={name} />
            <span>{name}</span>
            <span>{quantity}</span>
            <span>{price}</span>
            <span>X</span>
          </div>
        );
      })}
    </div>
  );
};

export default Checkout;
