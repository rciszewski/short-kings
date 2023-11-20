import "./checkout-item.styles.scss";

import { useContext, useEffect } from "react";
import { CartContext } from "../../contexts/cart.context";

const CheckoutItem = ({ cartItem }) => {
  const { imageUrl, name, quantity, price } = cartItem;
  const { updateItemQuantity, removeItemFromCart } = useContext(CartContext);

  const updateItemHandler = (updateOperation) => {
    updateItemQuantity(updateOperation, cartItem);
  };
  const removeItemHandler = () => removeItemFromCart(cartItem);

  return (
    <div className="checkout-item-container">
      <div className="image-container">
        <img src={imageUrl} alt={name} />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">
        <div className="arrow" onClick={() => updateItemHandler("decrease")}>
          &#10094;
        </div>

        <span className="value">{quantity}</span>

        <div className="arrow" onClick={() => updateItemHandler("increase")}>
          &#10095;
        </div>
      </span>
      <span className="price">{price}</span>
      <div className="remove-button" onClick={removeItemHandler}>
        &#10005;
      </div>
    </div>
  );
};

export default CheckoutItem;
