import { useState } from "react"


function App() {

  let [counter, setCounter] = useState(15);

  let addValue = ()=>{
    // counter  = counter + 1;
     if(counter <20)  setCounter(counter + 1);
  }

  let removeValue = ()=>{
    if(counter >0) setCounter(counter-1);
  }
  return (
    <>
      <h1>counter</h1>
      <h2>value = {counter}</h2>
      <button onClick={addValue}>add</button>
      <br />
      <button onClick={removeValue}>sub</button>

    </>
  )
}

export default App
