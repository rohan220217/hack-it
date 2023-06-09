import {
  ADD_POST_REQUEST,
  ADD_POST_REQUEST_SUCCESS,
  ADD_POST_REQUEST_FAILED,
  GET_SINGLE_POST_REQUEST,
  GET_SINGLE_POST_REQUEST_SUCCESS,
  GET_SINGLE_POST_REQUEST_FAILED,
  UPDATE_SINGLE_POST_REQUEST,
  UPDATE_SINGLE_POST_REQUEST_SUCCESS,
  UPDATE_SINGLE_POST_REQUEST_FAILED,
  GET_GROUP_SINGLE_POST_REQUEST,
  GET_GROUP_SINGLE_POST_REQUEST_SUCCESS,
  GET_GROUP_SINGLE_POST_REQUEST_FAILED,
  GET_ALL_POSTS_REQUEST,
  GET_ALL_POSTS_REQUEST_SUCCESS,
  GET_ALL_POSTS_REQUEST_FAILED,
  VOTE_SINGLE_POST_REQUEST,
  VOTE_SINGLE_POST_REQUEST_SUCCESS,
  VOTE_SINGLE_POST_REQUEST_FAILED,
  UPDATE_COMPLAIN_REQUEST,
  UPDATE_COMPLAIN_REQUEST_SUCCESS,
  UPDATE_COMPLAIN_REQUEST_FAILED,
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

export const getSingleComplain = (data) => {
  return { type: GET_SINGLE_POST_REQUEST, payload: data };
};
export const getSingleComplainSuccess = (data) => {
  return { type: GET_SINGLE_POST_REQUEST_SUCCESS, payload: data };
};
export const getSingleComplainFailed = (data) => {
  return { type: GET_SINGLE_POST_REQUEST_FAILED, payload: data };
};

export const updateSingleComplain = (data) => {
  return { type: UPDATE_SINGLE_POST_REQUEST, payload: data };
};
export const updateSingleComplainSuccess = (data) => {
  return { type: UPDATE_SINGLE_POST_REQUEST_SUCCESS, payload: data };
};
export const updateSingleComplainFailed = (data) => {
  return { type: UPDATE_SINGLE_POST_REQUEST_FAILED, payload: data };
};

export const getGroupSinglePost = (data) => {
  return { type: GET_GROUP_SINGLE_POST_REQUEST, payload: data };
};
export const getGroupComplainSuccess = (data) => {
  return { type: GET_GROUP_SINGLE_POST_REQUEST_SUCCESS, payload: data };
};
export const getGroupComplainFailed = (data) => {
  return { type: GET_GROUP_SINGLE_POST_REQUEST_FAILED, payload: data };
};

export const getAllComplain = (data) => {
  return { type: GET_ALL_POSTS_REQUEST, payload: data };
};
export const getAllComplainSuccess = (data) => {
  return { type: GET_ALL_POSTS_REQUEST_SUCCESS, payload: data };
};
export const getAllComplainFailed = (data) => {
  return { type: GET_ALL_POSTS_REQUEST_FAILED, payload: data };
};

export const voteSingleComplain = (data) => {
  return { type: VOTE_SINGLE_POST_REQUEST, payload: data };
};
export const voteSingleComplainSuccess = (data) => {
  return { type: VOTE_SINGLE_POST_REQUEST_SUCCESS, payload: data };
};
export const voteSingleComplainFailed = (data) => {
  return { type: VOTE_SINGLE_POST_REQUEST_FAILED, payload: data };
};

export const updateComplain = (data) => {
  return { type: UPDATE_COMPLAIN_REQUEST, payload: data };
};
export const updateComplainSuccess = (data) => {
  return { type: UPDATE_COMPLAIN_REQUEST_SUCCESS, payload: data };
};
export const updateComplainFailed = (data) => {
  return { type: UPDATE_COMPLAIN_REQUEST_FAILED, payload: data };
};
