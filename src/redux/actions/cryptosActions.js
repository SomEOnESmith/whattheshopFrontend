import axios from "axios";

import { SET_LOADING, GET_CRYPTOS } from "./actionTypes";

export const getCryptos = () => {
  return async dispatch => {
    dispatch(setCryptosLoading());
    try {
      const res = await axios.get("https://4875b961.ngrok.io/api/list/");
      const cryptos = res.data.map(crypto => {
        if (crypto.rate_change >= 0) {
          crypto.rate_change = `+${crypto.rate_change}`;
        }
        return crypto;
      });
      dispatch({
        type: GET_CRYPTOS,
        payload: cryptos
      });
    } catch (err) {
      console.error("Error while fetching shops", err);
    }
  };
};

export const setCryptosLoading = () => ({
  type: SET_LOADING
});
