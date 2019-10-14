import { combineReducers } from "redux";

import cartReducer from "./cartReducer";
import cryptosReducer from "./cryptosReducer";

export default combineReducers({
  cartReducer: cartReducer,
  cryptosReducer: cryptosReducer
});
