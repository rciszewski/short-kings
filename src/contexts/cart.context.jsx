import { createContext, useState } from "react";

export const addCartItem = (
  cartItems,
  productToAdd,
  cartCount,
  setCartCount
) => {
  setCartCount(cartCount + 1);
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === productToAdd.id
  );

  if (existingCartItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === productToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }

  return [...cartItems, { ...productToAdd, quantity: 1 }];
};

// as the actual value you want to access
export const CartContext = createContext({
  cartItems: [],
  cartCount: 0,
  addItemToCart: () => {},
});

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [cartCount, setCartCount] = useState(0);

  const addItemToCart = (product) =>
    setCartItems(addCartItem(cartItems, product, cartCount, setCartCount));

  const value = { cartItems, addItemToCart, cartCount };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
