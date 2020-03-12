import { combineReducers } from "redux";
import statesReducer from "./states/statesReducer";

export default combineReducers({
  state: statesReducer
});
