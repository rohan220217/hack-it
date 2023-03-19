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
};

export const loginReducer = (state = initialState, action) => {
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

    default:
      return state;
  }
};
