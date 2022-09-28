// 1 - Crie um script baseado no anterior apresentando à frente do nome e sobrenome onúmero de caracteres de cada um (deve usar funções). Exemplo: Nome: XXX (3)
const firstName = "João"
const lastName = "Batista"

function printAndCount (arg1, arg2){
    console.log("The name " + arg1 + " has "+arg1.length+" letters and the last name " + arg2 + " has " + arg2.length + " letters\n")
    return 0
}
printAndCount(firstName, lastName)

// 2 - Crie um script baseado no anterior em que apresente o nome todo em maiúsculas eo sobrenome todo em minúsculas (deve usar funções).
function toUpperCase (userName, userLastName){
    console.log ("First name "+userName.toUpperCase()+" and last name "+userLastName.toUpperCase()+".")
    return 0
}
toUpperCase(firstName, lastName)

// 3 - Crie um script com um parágrafo “Lorem Ipsum”. Na linha seguinte apresenta as mensagens:
// a.Primeira ocorrência da letra “a”: AAA
// b.Última ocorrência da letra “b”: BBB
// Nota: deve usar funções.

const str = "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Commodi eius praesentium ipsum error aut debitis impedit ab provident quos tenetur"

function findAndReplaceFirst(str){
    let findString = str.replace("a", "AAA")
    //console.log(findString)
    return findString
}

function findAndReplaceLast (str){
    const lastIndexD = str.lastIndexOf('b')
    const replacement = 'BBB'
    const replaced = str.substring(0, lastIndexD) + replacement + str.substring(lastIndexD + 1)
    //console.log(replaced)
    return replaced
}

console.log(findAndReplaceFirst(str))
console.log(findAndReplaceLast(str))

// 4 - Crie um script com as variáveis n1 e n2 e atribua-lhes dois valores numéricos.
// Apresente em cada linha os resultados das operações: soma, subtração,
// multiplicação, divisão inteira, resto da divisão, exponencial, 
// raiz quadrada e valor absoluto (estes dois últimos apenas de um dos números).

let n1 = 12
let n2 = 21

console.log("Addition: " + n1 +" + " + n2 + " = "+(n1+n2))
console.log("Subtraction: " + n1 +" - " + n2 + " = "+(n1-n2))
console.log("Multiplication: " + n1 +" * " + n2 + " = "+(n1*n2))
console.log("Division: " + n1 +" / " + n2 + " = "+(n1/n2))
console.log("Modulus: " + n1 +" % " + n2 + " = "+(n1%n2))
console.log("Exponentiation: " + n1 +" / " + n2 + " = "+(n1**n2))

// 5 - Num novo script escreva “console.log(Math.random());” verifique o resultado.Recarregue a página e verifique se há diferença. 
// Escreva uma linha/parágrafo sobreo resultado da operação executada.

console.log(Math.random()) //The value changes everytime.

// 6 - Num novo script gere e apresente um valor aleatório entre 1 e 10.

console.log("Random number: "+Math.floor((Math.random()*10)))

// 7 - Num novo script crie duas variáveis n1 e n2 e atribua valores decimais às mesmas.Apresenta os valores originais, 
// os valores arredondados de forma normal,arredondados para baixo e arredondados para cima (utilizando funções).

nmb1 = 13.50
nmb2 = 73.90

function roundNumbers (number1, number2){
    console.log("First Value: "+number1+ " | Second Value: "+ number2)
    console.log("Rounded UP First Value: "+Math.round(number1)+ " | Rounded UP Second Value: "+ Math.round(number2))
    console.log("Rounded UP First Value: "+Math.floor(number1)+ " | Rounded UP Second Value: "+ Math.floor(number2))
    return 0
}

roundNumbers(nmb1, nmb2)

// 8. Crie um script com uma variável numérica e atribua-lhe um valor. Se esse valor for
// superior a 37,5 deve surgir a mensagem “Tem febre”, caso contrário deve apresentar
// a mensagem “Saudável”. Altere o valor da variável de forma a perceber se a
// mensagem é alterada consoante o valor inserido.

let temperature = 37.5

function doesItHaveFever (varFever){
    if (varFever >= 37.5){
        console.log("Has fever!")
    }
    else{
        return console.log("Is Healthy!")
    }
}

doesItHaveFever(temperature)

// 9. Baseado no script anterior acrescente uma outra condição, caso a temperatura seja
// inferior a 35 deve apresentar a mensagem “Temperatura muito baixa”.

function doesItHaveFeverNew (varFever) {
    if (varFever <= 35){
        console.log("You're temperature is to low.")
    }
    else if (varFever>= 37.5) {
        console.log("You're temperature is to high!")
    } else {
        console.log("You're fine! Let's get things done!")
    }
}

doesItHaveFeverNew(temperature)

