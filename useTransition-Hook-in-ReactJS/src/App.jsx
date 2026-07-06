import React, { useTransition } from "react";

const App = () => {
  const [pending, startTransition] = useTransition();

  async function handleButton() {
    startTransition(async () => {
      await new Promise((res, reject) => {
        setTimeout(() => {
          res();
        }, 3000);
      });
    });
  }

  return (
    <div>
      <h2>useTransition Hook in React JS</h2>
      {
        pending?
        <img src="https://imgs.search.brave.com/yAPJMaX-oE8SXux0EZ3YS5kfYl1khZ12toy5xa4nnSQ/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YTAuZ2lwaHkuY29t/L21lZGlhL3YxLlky/bGtQVGM1TUdJM05q/RXhZbUkzY1RKNU1t/WnBhSHA1TUdobGFq/ZGhZamg0YVRWc01H/UndhemN5Y0d4b2VE/bGthSFIzYUNabGNE/MTJNVjluYVdaelgz/TmxZWEpqYUNaamRE/MW4vS0c0UE1RMGp5/aW15d3hOdDhpL2dp/cGh5LmdpZg.gif" style={{height:"200px",width:"200px"}}/>:null
      }
      <br /><br />
      <button disabled={pending} onClick={handleButton}>Click</button>
    </div>
  );
};

export default App;