import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div style={{ textAlign: "center", marginTop: "40px" }}>
      <h1>Counter App</h1>

      <CounterDisplay count={count} />
      <CounterButtons count={count} setCount={setCount} />
    </div>
  );
}

function CounterDisplay({ count }) {
  return <h2>Count: {count}</h2>;
}

function CounterButtons({ count, setCount }) {
  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Increase</button>
      <button onClick={() => setCount(count - 1)}>Decrease</button>
    </div>
  );
}

export default Counter;
