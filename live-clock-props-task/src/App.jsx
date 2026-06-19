import React, { useState } from "react";
import Clock from "./Clock";

const App = () => {
  const [color, setColor] = useState("red");
  return (
    <div style={{ textAlign: "center", color: "maroon" }}>

      <h1>Digital Live clock in React JS</h1>

      <select onChange={(event) => {setColor(event.target.value)}}>
        <option value="red">Red</option>
        <option value="green">Green</option>
        <option value="maroon">Maroon</option>
        <option value="orange">Orange</option>
      </select>
      
      <Clock color={color} />
    </div>
  );
};

export default App;
