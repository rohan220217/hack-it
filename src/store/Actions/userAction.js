import {
  GET_LOGGED_USER_REQUEST,
  GET_LOGGED_USER_RECEIVED,
  GET_LOGGED_USER_FAILED,
  CHANGE_PASSWORD_REQUEST,
  CHANGE_PASSWORD_RECEIVED,
  CHANGE_PASSWORD_FAILED,
  CHANGE_USER_DATA_REQUEST,
  CHANGE_USER_DATA_RECEIVED,
  CHANGE_USER_DATA_FAILED,
} from "../Constants/userTypes";

export const getLoggedUser = () => {
  return { type: GET_LOGGED_USER_REQUEST };
};
export const getLoggedUserSuccess = (data) => {
  return { type: GET_LOGGED_USER_RECEIVED, payload: data };
};
export const getLoggedUserFailed = (data) => {
  return { type: GET_LOGGED_USER_FAILED, payload: data };
};

export const changePasswordRequest = (data) => {
  return { type: CHANGE_PASSWORD_REQUEST, payload: data };
};
export const changePasswordSuccess = (data) => {
  return { type: CHANGE_PASSWORD_RECEIVED, payload: data };
};
export const changePasswordFailed = (data) => {
  return { type: CHANGE_PASSWORD_FAILED, payload: data };
};

export const changeUserDataRequest = (data) => {
  return { type: CHANGE_USER_DATA_REQUEST, payload: data };
}
export const changeUserDataSuccess = (data) => {
  return { type: CHANGE_USER_DATA_RECEIVED, payload: data };
};
export const changeUserDataFailed = (data) => {
  return { type: CHANGE_USER_DATA_FAILED, payload: data };
};
