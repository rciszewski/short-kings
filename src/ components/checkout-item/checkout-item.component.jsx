import {
  CheckoutItemContainer,
  ImageContainer,
  Image,
  Name,
  Quantity,
  Price,
  Arrow,
  Value,
  RemoveBtnDiv,
} from "./checkout-item.styles.jsx";

import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";

const CheckoutItem = ({ cartItem }) => {
  const { imageUrl, name, quantity, price } = cartItem;
  const { updateItemQuantity, removeItemFromCart } = useContext(CartContext);

  const updateItemHandler = (updateOperation) => {
    updateItemQuantity(updateOperation, cartItem);
  };
  const removeItemHandler = () => removeItemFromCart(cartItem);

  return (
    <CheckoutItemContainer>
      <ImageContainer>
        <Image src={imageUrl} alt={name} />
      </ImageContainer>
      <Name>{name}</Name>
      <Quantity>
        <Arrow onClick={() => updateItemHandler("decrease")}>&#10094;</Arrow>

        <Value>{quantity}</Value>

        <Arrow onClick={() => updateItemHandler("increase")}>&#10095;</Arrow>
      </Quantity>
      <Price>{price}</Price>
      <RemoveBtnDiv onClick={removeItemHandler}>&#10005;</RemoveBtnDiv>
    </CheckoutItemContainer>
  );
};

export default CheckoutItem;
