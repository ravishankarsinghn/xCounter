import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const handleIncrement = ()=>setCount(prev=>prev+1);
  const handleDecrement = ()=>setCount(prev=>prev-1);

  return (
    <>
      <h1>Counter App</h1>
      <p>Count: {count}</p>

      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
    </>
  )
}

export default App
