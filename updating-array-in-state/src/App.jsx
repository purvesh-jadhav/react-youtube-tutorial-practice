import React, { useState } from "react";

const App = () => {
  const [data, setData] = useState(["Purvesh", "Sarthak", "Vedant"]);
  const [value, setValue] = useState("");

  function addData() {
    if (value.trim() === "") return;

    setData([...data, value]);
    setValue("");
  }

  function handleKeyDown(e) {
    if (e.key === "Enter") {
      addData();
    }
  }

  return (
    <div>
      <h3>Updating array in state</h3>
      <hr />

      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder="Enter name"
      />

      <button onClick={addData}>Update List</button>

      <hr />

      {data.map((name, index) => (
        <h3 key={index}>{name}</h3>
      ))}
    </div>
  );
};

export default App;
//this is main codee