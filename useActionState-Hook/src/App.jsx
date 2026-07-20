import React from 'react'
import {useActionState} from 'react'

const App = () => {
  const handleSubmit=(previousData,formData)=>{
    let name=formData.get('name'); 
    let passowrd=formData.get('password')
    
    console.log("handle submit called",name,passowrd);
    
  }
  const[data,action,pending]=useActionState(handleSubmit,undefined)
  return (
    <div>
      <h3>useActionState Hook in React JS</h3>
      <form action={action}>
        <input type="text" placeholder='enter name' name='name' />
        <br /><br />
        <input type="text" placeholder='enter password' name='password' />
        <br /><br />
        <button>Submit Data</button>
      </form>
    </div>
  )
}

export default App
