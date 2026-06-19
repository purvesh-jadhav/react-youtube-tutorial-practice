import React from 'react'
import { useState } from 'react'
import Counter from './Counter'
import HideAndShowFunctionality from './HideAndShowFunctionality'
import MultipleCondition from './MultipleCondition'

const App = () => {

  const [fruit,setFruit]=useState("Apple")

  const handleFruit = () =>{
    setFruit("Banana")
  }

  return (
    <div>
      <h1>State in React.js</h1>
      <h2>{fruit}</h2>
      <button onClick={handleFruit}>Change Fruit</button>
      <br /><br /><br />
      <Counter/>
      <HideAndShowFunctionality/>
      <MultipleCondition/>
    </div>
  )
}

export default App
