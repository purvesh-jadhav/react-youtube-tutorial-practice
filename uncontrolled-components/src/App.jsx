import React, { useRef } from 'react';

const App = () => {

  const handleform=(event)=>{
    event.preventDefault()
    const user = document.querySelector('#user').value;
    console.log(user);

    const password = document.getElementById('pass').value;
    console.log(password);
  }

  const userRef=useRef(null);
  const passwordRef=useRef(null);

  const handleformRef=(event)=>{
    event.preventDefault();
    const user=userRef.current.value;
    const password=passwordRef.current.value;
    console.log(user);
    console.log(password);
  }


  
  return (
    <div>
      <h3>Uncontrolled Component with DOM </h3>
      <form action="" onSubmit={handleform}>
        <input type="text" placeholder="Enter username" id="user"  />
        <br /><br />
        <input type="password" placeholder='Enter passowrd' id='pass'  />
        <br /><br />
        <button> Submit</button>
      </form>

      <hr />
      
      <h3>Uncontrolled components with useRef</h3>

      <form action="" onSubmit={handleformRef}>
        <input type="text" placeholder="Enter username" ref={userRef} />
        <br /><br />
        <input type="password" placeholder='Enter passowrd' ref={passwordRef} />
        <br /><br />
        <button>Submit with ref</button>
      </form>

    </div>
  )
}

export default App
