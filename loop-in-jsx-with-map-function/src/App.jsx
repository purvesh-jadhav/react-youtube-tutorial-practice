import React from "react";

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
      <h4>Loop in jsx with map function</h4>

      <table border={1}>
        <thead>
            <tr>
                <td>Name</td>
                <td>Age</td>
                <td>Email</td>
                <td>ID</td>
            </tr>
        </thead>

        <tbody>
            {
                userData.map((user)=>{
                return(
                <tr>
                    <td>{user.name}</td>
                    <td>{user.age}</td>
                    <td>{user.email}</td>
                    <td>{user.id}</td>
                </tr> 
                );                
                })
            }
        </tbody>
      </table>








      <h5>Dummy data</h5>
      <table border={1}>
        <thead>
            <tr>
                <td>ID</td>
                <td>Name</td>
                <td>Email</td>
                <td>Age</td>
            </tr>
        </thead>
        <tbody>
             <tr>
                <td>1</td>
                <td>Purvesh Jadhav</td>
                <td>purveshjadhav29@gmail.com</td>
                <td>18</td>
            </tr>
            <tr>
                <td>2</td>
                <td>Sarthal Jadhav</td>
                <td>sarthakjadhav11@gmail.com</td>
                <td>15</td>
            </tr>
            <tr>
                <td>3</td>
                <td>Vedant Neharkar</td>
                <td>vedantneh17@gmail.com</td>
                <td>17</td>
            </tr>
            <tr>
                <td>4</td>
                <td>Sairaj Padwal</td>
                <td>sairajpadwal45@gmail.com</td>
                <td>14</td>
            </tr>
        </tbody>
      </table>
    </div>
  );
};

export default App;
