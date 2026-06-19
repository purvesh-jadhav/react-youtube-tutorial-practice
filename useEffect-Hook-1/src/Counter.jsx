import React, { useEffect, useState } from "react";

const Counter = ({ count, data }) => {
  function handleCounter() {
    console.log("handle counter function called");
  }

  function handleData() {
    console.log("handle data called ");
  }
  useEffect(() => {
    handleCounter();
  }, []);

  useEffect(()=>{
    handleData();
  },[data])
  return (
    <div>
      <h3>Counter Value {count}</h3> 
      <h3>Data Value {data}</h3>
    </div>
  );
};

export default Counter;
