import toast from "react-hot-toast";
import { call, takeEvery, put } from "redux-saga/effects";
import {
  changePasswordApi,
  changeUserDataApi,
  getAllInstructorsApi,
  getAllTAApi,
  getLoggedUserApi,
  getLoggedUserEnrolledCourseApi,
  getLoggedUserlikedCourseApi,
} from "../../services/user.services";
import {
  fetchAllInstructorsSuccess,
  fetchAllInstructorsFailed,
  fetchAllTASuccess,
  fetchAllTAFailed,
  getLoggedUserSuccess,
  getLoggedUserFailed,
  getLoggedUserEnrolledCourseSuccess,
  getLoggedUserEnrolledCourseFailed,
  changePasswordSuccess,
  changePasswordFailed,
  changeUserDataSuccess,
  changeUserDataFailed,
  getLikeCoursesSuccess,
  getLikeCoursesFailed,
} from "../Actions/userAction";
import {
  CHANGE_PASSWORD_REQUEST,
  CHANGE_USER_DATA_REQUEST,
  GET_ALL_INSTRUCTORS_REQUEST,
  GET_ALL_TA_REQUEST,
  GET_LIKE_COURSES_REQUEST,
  GET_LOGGED_USER_ENROLLED_COURSE_REQUEST,
  GET_LOGGED_USER_REQUEST,
} from "../Constants/userTypes";

function* fetchAllInstructors(action) {
  try {
    const data = yield call(getAllInstructorsApi);
    yield put(fetchAllInstructorsSuccess(data));
  } catch (error) {
    toast.error(error.message);
    yield put(fetchAllInstructorsFailed(error));
  }
}

function* fetchAllTA() {
  try {
    const data = yield call(getAllTAApi);
    yield put(fetchAllTASuccess(data));
  } catch (error) {
    toast.error(error.message);
    yield put(fetchAllTAFailed(error));
  }
}

function* getLoggedUser() {
  try {
    const data = yield call(getLoggedUserApi);
    yield put(getLoggedUserSuccess(data));
  } catch (error) {
    toast.error(error.message);
    yield put(getLoggedUserFailed(error));
  }
}

function* getLoggedUserEnrolledCourse() {
  try {
    const data = yield call(getLoggedUserEnrolledCourseApi);
    yield put(getLoggedUserEnrolledCourseSuccess(data));
  } catch (error) {
    toast.error(error.message);
    yield put(getLoggedUserEnrolledCourseFailed(error));
  }
}

function* getLoggedUserlikedCourse() {
  try {
    const data = yield call(getLoggedUserlikedCourseApi);
    yield put(getLikeCoursesSuccess(data));
  } catch (error) {
    toast.error(error.message);
    yield put(getLikeCoursesFailed(error));
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
    yield put(
      changeUserDataSuccess({
        data,
        setChangeUser: action.payload.setChangeUser,
      })
    );

    toast.success("user data updated successfully");
  } catch (error) {
    toast.error(error.message);
    yield put(changeUserDataFailed(error));
  }
}

function* userSaga() {
  yield takeEvery(GET_ALL_INSTRUCTORS_REQUEST, fetchAllInstructors);
  yield takeEvery(GET_ALL_TA_REQUEST, fetchAllTA);

  yield takeEvery(GET_LOGGED_USER_REQUEST, getLoggedUser);
  yield takeEvery(
    GET_LOGGED_USER_ENROLLED_COURSE_REQUEST,
    getLoggedUserEnrolledCourse
  );
  yield takeEvery(GET_LIKE_COURSES_REQUEST, getLoggedUserlikedCourse);

  yield takeEvery(CHANGE_PASSWORD_REQUEST, changePassword);
  yield takeEvery(CHANGE_USER_DATA_REQUEST, changeUserData);
}

export default userSaga;
