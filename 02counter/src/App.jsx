import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter, setCounter] = useState(15)
  // let counter = 15

  const addValue = () => {
    counter = counter+1
    if(counter>20) return;
    setCounter(counter)
    console.log("clicked",counter);

    
  }

  const removeValue = () => {
    counter = counter -1
    if(counter<0) return;
    setCounter(counter)
    console.log("clicked",counter);

  }
   return (
    <>
      <h1>Chai aur react </h1>
      <h2>Counter value :  {counter}</h2>

      <button onClick={addValue}>Add Value {counter}</button>
      <br />
      <button onClick={removeValue}>Remove Value {counter}</button>
      <p>footer: {counter}</p>
    </>
  )
}

export default App
