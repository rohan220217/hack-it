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
  GET_ALL_POSTS_REQUEST,
  GET_ALL_POSTS_REQUEST_SUCCESS,
  GET_ALL_POSTS_REQUEST_FAILED,
  VOTE_SINGLE_POST_REQUEST,
  VOTE_SINGLE_POST_REQUEST_SUCCESS,
  VOTE_SINGLE_POST_REQUEST_FAILED,
} from "../Constants/postTypes";

const initialState = {
  complains: [],
  postLoading: false,
  getSinglePostLoading: false,
  updateSinglePostLoading: false,
  getGroupPostLoading: false,
  getAllPostsLoading : false,
  voteLoading : false,
  currentSinglePostDetail: {},
  groupComplain: [],
  // currentPostGroupId: "",
  // currentPostId: "",
};

export const postReducer = (state = initialState, action) => {
  switch (action.type) {
    case VOTE_SINGLE_POST_REQUEST:
      return { ...state, voteLoading: true };

    case VOTE_SINGLE_POST_REQUEST_SUCCESS:{
      let newcomplains = JSON.parse(JSON.stringify(state.complains))
      if(action.payload.value.type == "U"){
        newcomplains[action.payload.value.rowIndex] = newcomplains[action.payload.value.rowIndex].map(c => {
          let newc = {...c}
          if(!newc['post_group']['upvotes']){
            newc['post_group']['upvotes'] = 0
          }
          newc['post_group']['upvotes'] = newc['post_group']['upvotes'] += 1
          return newc
        })
      }else if(action.payload.value.type == "D"){
        newcomplains[action.payload.value.rowIndex] = newcomplains[action.payload.value.rowIndex].map(c => {
          let newc = {...c}
          if(!newc['post_group']['downvotes']){
            newc['post_group']['downvotes'] = 0
          }
          newc['post_group']['downvotes'] = newc['post_group']['downvotes']+=1
          return newc
        })
      }
      
      return {
        ...state,
        voteLoading: false,
        complains: newcomplains,
      };
    }

    case VOTE_SINGLE_POST_REQUEST_FAILED:
      return { ...state, voteLoading: false };

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

    case GET_ALL_POSTS_REQUEST:
      return { ...state, getAllPostsLoading: true };

    case GET_ALL_POSTS_REQUEST_SUCCESS: {
      return {
        ...state,
        getAllPostsLoading: false,
        complains: action.payload.data,
      };
    }

    case GET_ALL_POSTS_REQUEST_FAILED:
      return { ...state, getAllPostsLoading: false };

    default:
      return state;
  }
};
