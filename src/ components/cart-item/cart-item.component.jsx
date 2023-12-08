import {
  CartItemContainer,
  CartItemImage,
  ItemDetails,
  Name
} from "./cart-item.styles.jsx";

const CartItem = ({ cartItem }) => {
  const { imageUrl, name, price, quantity } = cartItem;
  return (
    <CartItemContainer>
      <CartItemImage src={imageUrl} alt={name} />
      <ItemDetails>
        <Name>{name}</Name>
        <span className="price">
          {quantity} x {`$${price}`}
        </span>
      </ItemDetails>
    </CartItemContainer>
  );
};

export default CartItem;