// 10. Crie um script com duas variáveis: idade e género. Consoante o género da pessoa
// deve apresentar “O jovem”, “A jovem” (estes dois com menos de 25 anos), “O
// Homem” ou “A Mulher” e consoante a idade deve apresentar “é maior de idade” ou
// “é menor de idade”.

let age = 0
let gender = "male"

function randomFunctionName(userAge, userGender){
    if(gender == "male" ){
        if (age >=25){
            console.log("User is male and he is an Adult.")
        }
        else{
            console.log("User is male and he is juvenile")
        }
    }
    else if(gender == "female"){
        if (age >=25){
            console.log("User is female and she is an Adult.")
        }
        else{
            console.log("User is female and she is juvenile")
        }
    }
    else{
        console.log(`User is something else. Don't even bother asking "IT" age.`)
    }
}

randomFunctionName(age, gender)

// 11. Crie um script com uma variável numérica. Utilizando a estrutura IF-ELSEIF
// apresente por extenso o número inserido (coloque apenas de 1 a 5). Caso o valor
// esteja for do intervalo deve apresentar a mensagem “Outro valor”.

let numberVar = 2

if (numberVar >= 0 && numberVar <= 5){
    console.log(`Inserted number is ${numberVar}.`)
}
else{
    console.log("Please insert a different number!")
}

// 12. Repita o exercício anterior utilizando uma estrutura SWITCH-CASE.

let userNumber = 3

//This is a workaround to the switch case. At least it works.
function isInRage(num, min, max){
    return num >= min && num <= max;
}

switch (true) {
    case isInRage(userNumber, 0 , 5):
        console.log("Between 0 and 5");
        break;
    default:
        console.log("Please choose another number");
        break;
}

// 13. Crie um script que apresente uma lista de valores entre 1 e 1000.

let numberList = []

for (i = 0; i<=1000; i++){
    numberList += i+" "
}

console.log(numberList)

// 14. Caso tenha utilizado um ciclo FOR no último exercício repita-o agora com um
// WHILE ou vice-versa.

let whileNumberList = []
let x = 0

while(x <= 1000){
    x++
    whileNumberList.push(x+" ")
}

console.log(whileNumberList)

// 15. Crie um script que dados dois números indica se um é múltiplo do outro.

const multiple1 = 2
const multiple2 = 2

function isMultiple(x1 , x2){
    const remainder = x1 % x2 // Divisão resto 0.
    
    if (remainder == 0){
        console.log(x1+" is multiple of "+x2)
    }
    else{
        console.log(x1+" is not multiple of "+x2)
    }
}

isMultiple(multiple1, multiple2)

// 16. Ler um número e apresentar uma mensagem indicando se o número é par ou ímpar.

const number = 6;
const result = number % 2

if (result == 0){
    console.log("Number "+number+ " is even.")
}
else {
    console.log("Number "+number+ " is odd.")
}

// 17. Ler um número positivo, verificar se tem 3 dígitos e em caso afirmativo imprimir os
// dígitos separados por dois espaços.

const positiveNumber = 1337

if (positiveNumber >= 0) {
    const splitedNumberArr = Array.from(String(positiveNumber), Number);
    console.log(splitedNumberArr)
}

// 18. Determinar o menor de 3 valores.

const numberArr = [1284 ,2279,1354]

function findSmaller (nArray){
    console.log("The smallest number is: "+Math.min(...nArray)) // ... -> Spread Operator 
}

findSmaller(numberArr)


// 19. Crie um script que peça ao utilizador um valor de temperatura em graus Celsius e
// converta o valor para graus Fahrenheit.

let userTemp = 28

function convertCelsius(userTemp){
    fahrenheit = userTemp * 9 / 5 + 32
    console.log(userTemp+"° Celsius | "+fahrenheit+"° Fahrenheit")
}

convertCelsius(userTemp)

// 20. Considere que Fahrenheit = Celsius * 1.8 + 32
//fahrenheit = userTemp * 1.8 + 32 (1.8 is the result of 9/5)

// 21. Crie um script que peça ao utilizador um valor em Euros e calcule e apresente o
// valor convertido para dólares, libras, reais e pesos. Procure o valor de câmbio e use
// o mais atual possível.

// 22. Dado um número inteiro positivo, verifique se este é ou não capicua. (Capicua é um
// número que se lê de forma igual da esquerda para a direita ou da direita para a
// esquerda. Exemplos: 212; 123454321; 123321)

// 23. Ler um valor inteiro e apresentar todos os valores inteiros entre 0 e esse valor. A
// listagem só deve ser apresentada se o valor introduzido for superior a 10.

// 24. Pretende-se apresentar numa lista todos os números pares de um intervalo definido
// pelo utilizador.

// 25. Descreva um algoritmo que pede ao utilizador um valor par, inferior a 100 e
// apresenta numa lista todos os inteiros múltiplos de 5, entre 0 e esse valor.