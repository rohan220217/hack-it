import UserConstants from "../../constants/UserConstants";
import {
  ADD_POST_REQUEST,
  ADD_POST_REQUEST_SUCCESS,
  ADD_POST_REQUEST_FAILED,
} from "../Constants/postTypes";

const initialState = {
  postData: {},
  postLoading: false,
};

export const postReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST_REQUEST:
      return { ...state, postLoading: true };

    case ADD_POST_REQUEST_SUCCESS:
      return { ...state, postLoading: false };

    case ADD_POST_REQUEST_FAILED:
      return { ...state, postLoading: false };

    default:
      return state;
  }
};
