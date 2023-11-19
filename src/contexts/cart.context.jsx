import { createContext, useState, useEffect } from "react";

export const addCartItem = (
  cartItems,
  productToAdd,
  cartCount,
  setCartCount
) => {
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
  isCartOpen: false,
  setIsCartOpen: () => {},
  cartItems: [],
  cartCount: 0,
  addItemToCart: () => {},
  updateItemQuantity: () => {},
  removeItemFromCart: () => {},
});

export const CartProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    const newCartCount = cartItems.reduce((total, cartItem) => {
      return total + cartItem.quantity;
    }, 0);
    setCartCount(newCartCount);
  }, [cartItems]);

  const addItemToCart = (product) =>
    setCartItems(addCartItem(cartItems, product, cartCount, setCartCount));

  const updateItemQuantity = (quantityOperation, cartItemToUpdate) => {
    if (quantityOperation === "decrease") {
      const updatedCartItems = cartItems.map((cartItem) =>
        cartItem.id === cartItemToUpdate.id
          ? { ...cartItem, quantity: cartItem.quantity - 1 }
          : cartItem
      );
      setCartItems(updatedCartItems);
    } else {
      const updatedCartItems = cartItems.map((cartItem) =>
        cartItem.id === cartItemToUpdate.id
          ? { ...cartItem, quantity: cartItem.quantity + 1 }
          : cartItem
      );
      setCartItems(updatedCartItems);
    }
  };

  const removeItemFromCart = (cartItemToRemove) => {
    const updatedCart = cartItems.filter((cartItem) => {
      return cartItem.id !== cartItemToRemove.id;
    });
    setCartItems(updatedCart);
  };

  const value = {
    isCartOpen,
    setIsCartOpen,
    cartItems,
    addItemToCart,
    cartCount,
    updateItemQuantity,
    removeItemFromCart,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
