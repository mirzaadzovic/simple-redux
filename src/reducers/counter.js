const counter = (state = 0, action) => {
  console.log(action.type + " " + state);
  switch (action.type) {
    case "INCREMENT":
      return state + action.by;
    case "DECREMENT":
      return state - action.by;
    default:
      return state;
  }
};

export default counter;
