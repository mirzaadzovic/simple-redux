import { useSelector, useDispatch } from "react-redux";
import "./App.css";
import Counter from "./components/Counter";
import decrement from "./actions/decrement";
function App() {
  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  return (
    <div className="App">
      <h2>Redux</h2>
      <div className="ukupno">
        <p>
          <b>Total: </b>
          {counter}
        </p>
        {counter ? (
          <button
            className="btn btn-danger"
            onClick={() => dispatch({ type: "RESET_ALL" })}
          >
            Reset all
          </button>
        ) : null}
      </div>
      <Counter by={1} />
      <Counter by={2} />
      <Counter by={3} />
      <Counter by={5} />
      <Counter by={10} />
      <Counter by={100} />
    </div>
  );
}

export default App;
