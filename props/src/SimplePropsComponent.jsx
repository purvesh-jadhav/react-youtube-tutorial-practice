import React from 'react'

const SimplePropsComponent = ({name,age,emailId}) => {
  return (
    <div>
      <hr />
      <h3>UserName : {name}</h3>
      <h3>Age : {age}</h3>
      <h3>EmailId : {emailId}</h3>

    </div>
  )
}

export default SimplePropsComponent
