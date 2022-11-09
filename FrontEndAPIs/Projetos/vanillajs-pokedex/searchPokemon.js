// Fetch APi with the specified pokemon 
//Pop-up modal with the searched pokemon
//display the pokemon info
import { fetchPokemons } from "./fetchApi";

const searchPoke = document.querySelector("form")

searchPoke.onsubmit = (evt) => {
    evt.preventDefault();
    let value = evt.target[0].value
    fetchPokemons(value)
}

export { searchPoke }