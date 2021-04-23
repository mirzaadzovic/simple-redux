import React from "react";
import {useDispatch, useSelector} from "react-redux";
import increment from "../actions/increment";
import decrement from "../actions/decrement";
import "./Counter.css";
import "bootstrap/dist/css/bootstrap.min.css";

const Counter = ({by}) => {
  let counters = useSelector((state) => state.countersStates);
  const counter = counters.find((c) => c.id == by).counter;
  const dispatch = useDispatch();

  function handleClick(value) {
    console.log(counter);
    let result = value ? counter + by : counter - by;
    dispatch(value ? increment(by) : decrement(by));
  }

  function resetCounter() {
    dispatch({by: by, type: "RESET", counter: counter});
  }

  return (
    <div className="Counter">
      <h4 style={{wordWrap: "break-word"}}>Increment/Decrement by {by}</h4>
      <p className="Counter__count">{!counter ? <b>zero</b> : counter} </p>
      <button
        className="btn btn-secondary"
        onClick={() => handleClick(false)}
        disabled={!counter}
      >
        -
      </button>
      <button className="btn btn-primary" onClick={() => handleClick(true)}>
        +
      </button>
      <div>
        {!counter ? null : (
          <button className="btn btn-warning" onClick={resetCounter}>
            Reset
          </button>
        )}
      </div>
    </div>
  );
};

export default Counter;
