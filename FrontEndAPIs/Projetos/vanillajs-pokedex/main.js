//Start empty browser
//User searchs for a pokemon by name or ID
//Draws pokemon card in the browser
//Card has a button info that opens a modal to view more detailed info
//Melhorias
// 1- Lista de pokemons num modulo a parte
// 2- Criar funcoes para gerir a lista nesse modulo (getPokemonList, setPokemonList, addPokemon)

import Swal from 'sweetalert2'
import { fetchPokemons } from "./fetchApi"
import { drawPokeElement } from "./drawPoke.js"

sessionStorage.setItem('pokemonList', JSON.stringify([]))

const searchPokeEl = document.querySelector("form")

searchPokeEl.onsubmit = async (evt) => {
    evt.preventDefault() // prevent default behavior
    let value = evt.target[0].value //store the value from submission
    evt.target.reset() //resets form element
    if (!value) {
        Swal.fire("Oops!", "Please tell me what you're looking for!", "warning")
    } else {
        const fetchedPoke = await fetchPokemons(value)
        if (fetchedPoke) {
            drawPokeElement(fetchedPoke)
        } else {
            return
        }

    }

}

// const infoButton = newPokeDiv.querySelector('.info-button')
// console.log(infoButton)

