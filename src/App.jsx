import { useState } from 'react'
import './App.css'
import CalcDisplay from './components/calc'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <div></div>
      <div className='components'>
        <h1>A shite calculator</h1>
        <CalcDisplay />
      </div>
      <div></div>
    </div>
    
  )
}

export default App