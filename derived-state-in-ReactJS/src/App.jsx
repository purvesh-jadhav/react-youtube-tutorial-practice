import React, { useState } from "react";

const App = () => {
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState("");

  function handleAllUsers() {
    setUsers([...users, user]);
  }

  const total=users.length;
  const last=users[users.length-1]

  return (
    <div>
      <h2>Total User : {total}</h2>
      <h2>Last User : {last}</h2>

      <input
        onChange={(event) => setUser(event.target.value)}
        type="text"
        placeholder="Add new user"
      />

      <button onClick={handleAllUsers}>Add User</button>

      {users.map((item, index) => (
        <h2 key={index}>{item}</h2>
      ))}
    </div>
  ); 
};

export default App;