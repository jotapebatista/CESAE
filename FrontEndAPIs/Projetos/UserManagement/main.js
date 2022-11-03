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

        // const newEmail = li.children[0].children[2]
        // newEmail.innerHTML = personList[0].email

      console.log(emailElement)

        avatarElement.forEach((img, index) => {
            img.src = personList[index].picture
        })

        nameElement.forEach((h3, index) => {
            h3.innerHTML = personList[index].fullname
        })

        // emailElement.forEach((h3, index) => {
        //     h3.innerHTML = personList[index].fullname
        // })


        // if (emailElement.textContent.includes("Email: ")) {
        //     emailElement.forEach((p, index) => {
        //         p.innerHTML = personList[index].email
        //     })
        // }

        let elementHtml = [].map.call(document.querySelectorAll('div'), function(el) {
            return el.innerHTML;
        }).join();

        console.log(elementHtml)




    } catch (error) {
        console.error(error) // from creation or business logic
    }
}

getUserData()
