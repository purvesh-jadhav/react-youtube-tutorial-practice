import React, { useRef } from 'react'
import UserInput from './UserInput';

const App = () => {
    const inputRef=useRef(null);
    const updateInput = () =>{
        inputRef.current.value=299;
        inputRef.current.focus();
        inputRef.current.style.color='red'
    }
  return (
    <div>
        <h3>Forword ref</h3>
        <UserInput ref={inputRef}/>
        <button onClick={updateInput}>Update input field</button>
    </div>
  )
}

export default App
