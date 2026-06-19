import React from 'react'

const User = ({name="User"}) => { //default value of props if props value is not provided
  return (
    <div>
      <h4>Hi, {name}</h4>
    </div>
  )
}

export default User

/* jar copmonent madhye value pass keli nasel tr to default value print karto je ki line no. 3 madhye kel aahe tithe "User"  he nav default kel aahe jr name chi value pass keli nasel*/