import { useSelector, useDispatch } from "react-redux";
import UserFetcher from "./UserFetcher";

function App() {

  // useSelector — reads current state from store
  const count = useSelector(state => state.counter);
  const user = useSelector(state => state.user.name);

  // useDispatch — lets us send actions to the store
  const dispatch = useDispatch();

  return (
    <div>
      <h1>
        Count: {count}
      </h1>

      <button onClick={() => dispatch({ type: "INCREMENT" })}>
        +
      </button>

      <button onClick={() => dispatch({ type: "RESET" })}>
        reset
      </button>

      <button onClick={() => dispatch({ type: "DECREMENT" })} >
        -
      </button>



      <h2>Name: {user || "No name set"} </h2>
      <button onClick={() => dispatch({ type: "SET_NAME", payload: "Arjun" })}>
        Set Name to Arjun
      </button>

      <button onClick={() => dispatch({ type: "SET_NAME", payload: "Ashwin" })}>
        Set Name to Ashwin
      </button>

      <UserFetcher />

    </div>
  )

}

export default App;
