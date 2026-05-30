// useState
import { useState } from "react";

// useEffect
import { useEffect } from 'react';

// useRef
import { useRef } from 'react';


function App() {
  // useState returns two things
  // 1. 'count' — the current value (starts at 0)
  // 2. 'setCount' — the function to update it

  const [count, setCount] = useState(0);

  // useEffect is a hook that is used to perform side effects in a React component.
  // bcoz we used [count] as the dependency array, the effect will only run when the count changes.
  // if we use no dependency array, it will log on every render, and if we use an empty array, it will log only once.

  useEffect(() => {
    console.log('count changed to: ', count)
  }, [count]);

  // using useEffect to update localStorage
  useEffect(() => {
    localStorage.setItem('count', count);
  }, [count])

  // useRef — stores a value WITHOUT causing re-renders
  // renderCount.current is like a variable that persists across renders
  const renderCount = useRef(0);

  // useEffect with no dependency array — runs after EVERY render
  useEffect(() => {
    // we increment current directly — this doesn't trigger a re-render
    // if we used useState here, it would cause an infinite loop

    renderCount.current += 1;
    console.log('Component rendered:', renderCount.current, 'times');
  })

  return (
    <div>
      {/* Display the current count */}
      <h1>{count}</h1>

      {/* When clicked, setCount updates the value by 1 */}
      {/* React sees the state changed and re-renders the component */}

      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>

      <button onClick={() => setCount(0)}>
        Zero
      </button>

      <button onClick={() => setCount(count - 1)}>
        Decrement
      </button>
    </div>
  );
}

export default App;
