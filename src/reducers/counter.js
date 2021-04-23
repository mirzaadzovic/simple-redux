import { useSelector } from "react-redux";

const counter = (state = 0, action) => {
  console.log(action.type + " " + state);
  switch (action.type) {
    case "INCREMENT":
      return state + action.by;
    case "DECREMENT":
      return state - action.by;
    case "RESET":
      return state - action.counter;
    default:
      return 0;
  }
};

export default counter;
