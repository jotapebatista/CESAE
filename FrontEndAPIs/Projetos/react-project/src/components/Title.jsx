function Title({text}) {
  return (
    <h1>{!text? "Forgot title?" : text}</h1>
  )
}

export default Title