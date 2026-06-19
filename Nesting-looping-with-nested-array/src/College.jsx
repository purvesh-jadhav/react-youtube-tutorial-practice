import React from 'react'
import './College.css'


const College = ({college}) => {
  return (
    <div>
      {
        <div className='container'>
            <h2 id='clgname'>College Name : {college.name}</h2>
            <h3 id='clgcity'>City :{college.city}</h3>
            <h3 id='clgwebsite'>Website : {college.website}</h3>
            <h3 id='clgemail'>College Email : {college.email}</h3>
            <h3>Students :</h3>
            <div className='student-container'>
                {
                  college.students.map((student)=>(
                   <div>
                      <h4>Student Name: {student.name}</h4>
                    </div>
                  ))
                }
            </div>
        </div>
      }
    </div>
  )
}

export default College
