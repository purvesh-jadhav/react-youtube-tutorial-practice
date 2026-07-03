import React from "react";
import User from "./User";

const App = () => {
  const displayName = (name) => {
    alert(name);
  };
  const getUser =()=>{
    alert('getUser function called')
  }
  return (
    <div>
      <h3>Pass function in a component as a props</h3>
      <hr />
      <h3>Call parent component function from child component</h3>

      <User displayName={displayName} name="purvesh" getUser={getUser} />
      <User displayName={displayName} name="sarthak" getUser={getUser}/>
      <User displayName={displayName} name="vedant" getUser={getUser}/>
      <User displayName={displayName} name="sairaj" getUser={getUser}/>
    </div>
  );
};

export default App;
