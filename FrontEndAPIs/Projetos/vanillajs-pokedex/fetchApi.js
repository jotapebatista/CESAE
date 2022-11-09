import { Pokemon } from './pokemon.js'
import { drawPokeElement } from './drawPoke.js'

const fetchPokemons = async (fetchPoke) => {
    try {
        console.log(typeof fetchPoke)
        if (typeof fetchPoke === 'number') {
            for (let i = 1; i <= fetchPoke; i++) {
                console.log(i)
                const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${i}`)
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
export { fetchPokemons }
