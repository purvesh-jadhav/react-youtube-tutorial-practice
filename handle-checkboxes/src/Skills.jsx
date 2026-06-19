import React from 'react'
import { useState } from 'react'

const Skills = () => {
    const [skills,setSkills]=useState([])
    const handleSkills = (event) =>{
        console.log(event.target.value , event.target.checked);
        if(event.target.checked){
        setSkills([...skills,event.target.value])
    }else{
        setSkills([...skills.filter((item)=>item!=event.target.value)])
    }
    }
    
  return (
    <div>
      <h4>Select Your Skills</h4>
      <input onChange={handleSkills} type="checkbox" id="html" value="HTML"/>
      <label htmlFor="html">HTML</label>
      <br />
      <br />
      <input onChange={handleSkills} type="checkbox" id='css' value="CSS"/>
      <label htmlFor="css">CSS</label>
      <br />
      <br />
      <input onChange={handleSkills} type="checkbox" id='js' value="JavaScript"/>
      <label htmlFor="js">JavaScript</label>
      <br />
      <br />
      <input onChange={handleSkills} type="checkbox" id='react' value="ReactJS"/>
      <label htmlFor="react">React JS</label>
      <br />
      <br />
      <input onChange={handleSkills} type="checkbox" id='node' value="NodeJS" />
      <label htmlFor="node">Node JS</label>
      <br />
      <br />
      <input onChange={handleSkills} type="checkbox" id='java' value="java" />
      <label htmlFor="java">Java</label>
      <br />
      <h4>{skills.toString()}</h4>
    </div>
  )
}

export default Skills
