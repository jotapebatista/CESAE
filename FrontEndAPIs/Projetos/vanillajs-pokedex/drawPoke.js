async function drawPokeElement(poke) {
    const newPokeDiv = document.createElement("div")
    newPokeDiv.classList.add("pokemon")
    
    newPokeDiv.innerHTML = 
    `<div class="img-container">
            <img src="${poke.sprites}" alt="${poke.name}" />
    </div>
    <div class="info">
        <span class="number">${poke.id}</span>
        <h3 class="name">${poke.name}</h3>
        <small class="type">Type: <span>${poke.type}</span></small><br>
        <button>View Info</button>
    </div>`
    
document.body.appendChild(newPokeDiv)
}

export { drawPokeElement }