import {
  ADD_POST_REQUEST,
  ADD_POST_REQUEST_SUCCESS,
  ADD_POST_REQUEST_FAILED,
} from "../Constants/postTypes";

export const postComplain = (data) => {
  return { type: ADD_POST_REQUEST, payload: data };
};
export const postComplainSuccess = (data) => {
  return { type: ADD_POST_REQUEST_SUCCESS, payload: data };
};
export const postComplainFailed = (data) => {
  return { type: ADD_POST_REQUEST_FAILED, payload: data };
};
