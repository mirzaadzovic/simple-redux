import { combineReducers } from "redux";
import counter from "./counter";
import countersStates from "./countersStates";

const allReducers = combineReducers({
  counter: counter,
  countersStates: countersStates,
});
export default allReducers;
