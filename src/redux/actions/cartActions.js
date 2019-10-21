import { ADD_TO_CART, CHECKOUT } from "./actionTypes";
import axios from "axios";

export const addToCart = item => {
  return {
    type: ADD_TO_CART,
    payload: item
  };
};

export const checkout = cryptosCart => {
  console.log("cart items = ", cryptosCart);
  // return {
  //   type: CHECKOUT
  // };
  return async dispatch => {
    try {
      const res = await axios.post(
        "http://127.0.0.1:8000/api/print/",
        cryptosCart
      );
      dispatch({
        type: CHECKOUT
      });
    } catch (err) {
      console.error("Error while posting cart", err);
    }
  };
};
