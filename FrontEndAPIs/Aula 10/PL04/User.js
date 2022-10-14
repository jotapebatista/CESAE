class User {
  userFirstName
  userLastName
  userEmail
  userPassword
 
  constructor(userFirstName, userLastName, userEmail, userPassword) {
    this.userFirstName = userFirstName
    this.userLastName = userLastName
    this.userEmail = userEmail
    this.userPassword = userPassword
  }

  get userFirstName() {
    return this.userFirstName
  }

  get userLastName() {
    return this.userLastName
  }
  
  get email() {
    return this.email
  }
  get password() {
    return this.userPassword
  }

  userPresentation(){
    console.log(`Howdy! My name is ${this.userFirstName} ${this.userLastName}. My email is ${this.userEmail}`)
  }

}