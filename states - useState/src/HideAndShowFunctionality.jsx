import React from "react";
import { useState } from "react";

const HideAndShowFunctionality = () => {
  const [result, setResult] = useState(true);
  return (
    <div>
      <h4>Hello from hide and show component !!</h4>
      {
        result?<h3>Hello Purvesh !!</h3>:<h3>Hello User !!</h3>
      }

      <button onClick={()=>setResult(!result)}>Toggle</button>

    </div>
  );
};

export default HideAndShowFunctionality;
