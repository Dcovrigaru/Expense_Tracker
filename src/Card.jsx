// src/components/Card.jsx
import { useState } from "react";

export default function Card() {
  const [count, setCount] = useState(0);

  return (
    <div className="card">
      <button onClick={() => setCount((prevCount) => prevCount + 1)}>
        count is {count}
      </button>
      <p>
        Edit <code>src/components/Card.jsx</code> and save to test HMR
      </p>
    </div>
  );
}
