import axios from "axios";

export const fetchRealTime = () => {
  return async dispatch => {
    try {
      let res = await axios.get(
        "https://api.coindesk.com/v1/bpi/currentprice.json"
      );
      let realTime = res.data;
      console.log(realTime);
      //   dispatch({
      //     type: type,
      //     payload
      //   });
    } catch (error) {}
  };
};
