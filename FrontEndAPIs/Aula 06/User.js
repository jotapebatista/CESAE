class User {
  #username
  #email
  #avatar
  constructor(username, email, avatar) {
    this.#username = username
    this.#email = email
    this.#avatar = avatar
  }

  get username() {
    return this.#username
  }

  get email() {
    return this.#email
  }

  get avatar() {
    return this.#avatar
  }

  set username(value) {
    if (typeof value !== 'string') {
      value = ''
    }
    this.#username = value
  }

  set avatar(value) {
    this.#avatar = value
  }
}