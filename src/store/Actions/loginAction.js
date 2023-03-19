import {
  SET_USER_TYPE,
  LOGIN_USER_REQUESTED,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAILURE,
  USER_LOGOUT,
  VERIFY_OTP_USER_REQUESTED,
  VERIFY_OTP_USER_SUCCESS,
  VERIFY_OTP_USER_FAILURE,
} from "../Constants/loginTypes";

export const setUsers = (data) => {
  console.log(data);
  return { type: SET_USER_TYPE, payload: data };
};

export const loginUserRequested = (data) => {
  return {
    type: LOGIN_USER_REQUESTED,
    payload: data,
  };
};

export const loginUserSuccess = (data) => {
  return {
    type: LOGIN_USER_SUCCESS,
    payload: data,
  };
};

export const loginUserFailure = (data) => {
  return {
    type: LOGIN_USER_FAILURE,
    payload: data,
  };
};

export const verifyOtpUserRequested = (data) => {
  return {
    type: VERIFY_OTP_USER_REQUESTED,
    payload: data,
  };
};

export const verifyOtpUserSuccess = (data) => {
  return {
    type: VERIFY_OTP_USER_SUCCESS,
    payload: data,
  };
};

export const verifyOtpUserFailure = (data) => {
  return {
    type: VERIFY_OTP_USER_FAILURE,
    payload: data,
  };
};

export const logoutUser = (data) => {
  return {
    type: USER_LOGOUT,
    payload: data,
  };
};
