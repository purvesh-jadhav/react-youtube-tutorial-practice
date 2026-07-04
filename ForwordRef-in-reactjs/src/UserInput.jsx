// import React, { forwardRef } from 'react'

// const UserInput = (props,ref) => {
//   return (
//     <div>
//        <input type="text" ref={ref} />
//     </div>
//   )
// }

// export default forwardRef(UserInput);

const UserInput = (props) => {
  return (
    <div>
       <input type="text" ref={props.ref} />
    </div>
  )
}

export default UserInput

//upper method is recommended afteer react 19 (first method learn purpose only)