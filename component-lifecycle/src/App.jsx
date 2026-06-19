import React, { useState, useEffect } from "react";

function Lifecycle() {
  const [count, setCount] = useState(0);

  // Mount + Unmount
  useEffect(() => {
    console.log("Component Mounted");

    return () => {
      console.log("Component Unmounted");
    };
  }, []);

  // Update
  useEffect(() => {
    console.log("Component Updated:", count);
  }, [count]);

  return (
    <div>
      <h2>Count: {count}</h2>

      <button onClick={() => setCount(count + 1)}>
        Increase
      </button>
    </div>
  );
}


export default function App() {
  const [show, setShow] = useState(true);

  return (
    <div>

      <button onClick={() => setShow(!show)}>
        Toggle
      </button>

      {show && <Lifecycle />}

    </div>
  );
}