import toast from "react-hot-toast";
import { call, takeEvery, put } from "redux-saga/effects";
import {
  addPostRequestApi,
  getSinglePostRequestApi,
  updateSinglePostRequestApi,
  getGroupPostRequestApi,
  getAllPostsRequestApi,
  voteSinglePostRequestApi,
  updateComplainRequestApi,
} from "../../services/post.services";
import {
  getAllComplainFailed,
  getAllComplainSuccess,
  getGroupComplainFailed,
  getGroupComplainSuccess,
  getSingleComplainFailed,
  getSingleComplainSuccess,
  postComplain,
  postComplainFailed,
  postComplainSuccess,
  updateSingleComplainFailed,
  updateSingleComplainSuccess,
  voteSingleComplainSuccess,
  voteSingleComplainFailed,
  updateComplainSuccess,
  updateComplainFailed,
} from "../Actions/postAction";
import {
  ADD_POST_REQUEST,
  ADD_POST_REQUEST_FAILED,
  ADD_POST_REQUEST_SUCCESS,
  GET_ALL_POSTS_REQUEST,
  GET_GROUP_SINGLE_POST_REQUEST,
  GET_SINGLE_POST_REQUEST,
  UPDATE_COMPLAIN_REQUEST,
  UPDATE_SINGLE_POST_REQUEST,
  VOTE_SINGLE_POST_REQUEST,
} from "../Constants/postTypes";

function* addPostRequest(action) {
  try {
    const data = yield call(addPostRequestApi, action.payload.payload);
    console.log(data);
    action.payload.navigate(
      `/complain/${data.data.post_group}/${data.data._id}`
    );
    yield put(postComplainSuccess(data.data));
  } catch (error) {
    toast.error(error.message);
    yield put(postComplainFailed(error));
  }
}

function* getSinglePostRequest(action) {
  try {
    const data = yield call(getSinglePostRequestApi, action.payload);
    console.log(data);
    action.payload.setValue((prev) => ({
      ...prev,
      caption: data.data.caption,
      category: { value: data.data.category, label: data.data.category },
      // tags: data.data.tags,
    }));
    yield put(getSingleComplainSuccess(data));
  } catch (error) {
    toast.error(error.message);
    yield put(getSingleComplainFailed(error));
  }
}

function* voteSinglePostRequest(action) {
  try {
    const data = yield call(voteSinglePostRequestApi, action.payload);
    console.log("p", action.payload);
    yield put(voteSingleComplainSuccess(action.payload));
  } catch (error) {
    toast.error(error.message);
    yield put(voteSingleComplainFailed(error));
  }
}

function* updateSinglePostRequest(action) {
  try {
    const data = yield call(updateSinglePostRequestApi, action.payload);

    action.payload.navigate(`/post/${data.data.post_group}`);
    yield put(updateSingleComplainSuccess(data));
  } catch (error) {
    toast.error(error.message);
    yield put(updateSingleComplainFailed(error));
  }
}
function* getGroupPostRequest(action) {
  try {
    const data = yield call(getGroupPostRequestApi, action.payload);
    console.log(data);
    yield put(getGroupComplainSuccess(data));
  } catch (error) {
    toast.error(error.message);
    yield put(getGroupComplainFailed(error));
  }
}

function* getAllPostsRequest(action) {
  try {
    const data = yield call(getAllPostsRequestApi, action.payload);
    console.log(data);
    yield put(getAllComplainSuccess(data));
  } catch (error) {
    toast.error(error.message);
    yield put(getAllComplainFailed(error));
  }
}

function* updateComplainRequest(action) {
  try {
    // value: newValue, id, navigate
    const data = yield call(updateComplainRequestApi, action.payload);
    console.log(data);
    action.payload.navigate("/");
    yield put(updateComplainSuccess(data));
  } catch (error) {
    toast.error(error.message);
    yield put(updateComplainFailed(error));
  }
}

function* loginSaga() {
  yield takeEvery(ADD_POST_REQUEST, addPostRequest);
  yield takeEvery(GET_SINGLE_POST_REQUEST, getSinglePostRequest);
  yield takeEvery(VOTE_SINGLE_POST_REQUEST, voteSinglePostRequest);
  yield takeEvery(GET_ALL_POSTS_REQUEST, getAllPostsRequest);
  yield takeEvery(UPDATE_SINGLE_POST_REQUEST, updateSinglePostRequest);
  yield takeEvery(GET_GROUP_SINGLE_POST_REQUEST, getGroupPostRequest);
  yield takeEvery(UPDATE_COMPLAIN_REQUEST, updateComplainRequest);
}

export default loginSaga;
