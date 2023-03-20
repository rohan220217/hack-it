import toast from "react-hot-toast";
import { call, takeEvery, put } from "redux-saga/effects";
import {
  loginRequestApi,
  otpVerifyRequestApi,
} from "../../services/login.services";
import {
  loginUserFailure,
  loginUserSuccess,
  verifyOtpUserFailure,
  verifyOtpUserSuccess,
} from "../Actions/loginAction";
import {
  LOGIN_USER_REQUESTED,
  VERIFY_OTP_USER_REQUESTED,
} from "../Constants/loginTypes";

function* loginRequest(action) {
  try {
    const data = yield call(loginRequestApi, action.payload);
    yield put(loginUserSuccess(data));
  } catch (error) {
    toast.error(error.message);
    yield put(loginUserFailure(error));
  }
}

function* otpVerifyRequest(action) {
  try {
    const data = yield call(otpVerifyRequestApi, action.payload);
    yield put(verifyOtpUserSuccess(data));
    action.payload.next('/');
  } catch (error) {
    toast.error(error.message);
    yield put(verifyOtpUserFailure(error));
  }
}

function* loginSaga() {
  yield takeEvery(LOGIN_USER_REQUESTED, loginRequest);
  yield takeEvery(VERIFY_OTP_USER_REQUESTED, otpVerifyRequest);
}

export default loginSaga;
