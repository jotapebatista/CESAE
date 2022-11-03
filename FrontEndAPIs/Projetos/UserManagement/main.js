let personList = []

class User {
    constructor({ name, email, phone, dob, picture }) {
        this.fullname = `${name.title} ${name.first} ${name.last}`
        this.email = email
        this.phone = phone
        this.dob = dob.date
        this.picture = picture.large
    }

    getuserData() {
        return this.fullname
    }

}

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

addElement()
    } catch (error) {
        console.error(error) // from creation or business logic
    }
}

getUserData()


function addElement() {
    // create Elements
    //Main card div
    const newDiv = document.createElement("div");
    newDiv.classList.add("grid-item")

    //Elements within card div
    const userAvatar = document.createElement("img");
    const userFullName = document.createElement("h3")
    const userEmail = document.createElement("p")
    const userPhone = document.createElement("p")
    const userDob = document.createElement("p")
    const userAge = document.createElement("p")
    const userNationality = document.createElement("p")
    const userAddress = document.createElement("p")
    
    // Content
    
    userAvatar.src = '#'
    userFullName.textContent = "NAME HERE"
    userEmail.textContent = "email@example.com"
    userPhone.textContent = '915345321'
    userDob.textContent = '915345321'
    userAge.textContent = '100'
    userNationality.textContent = 'Portuguese'
    userAddress.textContent = 'Rua das Couves'
    

    // add all the elements to the document

    newDiv.appendChild(userAvatar);
    newDiv.appendChild(userFullName)
    newDiv.appendChild(userEmail)
    newDiv.appendChild(userPhone)
    newDiv.appendChild(userAge)
    newDiv.appendChild(userNationality)
    newDiv.appendChild(userAddress)
  
    // add the newly created element and its content into the DOM
    const currentDiv = document.querySelector("div");
    console.log(currentDiv, newDiv);
    document.body.append(newDiv);
  }