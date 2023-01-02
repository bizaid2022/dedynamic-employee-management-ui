import { combineReducers } from "redux";
import authReducer from "../services/authSlice";
import employeeReducer from "../services/employeeSlice";

const appReducer = combineReducers({
  employees: employeeReducer,
  auth: authReducer,
});

const rootReducer = (state, action) => {
  if (action.type === "auth/logout") {
    // eslint-disable-next-line no-param-reassign
    state = undefined;
  }
  return appReducer(state, action);
};

export default rootReducer;
