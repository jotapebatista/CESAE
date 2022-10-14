let userList = []

//DOM
//Query Selectors
const formHandler = document.querySelector('form')
const drawTable = document.querySelector('table')

//End Query Selectors

//Form handler

formHandler.onsubmit = (event) => {
    event.preventDefault() //Blocks Form submission
    const formData = new FormData(formHandler)

    const formDataObj = {};
    formData.forEach((value, key) => (formDataObj[key] = value))
    

    // const entries = Object.fromEntries(formData) This formula works as the one above.
    // console.log(entries)

    userList.push(formDataObj)
    const newUser = new User(userList[0].userFirstName, userList[0].userLastName, userList[0].userEmail, userList[0].userPassword)
    console.log(newUser)
    drawUserTable(newUser)
    formHandler.reset()
    formHandler.focus()

}

//End Form handler

function drawUserTable(newUser) {
    const objKeys = Object.keys(newUser)
    const objValues = Object.values(newUser)
    objKeys.forEach((keys) => console.log(keys))
    // TODO: Adicionar condicionante para criar tabela apenas na primeira iteração (table vazias)
    //generateTableHead(drawTable, objKeys) // TODO: - Beautify valores escritos na Table Header
    generateTable(drawTable, objValues)
}

function generateTableHead(table, data) {
    let thead = table.createTHead()
    let row = thead.insertRow()
    for (let key of data) {
        let th = document.createElement("th")
        let text = document.createTextNode(key)
        th.appendChild(text)
        row.appendChild(th)
    }
}

function generateTable(table, data) {
    let row = table.insertRow()
    for (element in data) {
        let cell = row.insertCell()
        let text = document.createTextNode(data[element])
        console.log(element)
        cell.appendChild(text)
    }
}

//END DOM

