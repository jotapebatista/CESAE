import { Pokemon } from './pokemon.js'
import { drawPokeElement } from './drawPoke.js'

const fetchPokemons = async (nPokemons) => {
    try {
        for (let i = 1; i <= nPokemons; i++) {
            console.log(i)
            const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${i}`)
            const { id, name, sprites, types, stats } = await response.json() // destructure of the data response
            const pokemon = new Pokemon(id, name, types[0].type.name, sprites.front_default)
            await drawPokeElement(pokemon)
        }
    } catch (error) {
        console.warn(error) // from creation or business logic
    }

}

export { fetchPokemons }
