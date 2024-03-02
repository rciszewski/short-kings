import { createAction } from "../../utils/reducer/reducer.utils";
import { CART_ACTION_TYPES } from "./cart.types";

export const setIsCartOpen = (boolean) => {
  return createAction(CART_ACTION_TYPES.SET_IS_CART_OPEN, boolean);
};

export const addCartItem = (cartItems, productToAdd) => {
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

export const addItemToCart = (cartItems, product) => {
  const newCartItems = addCartItem(cartItems, product);
  return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItems);
};

export const updateItemQuantity = (
  cartItems,
  quantityOperation,
  cartItemToUpdate
) => {
  if (quantityOperation === "decrease") {
    if (cartItemToUpdate.quantity > 1) {
      const newCartItems = cartItems.map((cartItem) =>
        cartItem.id === cartItemToUpdate.id
          ? { ...cartItem, quantity: cartItem.quantity - 1 }
          : cartItem
      );
      return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItems);
    } else {
      const newCartItems = removeCartItem(cartItems, cartItemToUpdate);
      return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItems);
    }
  } else {
    const newCartItems = cartItems.map((cartItem) =>
      cartItem.id === cartItemToUpdate.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
    return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItems);
  }
};

export const removeItemFromCart = (cartItems, cartItemToRemove) => {
  const newCartItems = cartItems.filter((cartItem) => {
    return cartItem.id !== cartItemToRemove.id;
  });
  return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItems);
};
