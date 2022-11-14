// Fetch APi with the specified pokemon 
//display the pokemon info
import { fetchPokemons } from "./fetchApi";
import { drawPokeElement } from "./drawPoke.js"

let loadingState = false

const searchPokeEl = document.querySelector("form")
const loadingEl = document.querySelector(".lds-dual-ring")
const loadingModal = document.querySelector(".loading-div")


searchPokeEl.onsubmit = async (evt) => {
    evt.preventDefault() // prevent default behavior
 
    let value = evt.target[0].value //store the value from submission
    
    //!value ? console.log('xixi') : console.log('coco') // TODO: add verification onFormSubmit to make sure isn't empty
   
    const pokeList = await fetchPokemons(value)

    evt.target.reset() //resets form element
}

function toggleLoading() {
    loadingState ? loadingEl.hidden = true : loadingEl.hidden = false
    loadingState ? loadingModal.hidden = true : loadingModal.hidden = false
    loadingState = !loadingState
}

export { searchPokeEl }