import toast from "react-hot-toast";
import { call, takeEvery, put } from "redux-saga/effects";
import { loginRequestApi } from "../../services/login.services";
import { loginFailed, loginSuccess } from "../Actions/loginAction";
import { LOGIN_REQUEST } from "../Constants/loginTypes";

function* loginRequest(action) {
  try {
    const data = yield call(loginRequestApi, action.payload);
    yield put(loginSuccess(data));
  } catch (error) {
    toast.error(error.message);
    yield put(loginFailed(error));
  }
}

function* loginSaga() {
  yield takeEvery(LOGIN_REQUEST, loginRequest);
}

export default loginSaga;
