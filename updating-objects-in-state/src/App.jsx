import React from 'react'
import {useState} from 'react'

const App = () => {
  const [data,setData]=useState({
    name:"Purvesh Jadhav",
    address:{
      city:"Pune",
      country:"India"
    }
  })

  const handleData=(val)=>{
    data.name=val;
    setData({...data})
  }

  const hanndleCity=(val)=>{
    data.address.city=val;
    setData({...data})
  }

  return (
    <div>
      <input type="text" onChange={(event)=>handleData(event.target.value)} placeholder='enter name'/>
       <input type="text" onChange={(event)=>hanndleCity(event.target.value)} placeholder='enter city'/>
      <h2>Name:{data.name}</h2>
      <h2>City:{data.address.city}</h2>
      <h2>Name:{data.address.country}</h2>
    </div>
  )
}

export default App
