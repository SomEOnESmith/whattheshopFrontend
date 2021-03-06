import { SET_CURRENT_USER, FETCH_PROFILE } from "./actionTypes";
import jwt_decode from "jwt-decode";
import instance from "./instance";

export const fetchProfile = () => {
  return async dispatch => {
    try {
      let res = await instance.get("api/profile/");
      let profile = res.data;
      dispatch({
        type: FETCH_PROFILE,
        payload: profile
      });
    } catch (error) {
      console.error(error.response);
    }
  };
};

const setCurrentUser = token => {
  return dispatch => {
    console.log("token", token);
    let user = null;
    if (token) {
      localStorage.setItem("token", token);
      instance.defaults.headers.common.Authorization = `Bearer ${token}`;
      user = jwt_decode(token);
      console.log("TCL USER ", user);
      dispatch(fetchProfile());
    } else {
      localStorage.removeItem("token");
      delete instance.defaults.headers.common.Authorization;
      user = null;
    }

    dispatch({
      type: SET_CURRENT_USER,
      payload: user
    });
  };
};

export const login = (userData, history) => {
  return async dispatch => {
    try {
      const res = await instance.post("api/login/", userData);
      const user = res.data;
      dispatch(setCurrentUser(user.access));
      history.replace("/");
    } catch (err) {
      console.error(err);
    }
  };
};

export const signup = (userData, history) => {
  return async dispatch => {
    try {
      const res = await instance.post("api/register/", userData);
      dispatch(login(userData, history));
    } catch (err) {
      console.error(err);
    }
  };
};

export const logout = () => setCurrentUser();

export const checkForExpiredToken = () => {
  // Check for token expiration
  const token = localStorage.getItem("token");
  let user = null;
  if (token) {
    const currentTimeInSeconds = Date.now() / 1000;

    // Decode token and get user info
    user = jwt_decode(token);

    // Check token expiration
    if (user.exp >= currentTimeInSeconds) {
      // Set user
      return setCurrentUser(token);
    }
  }
  return logout();
};
