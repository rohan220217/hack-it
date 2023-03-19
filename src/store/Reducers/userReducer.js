import { act } from "@testing-library/react";
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
  GET_LOGGED_USER_ENROLLED_COURSE_REQUEST,
  GET_LOGGED_USER_ENROLLED_COURSE_RECEIVED,
  GET_LOGGED_USER_ENROLLED_COURSE_FAILED,
  CHANGE_PASSWORD_REQUEST,
  CHANGE_PASSWORD_RECEIVED,
  CHANGE_PASSWORD_FAILED,
  CHANGE_USER_DATA_REQUEST,
  CHANGE_USER_DATA_RECEIVED,
  CHANGE_USER_DATA_FAILED,
  GET_LIKE_COURSES_REQUEST,
  GET_LIKE_COURSES_RECEIVED,
  GET_LIKE_COURSES_FAILED,
} from "../Constants/userTypes";

const initialState = {
  allInstructors: [],
  allInstructorLoading: false,
  allTA: [],
  allTALoading: false,
  // TAUpdateRejectedLoading: [],
  // TAUpdateSuccessLoading: [],
  loggedUserDetails: {},
  loggedUserDetailsLoading: false,
  loggedUserEnrolledCourse: [],
  loggedUserEnrolledCourseLoading: false,
  changePasswordLoading: false,
  changeUserDataLoading: false,
  loggedUserlikedCourse: [],
  loggedUserlikedCourseLoading: false,
};

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_INSTRUCTORS_REQUEST:
      return { ...state, allInstructorLoading: true };

    case GET_ALL_INSTRUCTORS_RECEIVED:
      return {
        ...state,
        allInstructorLoading: false,
        allInstructors: action.payload,
      };

    case GET_ALL_INSTRUCTORS_FAILED:
      return { ...state, allInstructorLoading: false };

    case GET_ALL_TA_REQUEST:
      return { ...state, allTALoading: true };

    case GET_ALL_TA_RECEIVED:
      return {
        ...state,
        allTA: action.payload,
        allTALoading: false,
      };

    case GET_ALL_TA_FAILED:
      return { ...state, allTALoading: false };

    case GET_LOGGED_USER_REQUEST:
      return { ...state, loggedUserDetailsLoading: true };

    case GET_LOGGED_USER_RECEIVED:
      return {
        ...state,
        loggedUserDetails: action.payload,
        loggedUserDetailsLoading: false,
      };

    case GET_LOGGED_USER_FAILED:
      return { ...state, loggedUserDetailsLoading: false };

    case GET_LOGGED_USER_ENROLLED_COURSE_REQUEST:
      return { ...state, loggedUserEnrolledCourseLoading: true };

    case GET_LOGGED_USER_ENROLLED_COURSE_RECEIVED:
      return {
        ...state,
        loggedUserEnrolledCourse: action.payload,
        loggedUserEnrolledCourseLoading: false,
      };

    case GET_LOGGED_USER_ENROLLED_COURSE_FAILED:
      return { ...state, loggedUserEnrolledCourseLoading: false };

    case GET_LIKE_COURSES_REQUEST:
      return { ...state, loggedUserlikedCourseLoading: true };

    case GET_LIKE_COURSES_RECEIVED:
      return {
        ...state,
        loggedUserlikedCourse: action.payload,
        loggedUserlikedCourseLoading: false,
      };

    case GET_LIKE_COURSES_FAILED:
      return { ...state, loggedUserlikedCourseLoading: false };

    case CHANGE_PASSWORD_REQUEST:
      return { ...state, changePasswordLoading: true };

    case CHANGE_PASSWORD_RECEIVED:
      action.payload(false);
      return {
        ...state,
        changePasswordLoading: false,
      };

    case CHANGE_PASSWORD_FAILED:
      return { ...state, changePasswordLoading: false };

    case CHANGE_USER_DATA_REQUEST:
      return { ...state, changeUserDataLoading: true };

    case CHANGE_USER_DATA_RECEIVED:
      action.payload.setChangeUser(false);
      return {
        ...state,
        loggedUserDetails: action.payload.data,
        changeUserDataLoading: false,
      };

    case CHANGE_USER_DATA_FAILED:
      return { ...state, changeUserDataLoading: false };

    default:
      return state;
  }
};
