import React from 'react'
import UserComponent, { UserKey, UserProfile, UserTitle } from './UserComponent'

const App = () => {
  return (
    <div>
      <UserComponent/>
      <UserProfile/>
      <UserTitle/>
      <h1>{UserKey}</h1>
    </div>
  )
}

export default App
