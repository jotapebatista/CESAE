import { Pokemon } from './pokemon.js'

let result = []

const fetchPokemons = async (nPokemons) => {
    console.log(`fetchapi: ${nPokemons}`)
    for (let i = 1; i <= nPokemons; i++) {
        const result = await getPokemon(i)
    }
    return result
}

async function getPokemon(npk) {
    try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${npk}`)
        const { id, name, sprites, types, stats } = await response.json() // destructure of the data response
        const pokemon = new Pokemon(id, name, types[0].type.name, sprites.front_default)
        return pokemon
    } catch (error) {
        console.warn(error) // from creation or business logic
    }
}

export { fetchPokemons }


