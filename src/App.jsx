import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import SelectWithRandomOptions from './components/Select/SelectWithRandomOptions'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <div className="card">
        <SelectWithRandomOptions />
      </div>
    </div>
  )
}

export default App
