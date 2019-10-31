//Meeting place for all other reducers
import { combineReducers } from "redux";
import users from "./users";
import errors from "./errors";
import auth from "./auth";
import messages from "./messages";
import parks from "./parks";

export default combineReducers({
  users,
  errors,
  auth,
  messages,
  parks
});
