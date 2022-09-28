//PRATICA LABORATORIAL 1
// 1.Crie uma variável que guarde o seu primeiro nome.

const userName = "João"

// 2.Imprima através da instrução de console.log o seu nome, utilizando a variável criadana questão anterior.

console.log(userName)

// 3.Crie uma segunda variável que guarde o seu último nome.

const userLastName = "Batista"

// 4.Imprima na consola o seu primeiro e último nome como resultado da concatenaçãodas variáveis criadas anteriormente

console.log(userName + " " + userLastName)

// 5.Crie uma variável que guarda o valor da sua idade

const userAge = 27

// 6.Imprima na consola o resultado da concatenação das variáveis dos exercícios anteriores, criando uma pequena apresentação.

console.log("Hi! My name is: "+userName+" "+userLastName+" and I'm "+userAge+" yo.")

// 7.Crie uma variável que represente uma pessoa, essa pessoa deve ter os seguintes atributos: primeiro_nome, ultimo_nome, idade, altura e nacionalidade

let person = {
    firstName: userName,
    lastName: userLastName,
    age: userAge,
    height: 1.70,
    nationality: "Portuguese",
}

// 8.Crie uma função que imprima o primeiro e último nome de uma pessoa

function printUserInfo (arg1, arg2){
console.log(arg1, arg2)
return 0 
}

printUserInfo(person.firstName, person.lastName)

// 9.Crie um método com o nome de apresentação. Essa função deve apresentar a pessoa da mesma forma que se apresentou no exercício 6.

const personMethod = {
    uName: "Joao",
    lName: "Batista",
    uAge: 27,
    greet : function(){ console.log("Hi! My name is: "+this.uName+" "+this.lName+" and I'm "+this.uAge+" yo.")},
}


personMethod.greet()

// 10.Na apresentação, inclua se a pessoa a apresentar-se é maior de idade ou não. Utilize uma estrutura de decisão (if)

const newPersonMethod = {
    uName: "Joao",
    lName: "Batista",
    uAge: 27,
    greet : function(){ 
        if (this.uAge>= 18){
        console.log("Hi! My name is: "+this.uName+" "+this.lName+" and I'm "+this.uAge+" yo. Major")
    }
    else{
        console.log("Hi! My name is: "+this.uName+" "+this.lName+" and I'm "+this.uAge+" yo. Minor")
    }
    },
}
newPersonMethod.greet()
// 11.Passe essa validação para dentro de um método.
// 12.Utilize esse método dentro da apresentação.
// 13.Recorrendo à funçãoprompt crie uma pessoa com os dados que o utilizador fornece.
