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
getUserData()