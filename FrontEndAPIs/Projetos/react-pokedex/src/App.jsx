import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import FetchPoke from './components/FetchPoke'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
     <FetchPoke />
    </div>
  )
}

export default App
