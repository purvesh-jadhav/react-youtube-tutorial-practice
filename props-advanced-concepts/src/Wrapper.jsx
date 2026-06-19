import React from 'react'

const Wrapper = ({children}) => {
  return (
    <div style={{color:"green" , border:"2px solid blue" , margin:"2px" , padding:"10px" , width:"200px"}}> {/* this is inline style in react*/}
        
        {children}

    </div>
  )
}

export default Wrapper


//paasing jsx in component -->
// write {children} in braces of compont function and again write {children} in body