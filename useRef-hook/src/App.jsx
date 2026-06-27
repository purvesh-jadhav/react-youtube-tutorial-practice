import React, { useRef } from 'react'

const App = () => {

  const inputRef = useRef(null);

  const inputHandler = () => {
    console.log(inputRef);
    inputRef.current.focus();
    inputRef.current.style.color="red";
    inputRef.current.placeholder='enter password';
    inputRef.current.value='123';

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
    </div>
  )
}

export default App