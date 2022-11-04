let personList = []

class User {
    constructor({ name, email, phone, dob, age, picture, nat, location }) {
        this.fullname = `${name.title} ${name.first} ${name.last}`
        this.email = email
        this.phone = phone
        this.dob = dob.date
        this.age = dob.age
        this.nat = nat
        this.location = location
        this.picture = picture.large
    }
}

async function requestApi() {
    try {
        userQty = prompt('Users:')
        const response = await fetch(`https://randomuser.me/api/?results=${userQty}`)
        //const response = await fetch('https://randomuser.me/api/')

        const data = await response.json()
        //console.log(data)
        data.results.forEach(function (user) {
            const person = new User(user)
            personList.push(person)
        })

        addElement(personList)
    } catch (error) {
        console.error(error) // from creation or business logic
    }
}


function addElement(personObj) {
    // create Elements
    //Main card div

    let dateStr = (personObj[0].dob).toString()
    let newDate = new Date(dateStr)
    newParsedDate = newDate.getDate() + "/" + (newDate.getMonth() + 1) + "/" + (newDate.getFullYear())

    //FIXME: delete this

    for (let i = 0; i < personObj.length; i++) {
        //Card Structure & Styles
        const mainUl = document.createElement("ul")
        mainUl.classList.add("users-grid")    
        const mainDiv = document.createElement("div")
        mainDiv.classList.add("card-container")
        userPicture = document.createElement("img")
        userPicture.classList.add('round')
        userName = document.createElement('h3')
        userLocation = document.createElement('h6')
        userEmail = document.createElement('p')
        userPhone = document.createElement('p')
        userDob = document.createElement('p')
        userNationality = document.createElement('p')
        userAddress = document.createElement('p')

        userPicture.src = personObj[i].picture
        userName.innerHTML = personObj[i].fullname
        userEmail.innerHTML = personObj[i].email
        userPhone.innerHTML = `Phone: ${personObj[i].phone}`
        userDob.innerHTML = `${newParsedDate} | Age: ${personObj[i].age}`
        userNationality.innerHTML = `Nationality: ${personObj[i].nat}`
        userAddress.innerHTML = `Location: ${personObj[i].location.city}`

        document.body.append(mainDiv)
        mainDiv.appendChild(userPicture)
        mainDiv.appendChild(userName)
        mainDiv.appendChild(userEmail)
        mainDiv.appendChild(userPhone)
        mainDiv.appendChild(userDob)
        mainDiv.appendChild(userNationality)
        mainDiv.appendChild(userAddress)

    }

    // for (let i = 0; i < personObj.length; i++) {
    //     let liItem = document.createElement("li");
    //     liItem.classList.add("grid-item")
    //     let userAvatar = document.createElement("img");
    //     let userFullName = document.createElement("h3")
    //     let userEmail = document.createElement("p")
    //     let userPhone = document.createElement("p")
    //     let userDob = document.createElement("p")
    //     let userAge = document.createElement("p")
    //     let userNationality = document.createElement("p")
    //     let userAddress = document.createElement("p")

    //     // Content
    //     userAvatar.src = personObj[i].picture
    //     userFullName.textContent = personObj[i].fullname
    //     userEmail.textContent = personObj[i].email
    //     userPhone.textContent = personObj[i].phone

    //     let dateStr = (personObj[i].dob).toString()
    //     let newDate = new Date(dateStr)
    //     userDob.textContent = newDate.getDate() + "/" + (newDate.getMonth() + 1) + "/" + (newDate.getFullYear())
    //     userAge.textContent = personObj[i].age
    //     userNationality.textContent = personObj[i].nat
    //     userAddress.textContent = personObj[i].location.street.name

    //     document.body.append(mainUl)
    //     mainUl.appendChild(liItem)
    //     liItem.appendChild(userAvatar)
    //     liItem.appendChild(userFullName)
    //     liItem.appendChild(userEmail)
    //     liItem.appendChild(userPhone)
    //     liItem.appendChild(userDob)
    //     liItem.appendChild(userAge)
    //     liItem.appendChild(userNationality)
    //     liItem.appendChild(userAddress)
    // }
}

requestApi()

//Function to 
async function getUserData() {
    try {
        // userQty = prompt('Users:')
        // const response = await fetch(`https://randomuser.me/api/?results=${userQty}`)
        const response = await fetch('https://randomuser.me/api/?results=5')

        const data = await response.json()

        data.results.forEach(function (user) {
            const person = new User(user)
            personList.push(person)
        })

        const li = document.querySelector('.users-grid')

        // console.log(li.children[0].children) // First User Element

        const avatarElement = li.querySelectorAll('img')
        const nameElement = li.querySelectorAll('h3')
        const emailElement = li.querySelectorAll('div')
        const gridElement = li.querySelectorAll('.grid-item')

        //User Picture
        avatarElement.forEach((img, index) => {
            img.src = personList[index].picture
        })

        //User name
        nameElement.forEach((h3, index) => {
            h3.innerHTML = personList[index].fullname
        })

        //User Email
        for (let i = 0; i < gridElement.length; i++) {
            //console.log(i) // 0 -> 5 means that found 5 cards in the HTML body
            //console.log(gridElement[i].children[2].children[0].textContent)
            gridElement[i].children[2].children[0].textContent = `${personList[i].email}`

        }

        //User Phone Number
        for (let i = 0; i < gridElement.length; i++) {
            gridElement[i].children[3].children[0].textContent = `${personList[i].phone}`
        }

        //User DOB
        for (let i = 0; i < gridElement.length; i++) {
            let date = personList[i].dob
            let dateStr = date.substr(0, 10)
            gridElement[i].children[4].children[0].textContent = `${dateStr}`
        }

        //addElement()
    } catch (error) {
        console.error(error) // from creation or business logic
    }
}
//getUserData()