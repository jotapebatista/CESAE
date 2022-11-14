import Swal from 'sweetalert2'
import { Pokemon } from './pokemon.js'
export { fetchPokemons }

async function fetchPokemons(fetchPoke) {
    try {

        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${fetchPoke}`)
        const { id, name, sprites, types, stats } = await response.json() // destructure of the data response

        let newPokemn = new Pokemon(id, name, types[0].type.name, sprites.front_default, stats)

        let pokeArr = JSON.parse(sessionStorage.getItem('pokemonList'))

        const result = pokeArr.find(p => p.id === newPokemn.id)
        if(!!result) {
            Swal.fire("Heyy!", "It's already there!", "info")
        return   
        } 

        pokeArr.push(newPokemn)
        pokeArr.sort((p1, p2) => p1.id > p2.id )
        sessionStorage.setItem('pokemonList', JSON.stringify(pokeArr))
        return newPokemn

    } catch (error) {
        console.warn(error)
    }
}
