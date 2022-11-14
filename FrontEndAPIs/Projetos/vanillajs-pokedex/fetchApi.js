import { Pokemon } from './pokemon.js'
import { drawPokeElement } from './drawPoke.js'

export { fetchPokemons }

async function fetchPokemons(fetchPoke) {
    try {

        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${fetchPoke}`)
        const { id, name, sprites, types, stats } = await response.json() // destructure of the data response

        const newPokemn = new Pokemon(id, name, types[0].type.name, sprites.front_default, stats)

        let pokeArr = JSON.parse(sessionStorage.getItem('pokemonList'))

        const result = pokeArr.find(p => p.id === newPokemn.id)
        if(!!result) return 
           
        pokeArr.push(newPokemn)
        pokeArr.sort((p1, p2) => p1.id > p2.id )

        sessionStorage.setItem('pokemonList', JSON.stringify(pokeArr))
        document.body.appendChild(drawPokeElement(newPokemn))

        //Melhorias
        // 1- Lista de pokemons num modulo a parte
        // 2- Criar funcoes para gerir a lista nesse modulo (getPokemonList, setPokemonList, addPokemon)
    } catch (error) {
        console.warn(error)
    }
}
