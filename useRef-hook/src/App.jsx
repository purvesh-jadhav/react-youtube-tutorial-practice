import React, { useRef } from 'react'

const App = () => {

  const inputRef = useRef(null);
  const h2Ref=useRef(null)

  const inputHandler = () => {
    console.log(inputRef);
    inputRef.current.focus();
    inputRef.current.style.color="red";
    inputRef.current.placeholder='enter password';
    inputRef.current.value='123';
  }

  const h2Handler = ()=>{
    h2Ref.current.style.color="purple";
  }

  return (
    <div>
      <h2 style={{ textAlign: 'center' }}>
        useRef hook in ReactJS
      </h2>

      <input 
        type="text" 
        ref={inputRef} 
        placeholder="enter username"
      />

      <br /><br />
      
      <button onClick={inputHandler}>
        Focus on input field
      </button>

      <h2 ref={h2Ref}>Purvesh Jadhav</h2>
      <button onClick={h2Handler}>Handler</button>
    </div>
  )
}

export default App