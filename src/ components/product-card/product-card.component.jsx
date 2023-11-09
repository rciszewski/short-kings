import React from "react";
import "./product-card.styles.scss";

const ProductCard = ({product}) => {
  // const { name, imageUrl, price} = product;
  console.log(product);
  return (
    <div className="product-card">
      <img src={product.imageUrl} alt={`${product.name} product card`} />
      <div className="product-name-and-price">
        <span>{product.name}</span>
        <span>{product.price}</span>
      </div>
    </div>
  );
};

export default ProductCard;
