import toast from "react-hot-toast";
import { call, takeEvery, put } from "redux-saga/effects";
import { addPostRequestApi } from "../../services/post.services";
import {
  postComplain,
  postComplainFailed,
  postComplainSuccess,
} from "../Actions/postAction";
import {
  ADD_POST_REQUEST,
  ADD_POST_REQUEST_FAILED,
  ADD_POST_REQUEST_SUCCESS,
} from "../Constants/postTypes";

function* addPostRequest(action) {
  try {
    const data = yield call(addPostRequestApi, action.payload);
    yield put(postComplainSuccess(data));
  } catch (error) {
    toast.error(error.message);
    yield put(postComplainFailed(error));
  }
}

function* loginSaga() {
  yield takeEvery(ADD_POST_REQUEST, addPostRequest);
}

export default loginSaga;
