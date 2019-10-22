import { ADD_TO_CART, CHECKOUT } from "./actionTypes";
import instance from "./instance";

export const addToCart = (item, close) => {
  return async dispatch => {
    dispatch({
      type: ADD_TO_CART,
      payload: item
    });
    close(false);
  };
};

export const checkout = cryptosCart => {
  console.log("cart items = ", cryptosCart);
  // return {
  //   type: CHECKOUT
  // };
  return async dispatch => {
    try {
      const res = await instance.post("api/checkout/", cryptosCart);
      dispatch({
        type: CHECKOUT
      });
    } catch (err) {
      console.error("Error while posting cart", err);
    }
  };
};
