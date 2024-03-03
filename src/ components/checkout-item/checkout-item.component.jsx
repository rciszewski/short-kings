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
import { useDispatch, useSelector } from "react-redux";
import {
  updateItemQuantity,
  removeItemFromCart,
} from "../../store/cart/cart.action.js";
import { selectCartItems } from "../../store/cart/cart.selector.js";

const CheckoutItem = ({ cartItem }) => {
  const { imageUrl, name, quantity, price } = cartItem;
  const cartItems = useSelector(selectCartItems);
  const dispatch = useDispatch();

  const updateItemHandler = (updateOperation) => {
    dispatch(updateItemQuantity(cartItems, updateOperation, cartItem));
  };
  const removeItemHandler = () =>
    dispatch(removeItemFromCart(cartItems, cartItem));

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
