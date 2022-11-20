import { useState } from 'react'

function Title({ text }) {
  const [name, setName] = useState('')


  //Renders while tiping
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
    <div>
      <h1>{!text ? "Forgot title?" : text}</h1>
      <input onKeyDown={enterKey} />
      <Title text={`${name} - To-do List`} />
      <h2>Welcome to my app, {name} !</h2>
      <h1>Enjoy</h1>
    </div>
  )
}

export default Title