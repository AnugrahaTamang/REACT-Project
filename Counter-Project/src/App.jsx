
import './App.css'
import { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
    <button onClick={() => setCount(count + 1)}>+</button>       
 <button>{count}</button>
    <button onClick={() => setCount(count - 1)}>-</button>
    </div>
  )
}

export default App
