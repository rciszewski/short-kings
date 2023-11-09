import React from "react";
import { useContext } from "react";
import { ProductsContext } from "../../contexts/products.context";
import ProductCard from "../../ components/product-card/product-card.component";

const Shop = () => {
  const { products, setProducts } = useContext(ProductsContext);
  return (
    <>
      {products.map((product) => {
        return <ProductCard key={product.id} product={product} />;
      })}
    </>
  );
};

export default Shop;
