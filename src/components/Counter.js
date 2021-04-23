import React, { useState } from "react";
import { useDispatch } from "react-redux";
import increment from "../actions/increment";
import decrement from "../actions/decrement";
import "./Counter.css";
import "bootstrap/dist/css/bootstrap.min.css";

const Counter = ({ by }) => {
  const [counter, setCounter] = useState(0);
  const dispatch = useDispatch();
  function handleClick(value) {
    let result = value ? counter + by : counter - by;
    setCounter(result);
    dispatch(value ? increment(by) : decrement(by));
  }

  return (
    <div className="Counter">
      <h3>Increment/Decrement by {by}</h3>
      <p className="Counter__count">{!counter ? <b>zero</b> : counter}</p>
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
    </div>
  );
};

export default Counter;
