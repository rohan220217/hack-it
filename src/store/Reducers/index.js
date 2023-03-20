import { combineReducers } from "redux";
import { profileReducer } from "./profileReducer";
import { postReducer } from "./postReducer";

const rootReducer = combineReducers({
  profileReducer,
  postReducer,
});

export default rootReducer;
