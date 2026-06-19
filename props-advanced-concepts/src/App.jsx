import React from 'react'
import User from './User'
import Wrapper from './Wrapper'
import Wrapper2 from './Wrapper2'

const App = () => {
  return (
    <div>
      <h4>Advanced props concepts in React.js</h4>
      <User name="Purvesh"/>
      <User />


      <Wrapper>
        <h4>Hello Everyone</h4> 
      </Wrapper>

      <Wrapper>
        <h4>Hello Purvesh</h4>
      </Wrapper>
    
      {/*  here we pass the jsx <h4>Hello Everyone</h4> to component and recive it using {chldren}*/}

      <Wrapper2 color="violet">
        <h4>Hello Jadhav</h4>
      </Wrapper2>



    </div>
  )
}

export default App
