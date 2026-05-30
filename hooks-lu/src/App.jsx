import { useState, useEffect } from "react";
import { ThemeProvider } from "./context/ThemeContext.jsx";
import Child from "./Child";

function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("Component Mounted");
  }, []);

  useEffect(() => {
    console.log("Count changed:", count);
  }, [count]);

  return (
    <ThemeProvider>
      <div>
        <h1>{count}</h1>

        <button onClick={() => setCount(count + 1)}>
          Increment
        </button>

        <button onClick={() => setCount(0)}>
          Reset
        </button>

        <Child />
      </div>
    </ThemeProvider>
  );
}

export default App;