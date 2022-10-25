class User {
  #userName
  #userAge
  #userHeight
  #userNationality
  #userEmail
 
  constructor(userName, userAge, userHeight, userNationality, userEmail) {
    this.#userName = userName
    this.#userAge = userAge
    this.#userHeight = userHeight
    this.#userNationality = userNationality
    this.#userEmail = userEmail
  }

  toString(){
    return `${this.#userName} - ${this.#userAge} - ${this.#userHeight} - ${this.#userNationality} - ${this.#userEmail}`
  }
  
  userPresentation(){
    alert(`Howdy! My name is ${this.#userName}. I'm ${this.#userAge} yo, ${this.#userHeight} tall, and I'm ${this.#userNationality}. You can reach me @ ${this.#userEmail}`)
  }

}