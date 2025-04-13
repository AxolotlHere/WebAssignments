import React, { useState } from "react";

const CounterUseState = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h3>Counter with useState</h3>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increase</button>
      <button onClick={() => setCount(count - 1)}>Decrease</button>
    </div>
  );
};

export default CounterUseState;
