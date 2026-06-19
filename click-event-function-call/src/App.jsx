import React from 'react'

const App = () => {
  function callSimple(){
    alert("simple function called !!")
  }

  const callArrow = () =>{
    alert("Arrow function called !!")
  }

  const paramFunction = (name) =>{
    alert(name)
  }

  const callFruit = (name) =>{
    alert(name)
  }


  return (
    <div>
      <h1>Click event and Function calling</h1>
      <button onClick={callSimple}>Simple Function</button>
      <button onClick={callArrow}>Arrow Function</button>
      <button onClick={()=>paramFunction("Hello Developer !!")}>Parameter Function </button>
      <br /> <br />
      <button onClick={()=>callFruit("Apple")}>Apple</button>
      <button onClick={()=>callFruit("banana")}>Banana</button>


    </div>
  )
}

export default App
