import { useState } from 'react'

function Title({ text }) {
  const [name, setName] = useState('')

  //Renders while tiping
  // const handleChange = (evt) => {
  //   setName(evt.target.value)
  //   console.log(evt)
  // }

  const enterKey = (evt) => {
    if (evt.key === 'Enter') {
      setName(evt.target.value)
    }
  }
  return (
    <div>
      <h1>{!name ? 'Input your name': `${name} - To-do List`}</h1>
      <input onKeyDown={enterKey} />
    </div>
  )
}

export default Title