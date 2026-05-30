import { useState } from "react";

function Counter({ title = "Counter" }) {
    const [count, setCount] = useState(5);

    return (
        <div>
            <h2>{count}</h2>
            <button onClick={() => setCount(count + 1)}>Increment</button>
        </div>
    );
}

export default Counter;