import React from 'react'

const SimplePropsComponent2 = ({user}) => {
  return (
    <div>
      <hr />
      <h3>UserName : {user.name}</h3> 
      <h3>Age : {user.age}</h3>
      <h3>EmailId : {user.email}</h3>

    </div>
  )
}

export default SimplePropsComponent2
