let userList = []
let idUser = 0

//DOM
//Query Selectors
let formHandler = document.querySelector('form')
let userTable = document.querySelector('table')

//End Query Selectors

//Form handler

formHandler.onsubmit = (event) => {
    event.preventDefault() //Blocks Form submission
    idUser +=1
    let formData = new FormData(formHandler)


    let formDataObj = {}
    formData.forEach((value, key) => (formDataObj[key] = value))
    
    // const entries = Object.fromEntries(formData) This formula works as the one above.
    // console.log(entries)

    userList.push(formDataObj)
    let newUser = new User (formDataObj.userFirstName, formDataObj.userLastName, formDataObj.userEmail, formDataObj.userPassword)
    //let newUser = new User(userList[0].userFirstName, userList[0].userLastName, userList[0].userEmail, userList[0].userPassword)
    //console.log(newUser)
    drawUserTable(newUser, idUser)
    formHandler.reset()
    formHandler.focus()

}

//End Form handler

function drawUserTable(newUser, rowID) {
    //let objKeys = Object.keys(newUser)
    let objValues = Object.values(newUser)
    //objKeys.forEach((keys) => console.log(keys))

    let row = table.insertRow()
    let iD = row.insertCell()
    iddd = document.createTextNode(rowID)
    iD.appendChild(iddd)
    for (element in objValues) {
        let cell = row.insertCell()
        let text = document.createTextNode(objValues[element])
        cell.appendChild(text)
    }
}

userTable.addEventListener('click', userPresents)

function userPresents(){
    console.log(userTable)
    
}

const createClickHandler = (row) => {
    return () => {
      const [cell] = row.getElementsByTagName("td");
      console.log(cell)
      const id = cell.innerHTML;
      console.log(id);
    };
  };
  
  const table = document.querySelector("table");
  for (const currentRow of table.rows) {
    currentRow.onclick = createClickHandler(currentRow);
  }
