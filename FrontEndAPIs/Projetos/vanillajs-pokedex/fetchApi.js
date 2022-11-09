import { Pokemon } from './pokemon.js'
import { drawPokeElement } from './drawPoke.js'

const fetchPokemons = async (fetchPoke) => {
    try {
        console.log(typeof fetchPoke)
        if (typeof fetchPoke === 'number') {
            for (let i = 1; i <= fetchPoke; i++) {
                console.log(i)
                const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${i}`)
                console.log(checkStatus(response)) //TODO: validate response status 
                const { id, name, sprites, types, stats } = await response.json() // destructure of the data response
                const pokemon = new Pokemon(id, name, types[0].type.name, sprites.front_default)
                await drawPokeElement(pokemon)
            }
        } else {
            const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${fetchPoke}`)
            const { id, name, sprites, types, stats } = await response.json() // destructure of the data response
            const pokemon = new Pokemon(id, name, types[0].type.name, sprites.front_default)
            await drawPokeElement(pokemon)
        }
    } catch (error) {
        console.warn(error)
    }

}


function checkStatus (response) {
    if (response.status >= 200 && response.status < 300) {
      return response
    }
    else { 
      // Now any response code > 299 should add your HTML message *and* throw an error.
      document.getElementById("warning-msg").innerHTML = "Message not sent.";
 
      var error = new Error(response.statusText)
      error.response = response
      throw error
    }
  }  


export { fetchPokemons }
