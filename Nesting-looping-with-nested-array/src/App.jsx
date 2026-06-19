import React from "react";
import College from "./College";
import "./App.css";
function App() {
  const collegeData = [
    {
      name: "Government Polytechnic Awasari",
      city: "Awasari,Pune",
      website: "www.gpawasari.ac.in",
      email: "gpawasari@gmail.com",
      students: [
        {
          name: "Purvesh Jadhav",
          age: 18,
          email: "purvesh@mail.com",
        },
        {
          name: "Samarth Jadhav",
          age: 15,
          email: "sarthak@mail.com",
        },
        {
          name: "Ajinkya Shinde",
          age: 17,
          email: "sairaj@mail.com",
        },
      ],
    },
    {
      name: "Government Polytechnic Pune",
      city: "Pune",
      website: "www.gppune.ac.in",
      email: "gppune@gmail.com",
      students: [
        {
          name: "Purvesh Jadhav",
          age: 18,
          email: "purvesh@mail.com",
        },
        {
          name: "Samarth Jadhav",
          age: 15,
          email: "sarthak@mail.com",
        },
        {
          name: "Ajinkya Shinde",
          age: 17,
          email: "sairaj@mail.com",
        },
      ],
    },
    {
      name: "Government Polytechnic Thane",
      city: "Thane",
      website: "www.gpthane.ac.in",
      email: "gpthane@gmail.com",
      students: [
        {
          name: "Purvesh Jadhav",
          age: 18,
          email: "purvesh@mail.com",
        },
        {
          name: "Samarth Jadhav",
          age: 15,
          email: "sarthak@mail.com",
        },
        {
          name: "Ajinkya Shinde",
          age: 17,
          email: "sairaj@mail.com",
        },
      ],
    },
    {
      name: "Government Polytechnic Mumbai",
      city: "Mumbai",
      website: "www.gpmumbai.ac.in",
      email: "gpmumbai@gmail.com",
      students: [
        {
          name: "Purvesh Jadhav",
          age: 18,
          email: "purvesh@mail.com",
        },
        {
          name: "Samarth Jadhav",
          age: 15,
          email: "sarthak@mail.com",
        },
        {
          name: "Ajinkya Shinde",                                                  
          age: 17,
          email: "sairaj@mail.com",
        },
      ],
    },
  ];

  return (
    <div>
      <h2 style={{ textAlign: "center" }}>Nested Looping with components</h2>
      <div className="grid-container">
        {collegeData.map((college, index) => {
          return <College key={index} college={college} />;
        })}
      </div>
    </div>
  );
}

export default App;
