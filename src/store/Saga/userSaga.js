import toast from "react-hot-toast";
import { call, takeEvery, put } from "redux-saga/effects";
import {
  changePasswordApi,
  changeUserDataApi,
  getLoggedUserApi,
} from "../../services/user.services";
import {
  getLoggedUserSuccess,
  getLoggedUserFailed,
  changePasswordSuccess,
  changePasswordFailed,
  changeUserDataSuccess,
  changeUserDataFailed,
} from "../Actions/userAction";
import {
  CHANGE_PASSWORD_REQUEST,
  CHANGE_USER_DATA_REQUEST,
  GET_LOGGED_USER_REQUEST,
} from "../Constants/userTypes";

function* getLoggedUser() {
  try {
    const data = yield call(getLoggedUserApi);
    yield put(getLoggedUserSuccess(data));
  } catch (error) {
    toast.error(error.message);
    yield put(getLoggedUserFailed(error));
  }
}

function* changePassword(action) {
  try {
    const data = yield call(changePasswordApi, action.payload.value);
    yield put(changePasswordSuccess(action.payload.setChangePassword));
    toast.success("password updated successfully");
  } catch (error) {
    toast.error(error.message);
    yield put(changePasswordFailed(error));
  }
}

function* changeUserData(action) {
  try {
    const data = yield call(changeUserDataApi, action.payload.value);
    action.payload.handleCloseModal();
    yield put(
      changeUserDataSuccess({
        data,
      })
    );

    toast.success("user data updated successfully");
  } catch (error) {
    toast.error(error.message);
    yield put(changeUserDataFailed(error));
  }
}

function* userSaga() {
  yield takeEvery(GET_LOGGED_USER_REQUEST, getLoggedUser);

  yield takeEvery(CHANGE_PASSWORD_REQUEST, changePassword);
  yield takeEvery(CHANGE_USER_DATA_REQUEST, changeUserData);
}

export default userSaga;
