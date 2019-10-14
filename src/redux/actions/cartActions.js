import { ADD_TO_CART } from "./actionTypes";

export const addToCart = item => {
  console.log(item);
  return {
    type: ADD_TO_CART,
    payload: item
  };
};
