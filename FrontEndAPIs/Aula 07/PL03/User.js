class User {
    #userName
    #userLastName
    #userAge
    #userHeight
    #userNationality

    constructor(userName, userLastName, userAge, userHeight, userNationality) {
        this.#userName = userName
        this.#userLastName = userLastName
        this.#userAge = userAge
        this.#userHeight = userHeight
        this.#userNationality = userNationality 
    }

    get userName() {
        return this.#userName
    }
    get userLastName() {
        return this.#userLastName
    }
    get userAge() {
        return this.#userAge
    }
    get userHeight() {
        return this.#userHeight
    }
    get userNationality() {
        return this.#userNationality
    }

    userPresentation(){
        console.log(`Howdy! My name is ${this.userName}. I'm ${this.userAge} yo, I have 1.70 and I'm ${this.#userNationality}`)
    }

    randomWinner (userName){
        alert(`The winner is ${this.userName}!`)
    }
}

