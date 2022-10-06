class RegisterUser extends User {
  #password
  #confirm_password

  constructor( username, email, avatar, password, confirm_password){
    super(username, email, avatar)
    this.#password = password 
    this.#confirm_password = confirm_password
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