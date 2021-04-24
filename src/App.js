import {useSelector, useDispatch} from "react-redux";
import "./App.css";
import Counter from "./components/Counter";
import decrement from "./actions/decrement";
function App() {
  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  return (
    <div className="App">
      <h2>Redux Counters</h2>
      <div className="ukupno">
        <p
          style={{
            maxWidth: "200px",
            margin: "0 auto",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            position: "relative",
          }}
        >
          <b>Total: </b>
          {counter}
        </p>
        <div style={{maxWidth: "200px", height: "30px", margin: "0 auto"}}>
          {counter ? (
            <button
              style={{margin: "0 auto"}}
              className="btn btn-danger"
              onClick={() => dispatch({type: "RESET_ALL"})}
            >
              Reset all
            </button>
          ) : null}
        </div>
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
