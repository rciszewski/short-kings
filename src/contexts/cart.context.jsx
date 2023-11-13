import { createContext, useState, useEffect } from "react";

// as the actual value you want to access
export const CartContext = createContext({
  cartItems: [],
  setCartItems: () => null,
});

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(null);
  const value = { cartItems, setCartItems };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
