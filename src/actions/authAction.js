import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
  SET_MESSAGE,
} from "./types";
import AuthService from "../services/authService";

export const register = (name, surname, sex, email, password) => (dispatch) => {
  return AuthService.register(name, surname, sex, email, password).then(

    (response) => {
      dispatch({
        type: REGISTER_SUCCESS,
      });
      dispatch({
        type: SET_MESSAGE,
        payload: response.data.message,
      });
      return Promise.resolve();
    },

    (error) => {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      dispatch({
        type: REGISTER_FAIL,
      });
      dispatch({
        type: SET_MESSAGE,
        payload: message,
      });
      return Promise.reject();
    }
  );
};

export const login = (username, password) => async (dispatch) => {
  try {
    let d = await AuthService.login(username, password);
    dispatch({
      type: LOGIN_SUCCESS,
      payload: { user: d },
    });
    return Promise.resolve();

  } catch (e) {
    const message =
      (e.response &&
        e.response.data &&
        e.response.data.message) ||
      e.message ||
      e.toString();
    dispatch({
      type: LOGIN_FAIL,
    });
    dispatch({
      type: SET_MESSAGE,
      payload: message,
    });
    return Promise.reject();
  }
};

export const logout = () => (dispatch) => {
  AuthService.logout();
  dispatch({
    type: LOGOUT,
  });
};

export const logoutCheck = () => (dispatch) => {
  const user = JSON.parse(localStorage.getItem("user"));
  try {
    let expirationTime = (new Date(user.expiration)).getTime();
    if (expirationTime < Date.now()) {
      dispatch(logout())
    }
  }
  catch
  {
    console.log("There is no Authorized user")
  }
}
