import { fetchPokemons } from './fetchApi.js'

let nPokemons = prompt("How many?")
await fetchPokemons(nPokemons)


