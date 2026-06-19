import React, { useState } from "react";

function App() {
  const [cardStyle,setCardStyle]=useState(
    {
    backgroundColor: "lightseagreen",
    width: "250px",
    padding: "15px",
    margin:"8px",
    textAlign: "center",
    borderRadius: "15px",
  }
  )

  const [grid,setGrid]=useState(true)

  const updateTheme=(bgColor,textColor)=>{
      setCardStyle({...cardStyle,backgroundColor:bgColor})
  }

 
  return (
    <>
    <h2 style={{textAlign:"center"}}>Dynamic and conditional inline css</h2>
    <button onClick={()=>updateTheme('darkslategray')}>Dark Theme</button>
    <button onClick={()=>updateTheme('lightseagreen')}>Default theme</button>
    <button onClick={()=>setGrid(!grid)}>Toggle grid</button>
    <div style={{display:grid?"flex":"block",gap:"10px",flexWrap:"wrap"}}>
      <div style={cardStyle}>
        <div >
          <img
            src="https://imgs.search.brave.com/8RVCExjD5a_6mB33h9QIySK0b22etpjTC2_Y-0WYYf4/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9wbmcu/cG5ndHJlZS5jb20v/cG5nLXZlY3Rvci8y/MDI0MDEzMS9vdXJt/aWQvcG5ndHJlZS1t/YW4tcHJvZmlsZS1h/Y2NvdW50LXBpY3R1/cmUtY2hhcmFjdGVy/LXBuZy1pbWFnZV8x/MTU3NzMwNS5wbmc"
            alt=""
            height="180px"
            width="180px"
          />
        </div>
        <div>
          <h3 style={{ color: "ActiveCaption", fontSize: "22px" }}>
            Name: Purvesh Jadhav
          </h3>
          <h3 style={{ color: "ActiveCaption" }}>Software Developer</h3>
          <h3 style={{ color: "ActiveCaption" }}>Age: 18</h3>
        </div>
      </div>

      <div style={cardStyle}>
        <div >
          <img
            src="https://imgs.search.brave.com/8RVCExjD5a_6mB33h9QIySK0b22etpjTC2_Y-0WYYf4/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9wbmcu/cG5ndHJlZS5jb20v/cG5nLXZlY3Rvci8y/MDI0MDEzMS9vdXJt/aWQvcG5ndHJlZS1t/YW4tcHJvZmlsZS1h/Y2NvdW50LXBpY3R1/cmUtY2hhcmFjdGVy/LXBuZy1pbWFnZV8x/MTU3NzMwNS5wbmc"
            alt=""
            height="180px"
            width="180px"
          />
        </div>
        <div>
          <h3 style={{ color: "ActiveCaption", fontSize: "22px" }}>
            Name: Purvesh Jadhav
          </h3>
          <h3 style={{ color: "ActiveCaption" }}>Software Developer</h3>
          <h3 style={{ color: "ActiveCaption" }}>Age: 18</h3>
        </div>
      </div>

      <div style={cardStyle}>
        <div >
          <img
            src="https://imgs.search.brave.com/8RVCExjD5a_6mB33h9QIySK0b22etpjTC2_Y-0WYYf4/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9wbmcu/cG5ndHJlZS5jb20v/cG5nLXZlY3Rvci8y/MDI0MDEzMS9vdXJt/aWQvcG5ndHJlZS1t/YW4tcHJvZmlsZS1h/Y2NvdW50LXBpY3R1/cmUtY2hhcmFjdGVy/LXBuZy1pbWFnZV8x/MTU3NzMwNS5wbmc"
            alt=""
            height="180px"
            width="180px"
          />
        </div>
        <div>
          <h3 style={{ color: "ActiveCaption", fontSize: "22px" }}>
            Name: Purvesh Jadhav
          </h3>
          <h3 style={{ color: "ActiveCaption" }}>Software Developer</h3>
          <h3 style={{ color: "ActiveCaption" }}>Age: 18</h3>
        </div>
      </div>

      <div style={cardStyle}>
        <div >
          <img
            src="https://imgs.search.brave.com/8RVCExjD5a_6mB33h9QIySK0b22etpjTC2_Y-0WYYf4/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9wbmcu/cG5ndHJlZS5jb20v/cG5nLXZlY3Rvci8y/MDI0MDEzMS9vdXJt/aWQvcG5ndHJlZS1t/YW4tcHJvZmlsZS1h/Y2NvdW50LXBpY3R1/cmUtY2hhcmFjdGVy/LXBuZy1pbWFnZV8x/MTU3NzMwNS5wbmc"
            alt=""
            height="180px"
            width="180px"
          />
        </div>
        <div>
          <h3 style={{ color: "ActiveCaption", fontSize: "22px" }}>
            Name: Purvesh Jadhav
          </h3>
          <h3 style={{ color: "ActiveCaption" }}>Software Developer</h3>
          <h3 style={{ color: "ActiveCaption" }}>Age: 18</h3>
        </div>
      </div>

      <div style={cardStyle}>
        <div >
          <img
            src="https://imgs.search.brave.com/8RVCExjD5a_6mB33h9QIySK0b22etpjTC2_Y-0WYYf4/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9wbmcu/cG5ndHJlZS5jb20v/cG5nLXZlY3Rvci8y/MDI0MDEzMS9vdXJt/aWQvcG5ndHJlZS1t/YW4tcHJvZmlsZS1h/Y2NvdW50LXBpY3R1/cmUtY2hhcmFjdGVy/LXBuZy1pbWFnZV8x/MTU3NzMwNS5wbmc"
            alt=""
            height="180px"
            width="180px"
          />
        </div>
        <div>
          <h3 style={{ color: "ActiveCaption", fontSize: "22px" }}>
            Name: Purvesh Jadhav
          </h3>
          <h3 style={{ color: "ActiveCaption" }}>Software Developer</h3>
          <h3 style={{ color: "ActiveCaption" }}>Age: 18</h3>
        </div>
      </div>


       <div style={cardStyle}>
        <div >
          <img
            src="https://imgs.search.brave.com/8RVCExjD5a_6mB33h9QIySK0b22etpjTC2_Y-0WYYf4/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9wbmcu/cG5ndHJlZS5jb20v/cG5nLXZlY3Rvci8y/MDI0MDEzMS9vdXJt/aWQvcG5ndHJlZS1t/YW4tcHJvZmlsZS1h/Y2NvdW50LXBpY3R1/cmUtY2hhcmFjdGVy/LXBuZy1pbWFnZV8x/MTU3NzMwNS5wbmc"
            alt=""
            height="180px"
            width="180px"
          />
        </div>
        <div>
          <h3 style={{ color: "ActiveCaption", fontSize: "22px" }}>
            Name: Purvesh Jadhav
          </h3>
          <h3 style={{ color: "ActiveCaption" }}>Software Developer</h3>
          <h3 style={{ color: "ActiveCaption" }}>Age: 18</h3>
        </div>
      </div>


       <div style={cardStyle}>
        <div >
          <img
            src="https://imgs.search.brave.com/8RVCExjD5a_6mB33h9QIySK0b22etpjTC2_Y-0WYYf4/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9wbmcu/cG5ndHJlZS5jb20v/cG5nLXZlY3Rvci8y/MDI0MDEzMS9vdXJt/aWQvcG5ndHJlZS1t/YW4tcHJvZmlsZS1h/Y2NvdW50LXBpY3R1/cmUtY2hhcmFjdGVy/LXBuZy1pbWFnZV8x/MTU3NzMwNS5wbmc"
            alt=""
            height="180px"
            width="180px"
          />
        </div>
        <div>
          <h3 style={{ color: "ActiveCaption", fontSize: "22px" }}>
            Name: Purvesh Jadhav
          </h3>
          <h3 style={{ color: "ActiveCaption" }}>Software Developer</h3>
          <h3 style={{ color: "ActiveCaption" }}>Age: 18</h3>
        </div>
      </div>

       <div style={cardStyle}>
        <div >
          <img
            src="https://imgs.search.brave.com/8RVCExjD5a_6mB33h9QIySK0b22etpjTC2_Y-0WYYf4/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9wbmcu/cG5ndHJlZS5jb20v/cG5nLXZlY3Rvci8y/MDI0MDEzMS9vdXJt/aWQvcG5ndHJlZS1t/YW4tcHJvZmlsZS1h/Y2NvdW50LXBpY3R1/cmUtY2hhcmFjdGVy/LXBuZy1pbWFnZV8x/MTU3NzMwNS5wbmc"
            alt=""
            height="180px"
            width="180px"
          />
        </div>
        <div>
          <h3 style={{ color: "ActiveCaption", fontSize: "22px" }}>
            Name: Purvesh Jadhav
          </h3>
          <h3 style={{ color: "ActiveCaption" }}>Software Developer</h3>
          <h3 style={{ color: "ActiveCaption" }}>Age: 18</h3>
        </div>
      </div>

       <div style={cardStyle}>
        <div >
          <img
            src="https://imgs.search.brave.com/8RVCExjD5a_6mB33h9QIySK0b22etpjTC2_Y-0WYYf4/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9wbmcu/cG5ndHJlZS5jb20v/cG5nLXZlY3Rvci8y/MDI0MDEzMS9vdXJt/aWQvcG5ndHJlZS1t/YW4tcHJvZmlsZS1h/Y2NvdW50LXBpY3R1/cmUtY2hhcmFjdGVy/LXBuZy1pbWFnZV8x/MTU3NzMwNS5wbmc"
            alt=""
            height="180px"
            width="180px"
          />
        </div>
        <div>
          <h3 style={{ color: "ActiveCaption", fontSize: "22px" }}>
            Name: Purvesh Jadhav
          </h3>
          <h3 style={{ color: "ActiveCaption" }}>Software Developer</h3>
          <h3 style={{ color: "ActiveCaption" }}>Age: 18</h3>
        </div>
      </div>
    </div>
    </>
  );
}

export default App;
