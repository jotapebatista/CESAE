import { useState, useEffect } from 'react'

export default function Title({ text }) {
  const [name, setName] = useState('')

  //Renders while tiping
  // const handleChange = (evt) => {
  //   setName(evt.target.value)
  //   console.log(evt)
  // }

  // Renders on Enter key
  const enterKey = (evt) => {
    if (evt.key === 'Enter') {
      setName(evt.target.value)
    }
  }
  return (

    <div>
      <h1>{!name ? 'Type your name to start' : `${name} - To-do List`}</h1>
      <input onKeyDown={enterKey} placeholder="ex. João" />
    </div>
  )
}
