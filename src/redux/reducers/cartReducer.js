import { ADD_TO_CART } from "../actions/actionTypes";

const initialState = {
  items: [
    {
      currency: "Bitcoin",
      quantity: 1.076,
      price: 8218,
      rate: 0.3
    }
  ]
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
