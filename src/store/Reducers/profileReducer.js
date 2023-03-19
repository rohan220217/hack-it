import UserConstants from "../../constants/UserConstants";
import {
  SET_USER_TYPE,
  LOGIN_USER_REQUESTED,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAILURE,
  USER_LOGOUT,
  VERIFY_OTP_USER_REQUESTED,
  VERIFY_OTP_USER_SUCCESS,
  VERIFY_OTP_USER_FAILURE,
} from "../Constants/loginTypes";
import {
  GET_LOGGED_USER_REQUEST,
  GET_LOGGED_USER_RECEIVED,
  GET_LOGGED_USER_FAILED,
  CHANGE_PASSWORD_REQUEST,
  CHANGE_PASSWORD_RECEIVED,
  CHANGE_PASSWORD_FAILED,
  CHANGE_USER_DATA_REQUEST,
  CHANGE_USER_DATA_RECEIVED,
  CHANGE_USER_DATA_FAILED,
} from "../Constants/userTypes";

var localStorageToken = localStorage.getItem("hack-it-token");
var localStorageName = localStorage.getItem("hack-it-name");
var localStorageMobile = localStorage.getItem("hack-it-mobile");
var localStorageUserType = localStorage.getItem("hack-it-user-type");

const initialState = {
  isMobVerified: false,
  userType: localStorageUserType
    ? localStorageUserType
    : UserConstants.USER_TYPE_USER,
  token: localStorageToken ? localStorageToken : "",
  name: localStorageName ? localStorageName : "",
  mobile: localStorageMobile ? localStorageMobile : "",
  isLoginLoading: false,
  isVerifyUserLoading: false,

  loggedUserDetails: {},
  loggedUserDetailsLoading: false,

  changePasswordLoading: false,
  changeUserDataLoading: false,
};

export const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_TYPE:
      return { ...state, userType: action.payload };

    case LOGIN_USER_REQUESTED:
      return { ...state, isLoginLoading: true };

    case LOGIN_USER_SUCCESS:
      return {
        ...state,
        isLoginLoading: false,
        isMobVerified: true,
      };

    case LOGIN_USER_FAILURE:
      return { ...state, isLoginLoading: false };

    case VERIFY_OTP_USER_REQUESTED: {
      return {
        ...state,
        isVerifyUserLoading: true,
      };
    }

    case VERIFY_OTP_USER_SUCCESS: {
      localStorage.setItem("hack-it-token", action.payload.data.token);
      localStorage.setItem("hack-it-user-type", action.payload.data.type);
      localStorage.setItem("hack-it-name", action.payload.data.name);
      localStorage.setItem("hack-it-mobile", action.payload.data.mobile);

      return {
        ...state,
        isVerifyUserLoading: false,
        isMobVerified: false,
        token: action.payload.token,
        userType: action.payload.type,
        name: action.payload.name,
        mobile: action.payload.mobile,
      };
    }

    case VERIFY_OTP_USER_FAILURE: {
      return {
        ...state,
        isVerifyUserLoading: false,
      };
    }

    case USER_LOGOUT:
      localStorage.clear();
      return {
        ...state,
        token: "",
        userType: UserConstants.USER_TYPE_USER,
        name: "",
        mobile: "",
      };

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
