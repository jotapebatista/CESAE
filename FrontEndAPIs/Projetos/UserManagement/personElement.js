function personElement(props) {
    //Loops through the lenght of the object 
    console.log(props)
    for (let i = 0; i < props.length; i++) {
        
        //Date conversion - Transfrom JSON date in javscript DATE format
        //Display country name instead of iso code
        let dateStr = (props[i].dob).toString()
        let newDate = new Date(dateStr)
        newParsedDate = `${newDate.getDate()}/${newDate.getMonth() + 1}/${newDate.getFullYear()}`
        let nationality = new Intl.DisplayNames([], { type: 'region' }) //FIXME: I've just realized that this converts to Country not Nationality

        //Card Structure & Styles
        const mainDiv = document.createElement("div")
        mainDiv.classList.add("card-container")

        //Html Element constructor
        mainDiv.innerHTML = `
        <img class="round" src="${props[i].picture}">
        <h3>${props[i].fullname}</h3>
        <p>${props[i].email}</p>
        <p>Phone: ${newParsedDate} | Age: ${props[i].age}</p>
        <p>Nationality: ${nationality.of(`${props[i].nat}`)}</p>
        <p>Location: ${props[i].location.city}</p>
        </div>
        `
        //returns the did structure with the elements
        return mainDiv
    }
}