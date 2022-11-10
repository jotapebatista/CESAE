// Fetch APi with the specified pokemon 
//display the pokemon info
import { fetchPokemons } from "./fetchApi";
import { drawPokeElement } from "./drawPoke.js"

const searchPoke = document.querySelector("form")

searchPoke.onsubmit = (evt) => {
    evt.preventDefault() // prevent default behavior
    let value = evt.target[0].value //store the value from submission
    console.log(value)

    // Object.keys(sessionStorage).forEach(function(key){
    //     console.log(key)
    //  })
     
    
    for (const [key] of Object.entries(sessionStorage)) {
        //console.log(key)
        if (key === null) {
            isNaN(parseInt(value)) ? fetchPokemons(value) : fetchPokemons(parseInt(value)) // parseInt(string) returns NaN if value is string
        } else
            return

    }
    drawPokeElement(JSON.parse(sessionStorage.getItem(`${value}`))) //draws searched element
    evt.target.reset() //resets form element
}

export { searchPoke }