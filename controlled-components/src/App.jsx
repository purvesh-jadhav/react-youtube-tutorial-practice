import React from 'react'
import { useState } from 'react'

const App = () => {
  const [name,setName]=useState('')
  const [password,setPassword]=useState('')
  const [email,setEmail]=useState('')

  function clearAll(){
    setName('');
    setEmail('');
    setPassword('')
  }

  return (
    <div>
      <h4>Controlled Compoents</h4>
      <form action="" method="get">

        <input type="text" placeholder='Enter name' onChange={(event)=>setName(event.target.value)} value={name}/>
        <br /><br />
        <input type="password" placeholder='Enter password' onChange={(event)=>setPassword(event.target.value)} value={password}/>
        <br /><br />
        <input type="mail" placeholder='Enter email' onChange={(event)=>setEmail(event.target.value)} value={email}/>
        <br /><br />
        <button>Submit</button>
        <button onClick={clearAll}>Clear</button>
        
        <h4>{name}</h4>
        <h4>{password}</h4>
        <h4>{email}</h4>

      </form>
    </div>
  )
}

export default App
