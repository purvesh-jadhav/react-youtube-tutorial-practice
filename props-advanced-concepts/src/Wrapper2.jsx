import React from 'react'



const Wrapper2 = ({children,color}) => {
  return (
    <div style={{color:color , border:"2px solid blue" , margin:"2px" , padding:"10px" , width:"200px"}}>
        
        {children}

    </div>
  )
}

export default Wrapper2


// ithe css use karat aahot using props where we pass the color at the time of component calling and that color should be appear with the help of props
//higlight line : 5 where we accept the color from component calling