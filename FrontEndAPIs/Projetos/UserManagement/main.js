let personList = []

async function requestApi(userQty = 1) {
    try {
        // userQty = prompt('Users:')
        const response = await fetch(`https://randomuser.me/api/?results=${userQty}`)
        const { results } = await response.json() // destructure of the data response
        results.forEach(user => {
            const person = new User(user)
            personList.push(person)
        })
        setPersonList(personList)
        
    } catch (error) {
        console.warn(`Not Available!, ${error}`) // from creation or business logic
    }
}

function setPersonList(list) {
     
    document.body.append(personElement(list))
}

requestApi(2)