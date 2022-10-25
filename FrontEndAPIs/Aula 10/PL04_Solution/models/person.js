class Person {
  #name
  #age
  #height
  #email
  #nationality
  constructor(name, age, height,email, nationality){
    this.#name = name
    this.#age = age
    this.#height = height
    this.#email = email
    this.#nationality = nationality
  }

  toString(){
    return `${this.#name} - ${this.#age} - ${this.#height} - ${this.#email} - ${this.#nationality}`
  }

  presentation(){
    return `Howdy! I'm ${this.#name} and I am ${this.#age} years of age and measure around ${this.#height}. I'm from ${this.#nationality} and you can reach me at ${this.#email}`
  }
}