import { GET_CRYPTOS, SET_LOADING } from "../actions/actionTypes";

const initialState = {
  cryptos: [],
  loading: true
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_CRYPTOS:
      return {
        ...state,
        cryptos: payload,
        loading: false
      };
    case SET_LOADING:
      return {
        ...state,
        loading: true
      };
    default:
      return state;
  }
};
