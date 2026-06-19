import React from 'react'
import SimplePropsComponent from './SimplePropsComponent'
import SimplePropsComponent2 from './SimplePropsComponent2'

const App = () => {

  const userObject={
    name:"Sarthak",
    age:17,
    email:"sarthak@test.com"
  } 
  const userObject2={
    name:"Vedant",
    age:21,
    email:"vedant@test.com"
  } 

  return (
    <div>

      <SimplePropsComponent name="Purvesh" age={18} emailId="purveshjadhav05@gmail.com" />
      <SimplePropsComponent2 user={userObject} />
      <SimplePropsComponent2 user={userObject2} />
    </div>
  )
}

export default App
