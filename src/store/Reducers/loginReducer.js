import UserConstants from "../../constants/UserConstants";
import {
  SET_USER_TYPE,
  LOGIN_REQUEST,
  LOGIN_REQUEST_SUCCESS,
  LOGIN_REQUEST_FAILED,
  USER_LOGOUT,
} from "../Constants/loginTypes";

var localStorageToken = localStorage.getItem("hack-it-token");
var localStorageUserType = localStorage.getItem("hack-it-user-type");

const initialState = {
  userType: localStorageUserType
    ? localStorageUserType
    : UserConstants.USER_TYPE_USER,
  token: localStorageToken ? localStorageToken : "",
  isLoginLoading: false,
};

export const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_TYPE:
      return { ...state, userType: action.payload };

    case LOGIN_REQUEST:
      return { ...state, isLoginLoading: true };

    case LOGIN_REQUEST_SUCCESS:
      localStorage.setItem("hack-it-token", action.payload.token);
      localStorage.setItem("hack-it-user-type", action.payload.type);
      return {
        ...state,
        token: action.payload.token,
        isLoginLoading: false,
        userType: action.payload.type,
      };

    case LOGIN_REQUEST_FAILED:
      return { ...state, isLoginLoading: false };

    case USER_LOGOUT:
      localStorage.clear();
      return { ...state, token: "", userType: UserConstants.USER_TYPE_USER };

    default:
      return state;
  }
};
