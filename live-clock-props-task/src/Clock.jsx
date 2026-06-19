import React, { useEffect, useState } from "react";

const Clock = ({color}) => {
  const [time, setTime] = useState(0);
  useEffect(() => {
    setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);
  }, []);
  return (
    <div>
      <h1
        style={{
          color: color,
          backgroundColor: "#EED9B9",
          width: "170px",
          margin: "12px auto",
          padding: "20px",
          borderRadius: "10px",
          textAlign:"center"
        }}
      >
        {time}
      </h1>
    </div>
  );
};

export default Clock;
