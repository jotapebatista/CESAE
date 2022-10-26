//Data
let userList = []
let userID = 0

//Query Selectors
let formHandler = document.querySelector('form')
let userTable = document.querySelector('table')

//Form handler
formHandler.onsubmit = (event) => {
  event.preventDefault() //Blocks Form submission
  userID += 1 //Increment ID to build the table

  const userName = this.userName.value
  const userAge = this.userAge.value
  const userHeight = this.userHeight.value
  const userEmail = this.userEmail.value
  const userNationality = this.userNationality.value

  const newUser = new User(userName, userAge, userHeight, userNationality, userEmail)
  userList.push(newUser)

  drawUserTable(newUser, userID)

  //formHandler.reset()
  //formHandler.focus()

}

// Draw the table.
function drawUserTable(usertToDraw, rowID) {
  console.log(typeof usertToDraw)
  console.log(usertToDraw)
  let objValues = Object.values(usertToDraw)
  //console.log(objValues)

  //objKeys.forEach((keys) => console.log(keys))

  let row = table.insertRow()
  let iD = row.insertCell()
  tableID = document.createTextNode(rowID)
  iD.appendChild(tableID)
  for (element in objValues) {
    let cell = row.insertCell()
    let text = document.createTextNode(objValues[element])
    cell.appendChild(text)
  }
}

userTable.addEventListener('click', userPresents)

function userPresents() {
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
