import { ADD_TO_CART } from "./actionTypes";

export const addToCart = (item, close) => {
  return async dispatch => {
    dispatch({
      type: ADD_TO_CART,
      payload: item
    });
    close(false);
  };
};
