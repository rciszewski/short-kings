import { createContext, useState, useEffect } from "react";

const addCartItem = (cartItems, productToAdd) => {
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

const removeCartItem = (cartItems, productToRemove) => {
  if (productToRemove.quantity === 1) {
    const updatedCartItems = cartItems.filter((cartItem) => {
      return cartItem.id !== productToRemove.id;
    });
    return updatedCartItems;
  }
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
  totalCartPrice: 0,
});

export const CartProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [cartCount, setCartCount] = useState(0);
  const [totalCartPrice, setTotalCartPrice] = useState(0);

  useEffect(() => {
    const newCartCount = cartItems.reduce((total, cartItem) => {
      return total + cartItem.quantity;
    }, 0);
    setCartCount(newCartCount);
  }, [cartItems]);

  useEffect(() => {
    const newTotalCartPrice = cartItems.reduce((totalPrice, cartItem) => {
      return totalPrice + cartItem.quantity * cartItem.price;
    }, 0);
    setTotalCartPrice(newTotalCartPrice);
  }, [cartItems]);

  const addItemToCart = (product) => {
    setCartItems(addCartItem(cartItems, product));
  };

  const updateItemQuantity = (quantityOperation, cartItemToUpdate) => {
    if (quantityOperation === "decrease") {
      if (cartItemToUpdate.quantity > 1) {
        const updatedCartItems = cartItems.map((cartItem) =>
          cartItem.id === cartItemToUpdate.id
            ? { ...cartItem, quantity: cartItem.quantity - 1 }
            : cartItem
        );
        setCartItems(updatedCartItems);
      } else {
        const updatedCartItems = removeCartItem(cartItems, cartItemToUpdate);
        setCartItems(updatedCartItems);
      }
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
    totalCartPrice,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
