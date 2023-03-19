import {
  GET_ALL_INSTRUCTORS_REQUEST,
  GET_ALL_INSTRUCTORS_RECEIVED,
  GET_ALL_INSTRUCTORS_FAILED,
  GET_ALL_TA_REQUEST,
  GET_ALL_TA_RECEIVED,
  GET_ALL_TA_FAILED,
  GET_LOGGED_USER_REQUEST,
  GET_LOGGED_USER_RECEIVED,
  GET_LOGGED_USER_FAILED,
  GET_LOGGED_USER_ENROLLED_COURSE_RECEIVED,
  GET_LOGGED_USER_ENROLLED_COURSE_REQUEST,
  GET_LOGGED_USER_ENROLLED_COURSE_FAILED,
  CHANGE_PASSWORD_REQUEST,
  CHANGE_PASSWORD_RECEIVED,
  CHANGE_PASSWORD_FAILED,
  CHANGE_USER_DATA_REQUEST,
  CHANGE_USER_DATA_RECEIVED,
  CHANGE_USER_DATA_FAILED,
  GET_LIKE_COURSES_FAILED,
  GET_LIKE_COURSES_RECEIVED,
  GET_LIKE_COURSES_REQUEST,
} from "../Constants/userTypes";

export const fetchAllInstructors = () => {
  return { type: GET_ALL_INSTRUCTORS_REQUEST };
};

export const fetchAllInstructorsSuccess = (data) => {
  return { type: GET_ALL_INSTRUCTORS_RECEIVED, payload: data };
};

export const fetchAllInstructorsFailed = (data) => {
  return { type: GET_ALL_INSTRUCTORS_FAILED, payload: data };
};

export const fetchAllTA = () => {
  return { type: GET_ALL_TA_REQUEST };
};

export const fetchAllTASuccess = (data) => {
  return { type: GET_ALL_TA_RECEIVED, payload: data };
};

export const fetchAllTAFailed = (data) => {
  return { type: GET_ALL_TA_FAILED, payload: data };
};

export const getLoggedUser = () => {
  return { type: GET_LOGGED_USER_REQUEST };
};

export const getLoggedUserSuccess = (data) => {
  return { type: GET_LOGGED_USER_RECEIVED, payload: data };
};

export const getLoggedUserFailed = (data) => {
  return { type: GET_LOGGED_USER_FAILED, payload: data };
};

export const getLoggedUserEnrolledCourse = () => {
  return { type: GET_LOGGED_USER_ENROLLED_COURSE_REQUEST };
};

export const getLoggedUserEnrolledCourseSuccess = (data) => {
  return { type: GET_LOGGED_USER_ENROLLED_COURSE_RECEIVED, payload: data };
};

export const getLoggedUserEnrolledCourseFailed = (data) => {
  return { type: GET_LOGGED_USER_ENROLLED_COURSE_FAILED, payload: data };
};

export const getLikeCoursesRequest = (data) => {
  return { type: GET_LIKE_COURSES_REQUEST, payload: data };
};
export const getLikeCoursesSuccess = (data) => {
  return { type: GET_LIKE_COURSES_RECEIVED, payload: data };
};
export const getLikeCoursesFailed = (data) => {
  return { type: GET_LIKE_COURSES_FAILED, payload: data };
};

export const changePasswordRequest = (data) => {
  return { type: CHANGE_PASSWORD_REQUEST, payload: data };
};

export const changePasswordSuccess = (data) => {
  return { type: CHANGE_PASSWORD_RECEIVED, payload: data };
};

export const changePasswordFailed = (data) => {
  return { type: CHANGE_PASSWORD_FAILED, payload: data };
};

export const changeUserDataRequest = (data) => {
  return { type: CHANGE_USER_DATA_REQUEST, payload: data };
};

export const changeUserDataSuccess = (data) => {
  return { type: CHANGE_USER_DATA_RECEIVED, payload: data };
};

export const changeUserDataFailed = (data) => {
  return { type: CHANGE_USER_DATA_FAILED, payload: data };
};
