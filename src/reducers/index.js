import { combineReducers } from "redux";
import authReducer from "./authReducer";
import messageReducer from "./messageReducer";
import postReducer from "./postReducer";
import userReducer from "./userReducer"
import loadingReducer from "./loadingReducer"
import modalReducer from "./modalReducer";
import chatReducer from "./chatReducer"

export default combineReducers({
  authReducer,
  messageReducer,
  postReducer,
  userReducer,
  loadingReducer,
  modalReducer,
  chatReducer,
});
