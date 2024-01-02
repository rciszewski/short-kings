import { createContext, useReducer } from "react";

import { createAction } from "../utils/reducer/reducer.utils";

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

const CART_ACTION_TYPES = {
  SET_CART_ITEMS: "SET_CART_ITEMS",
  TOGGLE_CART_OPEN: "TOGGLE_CART_OPEN",
};

const INITIAL_STATE = {
  isCartOpen: false,
  cartItems: [],
  cartCount: 0,
  totalCartPrice: 0,
};

const cartReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case CART_ACTION_TYPES.SET_CART_ITEMS:
      return {
        ...state,
        ...payload,
      };
    case CART_ACTION_TYPES.TOGGLE_CART_OPEN:
      return {
        ...state,
        isCartOpen: payload,
      };
    default:
      throw new Error(`unhandled type: ${type} in cartReducer`);
  }
};

export const CartProvider = ({ children }) => {
  const [{ cartItems, isCartOpen, cartCount, totalCartPrice }, dispatch] =
    useReducer(cartReducer, INITIAL_STATE);

  const updateCartItemsReducer = (newCartItems) => {
    const newCartCount = newCartItems.reduce((total, cartItem) => {
      return total + cartItem.quantity;
    }, 0);
    const newTotalCartPrice = newCartItems.reduce((totalPrice, cartItem) => {
      return totalPrice + cartItem.quantity * cartItem.price;
    }, 0);

    dispatch(
      createAction(CART_ACTION_TYPES.SET_CART_ITEMS, {
        cartItems: newCartItems,
        cartCount: newCartCount,
        totalCartPrice: newTotalCartPrice,
      })
    );
  };

  const setIsCartOpen = (bool) => {
    console.log(bool);
    dispatch(createAction(CART_ACTION_TYPES.TOGGLE_CART_OPEN, bool));
  };

  const addItemToCart = (product) => {
    const newCartItems = addCartItem(cartItems, product);
    updateCartItemsReducer(newCartItems);
  };

  const updateItemQuantity = (quantityOperation, cartItemToUpdate) => {
    if (quantityOperation === "decrease") {
      if (cartItemToUpdate.quantity > 1) {
        const newCartItems = cartItems.map((cartItem) =>
          cartItem.id === cartItemToUpdate.id
            ? { ...cartItem, quantity: cartItem.quantity - 1 }
            : cartItem
        );
        updateCartItemsReducer(newCartItems);
      } else {
        const newCartItems = removeCartItem(cartItems, cartItemToUpdate);
        updateCartItemsReducer(newCartItems);
      }
    } else {
      const newCartItems = cartItems.map((cartItem) =>
        cartItem.id === cartItemToUpdate.id
          ? { ...cartItem, quantity: cartItem.quantity + 1 }
          : cartItem
      );
      updateCartItemsReducer(newCartItems);
    }
  };

  const removeItemFromCart = (cartItemToRemove) => {
    const newCartItems = cartItems.filter((cartItem) => {
      return cartItem.id !== cartItemToRemove.id;
    });
    updateCartItemsReducer(newCartItems);
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
