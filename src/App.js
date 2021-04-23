import { useSelector } from "react-redux";
import "./App.css";
import Counter from "./components/Counter";
import counter from "./reducers/counter";

function App() {
  const counter = useSelector((state) => state.counter);

  return (
    <div className="App">
      <h2>Redux</h2>
      <div className="ukupno">
        <p>
          <b>Total: </b>
          {counter}
        </p>
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
