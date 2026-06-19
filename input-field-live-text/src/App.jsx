import React from 'react'
import { useState } from 'react'

const App = () => {
  const [val,setVal]=useState("Purvesh")

  return (
    <div>
      <h4>Input field live & clear</h4>
      <input onChange={(event)=>setVal(event.target.value)} 
      type="text" placeholder='Enter UserName' value={val}/>

      <br /> <hr />

      <h4>{val}</h4>
      <button onClick={()=>setVal("")}>Clear value</button>

    </div>
  )
}

export default App


{/* this is the concept and example of onChnage event */}
