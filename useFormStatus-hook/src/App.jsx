import React from "react";
import { useFormStatus } from "react-dom";

function App() {
  async function handleSubmit() {
    console.log("Submitting...");

    await new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve();
      }, 2000);
    });

    console.log("Form Submitted Successfully!");
  }

  function CustomerForm() {
    const {pending} = useFormStatus()
    console.log(pending);
    
    return (
      <div>
        <input type="text" placeholder="Enter Username" />
        <br />
        <br />

        <input type="password" placeholder="Enter Password" />
        <br />
        <br />

        <button type="submit" disabled={pending}>{pending ? "Submitting..." : "Submit"} </button>
      </div>
    );
  }

  return (
    <div>
      <h2>useFormStatus Hook in react js</h2>

      <form action={handleSubmit}>
        <CustomerForm/>
      </form>
    </div>
  );
}

export default App;
