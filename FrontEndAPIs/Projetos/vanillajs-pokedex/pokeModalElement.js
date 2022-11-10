function pokeModalElement(poke) {

    const newPokeModal = document.querySelector(".container")
    newPokeModal.innerHTML =
    `
    <div class="pokeModal">
        <button class="close">✖</button>
        <img src="${poke.sprites}" alt="${poke.name}" />
        <span class="number">${poke.id}</span>
            <h3 class="name">${poke.name}</h3>
        <small class="type">Type: <span>${poke.type}</span></small>
    </div>
    `
    document.body.appendChild(newPokeModal)
}

export { pokeModalElement }