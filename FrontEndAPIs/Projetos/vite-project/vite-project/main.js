import { fetchPokemons } from './fetchApi.js'

let nPokemons = prompt("How many?")
console.log(`mainjs: ${nPokemons}`)
let poke = await fetchPokemons(nPokemons)
console.log(poke)

document.querySelector('#app').innerHTML = `
  <div class="pokemon">
    <div>
      <div class="img-container">
        <img src="${poke.sprites}" alt="${poke.name}" />
      </div>
      <div class="info">
        <span class="number">${poke.id}</span>
        <h3 class="name">${poke.name}</h3>
        <small class="type">Type: <span>${poke.type}</span></small>
      </div>
    </div>
  </div>
`