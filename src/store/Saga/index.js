import { all } from "redux-saga/effects";
import loginSaga from "./loginSaga";
import userSaga from "./userSaga";
import postSaga from "./postSaga";

export default function* rootSaga() {
  yield all([loginSaga(), userSaga(), postSaga()]);
}
