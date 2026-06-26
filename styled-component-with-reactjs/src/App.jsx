import React from 'react'
import styled from "styled-components";

const Heading = styled.h1`
  color:rgb(112, 237, 216);
  border:1px solid black;
  width:550px;  
  background-color:rgb(107, 52, 183);
  padding:10px;
  border-radius:8px;

`

const App = () => {
  return (
    <div>
      <h2>Styled components in reactjs</h2>
      <Heading>This is heading using styled component</Heading>
    </div>
  )
}

export default App
