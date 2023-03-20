import toast from "react-hot-toast";
import { call, takeEvery, put } from "redux-saga/effects";
import {
  addPostRequestApi,
  getSinglePostRequestApi,
  updateSinglePostRequestApi,
  getGroupPostRequestApi,
} from "../../services/post.services";
import {
  getGroupComplainFailed,
  getGroupComplainSuccess,
  getSingleComplainFailed,
  getSingleComplainSuccess,
  postComplain,
  postComplainFailed,
  postComplainSuccess,
  updateSingleComplainFailed,
  updateSingleComplainSuccess,
} from "../Actions/postAction";
import {
  ADD_POST_REQUEST,
  ADD_POST_REQUEST_FAILED,
  ADD_POST_REQUEST_SUCCESS,
  GET_GROUP_SINGLE_POST_REQUEST,
  GET_SINGLE_POST_REQUEST,
  UPDATE_SINGLE_POST_REQUEST,
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
      category: data.data.category,
      // category: { label: data.data.category, value: data.data.category },
      tags: data.data.tags,
    }));
    yield put(getSingleComplainSuccess(data));
  } catch (error) {
    toast.error(error.message);
    yield put(getSingleComplainFailed(error));
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

function* loginSaga() {
  yield takeEvery(ADD_POST_REQUEST, addPostRequest);
  yield takeEvery(GET_SINGLE_POST_REQUEST, getSinglePostRequest);
  yield takeEvery(UPDATE_SINGLE_POST_REQUEST, updateSinglePostRequest);
  yield takeEvery(GET_GROUP_SINGLE_POST_REQUEST, getGroupPostRequest);
}

export default loginSaga;
