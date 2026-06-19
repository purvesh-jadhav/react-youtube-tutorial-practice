import React from 'react'
import { useState } from 'react'

const MultipleCondition = () => {
  
  const [count,setCount]=useState(0)
  return (
    <div>
      <h3>{count}</h3>
      <button onClick={()=>setCount(count+1)}>Counter</button>

      {
        count==0?<h4>Condition 0</h4>
        :count==1?<h4>Condition 1</h4>
        :count==2?<h4>Condition 2</h4>
        :count==3?<h4>Condition 3</h4>
        :count==4?<h4>Condition 4</h4>
        :count==5?<h4>Condition 5</h4>
        :<h4>Other condition</h4>
      }

    </div>
  )
}

// this is known as Conditional Rendering 

export default MultipleCondition
