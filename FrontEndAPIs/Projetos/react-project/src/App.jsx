import './App.css'
import reactLogo from './assets/react.svg'
import Title from "./components/Title"
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import { useState } from 'react'

function App() {
  const [name, setName] = useState('')

  // const handleChange = (evt) => {
  //   setName(evt.target.value)
  //   console.log(evt)
  // }

  const enterKey = (evt) => {
    console.log(evt)
    if (evt.key === 'Enter') {
      setName(evt.target.value)
  }
}

  return (
    <div className="App">
      <header>
          
      <TextField id="standard-basic" label="Username"  onKeyDown={enterKey} variant="standard" />
 
        
        <Title text={`${name} - To-do List`} />
        <h2>Welcome to my app, {name} !</h2>
        <h1>Enjoy</h1>
      </header>
      <main>
        <div className="col">
          <img src={reactLogo} alt="react-logo" />
        </div>
      </main>
    </div>
  )
}

export default App
