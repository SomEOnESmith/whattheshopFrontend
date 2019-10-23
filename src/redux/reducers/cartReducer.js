import { ADD_TO_CART, CHECKOUT, REMOVE_ITEM } from "../actions/actionTypes";
import { Action } from "rxjs/internal/scheduler/Action";

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
      console.log("ITEM:", item, "newitem:", newitem);
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

    case CHECKOUT:
      return {
        ...state,
        items: []
      };
    case REMOVE_ITEM:
      let newItems = state.items.filter(
        item => item.currency !== payload.currency
      );
      return {
        ...state,
        items: newItems
      };
    default:
      return state;
  }
};
