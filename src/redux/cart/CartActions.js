import { ADD_TO_CART, REMOVE_FROM_CART, CLEAR_CART } from "./CartConstants";

export function addToCart(payload) {
  return {
    type: ADD_TO_CART,
    payload: payload,
  };
}

export function removeFromCart(payload) {
  return {
    type: REMOVE_FROM_CART,
    payload: payload,
  };
}

export function clearCart() {
  return {
    type: CLEAR_CART,
  };
}
