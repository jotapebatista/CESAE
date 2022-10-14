class RegisterUser extends User {
  #password

  constructor(userFirstName, userLastName, userEmail, password){
    super(userFirstName, userLastName, userEmail)
    this.#password = password 
  }
  
  serialize(){
    return JSON.stringify(this)
  }

  login(){
    fetch('http:api.com/login', {
      body: this.serialize()
    })
  }
}