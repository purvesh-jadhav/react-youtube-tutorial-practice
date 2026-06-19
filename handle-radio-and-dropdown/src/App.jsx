import React, { useState } from "react";

const App = () => {
  const [gender, setGender] = useState("");
  const [city, setCity] = useState("");
  return (
    <div>
      <h2>Handle Radio and Dropdown</h2>

      <h4>Select Gender :</h4>
      <input
        type="radio"
        onChange={(event) => setGender(event.target.value)}
        name="gender"
        id="male"
        value="male"
      />
      <label htmlFor="male">Male</label>
      <br />
      <input
        type="radio"
        onChange={(event) => setGender(event.target.value)}
        name="gender"
        id="female"
        value="female"
      />
      <label htmlFor="female">Female</label>

      <h4>Selected Gender : {gender}</h4>

      <hr />

      <h4>Select City :</h4>
      <select
        onChange={(event) => setCity(event.target.value)}
        defaultValue={"Mumbai"}
      >
        <option value="Pune">Pune</option>
        <option value="Mumbai">Mumbai</option>
        <option value="Chennai">Chennai</option>
        <option value="Delhi">Delhi</option>
      </select>

      <h4>Selected City : {city}</h4>
    </div>
  );
};

export default App;
