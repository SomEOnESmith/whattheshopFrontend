import { ADD_TO_CART } from "../actions/actionTypes";

const initialState = {
  items: []
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_TO_CART:
      const item = payload;
      const newitem = state.items.find(
        itemObj => item.currency === itemObj.currency
      );
      if (newitem) {
        newitem.quantity = (+newitem.quantity + +item.quantity).toFixed(3);
        return {
          ...state,
          items: [...state.items]
        };
      } else {
        return {
          ...state,
          items: state.items.concat([item])
        };
      }

    default:
      return state;
  }
};
