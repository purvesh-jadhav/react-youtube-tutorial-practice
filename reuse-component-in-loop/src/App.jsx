import React from "react";
import User from "./User";

const App = () => {
  const userData = [
    {
      name: "Purvesh Jadhav",
      age: 18,
      email: "purveshjadhav29@gmail.com",
      id: 1,
    },
    {
      name: "Sarthak Jadhav",
      age: 18,
      email: "sarthakjadhav11@gmail.com",
      id: 2,
    },
    {
      name: "Vedant Neharakr",
      age: 17,
      email: "neharkarvedant@gmail.com",
      id: 3,
    },
    {
      name: "Sairaj Padwal",
      age: 14,
      email: "sairajpadwal@gmail.com",
      id: 4,
    },
  ];
  return (
    <div>
      <h4 style={{textAlign:"center"}}>Reuse Component in Loop</h4>
      {
        userData.map((user)=>{
            return(
            <div>
                <User user={user}/>
            </div>
            );
        })
      } 
    </div>
  );
};

export default App;
