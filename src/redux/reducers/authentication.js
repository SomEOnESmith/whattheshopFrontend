import { SET_CURRENT_USER, FETCH_PROFILE } from "../actions/actionTypes";

const initialState = {
  user: null,
  profile: null,
  loading: true
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CURRENT_USER:
      return {
        ...state,
        user: action.payload
      };
    case FETCH_PROFILE:
      return {
        ...state,
        profile: action.payload,
        loading: false
      };
    default:
      return state;
  }
};

export default reducer;
