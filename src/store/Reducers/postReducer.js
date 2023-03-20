import UserConstants from "../../constants/UserConstants";
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
} from "../Constants/postTypes";

const initialState = {
  complains: [],
  postLoading: false,
  getSinglePostLoading: false,
  updateSinglePostLoading: false,
  getGroupPostLoading: false,
  currentSinglePostDetail: {},
  groupComplain: [],
  // currentPostGroupId: "",
  // currentPostId: "",
};

export const postReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST_REQUEST:
      return { ...state, postLoading: true };

    case ADD_POST_REQUEST_SUCCESS:
      return {
        ...state,
        postLoading: false,
        // currentPostGroupId: action.payload.post_group,
        // currentPostId: action.payload._id,
      };

    case ADD_POST_REQUEST_FAILED:
      return { ...state, postLoading: false };

    case GET_SINGLE_POST_REQUEST:
      return { ...state, getSinglePostLoading: true };

    case GET_SINGLE_POST_REQUEST_SUCCESS:
      return {
        ...state,
        getSinglePostLoading: false,
        currentSinglePostDetail: action.payload.data,
      };

    case GET_SINGLE_POST_REQUEST_FAILED:
      return { ...state, getSinglePostLoading: false };

    case UPDATE_SINGLE_POST_REQUEST:
      return { ...state, updateSinglePostLoading: true };

    case UPDATE_SINGLE_POST_REQUEST_SUCCESS:
      return {
        ...state,
        updateSinglePostLoading: false,
      };

    case UPDATE_SINGLE_POST_REQUEST_FAILED:
      return { ...state, updateSinglePostLoading: false };

    case UPDATE_SINGLE_POST_REQUEST:
      return { ...state, updateSinglePostLoading: true };

    case UPDATE_SINGLE_POST_REQUEST_SUCCESS:
      return {
        ...state,
        updateSinglePostLoading: false,
      };

    case UPDATE_SINGLE_POST_REQUEST_FAILED:
      return { ...state, updateSinglePostLoading: false };

    case GET_GROUP_SINGLE_POST_REQUEST:
      return { ...state, getGroupPostLoading: true };

    case GET_GROUP_SINGLE_POST_REQUEST_SUCCESS:
      return {
        ...state,
        getGroupPostLoading: false,
        groupComplain: action.payload.data,
      };

    case GET_GROUP_SINGLE_POST_REQUEST_FAILED:
      return { ...state, getGroupPostLoading: false };

    default:
      return state;
  }
};
