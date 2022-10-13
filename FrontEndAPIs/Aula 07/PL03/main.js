
//EX1
const user = new User("João", "Batista", 27, 2.0, "Portuguese")
user.userPresentation()

//EX 2
console.log(user.userName)
console.log(typeof (user.userName))

//EX3

const personList = [
    new User("João", "joao@mail.com", 18, 1.77, "Portuguese"),
    new User("Rui", "rui@mail.com", 19, 1.87, "Portuguese"),
    new User("Marcelo", "marcelo@mail.com", 22, 1.60, "Portuguese"),
    new User("Miguel", "miguel@mail.com", 35, 1.89, "Portuguese"),
    new User("Vanessa", "vanessa@mail.com", 27, 1.69, "Portuguese"),
    new User("Rita", "rita@mail.com", 34, 1.54, "Portuguese"),
    new User("Micael", "micael@mail.com", 16, 1.76, "Portuguese"),
    new User("Paulo", "paulo@mail.com", 17, 1.85, "Portuguese"),
    new User("Jose", "jose@mail.com", 23, 1.49, "Portuguese"),
    new User("Ana", "ana@mail.com", 25, 1.76, "Portuguese"),
]

//console.log(personList)


const userToWin = new randomWinner(personList)
userToWin.drawUser()


// function getRandomProperty(obj) {
//     const keys = Object.keys(obj)
//     result = keys[Math.floor(Math.random() * keys.length)]
//     return obj[result]+result
//   }



// console.log(getRandomProperty(personList))
// alert(getRandomProperty(personList))
