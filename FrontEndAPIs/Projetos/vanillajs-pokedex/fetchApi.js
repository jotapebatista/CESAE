import { Pokemon } from './pokemon.js'

async function fetchOldPokemons(fetchPoke) {
    try {
        if (typeof fetchPoke === 'number') {
            const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${fetchPoke}`)
            if (response.status === 200) {
                const { id, name, sprites, types, stats } = await response.json() // destructure of the data response
                const pokemon = new Pokemon(id, name, types[0].type.name, sprites.front_default)
                sessionStorage.setItem('pokemon', JSON.stringify(pokemon))
                return pokemon
            }
        } else if (typeof fetchPoke === 'string') {
            const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${fetchPoke}`)
            if (response.status === 200) {
                const { id, name, sprites, types, stats } = await response.json() // destructure of the data response
                const pokemon = new Pokemon(id, name, types[0].type.name, sprites.front_default)
                sessionStorage.setItem('pokemon', JSON.stringify(pokemon))
                return pokemon
            }
        } else {
            alert("Ooops! Something went wrong")
        }
    } catch (error) {
        console.warn(error)
    }
}

async function fetchPokemons(fetchPoke) {
    try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${fetchPoke}`)
        const { id, name, sprites, types, stats } = await response.json() // destructure of the data response
        const pokemon = new Pokemon(id, name, types[0].type.name, sprites.front_default)
        sessionStorage.setItem(`${id}`, JSON.stringify(pokemon))
        return pokemon

    } catch (error) {
        console.warn(error)
    }
}


export { fetchPokemons }
