//Prompt user to write is name.

const userName = prompt("Qual o seu nome?")
console.log(typeof userName)

if (typeof userName != 'number') {
    console.log("True")
    alert(`Your name is ${userName}`)
}
else {
    alert("Wrong Input!")
    console.log("False")
}

//Operador Ternario
// const canDrive = age >= 18 ? 'Pode tirar a carta' : 'Nao pode tirar a carta'
//console.log(canDrive)
