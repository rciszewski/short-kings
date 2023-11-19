import { useContext, useEffect } from "react";
import { CartContext } from "../../contexts/cart.context";
import "./checkout.styles.scss";

const Checkout = () => {
  const { cartItems, setIsCartOpen, updateItemQuantity, removeItemFromCart } =
    useContext(CartContext);
  console.log(cartItems);
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
            <span>
              <span
                onClick={() => {
                  updateItemQuantity("decrease", cartItem);
                }}
              >
                {" "}
                {`<`}{" "}
              </span>
              <span>{quantity}</span>
              <span
                onClick={() => {
                  updateItemQuantity("increase", cartItem);
                }}
              >
                {" "}
                {`>`}{" "}
              </span>
            </span>
            <span>{price}</span>
            <span
              onClick={() => {
                removeItemFromCart(cartItem);
              }}
            >
              X
            </span>
          </div>
        );
      })}
    </div>
  );
};

export default Checkout;
