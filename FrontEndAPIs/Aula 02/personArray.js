const userName = 'Joao'
console.log(userName)

const lastName = 'Batista'
console.log(userName + lastName)

const userAge = 27
console.log("My name is: "+ userName +" "+ lastName + " and I'm "+userAge+" yo")

const userHeight = 1.70
const userNationality = 'Portuguese'

const personAttrib = {
    firstName: userName,
    lastName: lastName,
    age: userAge,
    height: userHeight,
    nacionality: userNationality,
}

function printUserName(p1, p2){
    console.log ("My name is: "+ p1 +" "+ p2)

}

printUserName(userName, lastName)


