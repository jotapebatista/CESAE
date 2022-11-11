// Fetch APi with the specified pokemon 
//display the pokemon info
import { fetchPokemons } from "./fetchApi";
import { drawPokeElement } from "./drawPoke.js"

let loadingState = false

const searchPokeEl = document.querySelector("form")
const loadingEl = document.querySelector(".lds-dual-ring")
const loadingModal = document.querySelector(".loading-div")

const pokeId = document.querySelectorAll(".number")



searchPokeEl.onsubmit = async (evt) => {
    evt.preventDefault() // prevent default behavior
 
    let value = evt.target[0].value //store the value from submission
    
    //!value ? console.log('xixi') : console.log('coco') // TODO: add verification onFormSubmit to make sure isn't empty
    // isNaN(parseInt(value)) ? await fetchPokemons(value) : await fetchPokemons(parseInt(value)) // parseInt(string) returns NaN if value is string
    const pokeList = await fetchPokemons(value)
    //Set timeout to finish fetch

    
    // for (const [key] of Object.entries(sessionStorage)) { //loops trough session storage
    //     if (key === value) {
    //         // console.log(`${key} ${value}`)
    //         drawPokeElement(JSON.parse(sessionStorage.getItem(`${key}`)))
    //     } else {
    //         //console.log(`${key} ${parseInt(value)}`)
    //     }
    // }
    // const pokeContainerEl = document.querySelector('.container')
    // pokeContainerEl.innerHTML = ''
    
    // pokeList.forEach(pokemon => {
    //     const newPokeDiv = drawPokeElement(pokemon)
    //     pokeContainerEl.append(newPokeDiv)
    // });

    console.log(pokeId)
    //drawPokeElement(JSON.parse(sessionStorage.getItem(`${value}`)))


    evt.target.reset() //resets form element
}

function toggleLoading() {
    loadingState ? loadingEl.hidden = true : loadingEl.hidden = false
    loadingState ? loadingModal.hidden = true : loadingModal.hidden = false
    loadingState = !loadingState
}

export { searchPokeEl }