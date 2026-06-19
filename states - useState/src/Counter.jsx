import React from "react";
import { useState } from "react";
import "./Counter.css";

const Counter = () => {
  const [Count, setCount] = useState(0);
  return (
    <div id="container">
      <h3 id="counter">Count: {Count}</h3>
      <div id="btn-container">
        <button id="btn" onClick={() => setCount(Count + 1)}>
          Increase
        </button>
        <button id="btn" onClick={() => setCount(Count - 1)}>
          Decrease
        </button>
      </div>
    </div>
  );
};

export default Counter;
