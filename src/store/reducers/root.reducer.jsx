import { combineReducers } from "redux";
import commonReducer from "./common.reducer";
import { modalReducer } from "./modal.reducer";
import courseReducer from "./course.reducer";
import userReducer from "./user.reducer";
const rootReducer = combineReducers({
  user: userReducer,
  common: commonReducer,
  course: courseReducer,
  modal: modalReducer,
});

export default rootReducer;
