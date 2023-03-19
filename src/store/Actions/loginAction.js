import {
  GET_USER_TYPE,
  SET_USER_TYPE,
  LOGIN_REQUEST,
  LOGIN_REQUEST_SUCCESS,
  LOGIN_REQUEST_FAILED,
  USER_LOGOUT,
} from "../Constants/loginTypes";

export const setUsers = (data) => {
  console.log(data);
  return { type: SET_USER_TYPE, payload: data };
};

export const loginRequest = (data) => {
  return { type: LOGIN_REQUEST, payload: data };
};

export const loginSuccess = (data) => {
  return { type: LOGIN_REQUEST_SUCCESS, payload: data };
};

export const loginFailed = (data) => {
  return { type: LOGIN_REQUEST_FAILED, payload: data };
};

export const userLogout = (data) => {
  return { type: USER_LOGOUT, payload: data };
};
