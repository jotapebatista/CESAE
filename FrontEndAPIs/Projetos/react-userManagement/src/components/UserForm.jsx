import { InputLabel, Input, Button } from "@mui/material"
import { useState, useEffect } from "react"
import axios from "axios"

function UserForm() {

  const [userName, setUserName] = useState('')
  const [userAge, setUserAge] = useState('')
  const [userEmail, setUserEmail] = useState('')
  const [userPassword, setUserPassword] = useState('')

  const submitHandler = (ev) => {
    console.log(ev)
    ev.preventDefault()
    setUserName(ev.target[0].value)
    setUserAge(ev.target[1].value)
    setUserEmail(ev.target[2].value)
    setUserPassword(ev.target[3].value)
  }

  return (
    <>
    
      <form onSubmit={submitHandler}>
        <input type="text" placeholder="Ex. João Batista" />
        <input type="text" placeholder="Ex. 27" />
        <input type="text" placeholder="Ex. joao-oliveirabatista@hotmail.com" />
        <input type="password" placeholder="your-secret123" />
        <br />
        <button type="submit">Add User</button>
        {/* <InputLabel htmlFor="user-input">First Name</InputLabel>
        <Input id="user-input" aria-describedby="helper-text" />
        <Button variant="contained" size="small">Submit</Button> */}
      </form>
    </>
  )
}

export default UserForm