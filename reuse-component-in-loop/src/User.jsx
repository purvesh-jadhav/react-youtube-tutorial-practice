import React from "react";

const User = ({ user }) => {
  return (
    <div style={{border:"1px solid green",padding:"10px",margin:"10px",width:"400px",borderRadius:"10px"}}>
      <h4>ID:{user.id}</h4>
      <h4>Name:{user.name}</h4>
      <h4>Email:{user.email}</h4>
      <h4>Age:{user.age}</h4>
    </div>
  );
};

export default User;
