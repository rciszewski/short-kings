import React from "react";
import "./product-card.styles.scss";
import Button from "../button/button.component";
import { CartContext } from "../../contexts/cart.context";
import { useContext } from "react";

const ProductCard = ({ product }) => {
  const { cartItems, setCartItems } = useContext(CartContext);
  const { name, imageUrl, price } = product;
  return (
    <div className="product-card-container">
      <img src={imageUrl} alt={`${name} product card`} />
      <div className="footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
      <Button
        buttonType="inverted"
        onClick={() => {
          setCartItems([...cartItems, product]);
        }}
      >
        Add to cart
      </Button>
    </div>
  );
};

export default ProductCard;
