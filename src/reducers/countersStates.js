const counters = [
  {
    id: 1,
    counter: 0,
  },
  {
    id: 2,
    counter: 0,
  },
  {
    id: 3,
    counter: 0,
  },
  {
    id: 5,
    counter: 0,
  },
  {
    id: 10,
    counter: 0,
  },
  {
    id: 100,
    counter: 0,
  },
];

const countersStates = (state = counters, action) => {
  console.log("countersstate");
  switch (action.type) {
    case "INCREMENT":
      return state.map((c) =>
        c.id == action.by ? {id: c.id, counter: c.counter + action.by} : c
      );
    case "DECREMENT":
      return state.map((c) =>
        c.id == action.by ? {id: c.id, counter: c.counter - action.by} : c
      );
    case "RESET":
      return state.map((c) => (c.id == action.by ? {id: c.id, counter: 0} : c));
    default:
      return counters;
  }
};

export default countersStates;
